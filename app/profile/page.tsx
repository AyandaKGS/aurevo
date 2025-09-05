"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Award, Bed, Calendar, Camera, CreditCard, Edit, Gift, MessageSquare, Save, Star, Users } from "lucide-react"
import { useState } from "react"

export default function UserProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [profileData, setProfileData] = useState({
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main Street, New York, NY 10001",
        dateOfBirth: "1985-06-15",
        preferences: "Ocean view rooms, late checkout, vegetarian meals",
    })

    const handleSaveProfile = () => {
        setIsEditing(false)
        // Here you would typically save to a backend
    }

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                                <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                            </Avatar>
                            <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8">
                                <Camera className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
                            <p className="text-gray-600 mt-1">Member since March 2019</p>
                            <div className="flex items-center space-x-4 mt-3">
                                <Badge className="bg-amber-600 text-white">
                                    <Award className="h-3 w-3 mr-1" />
                                    Gold Member
                                </Badge>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                    4.9 Guest Rating
                                </div>
                                <div className="text-sm text-gray-600">12 Stays Completed</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-amber-600">2,450</div>
                            <div className="text-sm text-gray-600">Reward Points</div>
                            <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                                <Gift className="h-4 w-4 mr-2" />
                                Redeem
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="bookings" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        <TabsTrigger value="profile">Profile Settings</TabsTrigger>
                        <TabsTrigger value="rewards">Rewards</TabsTrigger>
                    </TabsList>

                    {/* Bookings Tab */}
                    <TabsContent value="bookings" className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                            <Button className="bg-amber-600 hover:bg-amber-700">
                                <Calendar className="h-4 w-4 mr-2" />
                                New Booking
                            </Button>
                        </div>

                        {/* Current Booking */}
                        <Card className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">Current Stay</CardTitle>
                                        <CardDescription>Premium Ocean Suite</CardDescription>
                                    </div>
                                    <Badge className="bg-green-600 text-white">Active</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">Dec 15-18, 2024</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">2 Guests</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Bed className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">Room 1205</span>
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Booking Reference: #GV-2024-1205</p>
                                        <p className="text-sm text-gray-600">Check-out: Tomorrow, 11:00 AM</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="sm">
                                            Extend Stay
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            Room Service
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Upcoming Bookings */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Bookings</h3>
                            <Card>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle>Deluxe Ocean View</CardTitle>
                                            <CardDescription>Spring Getaway</CardDescription>
                                        </div>
                                        <Badge variant="outline">Confirmed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">Mar 20-25, 2025</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">2 Guests</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CreditCard className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">$1,299 Total</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-600">Booking Reference: #GV-2025-0320</p>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm">
                                                Modify
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Past Bookings */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Past Stays</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        room: "Presidential Villa",
                                        dates: "Aug 10-15, 2024",
                                        guests: 4,
                                        total: "$3,299",
                                        reference: "#GV-2024-0810",
                                        canReview: true,
                                    },
                                    {
                                        room: "Premium Suite",
                                        dates: "May 5-8, 2024",
                                        guests: 2,
                                        total: "$1,899",
                                        reference: "#GV-2024-0505",
                                        canReview: false,
                                    },
                                ].map((booking, index) => (
                                    <Card key={index}>
                                        <CardContent className="pt-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900">{booking.room}</h4>
                                                    <div className="grid md:grid-cols-3 gap-4 mt-2">
                                                        <div className="flex items-center space-x-2">
                                                            <Calendar className="h-4 w-4 text-gray-500" />
                                                            <span className="text-sm text-gray-600">{booking.dates}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Users className="h-4 w-4 text-gray-500" />
                                                            <span className="text-sm text-gray-600">{booking.guests} Guests</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <CreditCard className="h-4 w-4 text-gray-500" />
                                                            <span className="text-sm text-gray-600">{booking.total}</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-2">{booking.reference}</p>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <Button variant="outline" size="sm">
                                                        Book Again
                                                    </Button>
                                                    {booking.canReview && (
                                                        <Button variant="outline" size="sm">
                                                            <MessageSquare className="h-4 w-4 mr-2" />
                                                            Write Review
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    {/* Reviews Tab */}
                    <TabsContent value="reviews" className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                            <Button className="bg-amber-600 hover:bg-amber-700">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Write New Review
                            </Button>
                        </div>

                        {/* Write Review Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Write a Review</CardTitle>
                                <CardDescription>Share your experience from your recent stay</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="stay-select">Select Stay</Label>
                                    <select id="stay-select" className="w-full mt-1 p-2 border rounded-md">
                                        <option>Presidential Villa - Aug 10-15, 2024</option>
                                        <option>Premium Suite - May 5-8, 2024</option>
                                    </select>
                                </div>
                                <div>
                                    <Label>Overall Rating</Label>
                                    <div className="flex space-x-1 mt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className="h-6 w-6 text-yellow-400 fill-current cursor-pointer hover:scale-110 transition-transform"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Room Quality</Label>
                                        <div className="flex space-x-1 mt-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current cursor-pointer" />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Service</Label>
                                        <div className="flex space-x-1 mt-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current cursor-pointer" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="review-text">Your Review</Label>
                                    <Textarea id="review-text" placeholder="Tell us about your experience..." className="mt-1" rows={4} />
                                </div>
                                <Button className="bg-amber-600 hover:bg-amber-700">Submit Review</Button>
                            </CardContent>
                        </Card>

                        {/* My Reviews */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Reviews</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        stay: "Premium Suite - May 5-8, 2024",
                                        rating: 5,
                                        date: "May 10, 2024",
                                        review:
                                            "Absolutely wonderful stay! The ocean view was breathtaking and the service was impeccable. The spa treatments were divine and the dining exceeded all expectations. Will definitely return!",
                                        helpful: 12,
                                    },
                                    {
                                        stay: "Deluxe Ocean View - Jan 15-18, 2024",
                                        rating: 4,
                                        date: "Jan 20, 2024",
                                        review:
                                            "Great location and beautiful rooms. The staff was very friendly and accommodating. Only minor issue was the WiFi speed in the room, but overall a fantastic experience.",
                                        helpful: 8,
                                    },
                                ].map((review, index) => (
                                    <Card key={index}>
                                        <CardContent className="pt-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{review.stay}</h4>
                                                    <div className="flex items-center space-x-2 mt-1">
                                                        <div className="flex space-x-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className="text-sm text-gray-600">{review.date}</span>
                                                    </div>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    <Edit className="h-4 w-4 mr-2" />
                                                    Edit
                                                </Button>
                                            </div>
                                            <p className="text-gray-700 mb-3">{review.review}</p>
                                            <div className="flex items-center justify-between text-sm text-gray-600">
                                                <span>{review.helpful} people found this helpful</span>
                                                <Badge variant="outline">Published</Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    {/* Profile Settings Tab */}
                    <TabsContent value="profile" className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                            {!isEditing ? (
                                <Button onClick={() => setIsEditing(true)} variant="outline">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Profile
                                </Button>
                            ) : (
                                <div className="flex space-x-2">
                                    <Button onClick={handleSaveProfile} className="bg-amber-600 hover:bg-amber-700">
                                        <Save className="h-4 w-4 mr-2" />
                                        Save Changes
                                    </Button>
                                    <Button onClick={() => setIsEditing(false)} variant="outline">
                                        Cancel
                                    </Button>
                                </div>
                            )}
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>Update your personal details and preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            value={profileData.firstName}
                                            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                                            disabled={!isEditing}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            value={profileData.lastName}
                                            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                                            disabled={!isEditing}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={profileData.email}
                                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                        disabled={!isEditing}
                                        className="mt-1"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            value={profileData.phone}
                                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                            disabled={!isEditing}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                        <Input
                                            id="dateOfBirth"
                                            type="date"
                                            value={profileData.dateOfBirth}
                                            onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                                            disabled={!isEditing}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        id="address"
                                        value={profileData.address}
                                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                                        disabled={!isEditing}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="preferences">Stay Preferences</Label>
                                    <Textarea
                                        id="preferences"
                                        value={profileData.preferences}
                                        onChange={(e) => setProfileData({ ...profileData, preferences: e.target.value })}
                                        disabled={!isEditing}
                                        className="mt-1"
                                        rows={3}
                                        placeholder="Tell us about your preferences (room type, dietary requirements, etc.)"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>Manage your account security and notifications</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium">Email Notifications</h4>
                                        <p className="text-sm text-gray-600">Receive booking confirmations and special offers</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Manage
                                    </Button>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium">Password</h4>
                                        <p className="text-sm text-gray-600">Last updated 3 months ago</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Change Password
                                    </Button>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium">Two-Factor Authentication</h4>
                                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Enable
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Rewards Tab */}
                    <TabsContent value="rewards" className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900">Rewards & Loyalty</h2>
                            <Badge className="bg-amber-600 text-white text-lg px-4 py-2">
                                <Award className="h-4 w-4 mr-2" />
                                Gold Member
                            </Badge>
                        </div>

                        {/* Points Balance */}
                        <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                            <CardContent className="pt-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold">2,450 Points</h3>
                                        <p className="text-amber-100">Available to redeem</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-amber-100">Next tier in</p>
                                        <p className="text-xl font-semibold">550 points</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="bg-white/20 rounded-full h-2">
                                        <div className="bg-white rounded-full h-2 w-4/5"></div>
                                    </div>
                                    <p className="text-sm text-amber-100 mt-2">80% to Platinum Status</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Rewards Options */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Free Night Stay",
                                    points: "2,000 points",
                                    description: "Redeem for one free night in a Deluxe room",
                                    available: true,
                                },
                                {
                                    title: "Spa Treatment",
                                    points: "1,500 points",
                                    description: "60-minute massage or facial treatment",
                                    available: true,
                                },
                                {
                                    title: "Dining Credit",
                                    points: "1,000 points",
                                    description: "$100 credit for resort restaurants",
                                    available: true,
                                },
                                {
                                    title: "Room Upgrade",
                                    points: "800 points",
                                    description: "Complimentary upgrade to next room category",
                                    available: true,
                                },
                                {
                                    title: "Airport Transfer",
                                    points: "500 points",
                                    description: "Round-trip luxury airport transportation",
                                    available: true,
                                },
                                {
                                    title: "Premium Suite",
                                    points: "5,000 points",
                                    description: "One night in our Premium Ocean Suite",
                                    available: false,
                                },
                            ].map((reward, index) => (
                                <Card key={index} className={!reward.available ? "opacity-60" : ""}>
                                    <CardContent className="pt-6">
                                        <div className="text-center">
                                            <Gift className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                                            <h3 className="font-semibold text-gray-900 mb-2">{reward.title}</h3>
                                            <p className="text-2xl font-bold text-amber-600 mb-2">{reward.points}</p>
                                            <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                                            <Button
                                                className={`w-full ${reward.available ? "bg-amber-600 hover:bg-amber-700" : "bg-gray-300 cursor-not-allowed"
                                                    }`}
                                                disabled={!reward.available}
                                            >
                                                {reward.available ? "Redeem" : "Not Enough Points"}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Points History */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Points History</CardTitle>
                                <CardDescription>Your recent points activity</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[
                                        {
                                            action: "Stay Completed",
                                            points: "+450",
                                            date: "Dec 18, 2024",
                                            description: "Premium Ocean Suite - 3 nights",
                                        },
                                        {
                                            action: "Review Bonus",
                                            points: "+50",
                                            date: "Dec 19, 2024",
                                            description: "Review for August stay",
                                        },
                                        {
                                            action: "Dining Credit Redeemed",
                                            points: "-1,000",
                                            date: "Dec 15, 2024",
                                            description: "Ocean Terrace Restaurant",
                                        },
                                        {
                                            action: "Birthday Bonus",
                                            points: "+200",
                                            date: "Jun 15, 2024",
                                            description: "Annual birthday points",
                                        },
                                    ].map((transaction, index) => (
                                        <div key={index} className="flex justify-between items-center py-2">
                                            <div>
                                                <p className="font-medium text-gray-900">{transaction.action}</p>
                                                <p className="text-sm text-gray-600">{transaction.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <p
                                                    className={`font-semibold ${transaction.points.startsWith("+") ? "text-green-600" : "text-red-600"
                                                        }`}
                                                >
                                                    {transaction.points}
                                                </p>
                                                <p className="text-sm text-gray-600">{transaction.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
