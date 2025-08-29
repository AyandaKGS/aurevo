"use client"

import AddressAutocomplete from "@/components/AddressSelect"
import { CountrySelect } from "@/components/CountrySelect"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FileUpload } from "@/components/ui/file-upload"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { editRoomsLoadingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { room } from "@prisma/client"
import { useInfiniteQuery, useMutation } from "@tanstack/react-query"
import axios from "axios"
import { formatDate } from "date-fns"
import {
    Bed,
    CheckCircle,
    Copy,
    DollarSign,
    Edit,
    Eye,
    ImageIcon,
    Loader,
    Plus,
    Save,
    Search,
    Star,
    Trash2,
    X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

const categories = [
    { value: "apartment", label: "Apartment" },
    { value: "suite", label: "Suite" },
    { value: "villa", label: "Villa" },
    { value: "standard", label: "Standard Room" },
    { value: "family", label: "Family Room" },
    { value: "romantic", label: "Romantic Suite" },
    { value: "accessible", label: "Accessible Room" },
];

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
    name: z.string({ error: "Please enter a room name." }).min(1),
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
})

type EditRoomData = z.infer<typeof editRoomSchema>;

export default function CMSDashboard() {
    const { user, isLoaded } = useUser();
    const [rooms, setRooms] = useState<any[]>([])
    const [selectedRoom, setSelectedRoom] = useState<EditRoomData | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterStatus, setFilterStatus] = useState("all")
    const [activeTab, setActiveTab] = useState("overview");

    const router = useRouter();

    const getRooms = useInfiniteQuery({
        queryKey: ["edit-rooms"],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await axios.get("/api/get-rooms", {
                params: {
                    page: pageParam,
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
        }
    });

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

    const saveRoomMtn = useMutation({
        mutationFn: async (data: EditRoomData) => {
            const { data: returnData } = await axios.post("/api/update-room", {
                data
            });

            return returnData
        },
    });

    const deleteRoomMtn = useMutation({
        mutationFn: async (id: string) => {
            const { data } = await axios.delete("/api/delete-room", {
                params: {
                    id
                },
            });

            return data;
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
        averagePrice: Math.round(rooms.reduce((acc, room) => acc + room.price, 0) / rooms.length),
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
                toast.success("Successfully saved room.");
                setIsEditing(false)
                setSelectedRoom(null)
            },
            onError: (error) => {
                console.error("Error saving room", error);
                toast.error("Error saving room. Please try again.")
            },
        });
    }

    const deleteRoom = (roomId: string) => {
        deleteRoomMtn.mutate(roomId, {
            onSuccess: () => {
                setRooms(rooms.filter((room) => room.id !== roomId));
                toast.success("Successfully deleted room.");
            },
            onError: (error) => {
                console.error("Error deleting room", error.message);
                toast.error("Error deleting room. Please try again");
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
                                    {selectedRoom ? "Edit Room" : "Add New Room"}
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {selectedRoom ? "Update room details and settings" : "Create a new room listing"}
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
                                                Saving Room...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="h-4 w-4 mr-2" />
                                                Save Room
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
                                        <CardDescription>Essential room details and pricing</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FormField
                                                control={editRoomForm.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel htmlFor="name">Room Name</FormLabel>
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
                                                            placeholder="Describe the room's features, ambiance, and unique selling points..."
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
                                        <CardTitle>Room Images</CardTitle>
                                        <CardDescription>Upload high-quality photos of the room</CardDescription>
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
                                                                alt={`Room image ${index + 1}`}
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
                                        <CardDescription>Select all amenities available in this room</CardDescription>
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
                                        <CardTitle>Room Features</CardTitle>
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
                                        <CardDescription>How this room will appear to guests</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {images[0] && (
                                                <Image
                                                    src={images[0] || "/placeholder.svg"}
                                                    alt="Room preview"
                                                    width={500}
                                                    height={500}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                            )}
                                            <div>
                                                <h3 className="font-semibold">{editRoomForm.watch("name") || "Room Name"}</h3>
                                                <h2 className="font-semibold text-sm">{editRoomForm.watch("address") || "Address"}</h2>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                    {editRoomForm.watch("description") || "Room description will appear here..."}
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
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Room Management</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage your property&apos;s room inventory and details</p>
                    </div>
                    <Button onClick={() => startEditing()}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Room
                    </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="rooms">All Rooms</TabsTrigger>
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
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Rooms</p>
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
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Rooms</p>
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

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest updates to your room listings</CardDescription>
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

                    <TabsContent value="rooms" className="space-y-6">
                        {/* Filters and Search */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Search rooms..."
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
                                                    Room
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Room Performance</CardTitle>
                                    <CardDescription>Booking rates and revenue by room type</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {categories.slice(0, 4).map((category) => {
                                            const categoryRooms = rooms.filter((r) => r.category === category.value)
                                            const avgPrice =
                                                categoryRooms.length > 0
                                                    ? Math.round(categoryRooms.reduce((acc, r) => acc + r.price, 0) / categoryRooms.length)
                                                    : 0
                                            return (
                                                <div
                                                    key={category.value}
                                                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                                >
                                                    <div>
                                                        <p className="font-medium">{category.label}</p>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{categoryRooms.length} rooms</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-medium">${avgPrice}</p>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">avg. price</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Bookings</CardTitle>
                                    <CardDescription>Latest reservations and inquiries</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div>
                                                <p className="font-medium">Ocean View Deluxe Suite</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Booked for Jan 25-28</p>
                                            </div>
                                            <Badge className="bg-green-500">Confirmed</Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                            <div>
                                                <p className="font-medium">Garden Villa Premium</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Inquiry for Feb 10-15</p>
                                            </div>
                                            <Badge className="bg-yellow-500">Pending</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Property Settings</CardTitle>
                                <CardDescription>Configure your property details and preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="property-name">Property Name</Label>
                                    <Input id="property-name" defaultValue="Serenity Resort" />
                                </div>
                                <div>
                                    <Label htmlFor="property-description">Property Description</Label>
                                    <Textarea
                                        id="property-description"
                                        defaultValue="A luxury resort offering world-class accommodations and amenities"
                                        rows={3}
                                    />
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
                                <Button>Save Settings</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
