import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ArrowRight,
    Briefcase,
    CheckCircle,
    Home,
    Lock,
    MapPin,
    Shield,
    TrendingUp
} from "lucide-react"
import Link from "next/link"

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-background">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <Lock className="h-10 w-10 text-red-600" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Access <span className="text-amber-600">Restricted</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        You need to be a registered provider to access the Content Management System. Join thousands of successful
                        businesses on our platform.
                    </p>
                    <Badge className="bg-amber-600 text-white text-lg px-6 py-2">
                        <Shield className="h-4 w-4 mr-2" />
                        Provider Portal Access Required
                    </Badge>
                </div>

                {/* Provider Types */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Provider Type</h2>
                        <p className="text-lg text-gray-600">
                            Select the category that best describes your business to get started
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Host Provider */}
                        <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
                            <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-sm font-medium">
                                Most Popular
                            </div>
                            <CardHeader className="text-center pb-4">
                                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <Home className="h-8 w-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-2xl">Host Provider</CardTitle>
                                <CardDescription className="text-base">
                                    Perfect for accommodation providers, hotels, resorts, and vacation rentals
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">What you can manage:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Property listings & rooms",
                                            "Booking calendar & availability",
                                            "Guest communications",
                                            "Pricing & promotions",
                                            "Property photos & descriptions",
                                            "Guest reviews & ratings",
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Average Monthly Revenue</span>
                                        <span className="text-lg font-bold text-blue-600">$8,500</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        +23% vs last year
                                    </div>
                                </div>
                                <Button className="w-full bg-gold-gradient text-lg py-3">
                                    Sign Up as Host
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Experience Provider */}
                        <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
                            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                                Growing Fast
                            </div>
                            <CardHeader className="text-center pb-4">
                                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <MapPin className="h-8 w-8 text-green-600" />
                                </div>
                                <CardTitle className="text-2xl">Experience Provider</CardTitle>
                                <CardDescription className="text-base">
                                    Ideal for tour operators, activity providers, and experience creators
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">What you can manage:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Tours & activity listings",
                                            "Booking schedules & capacity",
                                            "Equipment & requirements",
                                            "Seasonal pricing & packages",
                                            "Experience photos & videos",
                                            "Customer feedback & testimonials",
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Average Monthly Revenue</span>
                                        <span className="text-lg font-bold text-green-600">$6,200</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        +31% vs last year
                                    </div>
                                </div>
                                <Button className="w-full bg-gold-gradient text-lg py-3">
                                    Sign Up as Experience Provider
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Service Provider */}
                        <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
                            <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium">
                                Versatile
                            </div>
                            <CardHeader className="text-center pb-4">
                                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <Briefcase className="h-8 w-8 text-purple-600" />
                                </div>
                                <CardTitle className="text-2xl">Service Provider</CardTitle>
                                <CardDescription className="text-base">
                                    Great for restaurants, spas, transportation, and other hospitality services
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">What you can manage:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "Service listings & menus",
                                            "Appointment scheduling",
                                            "Staff & resource management",
                                            "Service packages & pricing",
                                            "Portfolio & service photos",
                                            "Client reviews & ratings",
                                        ].map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-700">Average Monthly Revenue</span>
                                        <span className="text-lg font-bold text-purple-600">$4,800</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        +18% vs last year
                                    </div>
                                </div>
                                <Button className="w-full bg-gold-gradient text-lg py-3">
                                    Sign Up as Service Provider
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Platform Benefits */}
                {/* <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Platform?</h2>
                        <p className="text-lg text-gray-600">Thousands of providers trust us to grow their business</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Large Customer Base",
                                description: "Access to over 2M+ active travelers and customers",
                                stat: "2M+ Customers",
                            },
                            {
                                icon: DollarSign,
                                title: "Increase Revenue",
                                description: "Providers see average 40% increase in bookings",
                                stat: "+40% Revenue",
                            },
                            {
                                icon: Calendar,
                                title: "Easy Management",
                                description: "Intuitive CMS to manage all your listings and bookings",
                                stat: "24/7 Access",
                            },
                            {
                                icon: Star,
                                title: "Build Reputation",
                                description: "Collect reviews and build trust with verified ratings",
                                stat: "4.8★ Average",
                            },
                        ].map((benefit, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6">
                                    <div className="bg-amber-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <benefit.icon className="h-8 w-8 text-amber-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                                        {benefit.stat}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div> */}

                {/* Success Stories */}
                {/* <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-lg text-gray-600">See how other providers are thriving on our platform</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Marina Bay Hotel",
                                type: "Host Provider",
                                image: "/placeholder.svg?height=200&width=300",
                                quote:
                                    "Since joining the platform, our bookings increased by 60% and we've maintained a 4.9-star rating.",
                                revenue: "+60% bookings",
                                badge: "Host",
                                badgeColor: "bg-blue-600",
                            },
                            {
                                name: "Island Adventures",
                                type: "Experience Provider",
                                image: "/placeholder.svg?height=200&width=300",
                                quote: "The CMS makes it so easy to manage our tours. We've expanded to 15 different experiences!",
                                revenue: "15 experiences",
                                badge: "Experience",
                                badgeColor: "bg-green-600",
                            },
                            {
                                name: "Sunset Spa",
                                type: "Service Provider",
                                image: "/placeholder.svg?height=200&width=300",
                                quote: "Our appointment bookings doubled and customer satisfaction is at an all-time high.",
                                revenue: "+100% bookings",
                                badge: "Service",
                                badgeColor: "bg-purple-600",
                            },
                        ].map((story, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <div className="relative">
                                    <Image
                                        src={story.image || "/placeholder.svg"}
                                        alt={story.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <Badge className={`absolute top-4 left-4 ${story.badgeColor} text-white`}>{story.badge}</Badge>
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4 italic">&quot;{story.quote}&quot;</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{story.type}</span>
                                        <Badge variant="outline" className="text-amber-600 border-amber-600">
                                            {story.revenue}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div> */}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-12 text-center text-white shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto">
                        Join thousands of successful providers and start growing your business today. Setup takes less than 10 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            size="lg"
                            className="text-lg px-8 flex-1 bg-white text-amber-700 hover:bg-amber-50"
                        >
                            <Link href={"/sign-up"} className="flex items-center justify-center w-full">
                                Get Started Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                    <p className="text-sm text-amber-100 mt-4">No setup fees • Cancel anytime</p>
                </div>


                {/* Already Have Account */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Already have a provider account?</p>
                    <Link href="/">
                        <Button variant="outline" size="lg" className="dark:hover:text-primary">
                            Sign In to CMS
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
