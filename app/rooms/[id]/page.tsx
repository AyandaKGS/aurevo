"use client"

import BookingDialog from "@/components/BookingDialogue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { review } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { formatDate } from "date-fns"
import {
    ArrowLeft,
    Bed,
    ChevronLeft,
    ChevronRight,
    Coffee,
    Eye,
    Heart,
    MapPin,
    Maximize,
    Share2,
    Star,
    Users,
} from "lucide-react"
import Image from "next/image"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react";

export default function RoomDetailsPage() {
    return (
        <Suspense>
            <RoomDetailsComp />
        </Suspense>
    )
};

export function RoomDetailsComp() {
    const searchParams = useSearchParams();
    const params = useParams();
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getRoom = useQuery({
        queryKey: ["room", params?.id],
        queryFn: async () => {
            const { data } = await axios.get("/api/get-room", {
                params: {
                    id: params?.id
                },
            });

            return data;
        },
        enabled: !!params?.id
    });

    useEffect(() => {
        const page = searchParams.get("page");
        if (page) setPage(parseInt(page))
        setLoading(false);
    }, [searchParams]);

    if (getRoom.isLoading || loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading room details...</p>
                </div>
            </div>
        )
    }

    if (!getRoom.data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Room Not Found</h1>
                    <p className="text-gray-600 mb-6">The room you&apos;re looking for doesn&apos;t exist.</p>
                    <Button onClick={() => router.push("/rooms")}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Rooms
                    </Button>
                </div>
            </div>
        )
    }

    const room = getRoom.data;

    const avgRating =
        room.review.length > 0 ? room.review.reduce((acc: number, review: any) => acc + review.rating, 0) / room.review.length : 0

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" onClick={() => router.push("/rooms")}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Rooms
                        </Button>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="relative">
                            <div className="relative h-96 rounded-lg overflow-hidden">
                                <Image
                                    src={room.images[currentImageIndex] || "/placeholder.svg"}
                                    alt={`${room.name} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {room.images.length > 1 && (
                                    <>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
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
                                        {room.availability === "available"
                                            ? "Available"
                                            : room.availability === "limited"
                                                ? "Limited"
                                                : "Booked"}
                                    </Badge>
                                </div>
                            </div>

                            {room.images.length > 1 && (
                                <div className="flex gap-2 mt-4 overflow-x-auto">
                                    {room.images.map((image: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0 ${index === currentImageIndex ? "ring-2 ring-primary" : ""
                                                }`}
                                        >
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Room Info */}
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{room.name}</h1>
                                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Maximize className="h-4 w-4" />
                                            {room.size} sq ft
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            Up to {room.maxGuests} guests
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bed className="h-4 w-4" />
                                            {room.bedType}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {room.view} View
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(avgRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {avgRating.toFixed(1)} ({room.review.length} reviews)
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    {room.originalPrice && (
                                        <div className="text-lg text-gray-500 line-through">${room.originalPrice}</div>
                                    )}
                                    <div className="text-3xl font-bold text-primary">${room.price}</div>
                                    <div className="text-sm text-gray-500">per night</div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed">{room.description}</p>
                        </div>

                        {/* Features & Amenities */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Eye className="h-5 w-5" />
                                        Room Features
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        {room.features.map((feature: string, index: number) => (
                                            <div key={index} className="flex items-center text-sm text-gray-600">
                                                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Coffee className="h-5 w-5" />
                                        Amenities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {room.amenities.map((amenity: string, index: number) => (
                                            <Badge key={index} variant="secondary" className="text-xs">
                                                {amenity}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Reviews */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="h-5 w-5" />
                                    Guest Reviews ({room.review.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {room.review.map((review: review) => (
                                        <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-3 w-3 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500">{formatDate(review.createdAt, "dd/MM/yyyy")}</span>
                                            </div>
                                            <p className="text-gray-700 text-sm">{review.review}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Book This Room</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-primary">${room.price}</span>
                                            <span className="text-sm text-gray-500">per night</span>
                                        </div>

                                        {room.originalPrice && (
                                            <div className="text-sm text-gray-500">Save ${room.originalPrice - room.price} per night</div>
                                        )}

                                        <Separator />

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Room Type</span>
                                                <span className="font-medium">{room.category}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Max Guests</span>
                                                <span className="font-medium">{room.maxGuests}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Bed Type</span>
                                                <span className="font-medium">{room.bedType}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Size</span>
                                                <span className="font-medium">{room.size} sq ft</span>
                                            </div>
                                        </div>

                                        <Separator />

                                        <BookingDialog
                                            room={room}
                                            featured={false}
                                            page={page}
                                        >
                                            <Button className="w-full" disabled={room.availability === "booked"} size="lg">
                                                {room.availability === "booked" ? "Sold Out" : "Book Now"}
                                            </Button>
                                        </BookingDialog>

                                        <div className="text-xs text-gray-500 text-center">
                                            Free cancellation up to 24 hours before check-in
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
