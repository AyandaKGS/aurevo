"use client"

import AddressAutocomplete from "@/components/AddressSelect"
import { CountrySelect } from "@/components/CountrySelect"
import Footer from "@/components/Footer"
import LoadingIcon from "@/components/LoadinIcon"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarPicker } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { FileUpload } from "@/components/ui/file-upload"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { editRoomsLoadingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { booking } from "@/generated"
import { BookingWithRoom, RoomWithReviews } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { room } from "@prisma/client"
import { useInfiniteQuery, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { addDays, format, formatDate } from "date-fns"
import {
    AlertTriangle,
    Bed,
    Calendar,
    CalendarIcon,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    ChevronsUpDown,
    Copy,
    CreditCard,
    DollarSign,
    Edit,
    Eye,
    ImageIcon,
    Loader,
    Lock,
    LogIn,
    LogOut,
    Plus,
    RefreshCw,
    Save,
    Search,
    Shield,
    Star,
    Trash2,
    Wrench,
    X,
    XCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

type CategoryAgg = {
    value: string
    label: string
    count: number
    totalPrice: number
};

const bedTypes = [
    { value: "king", label: "King Bed" },
    { value: "queen", label: "Queen Bed" },
    { value: "twin", label: "Twin Beds" },
    { value: "king-sofa", label: "King + Sofa Bed" },
    { value: "multiple", label: "Multiple Beds" },
];

const views = [
    { value: "ocean", label: "Ocean View" },
    { value: "garden", label: "Garden View" },
    { value: "pool", label: "Pool View" },
    { value: "resort", label: "Resort View" },
    { value: "city", label: "City View" },
    { value: "mountain", label: "Mountain View" },
];


const commonAmenities = [
    "Ocean View",
    "Private Balcony",
    "Marble Bathroom",
    "Mini Bar",
    "Pool Table",
    "Table Tennis",
    "Gym",
    "Room Service",
    "Concierge",
    "Free WiFi",
    "Air Conditioning",
    "Safe",
    "Coffee Machine",
    "Jacuzzi",
    "Private Pool",
    "Butler Service",
    "Spa Access",
];

const commonFeatures = [
    "King Bed",
    "Queen Bed",
    "Living Area",
    "Work Desk",
    "Safe",
    "Robes & Slippers",
    "Premium Toiletries",
    "Flat Screen TV",
    "Kitchenette",
    "Dining Area",
    "Walk-in Closet",
    "Entertainment System",
];

const editRoomSchema = z.object({
    id: z.string().optional(),
    name: z.string({ error: "Please enter a unit name." }).min(1),
    category: z.string({ error: "Please select a category." }).min(1),
    country: z.string({ error: "Please select a country" }).min(1),
    address: z.string({ error: "Please select an address" }).min(1),
    price: z.string({ error: "Please input a price." }).min(1),
    originalPrice: z.string().optional(),
    size: z.string({ error: "Please input a size." }).optional(),
    maxGuests: z.string({ error: "Please input a maximum number of guests." }).min(1),
    bedType: z.string({ error: "Please select a bed type." }).min(1),
    view: z.string({ error: "Please select a view." }).min(1),
    description: z.string({ error: "Please enter a description." }).min(10),
    images: z.array(z.string(), { error: "Please select at least 1 image." }).refine((value) => value.some((image) => image)),
    amenities: z.array(z.string(), { error: "Please select at least one amenity." }).refine((value) => value.some((amenity) => amenity)),
    features: z.array(z.string(), { error: "Please select at least 1 feature." }).refine((value) => value.some((feature) => feature)),
    services: z.array(z.string()).refine((value) => value.some((service) => service)),
    status: z.string({ error: "Please select a status." }).min(1),
    availability: z.string({ error: "Please select an availability." }).min(1),
    popular: z.boolean().optional(),
    newlyRenovated: z.boolean().optional(),
    cancellationPolicy: z
        .array(z.string())
        .refine(
            (val) => !(val.includes("14-days-50") && val.includes("14-days-100")),
            {
                message: "You cannot select both 50% and 100% refund for 14 days.",
            }
        ),
});

const availabilityCalenderSchema = z.object({
    dates: z.array(z.string(), { error: "Please select at least 1 date." }).refine((value) => value.some((date) => date)),
    availability: z.string({ error: "Please select an availability status." }),
    pricePerNight: z.string().optional(),
});

const bulkOperationsSchema = z.object({
    startDate: z.date({ error: "Please select a start date." }),
    endDate: z.date({ error: "Please select an end date." }),
    availability: z.string({ error: "Please select an availability." }).min(1),
    pricePerNight: z.string().optional(),
});

const recurringPatternsSchema = z.object({
    days: z.array(z.string()).refine((value) => value.some((days) => days)),
    availability: z.string({ error: "Please select an availability." }).min(1),
    pricePerNight: z.string().optional(),
})

type EditRoomData = z.infer<typeof editRoomSchema>;
type AvailabilityCalenderData = z.infer<typeof availabilityCalenderSchema>;
type BulkOperationsData = z.infer<typeof bulkOperationsSchema>;
type RecurringPatternsData = z.infer<typeof recurringPatternsSchema>;

export default function CMSDashboard() {
    const { user, isLoaded } = useUser();
    const [rooms, setRooms] = useState<RoomWithReviews[]>([])
    const [selectedRoom, setSelectedRoom] = useState<EditRoomData | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");
    const [activeTab, setActiveTab] = useState("overview");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [page, setPage] = useState(1);
    const [selectedRoomIds, setSelectedRoomIds] = useState<string[]>([]);
    const [selectedTab, setSelectedTab] = useState("calendar");
    const [form, setForm] = useState("applyDates");
    const itemsPerPage = 5;
    const loader = useRef<HTMLDivElement | null>(null)
    const loader2 = useRef<HTMLDivElement | null>(null)


    const router = useRouter();

    const statusConfig = {
        available: { label: "Available", color: "bg-green-500", icon: CheckCircle },
        unavailable: { label: "Unavailable", color: "bg-red-500", icon: XCircle },
        maintenance: { label: "Maintenance", color: "bg-yellow-500", icon: Wrench },
        limited: { label: "Limited", color: "bg-orange-500", icon: AlertTriangle },
        booked: { label: "Booked", color: "bg-blue-600", icon: Lock },
        checkIn: { label: "Check-In Only", color: "bg-indigo-500", icon: LogIn },
        checkOut: { label: "Check-Out Only", color: "bg-purple-500", icon: LogOut },
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDayOfWeek = firstDay.getDay()

        const days = []

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null)
        }

        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day))
        }

        return days
    };

    const handleDateClick = (date: Date) => {
        const dateKey = format(date, "yyyy-MM-dd");
        const newSelected = pickedDates;

        if (newSelected.includes(dateKey)) {
            availabilityCalenderForm.setValue("dates", newSelected.filter((date) => date !== dateKey));
        } else {
            availabilityCalenderForm.setValue("dates", [...newSelected, dateKey]);
        }
    }

    const navigateMonth = (direction: "prev" | "next") => {
        const newDate = new Date(currentDate)
        if (direction === "prev") {
            newDate.setMonth(newDate.getMonth() - 1)
        } else {
            newDate.setMonth(newDate.getMonth() + 1)
        }
        setCurrentDate(newDate)
    }

    const days = getDaysInMonth(currentDate);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const statusColors: Record<booking["status"], string> = {
        Confirmed: "bg-green-500/70 text-white dark:bg-green-700/60 dark:text-green-300",
        Pending: "bg-yellow-500/70 text-black dark:bg-yellow-700/60 dark:text-yellow-300",
        Cancelled: "bg-red-500/70 text-white dark:bg-red-700/60 dark:text-red-300",
    };

    // const revenueData = [
    //     { month: "Jan", revenue: 45000, bookings: 120, occupancy: 78 },
    //     { month: "Feb", revenue: 52000, bookings: 135, occupancy: 82 },
    //     { month: "Mar", revenue: 48000, bookings: 128, occupancy: 75 },
    //     { month: "Apr", revenue: 61000, bookings: 155, occupancy: 88 },
    //     { month: "May", revenue: 58000, bookings: 148, occupancy: 85 },
    //     { month: "Jun", revenue: 67000, bookings: 172, occupancy: 92 },
    //     { month: "Jul", revenue: 75000, bookings: 195, occupancy: 95 },
    //     { month: "Aug", revenue: 73000, bookings: 188, occupancy: 94 },
    //     { month: "Sep", revenue: 65000, bookings: 165, occupancy: 89 },
    //     { month: "Oct", revenue: 59000, bookings: 152, occupancy: 86 },
    //     { month: "Nov", revenue: 54000, bookings: 142, occupancy: 81 },
    //     { month: "Dec", revenue: 69000, bookings: 178, occupancy: 91 },
    // ];

    // const roomTypeData = [
    //     { name: "Ocean View Deluxe", bookings: 145, revenue: 87000, avgPrice: 600, color: "#0088FE" },
    //     { name: "Garden Villa Premium", bookings: 98, revenue: 58800, avgPrice: 600, color: "#00C49F" },
    //     { name: "Presidential Suite", bookings: 32, revenue: 64000, avgPrice: 2000, color: "#FFBB28" },
    //     { name: "Standard Room", bookings: 203, revenue: 60900, avgPrice: 300, color: "#FF8042" },
    // ];

    // const guestSourceData = [
    //     { source: "Direct Booking", value: 35, color: "#0088FE" },
    //     { source: "Online Travel Agencies", value: 28, color: "#00C49F" },
    //     { source: "Travel Agents", value: 20, color: "#FFBB28" },
    //     { source: "Corporate", value: 12, color: "#FF8042" },
    //     { source: "Referrals", value: 5, color: "#8884D8" },
    // ];

    // const rooms2 = [
    //     { id: 1, category: "ocean-deluxe", price: 600, status: "occupied" },
    //     { id: 2, category: "ocean-deluxe", price: 650, status: "available" },
    //     { id: 3, category: "garden-premium", price: 500, status: "occupied" },
    //     { id: 4, category: "garden-premium", price: 550, status: "maintenance" },
    //     { id: 5, category: "presidential", price: 2000, status: "occupied" },
    //     { id: 6, category: "standard", price: 300, status: "available" },
    //     { id: 7, category: "standard", price: 320, status: "occupied" },
    //     { id: 8, category: "standard", price: 280, status: "available" },
    // ]

    const getRooms = useInfiniteQuery({
        queryKey: ["edit-rooms", user?.id],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await axios.get("/api/get-cms-rooms", {
                params: {
                    page: pageParam,
                    userId: user?.id
                },
            });

            setRooms(rooms.concat(data));

            return {
                items: data,
                nextPage: pageParam + 1,
                hasNextPage: data.length === 5
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        },
        enabled: !!user?.id,
    });

    const getBookings = useInfiniteQuery({
        queryKey: ["cms-bookings", user?.id],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await axios.get("/api/get-cms-bookings", {
                params: {
                    page: pageParam,
                    pageSize: 5,
                    userId: user?.id
                },
            });

            return {
                items: data,
                nextPage: pageParam + 1,
                hasNextPage: data.length === 5
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        },
        enabled: !!user?.id,
    });

    const flatBookingData = getBookings.data?.pages.flatMap((page) => page.items) || [];

    const editRoomForm = useForm<EditRoomData>({
        resolver: zodResolver(editRoomSchema),
        defaultValues: {
            popular: false,
            newlyRenovated: false,
            images: [],
            amenities: [],
            features: [],
            services: [],
            originalPrice: "",
            price: selectedRoom?.price.toString(),
            size: "",
            maxGuests: selectedRoom?.maxGuests.toString(),
            cancellationPolicy: [],
            ...selectedRoom,
        }
    });

    const availabilityCalenderForm = useForm<AvailabilityCalenderData>({
        resolver: zodResolver(availabilityCalenderSchema),
        defaultValues: {
            dates: [],
            availability: "available",
        }
    });

    const bulkOperationsForm = useForm<BulkOperationsData>({
        resolver: zodResolver(bulkOperationsSchema),
        defaultValues: {
            startDate: undefined,
            endDate: undefined,
            availability: "available",
        }
    });

    const recurringPatternsForm = useForm<RecurringPatternsData>({
        resolver: zodResolver(recurringPatternsSchema),
        defaultValues: {
            availability: "available"
        }
    });

    const pickedDates = availabilityCalenderForm.watch("dates");


    const saveRoomMtn = useMutation({
        mutationFn: async (data: EditRoomData) => {
            const { data: returnData } = await axios.put("/api/update-room", {
                data: {
                    ...data,
                    userId: user?.id,
                },
            });

            return returnData
        },
    });

    const deleteRoomMtn = useMutation({
        mutationFn: async (id: string) => {
            const { data } = await axios.delete("/api/delete-room", {
                params: {
                    id,
                    userId: user?.id
                },
            });

            return data;
        }
    });

    const submitAvailabilityCal = useMutation({
        mutationFn: async (data: AvailabilityCalenderData | BulkOperationsData | RecurringPatternsData) => {
            if (!data.pricePerNight || parseInt(data.pricePerNight) === 0) delete data.pricePerNight;
            const { data: returnData } = await axios.put("/api/update-room", {
                data: {
                    ...data,
                    roomIds: selectedRoomIds,
                    userId: user?.id,
                }
            });

            return returnData;
        }
    })

    const filteredRooms = rooms.filter((room) => {
        const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = filterCategory === "all" || room.category === filterCategory
        const matchesStatus = filterStatus === "all" || room.status === filterStatus
        return matchesSearch && matchesCategory && matchesStatus
    })

    const totalRating = rooms.reduce((roomAcc, room) => {
        const { review } = room;
        if (review.length > 0) {
            const roomTotal = review?.reduce((revAcc: number, review: any) => revAcc + review.rating, 0);
            const roomAvg = roomTotal / review.length;
            return roomAcc + roomAvg;
        } else {
            return roomAcc + 5
        }
    }, 0);

    const stats = {
        totalRooms: rooms.length,
        activeRooms: rooms.filter((room) => room.status === "active").length,
        averagePrice: rooms.length > 0 ? Math.round(rooms.reduce((acc, room) => acc + room.price, 0) / rooms.length) : 0,
        averageRating: (totalRating / rooms.length).toFixed(1)
    };

    const startEditing = (room?: room) => {
        if (room) {
            //@ts-expect-error error
            setSelectedRoom(room);
        };
        setIsEditing(true);
    }

    const saveRoom = (data: EditRoomData) => {
        saveRoomMtn.mutate(data, {
            onSuccess: (data) => {
                if (selectedRoom) {
                    setRooms(rooms.map((room) => (room.id === data.id ? data : room)))
                } else {
                    setRooms([...rooms, data])
                }
                editRoomForm.reset();
                toast.success("Successfully saved unit.");
                setIsEditing(false)
                setSelectedRoom(null)
            },
            onError: (error) => {
                console.error("Error saving unit", error);
                toast.error("Error saving unit. Please try again.")
            },
        });
    }

    const deleteRoom = (roomId: string) => {
        deleteRoomMtn.mutate(roomId, {
            onSuccess: () => {
                setRooms(rooms.filter((room) => room.id !== roomId));
                toast.success("Successfully deleted unit.");
            },
            onError: (error) => {
                console.error("Error deleting unit.", error.message);
                toast.error("Error deleting unit. Please try again");
            },
        });
    }

    const duplicateRoom = (room: EditRoomData) => {
        delete room.id;
        const duplicatedRoom = {
            ...room,
            name: `${room.name} (Copy)`,
            status: "draft",
        };

        saveRoom(duplicatedRoom);
    }

    const handleImageUpload = (images: string[]) => {
        if (images) {
            const formImages = editRoomForm.getValues("images");
            editRoomForm.setValue("images", formImages.concat(images));
        }
    };

    const removeImage = (index: number) => {
        const formImages = editRoomForm.getValues("images");
        editRoomForm.setValue("images", formImages.filter((_, i) => i !== index))
    };

    const onAvailabilityCalSubmit = async (data: AvailabilityCalenderData | BulkOperationsData | RecurringPatternsData) => {
        if (selectedRoomIds.length === 0) {
            toast.error("Error", {
                description: "Please select at least 1 unit to update"
            });
            return
        };

        submitAvailabilityCal.mutate(data, {
            onSuccess: () => {
                toast.success("Success", {
                    description: `Successfully updated unit ${selectedRoomIds.length > 1 ? "s " : ""} availability. It may take up to 24hrs for your changes to take effect.`
                });
            },
            onError: () => {
                toast.error("Error", {
                    description: "Error updating unit availability. Please try again."
                });
            },
        });

    };

    function formatCategoryLabel(slug: string) {
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }

    // Aggregate categories from rooms
    const categoryMap = rooms.reduce<Map<string, CategoryAgg>>((map, room) => {
        if (!room?.category) return map

        const key = room.category
        const existing =
            map.get(key) ?? {
                value: key,
                label: formatCategoryLabel(key),
                count: 0,
                totalPrice: 0,
            }

        const price = typeof room.price === "number" ? room.price : 0
        existing.count += 1
        existing.totalPrice += price

        map.set(key, existing)
        return map
    }, new Map());

    const categories = Array.from(categoryMap.values()).map((category) => ({
        value: category.value,
        label: category.label,
        count: category.count,
        avgPrice: category.count ? Math.round(category.totalPrice / category.count) : 0,
    }));

    const visibleCategories = categories.slice(0, page * itemsPerPage);

    useEffect(() => {
        if (isLoaded && user) {
            const role = user.publicMetadata?.role;

            if (role !== "host") router.replace("/unauthorised?role=host");

        }

    }, [isLoaded, user, router])

    useEffect(() => {
        if (selectedRoom) {
            editRoomForm.reset({
                ...selectedRoom,
            });
        }
    }, [selectedRoom, editRoomForm]);

    useEffect(() => {
        if (!getBookings.hasNextPage) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    getBookings.fetchNextPage()
                }
            },
            { threshold: 1 }
        )

        if (loader.current) observer.observe(loader.current)
        return () => {
            if (loader.current) observer.unobserve(loader.current)
        }
    }, [getBookings]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => {
                        if (prev * itemsPerPage >= categories.length) return prev // no more pages
                        return prev + 1
                    })
                }
            },
            { threshold: 1 }
        )

        if (loader2.current) observer.observe(loader2.current)

        return () => {
            if (loader2.current) observer.unobserve(loader2.current)
        }
    }, [categories.length])


    if (isEditing) {
        const images = editRoomForm.watch("images");

        return (
            <div
                className="min-h-screen bg-gray-50 dark:bg-gray-900"
            >
                <Form
                    {...editRoomForm}
                >
                    <form onSubmit={editRoomForm.handleSubmit(saveRoom)} className="max-w-6xl mx-auto p-6">
                        <div className="flex flex-col md:flex-row gap-y-2 items-start md:items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {selectedRoom ? "Edit Unit" : "Add New Unit"}
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {selectedRoom ? "Update unit details and settings" : "Create a new unit listing"}
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                <Button variant="outline" onClick={() => {
                                    editRoomForm.reset();
                                    setIsEditing(false);
                                }}>
                                    <X className="h-4 w-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button>
                                    {
                                        saveRoomMtn.isPending ? (
                                            <>
                                                <Loader className="animate-spin mr-2" />
                                                Saving Unit...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Unit
                                            </>
                                        )
                                    }
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Form */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Basic Information */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Basic Information</CardTitle>
                                        <CardDescription>Essential unit details and pricing</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={editRoomForm.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="name">Unit Name</FormLabel>
                                                        <Input
                                                            id="name"
                                                            placeholder="e.g., Ocean View Deluxe Suite"
                                                            {...field}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="country"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="country">Country</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <CountrySelect value={field.value} onChange={field.onChange} />
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Property Address</FormLabel>
                                                        <AddressAutocomplete
                                                            onSelect={(val) => field.onChange(val)}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="category"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="category">Category</FormLabel>
                                                        <Select
                                                            defaultValue={field.value}
                                                            onValueChange={field.onChange}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select category" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {categories.map((cat) => (
                                                                    <SelectItem key={cat.value} value={cat.value}>
                                                                        {cat.label}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={editRoomForm.control}
                                                name="price"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="price">Price per Night ($)</FormLabel>
                                                        <Input
                                                            id="price"
                                                            type="number"
                                                            {...field}
                                                            placeholder="299"
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="originalPrice"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="originalPrice">Original Price ($)</FormLabel>
                                                        <Input
                                                            id="originalPrice"
                                                            type="number"
                                                            {...field}
                                                            placeholder="399"
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div>
                                                <FormField
                                                    control={editRoomForm.control}
                                                    name="size"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel htmlFor="size">Size (sq ft)</FormLabel>
                                                            <Input
                                                                id="size"
                                                                type="number"
                                                                {...field}
                                                                placeholder="650"
                                                            />
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={editRoomForm.control}
                                                name="maxGuests"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="maxGuests">Max Guests</FormLabel>
                                                        <Input
                                                            id="maxGuests"
                                                            type="number"
                                                            {...field}
                                                            placeholder="4"
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="bedType"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="bedType">Bed Type</FormLabel>
                                                        <Select
                                                            defaultValue={field.value}
                                                            onValueChange={field.onChange}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select bed type" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {bedTypes.map((bed) => (
                                                                    <SelectItem key={bed.value} value={bed.value}>
                                                                        {bed.label}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={editRoomForm.control}
                                                name="view"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="view">View</FormLabel>
                                                        <Select
                                                            defaultValue={field.value}
                                                            onValueChange={field.onChange}
                                                        >
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select view" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {views.map((view) => (
                                                                    <SelectItem key={view.value} value={view.value}>
                                                                        {view.label}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div>
                                            <FormField
                                                control={editRoomForm.control}
                                                name="description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="description">Description</FormLabel>
                                                        <Textarea
                                                            id="description"
                                                            {...field}
                                                            placeholder="Describe the unit's features, ambiance, and unique selling points..."
                                                            rows={4}
                                                        />
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Images */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Unit Images</CardTitle>
                                        <CardDescription>Upload high-quality photos of the unit</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                                <label htmlFor="image-upload" className="cursor-pointer">
                                                    <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                                </label>
                                                <FileUpload upload={handleImageUpload} disabled={images.length >= 4} />
                                                {
                                                    images.length >= 4 && (
                                                        <p className="text-neutral-400 dark:text-neutral-400">Max number of files reached.</p>
                                                    )
                                                }
                                            </div>
                                            <p className="text-red-600 text-sm">{editRoomForm.formState.errors.images && editRoomForm.formState.errors.images.message}</p>
                                            {images.length > 0 && (
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {images.map((image, index) => (
                                                        <div key={index} className="relative group">
                                                            <Image
                                                                src={image || "/placeholder.svg"}
                                                                alt={`Unit image ${index + 1}`}
                                                                width={500}
                                                                height={500}
                                                                className="w-full h-32 object-cover rounded-lg"
                                                            />
                                                            <button
                                                                onClick={() => removeImage(index)}
                                                                type="button"
                                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </button>
                                                            {index === 0 && <Badge className="absolute bottom-2 left-2 bg-blue-600">Main Image</Badge>}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                                {/* Amenities */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Amenities</CardTitle>
                                        <CardDescription>Select all amenities available in this unit</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={editRoomForm.control}
                                            name="amenities"
                                            render={() => (
                                                <FormItem>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {commonAmenities.map((amenity) => (
                                                            <FormField
                                                                key={amenity}
                                                                control={editRoomForm.control}
                                                                name="amenities"
                                                                render={({ field }) => {
                                                                    return (
                                                                        <FormItem
                                                                            key={amenity}
                                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                                        >
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(amenity)}
                                                                                    onCheckedChange={(checked) => {
                                                                                        return checked
                                                                                            ? field.onChange([
                                                                                                ...field.value,
                                                                                                amenity,
                                                                                            ])
                                                                                            : field.onChange(
                                                                                                field.value?.filter(
                                                                                                    (value: string) => value !== amenity
                                                                                                )
                                                                                            );
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="text-sm font-normal">
                                                                                {amenity}
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    );
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                                {/* Features */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Unit Features</CardTitle>
                                        <CardDescription>Select key features and furnishings</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={editRoomForm.control}
                                            name="amenities"
                                            render={() => (
                                                <FormItem>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                        {commonFeatures.map((feature) => (
                                                            <FormField
                                                                key={feature}
                                                                control={editRoomForm.control}
                                                                name="features"
                                                                render={({ field }) => {
                                                                    return (
                                                                        <FormItem
                                                                            key={feature}
                                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                                        >
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(feature)}
                                                                                    onCheckedChange={(checked) => {
                                                                                        return checked
                                                                                            ? field.onChange([
                                                                                                ...field.value,
                                                                                                feature,
                                                                                            ])
                                                                                            : field.onChange(
                                                                                                field.value?.filter(
                                                                                                    (value: string) => value !== feature
                                                                                                )
                                                                                            );
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="text-sm font-normal">
                                                                                {feature}
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    );
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                                {/* Services */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Services</CardTitle>
                                        <CardDescription>Select all services available.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={editRoomForm.control}
                                            name="services"
                                            render={() => (
                                                <FormItem>
                                                    <FormLabel className="text-base font-semibold">Services</FormLabel>
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                                                        {["Cleaning", "Laundry", "Airport Pickup"].map((service) => (
                                                            <FormField
                                                                key={service}
                                                                control={editRoomForm.control}
                                                                name="services"
                                                                render={({ field }) => {
                                                                    return (
                                                                        <FormItem
                                                                            key={service}
                                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                                        >
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(service)}
                                                                                    onCheckedChange={(checked) => {
                                                                                        return checked
                                                                                            ? field.onChange([
                                                                                                ...field.value,
                                                                                                service,
                                                                                            ])
                                                                                            : field.onChange(
                                                                                                field.value?.filter(
                                                                                                    (value: string) => value !== service
                                                                                                )
                                                                                            );
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="text-sm font-normal">
                                                                                {service}
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    );
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>
                                {/* Cancelation Policy */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Cancellation Policy</CardTitle>
                                        <CardDescription>Select your cancellation policy</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={editRoomForm.control}
                                            name="cancellationPolicy"
                                            render={({ field }) => {
                                                const isNonRefundable = field.value?.includes("non-refundable")

                                                return (
                                                    <FormItem>
                                                        <FormLabel>Cancellation Policy</FormLabel>
                                                        <div className="grid gap-3">
                                                            {/* Non-refundable */}
                                                            <FormItem className="flex flex-row items-start space-x-3">
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={isNonRefundable}
                                                                        onCheckedChange={(checked) => {
                                                                            if (checked) {
                                                                                // If non-refundable is selected, clear all other options
                                                                                field.onChange(["non-refundable"])
                                                                            } else {
                                                                                field.onChange([])
                                                                            }
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="text-sm font-normal">
                                                                    Non-refundable
                                                                </FormLabel>
                                                            </FormItem>

                                                            {/* Show other options ONLY if non-refundable is not selected */}
                                                            {!isNonRefundable && (
                                                                <>
                                                                    {/* 14 days options */}
                                                                    <FormItem className="flex flex-col space-y-2">
                                                                        <span className="text-sm font-medium">
                                                                            Refund if cancelled 14 days before booking:
                                                                        </span>
                                                                        <div className="flex gap-3">
                                                                            <FormItem className="flex flex-row items-center space-x-2">
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes("14-days-50")}
                                                                                        disabled={field.value?.includes("14-days-100")}
                                                                                        onCheckedChange={(checked) =>
                                                                                            checked
                                                                                                ? field.onChange([...(field.value || []), "14-days-50"])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter((v) => v !== "14-days-50")
                                                                                                )
                                                                                        }
                                                                                    />
                                                                                </FormControl>
                                                                                <FormLabel className="text-sm font-normal">
                                                                                    50% refund
                                                                                </FormLabel>
                                                                            </FormItem>

                                                                            <FormItem className="flex flex-row items-center space-x-2">
                                                                                <FormControl>
                                                                                    <Checkbox
                                                                                        checked={field.value?.includes("14-days-100")}
                                                                                        disabled={field.value?.includes("14-days-50")}
                                                                                        onCheckedChange={(checked) =>
                                                                                            checked
                                                                                                ? field.onChange([...(field.value || []), "14-days-100"])
                                                                                                : field.onChange(
                                                                                                    field.value?.filter((v) => v !== "14-days-100")
                                                                                                )
                                                                                        }
                                                                                    />
                                                                                </FormControl>
                                                                                <FormLabel className="text-sm font-normal">
                                                                                    Full refund
                                                                                </FormLabel>
                                                                            </FormItem>
                                                                        </div>
                                                                    </FormItem>

                                                                    {/* 30 days option */}
                                                                    <FormItem className="flex flex-col items-start space-x-3">
                                                                        <FormLabel className="text-sm font-medium">
                                                                            Refund if cancelled 30 days before booking:
                                                                        </FormLabel>
                                                                        <div className="flex flex-row gap-2 items-center">
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes("30-days-100")}
                                                                                    onCheckedChange={(checked) =>
                                                                                        checked
                                                                                            ? field.onChange([...(field.value || []), "30-days-100"])
                                                                                            : field.onChange(
                                                                                                field.value?.filter((v) => v !== "30-days-100")
                                                                                            )
                                                                                    }
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="text-sm font-normal">
                                                                                Full refund if cancelled 30 days before booking
                                                                            </FormLabel>
                                                                        </div>
                                                                    </FormItem>
                                                                </>
                                                            )}
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Status & Settings */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Status & Settings</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <FormField
                                            control={editRoomForm.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="status">Publication Status</FormLabel>
                                                    <Select
                                                        defaultValue={field.value}
                                                        onValueChange={field.onChange}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={"Draft"} />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="draft">Draft</SelectItem>
                                                            <SelectItem value="active">Active</SelectItem>
                                                            <SelectItem value="archived">Archived</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={editRoomForm.control}
                                            name="availability"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="availability">Availability</FormLabel>
                                                    <Select
                                                        defaultValue={field.value}
                                                        onValueChange={field.onChange}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Available" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="available">Available</SelectItem>
                                                            <SelectItem value="limited">Limited</SelectItem>
                                                            <SelectItem value="booked">Booked</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={editRoomForm.control}
                                            name="popular"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center justify-between">
                                                    <FormLabel htmlFor="popular">Mark as Popular</FormLabel>
                                                    <FormControl>
                                                        <Switch
                                                            id="popular"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={editRoomForm.control}
                                            name="newlyRenovated"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-center justify-between">
                                                    <FormLabel htmlFor="renovated">Newly Renovated</FormLabel>
                                                    <FormControl>
                                                        <Switch
                                                            id="renovated"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Preview */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Preview</CardTitle>
                                        <CardDescription>How this unit will appear to guests</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {images[0] && (
                                                <Image
                                                    src={images[0] || "/placeholder.svg"}
                                                    alt="Unit preview"
                                                    width={500}
                                                    height={500}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                            )}
                                            <div>
                                                <h3 className="font-semibold">{editRoomForm.watch("name") || "Unit Name"}</h3>
                                                <h2 className="font-semibold text-sm">{editRoomForm.watch("address") || "Address"}</h2>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                    {editRoomForm.watch("description") || "Unit description will appear here..."}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="text-lg font-bold text-blue-600">${editRoomForm.watch("price") || 0}/night</div>
                                                <Badge
                                                    className={
                                                        editRoomForm.watch("status") === "active"
                                                            ? "bg-green-500"
                                                            : editRoomForm.watch("status") === "draft"
                                                                ? "bg-yellow-500"
                                                                : "bg-gray-500"
                                                    }
                                                >
                                                    {editRoomForm.watch("status") || "draft"}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        )
    }

    if (getRooms.isFetching || !isLoaded) return (
        <MultiStepLoader
            loadingStates={editRoomsLoadingStates}
            loading={getRooms.isFetching}
            duration={2000}
        />
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-y-2 items-start md:items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Unit Management</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage your property&apos;s unit inventory and details</p>
                    </div>
                    <Button onClick={() => startEditing()}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Unit
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="units">All Units</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Units</p>
                                            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalRooms}</p>
                                        </div>
                                        <Bed className="h-8 w-8 text-blue-600" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Units</p>
                                            <p className="text-3xl font-bold text-green-600">{stats.activeRooms}</p>
                                        </div>
                                        <CheckCircle className="h-8 w-8 text-green-600" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Price</p>
                                            <p className="text-3xl font-bold text-blue-600">${stats.averagePrice}</p>
                                        </div>
                                        <DollarSign className="h-8 w-8 text-blue-600" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Rating</p>
                                            <p className="text-3xl font-bold text-yellow-600">{stats.averageRating !== "NaN" ? stats.averageRating : 0}★</p>
                                        </div>
                                        <Star className="h-8 w-8 text-yellow-600" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Room Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest updates to your unitlistings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {rooms.slice(0, 5).map((room) => (
                                        <div
                                            key={room.id}
                                            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <Image
                                                    src={room.images[0] || "/placeholder.svg"}
                                                    alt={room.name}
                                                    width={500}
                                                    height={500}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium">{room.name}</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Updated {formatDate(room.updatedAt, "yyyy-MM-dd")}</p>
                                                </div>
                                            </div>
                                            <Badge
                                                className={
                                                    room.status === "active"
                                                        ? "bg-green-500"
                                                        : room.status === "draft"
                                                            ? "bg-yellow-500"
                                                            : "bg-gray-500"
                                                }
                                            >
                                                {room.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="units" className="space-y-6">
                        {/* Filters and Search */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Search units..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={filterCategory} onValueChange={setFilterCategory}>
                                <SelectTrigger className="w-48">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat.value} value={cat.value}>
                                            {cat.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Rooms Table */}
                        <Card>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Unit
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Category
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Rating
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                            {filteredRooms.map((room) => (
                                                <tr key={room.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <Image
                                                                src={room.images[0] || "/placeholder.svg"}
                                                                alt={room.name}
                                                                width={500}
                                                                height={500}
                                                                className="w-12 h-12 object-cover rounded"
                                                            />
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{room.name}</div>
                                                                <div className="text-sm text-gray-500">
                                                                    {room.size} sq ft • {room.maxGuests} guests
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <Badge variant="secondary">{room.category}</Badge>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">${room.price}</div>
                                                        {room.originalPrice && (
                                                            <div className="text-sm text-gray-500 line-through">${room.originalPrice}</div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <Badge
                                                            className={
                                                                room.status === "active"
                                                                    ? "bg-green-500"
                                                                    : room.status === "draft"
                                                                        ? "bg-yellow-500"
                                                                        : "bg-gray-500"
                                                            }
                                                        >
                                                            {room.status}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                                            <span className="text-sm">{room.review.length > 0 ? (room.review?.reduce((acc: number, review: any) => acc + review.rating, 0) / room.review.length).toFixed(1) : 0}</span>
                                                            <span className="text-sm text-gray-500 ml-1">({room.review.length})</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex items-center space-x-2">
                                                            <Button variant="ghost" size="sm" onClick={() => startEditing(room)}>
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="sm" onClick={() => duplicateRoom(room)}>
                                                                <Copy className="h-4 w-4" />
                                                            </Button>
                                                            <Button variant="ghost" size="sm">
                                                                <Link href={`/rooms?search=${room.name}`}>
                                                                    <Eye className="h-4 w-4" />
                                                                </Link>
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => deleteRoom(room.id)}
                                                                className="text-red-600 hover:text-red-700"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Room Performance and Recent Bookings */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-card-foreground">Room Performance</CardTitle>
                                        <CardDescription className="dark:text-gray-300">
                                            Booking rates and revenue by unit type
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="max-h-[500px] overflow-y-auto no-scrollbar">
                                        <div className="space-y-4">
                                            {visibleCategories.map((category) => {
                                                const categoryRooms = rooms.filter((r) => r.category === category.value)
                                                const avgPrice =
                                                    categoryRooms.length > 0
                                                        ? Math.round(
                                                            categoryRooms.reduce((acc, r) => acc + r.price, 0) / categoryRooms.length
                                                        )
                                                        : 0
                                                return (
                                                    <div
                                                        key={category.value}
                                                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                                    >
                                                        <div>
                                                            <p className="font-medium dark:text-white">{category.label}</p>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                {categoryRooms.length} units
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="font-medium dark:text-white">${avgPrice}</p>
                                                            <p className="text-sm text-gray-600 dark:text-gray-400">avg. price</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                            {/* Infinite scroll trigger */}
                                            {visibleCategories.length < categories.length && (
                                                <div ref={loader} className="h-10 flex items-center justify-center text-gray-500 text-sm">
                                                    <LoadingIcon />
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-card-foreground">Recent Bookings</CardTitle>
                                        <CardDescription className="dark:text-gray-300">
                                            Latest reservations and inquiries
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="max-h-[500px] overflow-y-scroll no-scrollbar">
                                        <div className="space-y-4">
                                            {getBookings.isFetching && <p>Loading...</p>}
                                            {getBookings.status === "error" && <p className="text-red-500">Failed to load bookings.</p>}
                                            {flatBookingData.length > 0 ? (
                                                flatBookingData.map((booking: BookingWithRoom) => {
                                                    const checkIn = booking.checkIn ? new Date(booking.checkIn) : null
                                                    const checkOut = booking.checkOut ? new Date(booking.checkOut) : null

                                                    const options: Intl.DateTimeFormatOptions = {
                                                        month: "short",
                                                        day: "numeric",
                                                    }

                                                    const dateRange = checkIn && checkOut
                                                        ? `${checkIn.toLocaleDateString(undefined, options)} - ${checkOut.toLocaleDateString(undefined, options)}`
                                                        : checkIn
                                                            ? checkIn.toLocaleDateString(undefined, options)
                                                            : "N/A"

                                                    return (
                                                        <div
                                                            key={booking.id}
                                                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                                        >
                                                            <div>
                                                                <p className="font-medium dark:text-white">{booking.room.name}</p>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                                    Booked for {dateRange}
                                                                </p>
                                                            </div>
                                                            <Badge className={statusColors[booking.status]}>
                                                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                            </Badge>
                                                        </div>
                                                    )
                                                })
                                            ) : (
                                                <p>No bookings yet.</p>
                                            )}


                                            {/* Infinite scroll loader */}
                                            {getBookings.hasNextPage && (
                                                <div ref={loader} className="h-10 flex items-center justify-center text-gray-500 text-sm">
                                                    {getBookings.isFetchingNextPage ? (
                                                        <LoadingIcon />
                                                    ) : "Scroll down to load more"}
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                            {/* Key Metrics */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                                                <p className="text-3xl font-bold text-gray-900">$731K</p>
                                                <div className="flex items-center mt-2">
                                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                                    <span className="text-sm text-green-500">+12.5%</span>
                                                    <span className="text-sm text-gray-500 ml-1">vs last year</span>
                                                </div>
                                            </div>
                                            <div className="bg-green-100 p-3 rounded-full">
                                                <DollarSign className="h-6 w-6 text-green-600" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                                                <p className="text-3xl font-bold text-gray-900">1,977</p>
                                                <div className="flex items-center mt-2">
                                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                                    <span className="text-sm text-green-500">+8.2%</span>
                                                    <span className="text-sm text-gray-500 ml-1">vs last year</span>
                                                </div>
                                            </div>
                                            <div className="bg-blue-100 p-3 rounded-full">
                                                <Calendar className="h-6 w-6 text-blue-600" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
                                                <p className="text-3xl font-bold text-gray-900">86.2%</p>
                                                <div className="flex items-center mt-2">
                                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                                    <span className="text-sm text-green-500">+3.1%</span>
                                                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                                                </div>
                                            </div>
                                            <div className="bg-purple-100 p-3 rounded-full">
                                                <Bed className="h-6 w-6 text-purple-600" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600">Guest Satisfaction</p>
                                                <p className="text-3xl font-bold text-gray-900">4.8</p>
                                                <div className="flex items-center mt-2">
                                                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                                    <span className="text-sm text-red-500">-0.1</span>
                                                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                                                </div>
                                            </div>
                                            <div className="bg-yellow-100 p-3 rounded-full">
                                                <Star className="h-6 w-6 text-yellow-600" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div> */}

                            {/* Main Analytics */}
                            {/* <Tabs defaultValue="overview" className="space-y-6">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                                    <TabsTrigger value="rooms">Rooms</TabsTrigger>
                                    <TabsTrigger value="guests">Guests</TabsTrigger>
                                </TabsList> */}

                            {/* Overview Tab */}

                            {/* <TabsContent value="overview" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}

                            {/* Revenue Trend */}

                            {/* <Card>
                                            <CardHeader>
                                                <CardTitle>Revenue Trend</CardTitle>
                                                <CardDescription>Monthly revenue over the past year</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ChartContainer
                                                    config={{
                                                        revenue: {
                                                            label: "Revenue",
                                                            color: "hsl(var(--chart-1))",
                                                        },
                                                    }}
                                                    className="h-[300px]"
                                                >
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <AreaChart data={revenueData}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="month" />
                                                            <YAxis />
                                                            <ChartTooltip content={<ChartTooltipContent />} />
                                                            <Area
                                                                type="monotone"
                                                                dataKey="revenue"
                                                                stroke="var(--color-revenue)"
                                                                fill="var(--color-revenue)"
                                                                fillOpacity={0.2}
                                                            />
                                                        </AreaChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card> */}

                            {/* Occupancy Rate */}

                            {/* <Card>
                                            <CardHeader>
                                                <CardTitle>Occupancy Rate</CardTitle>
                                                <CardDescription>Monthly occupancy percentage</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ChartContainer
                                                    config={{
                                                        occupancy: {
                                                            label: "Occupancy %",
                                                            color: "hsl(var(--chart-2))",
                                                        },
                                                    }}
                                                    className="h-[300px]"
                                                >
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <LineChart data={revenueData}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="month" />
                                                            <YAxis />
                                                            <ChartTooltip content={<ChartTooltipContent />} />
                                                            <Line
                                                                type="monotone"
                                                                dataKey="occupancy"
                                                                stroke="var(--color-occupancy)"
                                                                strokeWidth={3}
                                                                dot={{ fill: "var(--color-occupancy)" }}
                                                            />
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent> */}

                            {/* Revenue Tab */}

                            {/* <TabsContent value="revenue" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        <Card className="lg:col-span-2">
                                            <CardHeader>
                                                <CardTitle>Revenue by Room Type</CardTitle>
                                                <CardDescription>Breakdown of revenue by accommodation category</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ChartContainer
                                                    config={{
                                                        revenue: {
                                                            label: "Revenue",
                                                            color: "hsl(var(--chart-1))",
                                                        },
                                                    }}
                                                    className="h-[400px]"
                                                >
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <BarChart data={roomTypeData}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="name" />
                                                            <YAxis />
                                                            <ChartTooltip content={<ChartTooltipContent />} />
                                                            <Bar dataKey="revenue" fill="var(--color-revenue)" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Revenue Metrics</CardTitle>
                                                <CardDescription>Key revenue indicators</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">ADR (Average Daily Rate)</span>
                                                        <span className="text-lg font-bold">$425</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">RevPAR (Revenue per Available Room)</span>
                                                        <span className="text-lg font-bold">$366</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">GOPPAR (Gross Operating Profit per Available Room)</span>
                                                        <span className="text-lg font-bold">$248</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent> */}

                            {/* Rooms Tab */}

                            {/* <TabsContent value="rooms" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Room Type Performance</CardTitle>
                                                <CardDescription>Bookings and revenue by room category</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ChartContainer
                                                    config={{
                                                        bookings: {
                                                            label: "Bookings",
                                                            color: "hsl(var(--chart-1))",
                                                        },
                                                    }}
                                                    className="h-[300px]"
                                                >
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <BarChart data={roomTypeData} layout="horizontal">
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis type="number" />
                                                            <YAxis dataKey="name" type="category" width={120} />
                                                            <ChartTooltip content={<ChartTooltipContent />} />
                                                            <Bar dataKey="bookings" fill="var(--color-bookings)" />
                                                        </BarChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Room Status Overview</CardTitle>
                                                <CardDescription>Current status of all rooms</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                            <span className="font-medium">Occupied</span>
                                                        </div>
                                                        <span className="text-2xl font-bold text-green-600">124</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                            <span className="font-medium">Available</span>
                                                        </div>
                                                        <span className="text-2xl font-bold text-blue-600">28</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                            <span className="font-medium">Maintenance</span>
                                                        </div>
                                                        <span className="text-2xl font-bold text-yellow-600">8</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                            <span className="font-medium">Out of Order</span>
                                                        </div>
                                                        <span className="text-2xl font-bold text-red-600">2</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent> */}

                            {/* Guests Tab */}

                            {/* <TabsContent value="guests" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Guest Source Distribution</CardTitle>
                                                <CardDescription>Where your bookings are coming from</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ChartContainer
                                                    config={{
                                                        value: {
                                                            label: "Percentage",
                                                            color: "hsl(var(--chart-1))",
                                                        },
                                                    }}
                                                    className="h-[300px]"
                                                >
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <PieChart>
                                                            <Pie
                                                                data={guestSourceData}
                                                                cx="50%"
                                                                cy="50%"
                                                                outerRadius={80}
                                                                fill="#8884d8"
                                                                dataKey="value"
                                                                label={({ name, value }) => `${name}: ${value}%`}
                                                            >
                                                                {guestSourceData.map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                                ))}
                                                            </Pie>
                                                            <ChartTooltip content={<ChartTooltipContent />} />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Guest Demographics</CardTitle>
                                                <CardDescription>Key guest statistics and insights</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">Average Stay Duration</span>
                                                        <span className="text-lg font-bold">3.2 nights</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <TrendingUp className="h-4 w-4 mr-1" />
                                                        +0.3 nights vs last year
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">Repeat Guest Rate</span>
                                                        <span className="text-lg font-bold">42%</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <TrendingUp className="h-4 w-4 mr-1" />
                                                        +5% vs last year
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">Average Group Size</span>
                                                        <span className="text-lg font-bold">2.1 guests</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Users className="h-4 w-4 mr-1" />
                                                        Stable vs last year
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">International Guests</span>
                                                        <span className="text-lg font-bold">68%</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <MapPin className="h-4 w-4 mr-1" />
                                                        +12% vs last year
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>
                                
                            </Tabs> */}
                        </div>
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {
                                selectedTab === "calendar" ? (
                                    <Card className="mb-5">
                                        <CardHeader>
                                            <CardTitle>Select Unit</CardTitle>
                                            <CardDescription>Choose which unit you want to manage</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Select
                                                value={selectedRoomIds.length === 1 ? selectedRoomIds[0] : ""}
                                                onValueChange={(value) => setSelectedRoomIds([value])}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder="Select a unit"
                                                    />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[500px]">
                                                    {rooms.map((room) => (
                                                        <SelectItem
                                                            key={room.id}
                                                            value={room.id}
                                                        >
                                                            {room.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <Card className="mb-5">
                                        <CardHeader>
                                            <CardTitle>Select Units</CardTitle>
                                            <CardDescription>
                                                Choose which units you want to manage (select all or specific units)
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className="w-fit justify-between hover:text-neutral-400"
                                                    >
                                                        {selectedRoomIds.length === 0
                                                            ? "Select units"
                                                            : selectedRoomIds.length === rooms.length
                                                                ? "All Units"
                                                                : `${selectedRoomIds.length} unit(s) selected`}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>

                                                <PopoverContent
                                                    className="w-[300px] p-0"
                                                    align="start"
                                                >
                                                    <Command >
                                                        {/* Search bar */}
                                                        <CommandInput placeholder="Search units..." />
                                                        <CommandEmpty>No units found.</CommandEmpty>

                                                        <CommandGroup className="max-h-[500px] overflow-y-scroll no-scrollbar">
                                                            {/* All Units */}
                                                            <CommandItem
                                                                onSelect={() => {
                                                                    if (selectedRoomIds.length === rooms.length) {
                                                                        setSelectedRoomIds([])
                                                                    } else {
                                                                        setSelectedRoomIds(rooms.map((room) => room.id))
                                                                    }
                                                                }}
                                                            >
                                                                <Checkbox
                                                                    className="mr-2"
                                                                    checked={selectedRoomIds.length === rooms.length}
                                                                />
                                                                All Units
                                                            </CommandItem>

                                                            {/* Individual Rooms */}
                                                            {rooms.map((room) => (
                                                                <CommandItem
                                                                    key={room.id}
                                                                    value={room.name} // <-- makes it searchable
                                                                    onSelect={() => {
                                                                        if (selectedRoomIds.includes(room.id)) {
                                                                            setSelectedRoomIds(
                                                                                selectedRoomIds.filter((id) => id !== room.id)
                                                                            )
                                                                        } else {
                                                                            setSelectedRoomIds([...selectedRoomIds, room.id])
                                                                        }
                                                                    }}
                                                                >
                                                                    <Checkbox
                                                                        className="mr-2"
                                                                        checked={selectedRoomIds.includes(room.id)}
                                                                    />
                                                                    {room.name}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </CardContent>
                                    </Card>
                                )
                            }
                            <Tabs defaultValue="calendar" className="space-y-6">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="calendar" onClick={() => setSelectedTab("calendar")}>Calendar View</TabsTrigger>
                                    <TabsTrigger value="bulk" onClick={() => setSelectedTab("bulk")}>Bulk Operations</TabsTrigger>
                                    <TabsTrigger value="settings" onClick={() => setSelectedTab("settings")}>Settings</TabsTrigger>
                                </TabsList>

                                {/* Calendar Tab */}
                                <TabsContent value="calendar" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                        {/* Calendar */}
                                        <Card className="lg:col-span-3">
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <CardTitle className="flex items-center">
                                                            <Calendar className="h-5 w-5 mr-2" />
                                                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                                        </CardTitle>
                                                        <CardDescription>
                                                            Click dates to select, then use the panel to update availability
                                                        </CardDescription>
                                                    </div>

                                                    {/* Month & Year Controls */}
                                                    <div className="flex items-center space-x-2">
                                                        {/* Year Selector */}
                                                        <Select
                                                            value={currentDate.getFullYear().toString()}
                                                            onValueChange={(year) => {
                                                                const newDate = new Date(currentDate)
                                                                newDate.setFullYear(Number(year))
                                                                setCurrentDate(newDate)
                                                            }}
                                                        >
                                                            <SelectTrigger className="w-[100px]">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent className="max-h-60">
                                                                {Array.from({ length: 20 }).map((_, i) => {
                                                                    const year = new Date().getFullYear() + i
                                                                    return (
                                                                        <SelectItem key={year} value={year.toString()}>
                                                                            {year}
                                                                        </SelectItem>
                                                                    )
                                                                })}
                                                            </SelectContent>
                                                        </Select>

                                                        {/* Prev / Next Buttons */}
                                                        <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                                                            <ChevronLeft className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                                                            <ChevronRight className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                {/* Calendar Grid */}
                                                <div className="grid grid-cols-7 gap-1">
                                                    {days.map((date, index) => {
                                                        if (!date) {
                                                            return <div key={index} className="p-2 h-20"></div>
                                                        }

                                                        const today = new Date();
                                                        today.setHours(0, 0, 0, 0);

                                                        const dateKey = format(date, "yyyy-MM-dd");

                                                        const selectedRoom = rooms.find((room) => room.id === selectedRoomIds[0]);

                                                        // ✅ Find which availability group this date belongs to
                                                        const dayAvailabilityGroup = selectedRoom?.availabilityStatus.find(
                                                            (a) => a.dates.includes(dateKey)
                                                        );

                                                        const isSelected = pickedDates.includes(dateKey);
                                                        const isToday = date.toDateString() === new Date().toDateString();
                                                        const isPast = date.getTime() < today.getTime();

                                                        // 🚫 Make it unclickable if booked
                                                        const isBooked = dayAvailabilityGroup?.availability === "booked";

                                                        const Icon =
                                                            statusConfig[dayAvailabilityGroup?.availability as keyof typeof statusConfig]
                                                                ?.icon;
                                                        return (
                                                            <div
                                                                key={dateKey}
                                                                className={`p-2 h-20 border rounded-lg transition-all
                                                                             ${isPast || isBooked
                                                                        ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                                                        : "cursor-pointer hover:shadow-md"}
                                                                        ${isSelected && !isPast && !isBooked ? "ring-2 ring-amber-500 bg-amber-50" : ""}
                                                                        ${isToday ? "border-amber-500" : "border-gray-200"}
                                                                         `}
                                                                onClick={() => {
                                                                    if (!isPast && !isBooked) {
                                                                        handleDateClick(date); // ✅ only allow change if not booked
                                                                    }
                                                                }}
                                                            >
                                                                <div className="flex flex-col h-full">
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <span
                                                                            className={`text-sm font-medium 
                                                                                        ${isToday ? "text-amber-600" : isPast || isBooked ? "text-gray-400" : "text-gray-900 dark:text-gray-300"} 
                                                                                        ${isSelected && !isBooked && "dark:text-gray-900"}`}
                                                                        >
                                                                            {date.getDate()}
                                                                        </span>
                                                                        {isSelected && !isPast && !isBooked && (
                                                                            <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                                        )}
                                                                    </div>

                                                                    {!isPast && dayAvailabilityGroup && (
                                                                        <div className="flex-1 flex flex-col justify-between">
                                                                            <div
                                                                                className={`w-full h-1 rounded ${statusConfig[dayAvailabilityGroup.availability as keyof typeof statusConfig]?.color}`}
                                                                            />
                                                                            <div className={`flex flex-row  justify-between items-center text-xs capitalize 
                                                                                            ${isBooked ? "text-red-500 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}
                                                                                          ${isSelected && !isBooked && "dark:text-gray-900"}`}
                                                                            >
                                                                                <p>{dayAvailabilityGroup.availability}</p>
                                                                                {Icon && <Icon className="w-4 h-4" />}

                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>


                                            </CardContent>
                                        </Card>

                                        {/* Control Panel */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Update Selected Dates</CardTitle>
                                                <CardDescription>
                                                    {pickedDates.length} date{pickedDates.length !== 1 ? "s" : ""} selected
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Form {...availabilityCalenderForm}>
                                                    <form onSubmit={availabilityCalenderForm.handleSubmit(onAvailabilityCalSubmit)}>
                                                        <FormField
                                                            control={availabilityCalenderForm.control}
                                                            name="availability"
                                                            render={({ field }) => (
                                                                <FormItem className="mb-2">
                                                                    <Label htmlFor="status" className="">
                                                                        Availability Status
                                                                    </Label>
                                                                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Select status" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent>
                                                                            {Object.entries(statusConfig).map(([key, config]) => (
                                                                                <SelectItem key={key} value={key}>
                                                                                    <div className="flex items-center">
                                                                                        <div className={`w-3 h-3 rounded-full ${config.color} mr-2`} />
                                                                                        {config.label}
                                                                                    </div>
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage className="dark:text-red-300" />
                                                                </FormItem>
                                                            )}
                                                        />


                                                        {availabilityCalenderForm.watch("availability") === "available" && (
                                                            <FormField
                                                                control={availabilityCalenderForm.control}
                                                                name="pricePerNight"
                                                                render={({ field }) => (
                                                                    <FormItem className="mb-3">
                                                                        <Label htmlFor="price" className="mb-[6px]">Price per Night ($)</Label>
                                                                        <Input
                                                                            id="price"
                                                                            type="number"
                                                                            placeholder="450"
                                                                            min={0}
                                                                            {...field}
                                                                        />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        )}
                                                        <Button
                                                            type="submit"
                                                            disabled={pickedDates.length === 0}
                                                            className="w-full bg-amber-600 hover:bg-amber-700 mb-3"
                                                        >
                                                            {
                                                                submitAvailabilityCal.isPending ? (
                                                                    <>
                                                                        <Loader className="animate-spin mr-2" />
                                                                        Updating {pickedDates.length} Date{pickedDates.length !== 1 ? "s" : ""}...
                                                                    </>
                                                                )
                                                                    : (
                                                                        <>
                                                                            <Save className="h-4 w-4 mr-2" />
                                                                            Update {pickedDates.length} Date{pickedDates.length !== 1 ? "s" : ""}
                                                                        </>
                                                                    )
                                                            }
                                                        </Button>

                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            onClick={() => availabilityCalenderForm.setValue("dates", [])}
                                                            className="w-full"
                                                        >
                                                            Clear Selection
                                                        </Button>
                                                    </form>
                                                </Form>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Legend */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Status Legend</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {Object.entries(statusConfig).map(([key, config]) => (
                                                    <div key={key} className="flex items-center space-x-2">
                                                        <div className={`w-4 h-4 rounded ${config.color}`}></div>
                                                        <span className="text-sm font-medium">{config.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Bulk Operations Tab */}
                                <TabsContent value="bulk" className="space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Date Range Operations</CardTitle>
                                                <CardDescription>Apply settings to multiple dates at once</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Form {...bulkOperationsForm}>
                                                    <form
                                                        onSubmit={bulkOperationsForm.handleSubmit(onAvailabilityCalSubmit)}
                                                        className="space-y-3"
                                                    >
                                                        <div className="grid md:grid-cols-2 gap-4">

                                                            {/* Start Date */}
                                                            <FormField
                                                                control={bulkOperationsForm.control}
                                                                name="startDate"
                                                                render={({ field }) => (
                                                                    <FormItem className="flex flex-col space-y-2">
                                                                        <Label>Start Date</Label>
                                                                        <Popover>
                                                                            <PopoverTrigger asChild>
                                                                                <FormControl>
                                                                                    <Button
                                                                                        variant="outline"
                                                                                        className={cn("w-[240px] pl-3 text-left font-normal justify-start",
                                                                                            !field.value && "text-muted-foreground"
                                                                                        )}
                                                                                    >
                                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                                        {field.value ? (
                                                                                            format(field.value, "PPP")
                                                                                        ) : (
                                                                                            <span>Pick a date</span>
                                                                                        )}
                                                                                    </Button>
                                                                                </FormControl>
                                                                            </PopoverTrigger>
                                                                            <PopoverContent className="p-0" align="start">
                                                                                <CalendarPicker
                                                                                    mode="single"
                                                                                    disabled={{ before: new Date() }}
                                                                                    selected={field.value}
                                                                                    onSelect={field.onChange}
                                                                                    captionLayout="dropdown"
                                                                                    autoFocus
                                                                                />
                                                                            </PopoverContent>
                                                                        </Popover>
                                                                        <FormMessage className="dark:text-red-300" />
                                                                    </FormItem>
                                                                )}
                                                            />

                                                            {/* End Date */}
                                                            <FormField
                                                                control={bulkOperationsForm.control}
                                                                name="endDate"
                                                                render={({ field }) => (
                                                                    <FormItem className="flex flex-col space-y-2">
                                                                        <Label>End Date</Label>
                                                                        <Popover>
                                                                            <PopoverTrigger asChild>
                                                                                <FormControl>
                                                                                    <Button
                                                                                        variant="outline"
                                                                                        className={cn("w-[240px] pl-3 text-left font-normal justify-start",
                                                                                            !field.value && "text-muted-foreground"
                                                                                        )}
                                                                                    >
                                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                                        {field.value ? (
                                                                                            format(field.value, "PPP")
                                                                                        ) : (
                                                                                            <span>Pick a date</span>
                                                                                        )}
                                                                                    </Button>
                                                                                </FormControl>
                                                                            </PopoverTrigger>
                                                                            <PopoverContent className="p-0" align="start">
                                                                                <CalendarPicker
                                                                                    mode="single"
                                                                                    disabled={[{ before: new Date() },
                                                                                    { before: addDays(bulkOperationsForm.watch("startDate"), 1) }
                                                                                    ]}
                                                                                    selected={field.value}
                                                                                    onSelect={field.onChange}
                                                                                    captionLayout="dropdown"
                                                                                    autoFocus
                                                                                />
                                                                            </PopoverContent>
                                                                        </Popover>
                                                                        <FormMessage className="dark:text-red-300" />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                        <FormField
                                                            control={bulkOperationsForm.control}
                                                            name="availability"
                                                            render={({ field }) => (
                                                                <FormItem className="space-y-1.5">
                                                                    <Label htmlFor="bulk-status">Status</Label>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Select status" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent>
                                                                            {Object.entries(statusConfig).map(([key, config]) => (
                                                                                <SelectItem key={key} value={key}>
                                                                                    <div className="flex items-center">
                                                                                        <div className={`w-3 h-3 rounded-full ${config.color} mr-2`}></div>
                                                                                        {config.label}
                                                                                    </div>
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage className="dark:text-red-300" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        {
                                                            bulkOperationsForm.watch("availability") === "available" && (
                                                                <FormField
                                                                    control={bulkOperationsForm.control}
                                                                    name="pricePerNight"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <Label htmlFor="bulk-price-range">Price per Night ($)</Label>
                                                                            <Input
                                                                                id="bulk-price-range"
                                                                                type="number"
                                                                                min={0}
                                                                                placeholder="450"
                                                                                {...field}
                                                                            />
                                                                            <FormMessage className="dark:text-red-300" />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            )
                                                        }
                                                        <Button
                                                            className="w-full bg-amber-600 hover:bg-amber-700"
                                                            disabled={submitAvailabilityCal.isPending}
                                                            onClick={() => setForm("applyDates")}
                                                        >
                                                            {
                                                                submitAvailabilityCal.isPending && form === "applyDates" ? (
                                                                    <>
                                                                        <Loader className="mr-2 animate-spin" />
                                                                        Applying to Date Range...

                                                                    </>
                                                                ) : (
                                                                    "Apply to Date Range"
                                                                )
                                                            }
                                                        </Button>
                                                    </form>
                                                </Form>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Recurring Patterns</CardTitle>
                                                <CardDescription>Set up recurring availability patterns (patterns apply for 1 year from today   )</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                <Form {...recurringPatternsForm}>
                                                    <form
                                                        onSubmit={recurringPatternsForm.handleSubmit(onAvailabilityCalSubmit)}
                                                        className="space-y-3"
                                                    >

                                                        <FormField
                                                            control={recurringPatternsForm.control}
                                                            name="days"
                                                            render={({ field }) => (
                                                                <div className="space-y-1.5">
                                                                    <FormLabel>Days of Week</FormLabel>
                                                                    <FormItem className="flex flex-row w-full justify-between">
                                                                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => {
                                                                            const isChecked = field.value?.includes(day);

                                                                            return (
                                                                                <div key={day} className="flex items-center space-x-2">
                                                                                    <Checkbox
                                                                                        id={day}
                                                                                        checked={isChecked}
                                                                                        onCheckedChange={(checked) => {
                                                                                            if (checked) {
                                                                                                field.onChange([...(field.value || []), day]);
                                                                                            } else {
                                                                                                field.onChange(field.value?.filter((d: string) => d !== day));
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                    <FormLabel htmlFor={day} className="text-xs">
                                                                                        {day}
                                                                                    </FormLabel>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </FormItem>
                                                                </div>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={recurringPatternsForm.control}
                                                            name="availability"
                                                            render={({ field }) => (
                                                                <FormItem className="space-y-1.5">
                                                                    <FormLabel htmlFor="pattern-status">Status</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Select status" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent>
                                                                            {(["available", "checkIn", "checkOut", "maintenance"] as const).map((key) => {
                                                                                const config = statusConfig[key];
                                                                                return (
                                                                                    <SelectItem key={key} value={key}>
                                                                                        <div className="flex items-center">
                                                                                            <div className={`w-3 h-3 rounded-full ${config.color} mr-2`} />
                                                                                            {config.label}
                                                                                        </div>
                                                                                    </SelectItem>
                                                                                );
                                                                            })}
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage className="dark:text-red-300" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        {
                                                            recurringPatternsForm.watch("availability") === "available" && (
                                                                <FormField
                                                                    control={recurringPatternsForm.control}
                                                                    name="pricePerNight"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormLabel htmlFor="pattern-price">Price per Night ($)</FormLabel>
                                                                            <Input
                                                                                id="pattern-price"
                                                                                type="number"
                                                                                min={0}
                                                                                placeholder="450"
                                                                                {...field}
                                                                            />
                                                                            <FormMessage className="dark:text-red-300" />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            )
                                                        }
                                                        <Button
                                                            className="w-full bg-amber-600 hover:bg-amber-700"
                                                            onClick={() => setForm("recurringPatterns")}
                                                            disabled={submitAvailabilityCal.isPending}
                                                        >
                                                            {
                                                                submitAvailabilityCal.isPending && form === "recurringPatterns" ? (
                                                                    <>
                                                                        <Loader className="animate-spin mr-2" />
                                                                        Applying Pattern...
                                                                    </>
                                                                ) : (
                                                                    "Apply Pattern"
                                                                )
                                                            }
                                                        </Button>
                                                    </form>
                                                </Form>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </TabsContent>

                                {/* Settings Tab */}
                                <TabsContent value="settings" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Property Settings</CardTitle>
                                            <CardDescription>Configure your property details and preferences</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label htmlFor="property-name">Property Name</Label>
                                                <Input id="property-name" defaultValue="Grand Vista Resort" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="check-in">Default Check-in Time</Label>
                                                    <Input id="check-in" type="time" defaultValue="15:00" />
                                                </div>
                                                <div>
                                                    <Label htmlFor="check-out">Default Check-out Time</Label>
                                                    <Input id="check-out" type="time" defaultValue="11:00" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="min-stay">Minimum Stay (nights)</Label>
                                                    <Input id="min-stay" type="number" defaultValue="1" />
                                                </div>
                                                <div>
                                                    <Label htmlFor="max-stay">Maximum Stay (nights)</Label>
                                                    <Input id="max-stay" type="number" defaultValue="30" />
                                                </div>
                                            </div>
                                            <Button className="bg-amber-600 hover:bg-amber-700">
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Settings
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Availability Rules</CardTitle>
                                            <CardDescription>Set up automatic availability rules and restrictions</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="advance-booking" />
                                                <Label htmlFor="advance-booking">Allow advance booking up to 365 days</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="same-day" />
                                                <Label htmlFor="same-day">Allow same-day bookings</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="auto-close" />
                                                <Label htmlFor="auto-close">Automatically close dates when fully booked</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="weekend-premium" />
                                                <Label htmlFor="weekend-premium">Apply weekend premium pricing</Label>
                                            </div>
                                            <Button className="bg-amber-600 hover:bg-amber-700">
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Rules
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    {/* Stripe Payout Settings */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <CreditCard className="h-5 w-5 mr-2" />
                                                Payout Settings
                                            </CardTitle>
                                            <CardDescription>Configure your details to receive payments from bookings</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            {/* Stripe Fee Information */}
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <h4 className="font-semibold text-blue-900 mb-2">Stripe Transaction Fees</h4>
                                                <div className="space-y-2 text-sm text-blue-800">
                                                    <div className="flex justify-between">
                                                        <span>Online card payments:</span>
                                                        <span className="font-medium">2.9% + $0.30 per transaction</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>International cards:</span>
                                                        <span className="font-medium">3.4% + $0.30 per transaction</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Payout schedule:</span>
                                                        <span className="font-medium">Daily (2-day rolling basis)</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Standard payout fee:</span>
                                                        <span className="font-medium">Free for bank transfers</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Instant payout fee:</span>
                                                        <span className="font-medium">1.5% (min $0.50)</span>
                                                    </div>
                                                </div>
                                                <div className="mt-3 pt-3 border-t border-blue-200">
                                                    <p className="text-xs text-blue-700">
                                                        <strong>Example:</strong> For a $500 booking, you&apos;ll receive $485.20 after Stripe fees ($500 -
                                                        $14.80 in fees). Instant payouts would cost an additional $7.50.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Account Details */}
                                            <div className="space-y-4">
                                                <div>
                                                    <Label htmlFor="account-holder">Account Holder Name</Label>
                                                    <Input id="account-holder" placeholder="John Doe" className="mt-1" />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input id="email" placeholder="jdoe@email.com" className="mt-1" />
                                                        <p className="text-xs text-gray-500 mt-1">Email address</p>
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="country">Country</Label>
                                                        <Input id="country" placeholder="Canada" className="mt-1" />
                                                        <p className="text-xs text-gray-500 mt-1">Your Country</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Verification Status */}
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                                <div className="flex items-center mb-2">
                                                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                                                    <h4 className="font-semibold text-yellow-900">Account Verification Required</h4>
                                                </div>
                                                <p className="text-sm text-yellow-800 mb-3">
                                                    To receive payouts, you&apos;ll need to verify your identity and business information with Stripe. This
                                                    typically takes 1-2 business days.
                                                </p>
                                                <div className="space-y-2 text-sm text-yellow-800">
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                        <span>Government-issued ID verification</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                        <span>Bank account verification</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                        <span>Business documentation (if applicable)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Button className="bg-amber-600 hover:bg-amber-700 flex-1">
                                                    <Save className="h-4 w-4 mr-2" />
                                                    Save Payout Details
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 bg-transparent"
                                                    onClick={async () => {
                                                        const { data } = await axios.post("/api/create-connected-account", {
                                                            userId: user?.id,
                                                            role: user?.publicMetadata?.role,
                                                        });
                                                        const { url } = data;
                                                        window.location.href = url; // send host to Stripe onboarding
                                                    }}
                                                >
                                                    <RefreshCw className="h-4 w-4 mr-2" />
                                                    Verify with Stripe
                                                </Button>
                                            </div>

                                            {/* Security Notice */}
                                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-start">
                                                    <Shield className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-1">Security & Privacy</h4>
                                                        <p className="text-sm text-gray-600">
                                                            Your banking information is encrypted and securely stored by Stripe, our payment processor. We
                                                            never store your full account details on our servers. All transactions are PCI DSS compliant.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Footer />
        </div >
    )
}

