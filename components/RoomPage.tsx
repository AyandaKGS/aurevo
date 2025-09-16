"use client"

import BookingDialog from "@/components/BookingDialogue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { editRoomsLoadingStates, hotelBookingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoomWithReviews } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { format } from "date-fns"
import {
    Bed,
    CalendarIcon,
    ChevronRight,
    Eye,
    Grid3X3,
    Heart,
    List,
    Loader2,
    Maximize,
    Minus,
    Plus,
    Search,
    Star,
    Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Input } from "./ui/input"
import Footer from "./Footer"
import { review } from "@/generated"

interface EnhancedSearchProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    rooms: RoomWithReviews[]
    onRoomSelect: (room: RoomWithReviews) => void
};

const avgRating = (item: RoomWithReviews) => {
    const reviews = item.review || [];
    if (reviews.length === 0) return 0;
    return reviews.reduce((acc: any, review: review) => acc + review.rating, 0) / reviews.length;
};

const EnhancedSearch = ({ searchQuery, setSearchQuery, rooms, onRoomSelect }: EnhancedSearchProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [suggestions, setSuggestions] = useState<RoomWithReviews[]>([])
    const searchRef = useRef<HTMLDivElement>(null);

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
                        room.amenities.some((amenity: string) => amenity.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        room.features.some((feature: string) => feature.toLowerCase().includes(searchQuery.toLowerCase())) ||
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

    const handleSearchSelect = (room: RoomWithReviews) => {
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
                                    <Image
                                        src={room.images[0] || "/placeholder.svg"}
                                        alt={room.name}
                                        width={500}
                                        height={500}
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
                                                {avgRating(room).toFixed(1)}
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
                            <div className="text-sm">No rooms found for &quot;{searchQuery}&quot;</div>
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
};

export default function RoomsComp() {
    const searchParams = useSearchParams();
    const [activeLoader, setActiveLoader] = useState<string | null>(null)
    const [selectedRoom, setSelectedRoom] = useState<RoomWithReviews | null>(null)
    const [rooms, setRooms] = useState<RoomWithReviews[]>([])
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortBy, setSortBy] = useState("price-low")
    const [filterCategory, setFilterCategory] = useState("all")
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [searchQuery, setSearchQuery] = useState("")
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfGuests, setNumberOfGuests] = useState(2);
    const [page, setPage] = useState(1);

    const observerRef = useRef(null);

    const getRooms = useInfiniteQuery({
        queryKey: ["rooms"],
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await axios.get("/api/get-rooms", {
                params: {
                    page: pageParam,
                },
            });

            setRooms(rooms.concat(data));
            setPage(pageParam);

            return {
                items: data,
                nextPage: pageParam + 1,
                hasNextPage: data.length === 12
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextPage : undefined
        }
    });

    const getStats = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const { data } = await axios.get("/api/get-stats", {
                params: {
                    from: "rooms"
                }
            });

            return data;
        },
    });


    const handleBooking = (roomId: string) => {
        console.log("Room Id", roomId)
        setActiveLoader("booking")
        setTimeout(() => {
            setActiveLoader(null)
        }, 10000)
    }

    const calculateMinimumRooms = (totalGuests: number, roomCapacity: number) => {
        return Math.ceil(totalGuests / roomCapacity)
    };

    const categories = [
        { value: "all", label: "All Rooms", count: rooms.length },
        { value: "apartment", label: "Apartments", count: rooms.filter((room) => room.category === "apartment").length },
        { value: "suite", label: "Suites", count: rooms.filter((room) => room.category === "suite").length },
        { value: "villa", label: "Villas", count: rooms.filter((room) => room.category === "villa").length },
        { value: "family", label: "Family", count: rooms.filter((room) => room.category === "family").length },
        { value: "romantic", label: "Romantic", count: rooms.filter((room) => room.category === "romantic").length },
        { value: "standard", label: "Standard", count: rooms.filter((room) => room.category === "standard").length },
        { value: "accessible", label: "Accessible", count: rooms.filter((room) => room.category === "accessible").length },
    ]

    // Updated filtering logic to include availability filters
    const filteredAndSortedRooms = rooms
        .filter((room) => {
            if (filterCategory !== "all" && room.category !== filterCategory) return false
            if (room.price < priceRange[0] || room.price > priceRange[1]) return false
            if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

            const minRoomsNeeded = calculateMinimumRooms(numberOfGuests, room.maxGuests)

            // Only show rooms if we can book enough of this type to accommodate all guests
            // and if the selected number of rooms is at least the minimum needed
            if (numberOfRooms < minRoomsNeeded) return false

            // For date availability, we'll assume rooms are available unless specifically booked
            // In a real app, this would check against a booking database
            if (checkInDate && checkOutDate) {
                // Simple availability check - in production this would query actual bookings
                if (room.availability === "booked") return false
            }

            return true
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price
                case "price-high":
                    return b.price - a.price
                case "size":
                    return (b.size || 0) - (a.size || 0)
                case "rating":
                    return avgRating(b) - avgRating(a)
                case "popular":
                    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
                default:
                    return 0
            }
        });

    const RoomCard = ({ room }: { room: RoomWithReviews }) => (
        <Card className="w-[300px] sm:w-full overflow-hidden hover:shadow-xl transition-all duration-300 group pt-0">
            <div className="relative">
                <Image
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {room.popular && <Badge className="bg-red-500">Popular</Badge>}
                    {room.newlyRenovated && <Badge className="bg-green-500">Newly Renovated</Badge>}
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
                    <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white text-black">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                <div className="absolute bottom-4 right-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white text-black"
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
                                className={`h-4 w-4 ${i < Math.floor(avgRating(room)) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        {avgRating(room).toFixed(1)} ({room.review.length} reviews)
                    </span>
                </div>
                <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Key Features:</div>
                    <div className="grid grid-cols-2 gap-1">
                        {room.features.slice(0, 4).map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                                <ChevronRight className="h-3 w-3 mr-1" />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2 mb-4">
                    <BookingDialog
                        room={room}
                        featured={false}
                        page={page}
                    >
                        <Button className="flex-1" disabled={room.availability === "booked"}>
                            {room.availability === "booked" ? "Booked" : "Book This Room"}
                        </Button>
                    </BookingDialog>
                    <Button variant="outline">
                        <Link href={`/rooms/${room.id}?page=${page}`} className="flex flex-row items-center">
                            Details
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );


    const RoomListItem = ({ room }: { room: RoomWithReviews }) => (
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
                        {room.popular && <Badge className="bg-red-500 text-xs">Popular</Badge>}
                        {room.newlyRenovated && <Badge className="bg-green-500 text-xs">New</Badge>}
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
                                            className={`h-4 w-4 ${i < Math.floor(avgRating(room)) ? "text-yellow-400 fill-current" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                    {avgRating(room).toFixed(1)} ({room.review.length} reviews)
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
                        {room.amenities.slice(0, 6).map((amenity: string, index: number) => (
                            <Badge key={`room-list-item-${index}`} variant="secondary" className="text-xs">
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
                        <Button variant="outline">
                            <Link href={`/rooms/${room.id}`} className="flex flex-row items-center">
                                View Details
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && getRooms.hasNextPage) {
                getRooms.fetchNextPage();
            }
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [observerRef, getRooms]);

    useEffect(() => {
        const checkIn = searchParams.get("checkIn")
        const checkOut = searchParams.get("checkOut")
        const guests = searchParams.get("guests")
        const rooms = searchParams.get("rooms")

        if (checkIn) {
            setCheckInDate(new Date(checkIn))
        }
        if (checkOut) {
            setCheckOutDate(new Date(checkOut))
        }
        if (guests) {
            setNumberOfGuests(Number.parseInt(guests))
        }
        if (rooms) {
            setNumberOfRooms(Number.parseInt(rooms))
        }
    }, [searchParams])

    if (getRooms.isLoading || getStats.isLoading) return (
        <MultiStepLoader
            loadingStates={editRoomsLoadingStates}
            loading={getRooms.isLoading || getStats.isLoading}
            duration={2000}
        />
    );

    const { totalRooms, totalAvailable, startingFrom, averageRating } = getStats.data



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
                            rooms={rooms}
                            onRoomSelect={setSelectedRoom}
                        />
                    </div>
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-blue-600">{totalRooms}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Total Rooms</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-green-600">{totalAvailable}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Available Now</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-yellow-600">${startingFrom}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Starting From</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-purple-600">{averageRating}★</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <div className={`w-80 space-y-6 hidden lg:block`}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Filter Rooms</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Added availability filter section */}
                                <div>
                                    <Label className="text-sm font-medium mb-3 block">Check Availability</Label>

                                    {/* Date Selection */}
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <div>
                                            <Label className="text-xs text-gray-500 mb-1 block">Check-in</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !checkInDate && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkInDate ? format(checkInDate, "MMM dd") : "Select"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkInDate}
                                                        onSelect={setCheckInDate}
                                                        disabled={(date) => date < new Date()}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-gray-500 mb-1 block">Check-out</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !checkOutDate && "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {checkOutDate ? format(checkOutDate, "MMM dd") : "Select"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={checkOutDate}
                                                        onSelect={setCheckOutDate}
                                                        disabled={(date) => date < (checkInDate || new Date())}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>

                                    {/* Rooms and Guests Selection */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <Label className="text-xs text-gray-500 mb-1 block">Rooms</Label>
                                            <div className="flex items-center border rounded-md">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setNumberOfRooms(Math.max(1, numberOfRooms - 1))}
                                                    disabled={numberOfRooms <= 1}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="flex-1 text-center text-sm">{numberOfRooms}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setNumberOfRooms(Math.min(5, numberOfRooms + 1))}
                                                    disabled={numberOfRooms >= 5}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-xs text-gray-500 mb-1 block">Guests</Label>
                                            <div className="flex items-center border rounded-md">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setNumberOfGuests(Math.max(1, numberOfGuests - 1))}
                                                    disabled={numberOfGuests <= 1}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="flex-1 text-center text-sm">{numberOfGuests}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setNumberOfGuests(Math.min(10, numberOfGuests + 1))}
                                                    disabled={numberOfGuests >= 10}
                                                    className="h-8 w-8 p-0"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {numberOfGuests > 0 && (
                                        <div className="mt-2 p-2 bg-blue-50 rounded-md">
                                            <p className="text-xs text-blue-700">
                                                For {numberOfGuests} guests, you&apos;ll need at least {Math.ceil(numberOfGuests / 2)} room(s)
                                                (assuming 2 guests per room max)
                                            </p>
                                        </div>
                                    )}
                                </div>

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
                                    Showing {filteredAndSortedRooms.length} of {rooms.length} rooms
                                    {numberOfGuests > 2 && (
                                        <span className="text-blue-600 ml-2">
                                            (accommodating {numberOfGuests} guests in {numberOfRooms} room{numberOfRooms > 1 ? "s" : ""})
                                        </span>
                                    )}
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

                        {/* Rooms Grid */}
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
                        {getRooms.hasNextPage && (
                            <div ref={observerRef} style={{ height: 1 }} />
                        )}
                        {getRooms.isFetchingNextPage && (
                            <Loader2 size={35} className="mx-auto mt-7 animate-spin text-primary" />
                        )}


                        {/* Updated clear filters to include availability filters */}
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
                                        setCheckInDate(undefined)
                                        setCheckOutDate(undefined)
                                        setNumberOfRooms(1)
                                        setNumberOfGuests(2)
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
                                    <Image
                                        src={selectedRoom.images[0] || "/placeholder.svg"}
                                        alt={selectedRoom.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-64 object-cover rounded-lg mb-4"
                                    />
                                    <div className="grid grid-cols-3 gap-2">
                                        {selectedRoom.images.slice(1, 4).map((image: string) => (
                                            <Image
                                                key={`selected-room-${selectedRoom.id}-${image}`}
                                                src={image || "/placeholder.svg"}
                                                alt={`${selectedRoom.name}-cover-image`}
                                                width={500}
                                                height={500}
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
                                                {selectedRoom.amenities.map((amenity: string, index: number) => (
                                                    <Badge key={`selected-room-amenity-${index}`} variant="secondary">
                                                        {amenity}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Features</h4>
                                            <div className="grid grid-cols-2 gap-1">
                                                {selectedRoom.features.map((feature: string, index: number) => (
                                                    <div key={`selected-room-feature-${index}`} className="flex items-center text-sm text-gray-600">
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
                                <BookingDialog
                                    room={selectedRoom}
                                    featured={false}
                                    page={page}
                                >
                                    <Button className="flex-1" disabled={selectedRoom.availability === "booked"}>
                                        {selectedRoom.availability === "booked" ? "Booked" : "Book This Room"}
                                    </Button>
                                </BookingDialog>
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
            <Footer />
        </div>
    )
};