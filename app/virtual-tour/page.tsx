"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    RotateCcw,
    MapPin,
    Eye,
    Navigation,
    Home,
    Bed,
    Utensils,
    Waves,
    Mountain,
    ArrowLeft,
    Info,
    Bookmark,
    Share2,
    Phone,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Compass,
    Move3D,
} from "lucide-react"
import { hotelBookingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import Image from "next/image"

interface TourLocation {
    id: string
    name: string
    category: string
    description: string
    image: string
    panorama: string
    hotspots: Hotspot[]
    audioNarration?: string
    roomPrice?: number
    bookable?: boolean
    coordinates: { x: number; y: number }
}

interface Hotspot {
    id: string
    type: "navigation" | "info" | "booking" | "media"
    position: { x: number; y: number }
    title: string
    description?: string
    targetLocation?: string
    icon: string
    action?: () => void
}

const tourLocations: TourLocation[] = [
    {
        id: "lobby",
        name: "Grand Lobby",
        category: "public",
        description: "Welcome to our stunning grand lobby with soaring ceilings and elegant furnishings",
        image: "/placeholder.svg?height=300&width=400&text=Grand+Lobby",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Lobby+Panorama",
        coordinates: { x: 50, y: 30 },
        hotspots: [
            {
                id: "reception",
                type: "info",
                position: { x: 25, y: 60 },
                title: "Reception Desk",
                description: "24/7 concierge service available",
                icon: "info",
            },
            {
                id: "to-rooms",
                type: "navigation",
                position: { x: 75, y: 40 },
                title: "Guest Elevators",
                description: "Access to guest rooms",
                targetLocation: "ocean-suite",
                icon: "navigation",
            },
            {
                id: "restaurant-entrance",
                type: "navigation",
                position: { x: 60, y: 80 },
                title: "Restaurant",
                description: "Fine dining experience",
                targetLocation: "restaurant",
                icon: "navigation",
            },
        ],
    },
    {
        id: "ocean-suite",
        name: "Ocean View Suite",
        category: "room",
        description: "Luxurious suite with breathtaking ocean views and premium amenities",
        image: "/placeholder.svg?height=300&width=400&text=Ocean+Suite",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Ocean+Suite+Panorama",
        coordinates: { x: 80, y: 20 },
        roomPrice: 399,
        bookable: true,
        hotspots: [
            {
                id: "bedroom",
                type: "info",
                position: { x: 30, y: 50 },
                title: "Master Bedroom",
                description: "King-size bed with ocean views",
                icon: "bed",
            },
            {
                id: "balcony",
                type: "navigation",
                position: { x: 80, y: 30 },
                title: "Private Balcony",
                description: "Step outside for panoramic views",
                targetLocation: "balcony",
                icon: "navigation",
            },
            {
                id: "book-room",
                type: "booking",
                position: { x: 90, y: 90 },
                title: "Book This Suite",
                description: "Starting at $399/night",
                icon: "calendar",
            },
        ],
    },
    {
        id: "balcony",
        name: "Suite Balcony",
        category: "room",
        description: "Private balcony with stunning ocean views and outdoor seating",
        image: "/placeholder.svg?height=300&width=400&text=Suite+Balcony",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Balcony+Ocean+View",
        coordinates: { x: 85, y: 15 },
        hotspots: [
            {
                id: "ocean-view",
                type: "info",
                position: { x: 50, y: 30 },
                title: "Ocean Vista",
                description: "Unobstructed views of the Pacific Ocean",
                icon: "eye",
            },
            {
                id: "back-to-suite",
                type: "navigation",
                position: { x: 10, y: 80 },
                title: "Back to Suite",
                description: "Return to the bedroom",
                targetLocation: "ocean-suite",
                icon: "navigation",
            },
        ],
    },
    {
        id: "restaurant",
        name: "Oceanside Restaurant",
        category: "dining",
        description: "Award-winning fine dining with panoramic ocean views",
        image: "/placeholder.svg?height=300&width=400&text=Restaurant",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Restaurant+Panorama",
        coordinates: { x: 40, y: 60 },
        hotspots: [
            {
                id: "dining-area",
                type: "info",
                position: { x: 40, y: 50 },
                title: "Main Dining Room",
                description: "Elegant atmosphere with ocean views",
                icon: "utensils",
            },
            {
                id: "chef-table",
                type: "info",
                position: { x: 70, y: 40 },
                title: "Chef's Table",
                description: "Exclusive dining experience",
                icon: "info",
            },
            {
                id: "to-pool",
                type: "navigation",
                position: { x: 80, y: 70 },
                title: "Pool Deck",
                description: "Outdoor dining and pool area",
                targetLocation: "pool",
                icon: "navigation",
            },
        ],
    },
    {
        id: "pool",
        name: "Infinity Pool",
        category: "amenity",
        description: "Stunning infinity pool overlooking the ocean with poolside service",
        image: "/placeholder.svg?height=300&width=400&text=Infinity+Pool",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Pool+Panorama",
        coordinates: { x: 60, y: 80 },
        hotspots: [
            {
                id: "pool-bar",
                type: "info",
                position: { x: 20, y: 60 },
                title: "Pool Bar",
                description: "Tropical cocktails and light bites",
                icon: "utensils",
            },
            {
                id: "cabanas",
                type: "info",
                position: { x: 80, y: 50 },
                title: "Private Cabanas",
                description: "Exclusive poolside retreats",
                icon: "info",
            },
            {
                id: "to-spa",
                type: "navigation",
                position: { x: 90, y: 80 },
                title: "Spa Entrance",
                description: "Wellness and relaxation center",
                targetLocation: "spa",
                icon: "navigation",
            },
        ],
    },
    {
        id: "spa",
        name: "Serenity Spa",
        category: "amenity",
        description: "Tranquil spa sanctuary with treatment rooms and relaxation areas",
        image: "/placeholder.svg?height=300&width=400&text=Spa",
        panorama: "/placeholder.svg?height=600&width=1200&text=360°+Spa+Panorama",
        coordinates: { x: 90, y: 70 },
        hotspots: [
            {
                id: "treatment-rooms",
                type: "info",
                position: { x: 30, y: 40 },
                title: "Treatment Rooms",
                description: "Private spa treatment suites",
                icon: "info",
            },
            {
                id: "relaxation-area",
                type: "info",
                position: { x: 70, y: 60 },
                title: "Relaxation Lounge",
                description: "Peaceful meditation space",
                icon: "info",
            },
            {
                id: "back-to-lobby",
                type: "navigation",
                position: { x: 10, y: 90 },
                title: "Return to Lobby",
                description: "Main resort entrance",
                targetLocation: "lobby",
                icon: "navigation",
            },
        ],
    },
]

const tourCategories = [
    { id: "all", name: "Complete Tour", icon: Home, count: tourLocations.length },
    { id: "room", name: "Guest Rooms", icon: Bed, count: tourLocations.filter((l) => l.category === "room").length },
    { id: "dining", name: "Dining", icon: Utensils, count: tourLocations.filter((l) => l.category === "dining").length },
    {
        id: "amenity",
        name: "Amenities",
        icon: Waves,
        count: tourLocations.filter((l) => l.category === "amenity").length,
    },
    {
        id: "public",
        name: "Public Areas",
        icon: MapPin,
        count: tourLocations.filter((l) => l.category === "public").length,
    },
]

export default function VirtualTourPage() {
    const [currentLocation, setCurrentLocation] = useState<TourLocation>(tourLocations[0])
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState([75])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [showHotspots, setShowHotspots] = useState(true)
    const [showMiniMap, setShowMiniMap] = useState(true)
    const [activeLoader, setActiveLoader] = useState<string | null>(null)
    // const [tourProgress, setTourProgress] = useState(0)
    const [autoRotate, setAutoRotate] = useState(false)

    const tourRef = useRef<HTMLDivElement>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    const filteredLocations =
        selectedCategory === "all"
            ? tourLocations
            : tourLocations.filter((location) => location.category === selectedCategory)

    const currentLocationIndex = filteredLocations.findIndex((loc) => loc.id === currentLocation.id)

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play()
        } else if (audioRef.current) {
            audioRef.current.pause()
        }
    }, [isPlaying, currentLocation])

    const handleBooking = () => {
        setActiveLoader("booking")
        setTimeout(() => {
            setActiveLoader(null)
        }, 10000)
    }

    const navigateToLocation = (locationId: string) => {
        const location = tourLocations.find((loc) => loc.id === locationId)
        if (location) {
            setCurrentLocation(location)
            // setTourProgress((prev) => Math.min(prev + 1, tourLocations.length))
        }
    }

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            tourRef.current?.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
        setIsFullscreen(!isFullscreen)
    }

    const nextLocation = () => {
        const nextIndex = (currentLocationIndex + 1) % filteredLocations.length
        setCurrentLocation(filteredLocations[nextIndex])
    }

    const previousLocation = () => {
        const prevIndex = currentLocationIndex === 0 ? filteredLocations.length - 1 : currentLocationIndex - 1
        setCurrentLocation(filteredLocations[prevIndex])
    }

    const HotspotMarker = ({ hotspot }: { hotspot: Hotspot }) => {
        const getIcon = () => {
            switch (hotspot.icon) {
                case "navigation":
                    return <Navigation className="h-4 w-4" />
                case "info":
                    return <Info className="h-4 w-4" />
                case "calendar":
                    return <Calendar className="h-4 w-4" />
                case "bed":
                    return <Bed className="h-4 w-4" />
                case "utensils":
                    return <Utensils className="h-4 w-4" />
                case "eye":
                    return <Eye className="h-4 w-4" />
                default:
                    return <MapPin className="h-4 w-4" />
            }
        }

        const handleClick = () => {
            if (hotspot.type === "navigation" && hotspot.targetLocation) {
                navigateToLocation(hotspot.targetLocation)
            } else if (hotspot.type === "booking") {
                handleBooking()
            }
        }

        return (
            <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${hotspot.position.x}%`, top: `${hotspot.position.y}%` }}
                onClick={handleClick}
            >
                <div className="relative">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors animate-pulse">
                        {getIcon()}
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                            <div className="font-medium">{hotspot.title}</div>
                            {hotspot.description && <div className="text-xs opacity-75">{hotspot.description}</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MiniMap = () => (
        <div className="absolute bottom-4 right-4 w-48 h-32 bg-black/50 rounded-lg p-2">
            <div className="relative w-full h-full bg-gray-800 rounded">
                {tourLocations.map((location) => (
                    <div
                        key={location.id}
                        className={`absolute w-2 h-2 rounded-full cursor-pointer ${location.id === currentLocation.id ? "bg-blue-400" : "bg-gray-400"
                            }`}
                        style={{ left: `${location.coordinates.x}%`, top: `${location.coordinates.y}%` }}
                        onClick={() => setCurrentLocation(location)}
                        title={location.name}
                    />
                ))}
            </div>
            <div className="text-xs text-white mt-1 text-center">Resort Map</div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-black/50 backdrop-blur-sm text-white relative z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Rooms
                            </Button>
                            <div className="flex items-center space-x-2">
                                <Mountain className="h-6 w-6 text-blue-400" />
                                <span className="text-xl font-bold">Virtual Tour</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share Tour
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                <Bookmark className="h-4 w-4 mr-2" />
                                Save
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                <Phone className="h-4 w-4 mr-2" />
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex h-[calc(100vh-4rem)]">
                {/* Sidebar */}
                <div className="w-80 bg-gray-800 text-white overflow-y-auto">
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Virtual Tour</h2>

                        {/* Tour Categories */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-3 text-gray-300">Tour Categories</h3>
                            <div className="space-y-2">
                                {tourCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${selectedCategory === category.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <category.icon className="h-5 w-5" />
                                            <span>{category.name}</span>
                                        </div>
                                        <Badge variant="secondary" className="bg-gray-600 text-white">
                                            {category.count}
                                        </Badge>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Current Location Info */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-3 text-gray-300">Current Location</h3>
                            <Card className="bg-gray-700 border-gray-600">
                                <CardContent className="p-4">
                                    <Image
                                        src={currentLocation.image || "/placeholder.svg"}
                                        alt={currentLocation.name}
                                        width={1920}
                                        height={1080}
                                        className="w-full h-32 object-cover rounded mb-3"
                                    />
                                    <h4 className="font-semibold text-white mb-2">{currentLocation.name}</h4>
                                    <p className="text-sm text-gray-300 mb-3">{currentLocation.description}</p>
                                    {currentLocation.bookable && (
                                        <div className="flex items-center justify-between">
                                            <div className="text-lg font-bold text-blue-400">${currentLocation.roomPrice}/night</div>
                                            <Button size="sm" onClick={handleBooking} className="bg-blue-600 hover:bg-blue-700">
                                                Book Now
                                            </Button>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Location List */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium mb-3 text-gray-300">Locations ({filteredLocations.length})</h3>
                            <div className="space-y-2">
                                {filteredLocations.map((location) => (
                                    <button
                                        key={location.id}
                                        onClick={() => setCurrentLocation(location)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors ${location.id === currentLocation.id ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                src={location.image || "/placeholder.svg"}
                                                alt={location.name}
                                                width={1920}
                                                height={1080}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium truncate">{location.name}</div>
                                                <div className="text-sm text-gray-300 truncate">{location.description}</div>
                                                {location.bookable && <div className="text-sm text-blue-400">${location.roomPrice}/night</div>}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tour Controls */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Show Hotspots</span>
                                <button
                                    onClick={() => setShowHotspots(!showHotspots)}
                                    className={`w-12 h-6 rounded-full transition-colors ${showHotspots ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full transition-transform ${showHotspots ? "translate-x-6" : "translate-x-0.5"
                                            }`}
                                    />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Mini Map</span>
                                <button
                                    onClick={() => setShowMiniMap(!showMiniMap)}
                                    className={`w-12 h-6 rounded-full transition-colors ${showMiniMap ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full transition-transform ${showMiniMap ? "translate-x-6" : "translate-x-0.5"
                                            }`}
                                    />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">Auto Rotate</span>
                                <button
                                    onClick={() => setAutoRotate(!autoRotate)}
                                    className={`w-12 h-6 rounded-full transition-colors ${autoRotate ? "bg-blue-600" : "bg-gray-600"}`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full transition-transform ${autoRotate ? "translate-x-6" : "translate-x-0.5"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Tour View */}
                <div className="flex-1 relative" ref={tourRef}>
                    {/* 360° Panorama View */}
                    <div className="relative w-full h-full bg-black overflow-hidden">
                        <Image
                            src={currentLocation.panorama || "/placeholder.svg"}
                            alt={`360° view of ${currentLocation.name}`}
                            width={1920}
                            height={1080}
                            className={`w-full h-full object-cover ${autoRotate ? "animate-pulse" : ""}`}
                        />

                        {/* Hotspots */}
                        {showHotspots &&
                            currentLocation.hotspots.map((hotspot) => <HotspotMarker key={hotspot.id} hotspot={hotspot} />)}

                        {/* Mini Map */}
                        {showMiniMap && <MiniMap />}

                        {/* Tour Controls Overlay */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={previousLocation}
                                    className="text-white hover:bg-white/20"
                                    disabled={currentLocationIndex === 0}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="text-white hover:bg-white/20"
                                >
                                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="text-white hover:bg-white/20"
                                >
                                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                                </Button>

                                <div className="w-20">
                                    <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
                                </div>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setAutoRotate(!autoRotate)}
                                    className="text-white hover:bg-white/20"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </Button>

                                <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
                                    {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={nextLocation}
                                    className="text-white hover:bg-white/20"
                                    disabled={currentLocationIndex === filteredLocations.length - 1}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Location Info Overlay */}
                        <div className="absolute top-4 left-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
                                <h3 className="text-lg font-semibold mb-2">{currentLocation.name}</h3>
                                <p className="text-sm opacity-90 mb-3">{currentLocation.description}</p>
                                <div className="flex items-center space-x-4 text-xs">
                                    <span className="flex items-center">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {currentLocationIndex + 1} of {filteredLocations.length}
                                    </span>
                                    <span className="flex items-center">
                                        <Eye className="h-3 w-3 mr-1" />
                                        360° View
                                    </span>
                                    <span className="flex items-center">
                                        <Move3D className="h-3 w-3 mr-1" />
                                        Interactive
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Compass */}
                        <div className="absolute top-4 right-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                                <Compass className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-black/30">
                            <div
                                className="h-full bg-blue-600 transition-all duration-300"
                                style={{ width: `${(currentLocationIndex / filteredLocations.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Audio Element */}
                    {currentLocation.audioNarration && (
                        <audio ref={audioRef} src={currentLocation.audioNarration} muted={isMuted} />
                    )}
                </div>
            </div>

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
