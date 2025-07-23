"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
    Plus,
    Edit,
    Trash2,
    Eye,
    Save,
    X,
    Search,
    Bed,
    DollarSign,
    Star,
    ImageIcon,
    Copy,
    CheckCircle,
} from "lucide-react"
import Image from "next/image"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FileUpload } from "@/components/ui/file-upload";
import { Checkbox } from "@/components/ui/checkbox"

interface Room {
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    size: number
    maxGuests: number
    bedType: string
    view: string
    images: string[]
    amenities: string[]
    features: string[]
    description: string
    availability: "available" | "limited" | "booked"
    rating: number
    reviewCount: number
    isPopular?: boolean
    isNewlyRenovated?: boolean
    status: "active" | "draft" | "archived"
    createdAt: string
    updatedAt: string
}

const initialRooms: Room[] = [
    {
        id: "ocean-suite-deluxe",
        name: "Ocean View Deluxe Suite",
        category: "suite",
        price: 399,
        originalPrice: 499,
        size: 750,
        maxGuests: 4,
        bedType: "King + Sofa Bed",
        view: "Ocean",
        images: [
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Main",
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Bedroom",
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Bathroom",
        ],
        amenities: ["Ocean View", "Private Balcony", "Marble Bathroom", "Mini Bar", "Room Service", "Concierge"],
        features: ["King Bed", "Living Area", "Work Desk", "Safe", "Robes & Slippers", "Premium Toiletries"],
        description:
            "Experience luxury with breathtaking ocean views from your private balcony. This spacious suite features elegant furnishings, marble bathroom, and premium amenities.",
        availability: "available",
        rating: 4.9,
        reviewCount: 127,
        isPopular: true,
        status: "active",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20",
    },
    {
        id: "garden-villa-premium",
        name: "Garden Villa Premium",
        category: "villa",
        price: 299,
        size: 650,
        maxGuests: 3,
        bedType: "Queen",
        view: "Garden",
        images: [
            "/placeholder.svg?height=400&width=600&text=Garden+Villa+Main",
            "/placeholder.svg?height=400&width=600&text=Garden+Villa+Patio",
        ],
        amenities: ["Garden View", "Private Patio", "Rainfall Shower", "Coffee Machine", "Free WiFi"],
        features: ["Queen Bed", "Sitting Area", "Kitchenette", "Garden Access", "Outdoor Furniture"],
        description:
            "Nestled in our lush tropical gardens, this villa offers tranquility and privacy with direct garden access and a charming private patio.",
        availability: "limited",
        rating: 4.7,
        reviewCount: 89,
        isNewlyRenovated: true,
        status: "active",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18",
    },
]

const categories = [
    { value: "suite", label: "Suite" },
    { value: "villa", label: "Villa" },
    { value: "standard", label: "Standard Room" },
    { value: "family", label: "Family Room" },
    { value: "romantic", label: "Romantic Suite" },
    { value: "accessible", label: "Accessible Room" },
]

const bedTypes = [
    { value: "king", label: "King Bed" },
    { value: "queen", label: "Queen Bed" },
    { value: "twin", label: "Twin Beds" },
    { value: "king-sofa", label: "King + Sofa Bed" },
    { value: "multiple", label: "Multiple Beds" },
]

const views = [
    { value: "ocean", label: "Ocean View" },
    { value: "garden", label: "Garden View" },
    { value: "pool", label: "Pool View" },
    { value: "resort", label: "Resort View" },
    { value: "city", label: "City View" },
    { value: "mountain", label: "Mountain View" },
]

const commonAmenities = [
    "Ocean View",
    "Private Balcony",
    "Marble Bathroom",
    "Mini Bar",
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
]

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
]

const editRoomSchema = z.object({
    name: z.string().min(1, "Please enter a room name."),
    category: z.string().min(1, "Please select a category."),
    price: z.number().min(1, "Please input a price"),
    originalPrice: z.number().optional(),
    size: z.number().min(1, "Please input a price"),
    maxGuests: z.number().min(1, "Please input a minimum number of guests."),
    bedType: z.string().min(1, "Please select a bed type"),
    view: z.string().min(1, "Please select a view"),
    description: z.string().min(10, "Please enter a description"),
    images: z.array(z.string()).refine((value) => value.some((image) => image)),
    amenities: z.array(z.string()).refine((value) => value.some((amenity) => amenity)),
    features: z.array(z.string()).refine((value) => value.some((feature) => feature)),
    status: z.string().min(1, "Please select a status"),
    availability: z.string().min(1, "Please select an availability"),
    popular: z.boolean().optional(),
    newlyRenovated: z.boolean().optional(),
})

type EditRoomData = z.infer<typeof editRoomSchema>;

export default function CMSDashboard() {
    const [rooms, setRooms] = useState<Room[]>(initialRooms)
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterStatus, setFilterStatus] = useState("all")
    const [activeTab, setActiveTab] = useState("overview")
    const [files, setFiles] = useState([]);

    // Form state for room editing
    const [formData, setFormData] = useState<Partial<Room>>({})
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
    const [uploadedImages, setUploadedImages] = useState<string[]>([])

    const editRoomForm = useForm<EditRoomData>({
        resolver: zodResolver(editRoomSchema),
        defaultValues: {
            popular: false,
            newlyRenovated: false,
            amenities: [],
            features: [],
        }
    })

    const filteredRooms = rooms.filter((room) => {
        const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = filterCategory === "all" || room.category === filterCategory
        const matchesStatus = filterStatus === "all" || room.status === filterStatus
        return matchesSearch && matchesCategory && matchesStatus
    })

    const stats = {
        totalRooms: rooms.length,
        activeRooms: rooms.filter((r) => r.status === "active").length,
        averagePrice: Math.round(rooms.reduce((acc, r) => acc + r.price, 0) / rooms.length),
        averageRating: (rooms.reduce((acc, r) => acc + r.rating, 0) / rooms.length).toFixed(1),
    }

    const startEditing = (room?: Room) => {
        if (room) {
            setSelectedRoom(room)
            setFormData(room)
            setSelectedAmenities(room.amenities)
            setSelectedFeatures(room.features)
            setUploadedImages(room.images)
        } else {
            // New room
            const newRoom: Partial<Room> = {
                name: "",
                category: "standard",
                price: 0,
                size: 0,
                maxGuests: 2,
                bedType: "queen",
                view: "resort",
                description: "",
                availability: "available",
                status: "draft",
            }
            setSelectedRoom(null)
            setFormData(newRoom)
            setSelectedAmenities([])
            setSelectedFeatures([])
            setUploadedImages([])
        }
        setIsEditing(true)
    }

    const handleFileUpload = (images: File[]) => {
        setFiles(images);
        editRoomForm.setValue("images", files)
        console.log(files);
    };


    const saveRoom = (data: EditRoomData) => {

        if (selectedRoom) {
            setRooms(rooms.map((r) => (r.id === selectedRoom.id ? roomData : r)))
        } else {
            setRooms([...rooms, data])
        }

        setIsEditing(false)
        setSelectedRoom(null)
    }

    const deleteRoom = (roomId: string) => {
        setRooms(rooms.filter((r) => r.id !== roomId))
    }

    const duplicateRoom = (room: Room) => {
        const duplicatedRoom: Room = {
            ...room,
            id: `room-${Date.now()}`,
            name: `${room.name} (Copy)`,
            status: "draft",
            createdAt: new Date().toISOString().split("T")[0],
            updatedAt: new Date().toISOString().split("T")[0],
        }
        setRooms([...rooms, duplicatedRoom])
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            // Simulate image upload - in real app, upload to cloud storage
            const newImages = Array.from(files).map(
                (file) => `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(file.name)}`,
            )
            setUploadedImages([...uploadedImages, ...newImages])
        }
    };

    const removeImage = (index: number) => {
        setUploadedImages(uploadedImages.filter((_, i) => i !== index))
    }

    if (isEditing) {
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
                                <Button variant="outline" onClick={() => setIsEditing(false)}>
                                    <X className="h-4 w-4 mr-2" />
                                    Cancel
                                </Button>
                                <Button>
                                    <Save className="h-4 w-4 mr-2" />
                                    Save Room
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                <FileUpload onChange={handleFileUpload} />
                                            </div>

                                            {uploadedImages.length > 0 && (
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {uploadedImages.map((image, index) => (
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
                                        <div className="flex items-center justify-between">


                                        </div>
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
                                            {uploadedImages[0] && (
                                                <Image
                                                    src={uploadedImages[0] || "/placeholder.svg"}
                                                    alt="Room preview"
                                                    width={500}
                                                    height={500}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                            )}
                                            <div>
                                                <h3 className="font-semibold">{formData.name || "Room Name"}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                    {formData.description || "Room description will appear here..."}
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="text-lg font-bold text-blue-600">${formData.price || 0}/night</div>
                                                <Badge
                                                    className={
                                                        formData.status === "active"
                                                            ? "bg-green-500"
                                                            : formData.status === "draft"
                                                                ? "bg-yellow-500"
                                                                : "bg-gray-500"
                                                    }
                                                >
                                                    {formData.status || "draft"}
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
                                            <p className="text-3xl font-bold text-yellow-600">{stats.averageRating}★</p>
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
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Updated {room.updatedAt}</p>
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
                                                            <span className="text-sm">{room.rating}</span>
                                                            <span className="text-sm text-gray-500 ml-1">({room.reviewCount})</span>
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
                                                                <Eye className="h-4 w-4" />
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
