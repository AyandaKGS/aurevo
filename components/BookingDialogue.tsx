"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { addDays, format, formatDate, isBefore, isWithinInterval, parseISO, subDays } from "date-fns"
import { AlertTriangle, CalendarDays, CheckCircle2, ChevronDownIcon, Loader, Mail, Phone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMemo, useState, type ReactNode } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"
import { Calendar } from "./ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { AvailabilityStatus, booking } from "@/generated"

const bookingFormSchema = z.object({
    checkIn: z.date({ error: "Please select a check-in date." }),
    checkOut: z.date({ error: "Please select a check-out date." }),
    guests: z.string().min(1, { message: "Please select a number of guests." }),
    name: z.string().min(1, { message: "Please enter your name." }),
    email: z.email({ error: "Please enter a valid email address." }),
    phone: z.string().optional(),
    notes: z.string().optional(),
    terms: z.boolean().refine((value) => value === true, {
        message: "You must agree to the terms of service.",
    }),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

type Room = {
    id: string,
    name: string,
    description: string,
    images: string[],
    availability?: "available" | "limited" | "booked" | string,
    price?: number,
    currency?: string,
    maxGuests: number,
    availabilityStatus: AvailabilityStatus[],
    bookings: booking[]
}

type BookingDialogProps = {
    room?: Room
    featured: boolean,
    page: number,
    children?: ReactNode // Trigger (e.g., your Button)
}

function diffNights(checkIn: string, checkOut: string) {
    if (!checkIn || !checkOut) return 0
    const inDate = new Date(checkIn)
    const outDate = new Date(checkOut)
    const ms = outDate.getTime() - inDate.getTime()
    return ms > 0 ? Math.ceil(ms / (1000 * 60 * 60 * 24)) : 0
}

function formatMoney(value: number, currency = "USD") {
    try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(value)
    } catch {
        return `${currency} ${value.toFixed(2)}`
    }
}

function isDateRangeAvailable(checkIn: string, checkOut: string, bookings: booking[] = []): boolean {
    if (!checkIn || !checkOut) return true

    const requestedStart = new Date(checkIn)
    const requestedEnd = new Date(checkOut)

    return !bookings.some((booking) => {
        const bookedStart = new Date(booking.checkIn)
        const bookedEnd = new Date(booking.checkOut)

        // Check if there's any overlap
        return requestedStart < bookedEnd && requestedEnd > bookedStart
    })
};

function normalizeDate(date: Date): Date {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0) // ✅ normalize to local midnight
    return d
}

function parseDateOnly(dateStr: string): Date {
    // parse "YYYY-MM-DD" safely as local date
    const [year, month, day] = dateStr.split("-").map(Number)
    return normalizeDate(new Date(year, month - 1, day))
}

function getBlockedDates(
    availabilityStatus: AvailabilityStatus[] = []
): Date[] {
    const blockedDates: Date[] = [];

    console.error("Availability status", availabilityStatus);
    // Add unavailable/booked days
    availabilityStatus.forEach(({ dates, availability }) => {
        console.error("Availability", availability);
        if (["unavailable", "booked"].includes(availability)) {
            dates.forEach((dateStr) => {
                console.error("Date", dateStr);
                blockedDates.push(parseDateOnly(dateStr))
            })
        }
    })

    console.error("Blocked dates:", blockedDates.map(d => d.toDateString()))
    return blockedDates
}

export default function BookingDialog({
    room = {
        id: "1",
        name: "Deluxe Suite",
        description: "A luxurious suite with a view of the city. This suite features a king-sized bed, a private bathroom, and a balcony. The suite is located on the 3rd floor of a 4-story building.",
        images: ["/placeholder.svg?height=300&width=500"],
        availability: "available",
        price: 220,
        currency: "USD",
        maxGuests: 2,
        availabilityStatus: [],
        bookings: []
    },
    featured,
    page,
    children,
}: BookingDialogProps) {
    const { userId } = useAuth();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const blockedDates = useMemo(
        () => getBlockedDates(room.availabilityStatus ?? []),
        [room.availabilityStatus]
    )

    const bookingForm = useForm<BookingFormData>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: {
            guests: "1"
        }
    });

    const checkIn = bookingForm.watch("checkIn");
    const checkOut = bookingForm.watch("checkOut");

    const nights = useMemo(() => diffNights(checkIn!, checkOut), [checkIn, checkOut])
    const subtotal = useMemo(
        () => (room.price ? nights * room.price : undefined),
        [nights, room.price],
    )

    const serviceFees = useMemo(() => subtotal && Math.round(subtotal * 0.02 + (nights <= 5 ? 6 : 5)), [subtotal, nights])

    const hostServiceFees = useMemo(() => subtotal && Math.round(subtotal * 0.02 + 5), [subtotal, nights])

    const total = useMemo(() => (subtotal && serviceFees ? subtotal + serviceFees : subtotal), [subtotal, serviceFees]);

    const createBooking = useMutation({
        mutationFn: async ({ data, total, serviceFees }: { data: BookingFormData, total: number, serviceFees: number }) => {

            const { data: returnData } = await axios.post("/api/create-booking-payment", {
                data: {
                    ...data,
                    featured,
                    page,
                    userId,
                    roomId: room.id,
                    amount: Math.round(total),
                    serviceFees,
                    hostServiceFees,
                    room: room.name,
                    image: room.images[0],
                    description: room.description,
                }
            });

            return returnData
        },
    });

    const isAvailable = useMemo(
        () => isDateRangeAvailable(checkIn, checkOut, room.bookings),
        [checkIn, checkOut, room.bookings],
    );

    const canSubmit =
        !createBooking.isPending &&
        bookingForm.watch("terms") &&
        nights > 0 &&
        isAvailable &&
        Boolean(checkIn && checkOut && bookingForm.watch("name") && bookingForm.watch("email")) &&
        room.availability !== "booked"

    async function onSubmit(data: BookingFormData) {
        if (nights <= 0) {
            return
        }
        if (!isAvailable) {
            toast.error("Selected dates are not available. Please choose different dates.")
            return
        }


        createBooking.mutate({ data, total: total!, serviceFees: serviceFees! }, {
            onSuccess: (data) => {
                //reset form
                bookingForm.reset();
                toast.success("Upload complete.", {
                    description: "Redirecting.",
                });
                router.push(data.url)
            },
            onError: (error) => {
                console.error("Error creating booking", error);
                toast.error("Error creating booking.")
            }
        })
    }

    const triggerDisabled = room.availability === "booked"

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children ?? (
                    <Button className="w-full" disabled={triggerDisabled}>
                        {triggerDisabled ? "Booked" : "Book This Room"}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden h-[93vh] overflow-y-scroll">
                <DialogHeader className="px-6 pt-6">
                    <DialogTitle>Book {room.name}</DialogTitle>
                    <DialogDescription>Secure your stay by selecting your dates and providing your details.</DialogDescription>
                </DialogHeader>

                <div className="w-full grid gap-6 px-6 pb-6">
                    {/* Left: Image + summary */}
                    <div className="flex flex-col gap-4">
                        <div className="relative h-40 w-full overflow-hidden rounded-lg bg-muted">
                            <Image
                                src={
                                    room.images?.[0] || "/placeholder.svg?height=240&width=480&query=room-interior" || "/placeholder.svg"
                                }
                                alt={`Preview of ${room.name}`}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                                priority
                            />
                            {room.availability && (
                                <Badge
                                    className={`absolute top-3 left-3 ${room.availability === "available"
                                        ? "bg-primary text-primary-foreground"
                                        : room.availability === "limited"
                                            ? "bg-yellow-400 text-yellow-900"
                                            : "bg-gray-300 text-gray-700"
                                        }`}
                                >
                                    {room.availability.charAt(0).toUpperCase() + room.availability.slice(1)}
                                </Badge>
                            )}
                        </div>

                        <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Room</p>
                                    <p className="font-medium">{room.name}</p>
                                </div>
                                {room.price != null && (
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">Nightly</p>
                                        <p className="font-semibold">{formatMoney(room.price, "USD")}</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CalendarDays className="h-4 w-4" aria-hidden />
                                    {nights > 0 ? `${nights} night${nights > 1 ? "s" : ""}` : "Select dates"}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Users className="h-4 w-4" aria-hidden />
                                    {bookingForm.watch("guests")} guest{parseInt(bookingForm.watch("guests")) > 1 ? "s" : ""}
                                </div>
                            </div>
                            {checkIn && checkOut && !isAvailable && (
                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <div className="flex items-center gap-2 text-yellow-800">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span className="text-sm font-medium">Dates not available</span>
                                    </div>
                                    <p className="text-xs text-yellow-700 mt-1">
                                        These dates conflict with existing bookings. Please select different dates.
                                    </p>
                                </div>
                            )}

                            {room.price != null && nights > 0 && isAvailable && (
                                <div className="mt-4 border-t pt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>{formatMoney(subtotal!, "USD")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Service Fees</span>
                                        <span>{formatMoney(serviceFees!, "USD")}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>{formatMoney(total!, "USD")}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <Form {...bookingForm}>
                        <form className="space-y-4" onSubmit={bookingForm.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-3">
                                <FormField
                                    control={bookingForm.control}
                                    name="checkIn"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel htmlFor="check-in">Check-in</FormLabel>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            id="date"
                                                            className={cn(
                                                                "w-full justify-between font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? format(field.value, "dd/MM/yyyy") : "Select date"}
                                                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                                                        </Button>
                                                    </FormControl>
                                                </DialogTrigger>

                                                <DialogContent className="p-0 w-auto">
                                                    <div className="p-4">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            captionLayout="dropdown"
                                                            disabled={[
                                                                { before: new Date() },
                                                                ...(checkIn ? [{ before: addDays(checkIn, 1) }] : []),
                                                                { after: subDays(checkOut, 1) },
                                                                ...blockedDates,
                                                            ]}
                                                            modifiers={{
                                                                booked: blockedDates,
                                                            }}
                                                            modifiersStyles={{
                                                                booked: {
                                                                    backgroundColor: "#fee2e2",
                                                                    color: "#dc2626",
                                                                    textDecoration: "line-through",
                                                                },
                                                            }}
                                                        />
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={bookingForm.control}
                                    name="checkOut"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel htmlFor="check-out">Check-out</FormLabel>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            id="date"
                                                            className={cn(
                                                                "w-full justify-between font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? format(field.value, "dd/MM/yyyy") : "Select date"}
                                                            <ChevronDownIcon />
                                                        </Button>
                                                    </FormControl>
                                                </DialogTrigger>
                                                <DialogContent className="w-fit p-0">
                                                    <div className="p-4">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            captionLayout="dropdown"
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date() ||
                                                                isBefore(date, addDays(checkIn, 1))
                                                                ||
                                                                blockedDates.some((d) => d.toDateString() === date.toDateString())
                                                            }
                                                            modifiers={{
                                                                booked: blockedDates,
                                                            }}
                                                            modifiersStyles={{
                                                                booked: {
                                                                    backgroundColor: "#fee2e2",
                                                                    color: "#dc2626",
                                                                    textDecoration: "line-through",
                                                                },
                                                            }}
                                                        />
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={bookingForm.control}
                                name="guests"
                                render={({ field }) => (
                                    <FormItem className="space-y-1.5">
                                        <FormLabel htmlFor="guests">Guests</FormLabel>
                                        <Input
                                            id="guests"
                                            type="number"
                                            min={1}
                                            max={room.maxGuests}
                                            {...field}
                                            required
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <FormField
                                    control={bookingForm.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel htmlFor="name">Full name</FormLabel>
                                            <Input
                                                id="name"
                                                placeholder="Jane Doe"
                                                {...field}
                                                required
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={bookingForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <div className="relative">
                                                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden />
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    className="pl-8"
                                                    placeholder="jane@example.com"
                                                    {...field}
                                                    required
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={bookingForm.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="space-y-1.5">
                                        <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
                                        <div className="relative">
                                            <Phone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                className="pl-8"
                                                placeholder="+1 555 123 4567"
                                                {...field}
                                            />
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={bookingForm.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem className="space-y-1.5">
                                        <FormLabel htmlFor="notes">Notes (optional)</FormLabel>
                                        <Textarea
                                            id="notes"
                                            placeholder="Any special requests or arrival info..."
                                            {...field}
                                            rows={3}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={bookingForm.control}
                                name="terms"
                                render={({ field }) => (
                                    <FormItem className="flex items-center gap-2 pt-2">
                                        <Button
                                            type="button"
                                            variant={"outline"}
                                            className={`inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm ${bookingForm.watch("terms") ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-background"
                                                }`}
                                            onClick={() => field.onChange(!field.value)}
                                            aria-pressed={field.value}
                                        >
                                            <CheckCircle2 className={`mr-2 h-4 w-4 ${bookingForm.watch("terms") ? "text-emerald-600" : "text-muted-foreground"}`} />I
                                            agree to the terms
                                        </Button>
                                        <Link href="/terms" className="text-sm text-primary underline underline-offset-4">
                                            View terms
                                        </Link>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter className="pt-2">
                                <Button type="submit" disabled={!canSubmit} className="w-full md:w-auto">
                                    {createBooking.isPending ? (
                                        <>
                                            <Loader className="mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) :
                                        (createBooking.isSuccess ? "Booked!" : "Book")}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >
    )
}
