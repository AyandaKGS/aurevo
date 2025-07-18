"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
    Star,
    Bed,
    Mountain,
    ChevronRight,
    Users,
    Maximize,
    Eye,
    Heart,
    Filter,
    Search,
    ArrowLeft,
    Grid3X3,
    List,
} from "lucide-react"
import { hotelBookingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import Image from "next/image"

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
}

const roomsData: Room[] = [
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
            "https://images.unsplash.com/photo-1601586404677-a2e1fc310bdf?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Bedroom",
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Bathroom",
            "/placeholder.svg?height=400&width=600&text=Ocean+Suite+Balcony",
        ],
        amenities: ["Ocean View", "Private Balcony", "Marble Bathroom", "Mini Bar", "Room Service", "Concierge"],
        features: ["King Bed", "Living Area", "Work Desk", "Safe", "Robes & Slippers", "Premium Toiletries"],
        description:
            "Experience luxury with breathtaking ocean views from your private balcony. This spacious suite features elegant furnishings, marble bathroom, and premium amenities.",
        availability: "available",
        rating: 4.9,
        reviewCount: 127,
        isPopular: true,
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
            "https://images.unsplash.com/photo-1721222204128-3f8262e14f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Garden+Villa+Patio",
            "/placeholder.svg?height=400&width=600&text=Garden+Villa+Interior",
        ],
        amenities: ["Garden View", "Private Patio", "Rainfall Shower", "Coffee Machine", "Free WiFi"],
        features: ["Queen Bed", "Sitting Area", "Kitchenette", "Garden Access", "Outdoor Furniture"],
        description:
            "Nestled in our lush tropical gardens, this villa offers tranquility and privacy with direct garden access and a charming private patio.",
        availability: "limited",
        rating: 4.7,
        reviewCount: 89,
        isNewlyRenovated: true,
    },
    {
        id: "presidential-suite",
        name: "Presidential Suite",
        category: "suite",
        price: 799,
        size: 1200,
        maxGuests: 6,
        bedType: "2 Kings",
        view: "Panoramic Ocean",
        images: [
            "https://images.unsplash.com/photo-1664780476492-fbb9fd277ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Presidential+Suite+Master",
            "/placeholder.svg?height=400&width=600&text=Presidential+Suite+Dining",
            "/placeholder.svg?height=400&width=600&text=Presidential+Suite+Terrace",
        ],
        amenities: ["Panoramic Views", "Private Terrace", "Jacuzzi", "Butler Service", "Premium Bar", "Dining Area"],
        features: ["2 Bedrooms", "Living Room", "Dining Room", "2 Bathrooms", "Walk-in Closet", "Entertainment System"],
        description:
            "The ultimate luxury experience with panoramic ocean views, private terrace with jacuzzi, and personalized butler service.",
        availability: "available",
        rating: 5.0,
        reviewCount: 45,
        isPopular: true,
    },
    {
        id: "standard-deluxe",
        name: "Deluxe Room",
        category: "standard",
        price: 199,
        size: 400,
        maxGuests: 2,
        bedType: "Queen",
        view: "Resort",
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Deluxe+Room+Bathroom",
        ],
        amenities: ["Resort View", "Modern Bathroom", "Work Desk", "Free WiFi", "Daily Housekeeping"],
        features: ["Queen Bed", "Seating Area", "Flat Screen TV", "Air Conditioning", "In-room Safe"],
        description: "Comfortable and elegantly appointed room with modern amenities and beautiful resort views.",
        availability: "available",
        rating: 4.5,
        reviewCount: 203,
    },
    {
        id: "family-suite",
        name: "Family Suite",
        category: "family",
        price: 449,
        size: 800,
        maxGuests: 6,
        bedType: "King + 2 Twins",
        view: "Pool & Garden",
        images: [
            "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Family+Suite+Kids",
            "/placeholder.svg?height=400&width=600&text=Family+Suite+Living",
        ],
        amenities: ["Pool View", "Connecting Rooms", "Kids Area", "Mini Fridge", "Game Console", "Baby Amenities"],
        features: ["Separate Kids Room", "Living Area", "2 Bathrooms", "Balcony", "Family Entertainment"],
        description: "Perfect for families with separate kids area, pool views, and family-friendly amenities throughout.",
        availability: "limited",
        rating: 4.8,
        reviewCount: 156,
        isPopular: true,
    },
    {
        id: "honeymoon-suite",
        name: "Honeymoon Suite",
        category: "romantic",
        price: 549,
        size: 600,
        maxGuests: 2,
        bedType: "King",
        view: "Sunset Ocean",
        images: [
            "https://images.unsplash.com/photo-1571456803038-80efbf5c9d6b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Honeymoon+Suite+Bathroom",
            "/placeholder.svg?height=400&width=600&text=Honeymoon+Suite+Balcony",
        ],
        amenities: [
            "Sunset Views",
            "Private Jacuzzi",
            "Champagne Service",
            "Rose Petals",
            "Couples Massage",
            "Late Checkout",
        ],
        features: ["King Bed", "Romantic Decor", "Jacuzzi Tub", "Private Balcony", "Mood Lighting"],
        description:
            "Romance awaits in this intimate suite designed for couples, featuring sunset ocean views and luxurious amenities.",
        availability: "available",
        rating: 4.9,
        reviewCount: 78,
    },
    {
        id: "penthouse-villa",
        name: "Penthouse Villa",
        category: "villa",
        price: 999,
        size: 1500,
        maxGuests: 8,
        bedType: "3 Kings",
        view: "360° Panoramic",
        images: [
            "https://images.unsplash.com/photo-1732370123320-a907db9ab0e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Penthouse+Villa+Living",
            "/placeholder.svg?height=400&width=600&text=Penthouse+Villa+Kitchen",
            "/placeholder.svg?height=400&width=600&text=Penthouse+Villa+Rooftop",
        ],
        amenities: ["360° Views", "Private Pool", "Full Kitchen", "Rooftop Terrace", "Personal Chef", "Concierge Service"],
        features: ["3 Bedrooms", "Full Kitchen", "Living Room", "Dining Room", "3 Bathrooms", "Private Pool"],
        description:
            "The ultimate luxury villa experience with 360° panoramic views, private pool, and exclusive amenities.",
        availability: "limited",
        rating: 5.0,
        reviewCount: 23,
        isNewlyRenovated: true,
    },
    {
        id: "accessible-suite",
        name: "Accessible Deluxe Suite",
        category: "accessible",
        price: 279,
        size: 550,
        maxGuests: 3,
        bedType: "King",
        view: "Garden",
        images: [
            "https://images.unsplash.com/photo-1702411200201-3061d0eea802?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "/placeholder.svg?height=400&width=600&text=Accessible+Suite+Bathroom",
        ],
        amenities: [
            "Wheelchair Accessible",
            "Roll-in Shower",
            "Grab Bars",
            "Lowered Fixtures",
            "Visual Alerts",
            "TTY Phone",
        ],
        features: ["Accessible Design", "Wide Doorways", "Accessible Bathroom", "Emergency Features", "Comfort Height Bed"],
        description: "Thoughtfully designed accessible suite with full ADA compliance and luxury amenities for all guests.",
        availability: "available",
        rating: 4.6,
        reviewCount: 67,
    },
]

interface EnhancedSearchProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    rooms: Room[]
    onRoomSelect: (room: Room) => void
}

const EnhancedSearch = ({ searchQuery, setSearchQuery, rooms, onRoomSelect }: EnhancedSearchProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [suggestions, setSuggestions] = useState<Room[]>([])
    const searchRef = useRef<HTMLDivElement>(null)

    const popularSearches = [
        "Ocean View",
        "Suite",
        "Family Room",
        "Honeymoon",
        "Villa",
        "Accessible",
        "Luxury",
        "Balcony",
    ]

    const recentSearches = ["Presidential Suite", "Garden Villa", "Ocean View"]

    useEffect(() => {
        if (searchQuery.length > 0) {
            const filtered = rooms
                .filter(
                    (room) =>
                        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        room.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        room.amenities.some((amenity) => amenity.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        room.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        room.view.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .slice(0, 5)
            setSuggestions(filtered)
            setIsOpen(true)
        } else {
            setSuggestions([])
            setIsOpen(false)
        }
    }, [searchQuery, rooms])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSearchSelect = (room: Room) => {
        setSearchQuery(room.name)
        setIsOpen(false)
        onRoomSelect(room)
    }

    const handleQuickSearch = (term: string) => {
        setSearchQuery(term)
        setIsOpen(false)
    }

    const clearSearch = () => {
        setSearchQuery("")
        setIsOpen(false)
    }

    return (
        <div ref={searchRef} className="relative">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    placeholder="Search rooms, amenities, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    className="pl-10 pr-10 w-[300px] sm:w-80 md:w-[500px]"
                />
                {searchQuery && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearSearch}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
                    >
                        ×
                    </Button>
                )}
            </div>

            {/* Search Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {/* Search Results */}
                    {suggestions.length > 0 && (
                        <div className="p-2">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">
                                Rooms ({suggestions.length})
                            </div>
                            {suggestions.map((room) => (
                                <button
                                    key={room.id}
                                    onClick={() => handleSearchSelect(room)}
                                    className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md flex items-center space-x-3"
                                >
                                    <img
                                        src={room.images[0] || "/placeholder.svg"}
                                        alt={room.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-gray-900 dark:text-white truncate">{room.name}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                                            <span>${room.price}/night</span>
                                            <span>•</span>
                                            <span>{room.size} sq ft</span>
                                            <span>•</span>
                                            <span className="flex items-center">
                                                <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                                                {room.rating}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-400 truncate">{room.amenities.slice(0, 3).join(" • ")}</div>
                                    </div>
                                    <div
                                        className={`px-2 py-1 rounded text-xs font-medium ${room.availability === "available"
                                            ? "bg-green-100 text-green-800"
                                            : room.availability === "limited"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`}
                                    >
                                        {room.availability}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* No Results */}
                    {searchQuery && suggestions.length === 0 && (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <div className="text-sm">No rooms found for "{searchQuery}"</div>
                            <div className="text-xs mt-1">Try searching for amenities, room types, or features</div>
                        </div>
                    )}

                    {/* Popular Searches */}
                    {!searchQuery && (
                        <div className="p-2">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">
                                Popular Searches
                            </div>
                            <div className="grid grid-cols-2 gap-1 px-3">
                                {popularSearches.map((term) => (
                                    <button
                                        key={term}
                                        onClick={() => handleQuickSearch(term)}
                                        className="text-left px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded flex items-center"
                                    >
                                        <Search className="h-3 w-3 mr-2 text-gray-400" />
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recent Searches */}
                    {!searchQuery && recentSearches.length > 0 && (
                        <div className="p-2 border-t border-gray-100 dark:border-gray-700">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">
                                Recent Searches
                            </div>
                            {recentSearches.map((term) => (
                                <button
                                    key={term}
                                    onClick={() => handleQuickSearch(term)}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded flex items-center"
                                >
                                    <div className="h-3 w-3 mr-2 text-gray-400">⏱</div>
                                    {term}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Quick Actions */}
                    {!searchQuery && (
                        <div className="p-2 border-t border-gray-100 dark:border-gray-700">
                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">
                                Quick Actions
                            </div>
                            <div className="space-y-1">
                                <button
                                    onClick={() => handleQuickSearch("available")}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded flex items-center"
                                >
                                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                                    Show Available Rooms
                                </button>
                                <button
                                    onClick={() => handleQuickSearch("suite")}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded flex items-center"
                                >
                                    <Star className="h-3 w-3 mr-3 text-yellow-400" />
                                    Luxury Suites Only
                                </button>
                                <button
                                    onClick={() => handleQuickSearch("ocean view")}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded flex items-center"
                                >
                                    <Eye className="h-3 w-3 mr-3 text-blue-400" />
                                    Ocean View Rooms
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default function RoomsPage() {
    const [activeLoader, setActiveLoader] = useState<string | null>(null)
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortBy, setSortBy] = useState("price-low")
    const [filterCategory, setFilterCategory] = useState("all")
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [searchQuery, setSearchQuery] = useState("")
    const [showFilters, setShowFilters] = useState(false)

    const handleBooking = (roomId: string) => {
        setActiveLoader("booking")
        setTimeout(() => {
            setActiveLoader(null)
        }, 10000)
    }

    const filteredAndSortedRooms = roomsData
        .filter((room) => {
            if (filterCategory !== "all" && room.category !== filterCategory) return false
            if (room.price < priceRange[0] || room.price > priceRange[1]) return false
            if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
            return true
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price
                case "price-high":
                    return b.price - a.price
                case "size":
                    return b.size - a.size
                case "rating":
                    return b.rating - a.rating
                case "popular":
                    return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
                default:
                    return 0
            }
        })

    const categories = [
        { value: "all", label: "All Rooms", count: roomsData.length },
        { value: "suite", label: "Suites", count: roomsData.filter((r) => r.category === "suite").length },
        { value: "villa", label: "Villas", count: roomsData.filter((r) => r.category === "villa").length },
        { value: "family", label: "Family", count: roomsData.filter((r) => r.category === "family").length },
        { value: "romantic", label: "Romantic", count: roomsData.filter((r) => r.category === "romantic").length },
        { value: "standard", label: "Standard", count: roomsData.filter((r) => r.category === "standard").length },
        { value: "accessible", label: "Accessible", count: roomsData.filter((r) => r.category === "accessible").length },
    ]

    const RoomCard = ({ room }: { room: Room }) => (
        <Card className="w-[300px] sm:w-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
                <Image
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {room.isPopular && <Badge className="bg-red-500">Popular</Badge>}
                    {room.isNewlyRenovated && <Badge className="bg-green-500">Newly Renovated</Badge>}
                    <Badge
                        className={`${room.availability === "available"
                            ? "bg-green-500"
                            : room.availability === "limited"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                            }`}
                    >
                        {room.availability === "available" ? "Available" : room.availability === "limited" ? "Limited" : "Booked"}
                    </Badge>
                </div>
                <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                <div className="absolute bottom-4 right-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white"
                        onClick={() => setSelectedRoom(room)}
                    >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                    </Button>
                </div>
            </div>

            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Maximize className="h-4 w-4" />
                            {room.size} sq ft
                            <Users className="h-4 w-4 ml-2" />
                            Up to {room.maxGuests} guests
                        </div>
                    </div>
                    <div className="text-right">
                        {room.originalPrice && <div className="text-sm text-gray-500 line-through">${room.originalPrice}</div>}
                        <div className="text-2xl font-bold text-blue-600">${room.price}</div>
                        <div className="text-sm text-gray-500">per night</div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(room.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        {room.rating} ({room.reviewCount} reviews)
                    </span>
                </div>

                <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Key Features:</div>
                    <div className="grid grid-cols-2 gap-1">
                        {room.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                                <ChevronRight className="h-3 w-3 mr-1" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 mb-4">
                    <Button
                        className="flex-1"
                        onClick={() => handleBooking(room.id)}
                        disabled={room.availability === "booked" || activeLoader === "booking"}
                    >
                        {activeLoader === "booking" ? "Processing..." : "Book Now"}
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedRoom(room)}>
                        Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    )

    const RoomListItem = ({ room }: { room: Room }) => (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex">
                <div className="relative w-80 h-48">
                    <Image
                        src={room.images[0] || "/placeholder.svg"}
                        alt={room.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                        {room.isPopular && <Badge className="bg-red-500 text-xs">Popular</Badge>}
                        {room.isNewlyRenovated && <Badge className="bg-green-500 text-xs">New</Badge>}
                    </div>
                </div>
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                    <Maximize className="h-4 w-4" />
                                    {room.size} sq ft
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {room.maxGuests} guests
                                </span>
                                <span className="flex items-center gap-1">
                                    <Bed className="h-4 w-4" />
                                    {room.bedType}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(room.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                    {room.rating} ({room.reviewCount} reviews)
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                            {room.originalPrice && <div className="text-sm text-gray-500 line-through">${room.originalPrice}</div>}
                            <div className="text-2xl font-bold text-blue-600">${room.price}</div>
                            <div className="text-sm text-gray-500">per night</div>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                                {amenity}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={() => handleBooking(room.id)}
                            disabled={room.availability === "booked" || activeLoader === "booking"}
                        >
                            {activeLoader === "booking" ? "Processing..." : "Book Now"}
                        </Button>
                        <Button variant="outline" onClick={() => setSelectedRoom(room)}>
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Accommodations</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                        Discover the perfect room for your stay from our collection of luxury accommodations
                    </p>
                    <div className="w-fit mx-auto mb-5">
                        <EnhancedSearch
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            rooms={roomsData}
                            onRoomSelect={setSelectedRoom}
                        />
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-blue-600">{roomsData.length}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Total Rooms</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-green-600">
                                {roomsData.filter((r) => r.availability === "available").length}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Available Now</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-yellow-600">${Math.min(...roomsData.map((r) => r.price))}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Starting From</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-purple-600">
                                {(roomsData.reduce((acc, r) => acc + r.rating, 0) / roomsData.length).toFixed(1)}★
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className={`w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Filter Rooms</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Category Filter */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Room Category</Label>
                                    <Tabs value={filterCategory} onValueChange={setFilterCategory} className="w-full">
                                        <TabsList className="grid grid-cols-2 gap-1 h-auto p-1">
                                            {categories.slice(0, 4).map((category) => (
                                                <TabsTrigger
                                                    key={category.value}
                                                    value={category.value}
                                                    className="text-xs py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                                >
                                                    {category.label} ({category.count})
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>
                                    </Tabs>
                                    <div className="mt-2 space-y-1">
                                        {categories.slice(4).map((category) => (
                                            <Button
                                                key={category.value}
                                                variant={filterCategory === category.value ? "default" : "ghost"}
                                                size="sm"
                                                onClick={() => setFilterCategory(category.value)}
                                                className="w-full justify-start text-xs"
                                            >
                                                {category.label} ({category.count})
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">
                                        Price Range: ${priceRange[0]} - ${priceRange[1]}
                                    </Label>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={1000}
                                        min={0}
                                        step={50}
                                        className="w-full"
                                    />
                                </div>

                                {/* Quick Filters */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Quick Filters</Label>
                                    <div className="space-y-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setFilterCategory("suite")}
                                            className="w-full justify-start"
                                        >
                                            <Star className="h-4 w-4 mr-2" />
                                            Luxury Suites
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setFilterCategory("family")}
                                            className="w-full justify-start"
                                        >
                                            <Users className="h-4 w-4 mr-2" />
                                            Family Friendly
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setFilterCategory("romantic")}
                                            className="w-full justify-start"
                                        >
                                            <Heart className="h-4 w-4 mr-2" />
                                            Romantic
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Controls */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">
                                    Showing {filteredAndSortedRooms.length} of {roomsData.length} rooms
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="w-48">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                                        <SelectItem value="size">Size: Largest First</SelectItem>
                                        <SelectItem value="rating">Highest Rated</SelectItem>
                                        <SelectItem value="popular">Most Popular</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex border rounded-lg">
                                    <Button
                                        variant={viewMode === "grid" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <Grid3X3 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant={viewMode === "list" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setViewMode("list")}
                                        className="hidden sm:block"
                                    >
                                        <List className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Rooms Grid/List */}
                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredAndSortedRooms.map((room) => (
                                    <RoomCard key={room.id} room={room} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {filteredAndSortedRooms.map((room) => (
                                    <RoomListItem key={room.id} room={room} />
                                ))}
                            </div>
                        )}

                        {filteredAndSortedRooms.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <Search className="h-16 w-16 mx-auto" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No rooms found</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your filters or search criteria</p>
                                <Button
                                    onClick={() => {
                                        setFilterCategory("all")
                                        setPriceRange([0, 1000])
                                        setSearchQuery("")
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Room Details Modal */}
            {selectedRoom && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{selectedRoom.name}</h2>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <Maximize className="h-4 w-4" />
                                            {selectedRoom.size} sq ft
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            Up to {selectedRoom.maxGuests} guests
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            {selectedRoom.bedType}
                                        </span>
                                    </div>
                                </div>
                                <Button variant="ghost" onClick={() => setSelectedRoom(null)}>
                                    ×
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <img
                                        src={selectedRoom.images[0] || "/placeholder.svg"}
                                        alt={selectedRoom.name}
                                        className="w-full h-64 object-cover rounded-lg mb-4"
                                    />
                                    <div className="grid grid-cols-3 gap-2">
                                        {selectedRoom.images.slice(1, 4).map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image || "/placeholder.svg"}
                                                alt=""
                                                className="w-full h-20 object-cover rounded"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">${selectedRoom.price}</div>
                                        <div className="text-gray-600">per night</div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{selectedRoom.description}</p>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Amenities</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedRoom.amenities.map((amenity, idx) => (
                                                    <Badge key={idx} variant="secondary">
                                                        {amenity}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Features</h4>
                                            <div className="grid grid-cols-2 gap-1">
                                                {selectedRoom.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-gray-600">
                                                        <ChevronRight className="h-3 w-3 mr-1" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    className="flex-1"
                                    onClick={() => {
                                        handleBooking(selectedRoom.id)
                                        setSelectedRoom(null)
                                    }}
                                    disabled={selectedRoom.availability === "booked"}
                                >
                                    Book This Room
                                </Button>
                                <Button variant="outline" onClick={() => setSelectedRoom(null)}>
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Multi-Step Loader */}
            <MultiStepLoader
                loadingStates={hotelBookingStates}
                loading={activeLoader === "booking"}
                duration={2000}
                loop={false}
            />
        </div>
    )
}
