import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowRight,
    Bed,
    Briefcase,
    Calendar,
    Camera,
    Car,
    CheckCircle,
    Clock,
    Coffee,
    Dumbbell,
    Gift,
    Heart,
    MapPin,
    Phone,
    Plane,
    Shield,
    Sparkles,
    Star,
    Users,
    Utensils,
    Waves,
    Wifi,
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-amber-50 to-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center">
                        <Badge className="mb-4 bg-amber-600 text-white">Premium Services</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Exceptional <span className="text-amber-600">Services</span> Await
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            From personalized concierge assistance to world-class amenities, our comprehensive range of services
                            ensures every moment of your stay is extraordinary.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                                Explore Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="default" size="lg" className="bg-white text-black hover:bg-gray-300 text-lg px-8">
                                Contact Reservation Manager
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="accommodation" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
                            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
                            <TabsTrigger value="dining">Dining & Events</TabsTrigger>
                            <TabsTrigger value="wellness">Wellness & Recreation</TabsTrigger>
                            <TabsTrigger value="concierge">Concierge & Special</TabsTrigger>
                        </TabsList>

                        {/* Accommodation Services */}
                        <TabsContent value="accommodation" className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Accommodation Services</h2>
                                <p className="text-lg text-gray-600">Luxury comfort with personalized attention to every detail</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Bed,
                                        title: "Luxury Accommodations",
                                        description: "Elegantly appointed rooms and suites with premium amenities",
                                        features: ["Premium bedding", "Ocean or garden views", "Private balconies", "Marble bathrooms"],
                                        available: "24/7",
                                    },
                                    {
                                        icon: Clock,
                                        title: "24/7 Room Service",
                                        description: "Gourmet dining delivered to your room at any hour",
                                        features: [
                                            "Full menu available",
                                            "In-room dining setup",
                                            "Special dietary options",
                                            "Wine pairings",
                                        ],
                                        available: "Always",
                                    },
                                    {
                                        icon: Sparkles,
                                        title: "Housekeeping Excellence",
                                        description: "Impeccable daily housekeeping with turndown service",
                                        features: ["Twice daily service", "Turndown amenities", "Laundry & pressing", "Special requests"],
                                        available: "Daily",
                                    },
                                    {
                                        icon: Wifi,
                                        title: "Premium Connectivity",
                                        description: "High-speed internet and modern technology throughout",
                                        features: [
                                            "Complimentary WiFi",
                                            "Smart TV systems",
                                            "USB charging stations",
                                            "Business center access",
                                        ],
                                        available: "Included",
                                    },
                                    {
                                        icon: Shield,
                                        title: "Security & Safety",
                                        description: "Round-the-clock security with advanced safety systems",
                                        features: [
                                            "24/7 security",
                                            "Safe deposit boxes",
                                            "Emergency protocols",
                                            "Health & safety certified",
                                        ],
                                        available: "Always",
                                    },
                                    {
                                        icon: Phone,
                                        title: "Guest Relations",
                                        description: "Dedicated guest services team for all your needs",
                                        features: [
                                            "Personal assistance",
                                            "Problem resolution",
                                            "Special arrangements",
                                            "Feedback management",
                                        ],
                                        available: "24/7",
                                    },
                                ].map((service, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                                                <service.icon className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Badge variant="secondary" className="text-xs">
                                                {service.available}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Dining & Events Services */}
                        <TabsContent value="dining" className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Dining & Events</h2>
                                <p className="text-lg text-gray-600">Culinary excellence and memorable celebrations</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Utensils,
                                        title: "Fine Dining Restaurants",
                                        description: "Award-winning cuisine in elegant settings",
                                        features: [
                                            "Ocean Terrace Restaurant",
                                            "Sunset Beach Bar",
                                            "Private dining rooms",
                                            "Chef's table experience",
                                        ],
                                        available: "Daily",
                                    },
                                    {
                                        icon: Coffee,
                                        title: "Café & Lounge",
                                        description: "Casual dining with premium coffee and light fare",
                                        features: ["Artisan coffee", "Fresh pastries", "Light meals", "Poolside service"],
                                        available: "6AM-11PM",
                                    },
                                    {
                                        icon: Users,
                                        title: "Event Planning",
                                        description: "Professional event coordination for all occasions",
                                        features: ["Wedding planning", "Corporate events", "Private parties", "Custom menus"],
                                        available: "By appointment",
                                    },
                                    {
                                        icon: Heart,
                                        title: "Wedding Services",
                                        description: "Complete wedding packages in paradise",
                                        features: [
                                            "Ceremony venues",
                                            "Reception planning",
                                            "Floral arrangements",
                                            "Photography coordination",
                                        ],
                                        available: "Year-round",
                                    },
                                    {
                                        icon: Briefcase,
                                        title: "Business Catering",
                                        description: "Professional catering for meetings and conferences",
                                        features: ["Meeting packages", "Coffee breaks", "Working lunches", "AV equipment"],
                                        available: "Advance booking",
                                    },
                                    {
                                        icon: Gift,
                                        title: "Special Occasions",
                                        description: "Customized celebrations for memorable moments",
                                        features: [
                                            "Anniversary dinners",
                                            "Birthday celebrations",
                                            "Romantic packages",
                                            "Surprise arrangements",
                                        ],
                                        available: "On request",
                                    },
                                ].map((service, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                                                <service.icon className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Badge variant="secondary" className="text-xs">
                                                {service.available}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Wellness & Recreation Services */}
                        <TabsContent value="wellness" className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Wellness & Recreation</h2>
                                <p className="text-lg text-gray-600">Rejuvenate your body and soul in paradise</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Waves,
                                        title: "Spa & Wellness Center",
                                        description: "World-class spa treatments and wellness programs",
                                        features: ["Massage therapy", "Facial treatments", "Body wraps", "Couples packages"],
                                        available: "9AM-9PM",
                                    },
                                    {
                                        icon: Dumbbell,
                                        title: "Fitness Center",
                                        description: "State-of-the-art equipment and personal training",
                                        features: ["Modern equipment", "Personal trainers", "Group classes", "Yoga sessions"],
                                        available: "24/7",
                                    },
                                    {
                                        icon: Waves,
                                        title: "Pool & Water Activities",
                                        description: "Multiple pools and exciting water sports",
                                        features: ["Infinity pool", "Kids' pool", "Water sports", "Poolside service"],
                                        available: "6AM-10PM",
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Beach Services",
                                        description: "Private beach access with full service",
                                        features: ["Beach chairs & umbrellas", "Towel service", "Water sports equipment", "Beach bar"],
                                        available: "Sunrise-Sunset",
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Activities Program",
                                        description: "Daily activities and entertainment for all ages",
                                        features: ["Water aerobics", "Beach volleyball", "Live entertainment", "Cultural shows"],
                                        available: "Daily schedule",
                                    },
                                    {
                                        icon: Camera,
                                        title: "Adventure Tours",
                                        description: "Guided excursions and local experiences",
                                        features: ["Island tours", "Snorkeling trips", "Cultural experiences", "Nature walks"],
                                        available: "Seasonal",
                                    },
                                ].map((service, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                                                <service.icon className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Badge variant="secondary" className="text-xs">
                                                {service.available}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Concierge & Special Services */}
                        <TabsContent value="concierge" className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Concierge & Special Services</h2>
                                <p className="text-lg text-gray-600">Personalized assistance for an unforgettable experience</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Users,
                                        title: "Personal Concierge",
                                        description: "Dedicated concierge service for all your needs",
                                        features: [
                                            "Restaurant reservations",
                                            "Activity booking",
                                            "Local recommendations",
                                            "Special requests",
                                        ],
                                        available: "24/7",
                                    },
                                    {
                                        icon: Car,
                                        title: "Transportation Services",
                                        description: "Convenient transportation options",
                                        features: ["Airport transfers", "Local shuttles", "Car rentals", "Private drivers"],
                                        available: "On demand",
                                    },
                                    {
                                        icon: Plane,
                                        title: "Travel Planning",
                                        description: "Complete travel assistance and planning",
                                        features: ["Itinerary planning", "Excursion booking", "Travel insurance", "Visa assistance"],
                                        available: "Business hours",
                                    },
                                    {
                                        icon: Gift,
                                        title: "Personal Shopping",
                                        description: "Shopping assistance and delivery services",
                                        features: ["Local shopping tours", "Gift purchasing", "Delivery service", "Personal stylist"],
                                        available: "By appointment",
                                    },
                                    {
                                        icon: Phone,
                                        title: "Communication Services",
                                        description: "Stay connected with comprehensive communication options",
                                        features: ["International calling", "Internet access", "Business services", "Translation services"],
                                        available: "24/7",
                                    },
                                    {
                                        icon: Star,
                                        title: "VIP Services",
                                        description: "Exclusive services for our premium guests",
                                        features: ["Butler service", "Private check-in", "Exclusive amenities", "Priority reservations"],
                                        available: "Premium suites",
                                    },
                                ].map((service, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                                                <service.icon className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <CardTitle className="text-xl">{service.title}</CardTitle>
                                            <CardDescription>{service.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Badge variant="secondary" className="text-xs">
                                                {service.available}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Service Packages */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
                        <p className="text-xl text-gray-600">Curated experiences combining our best services</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Romance Package",
                                description: "Perfect for couples seeking a romantic getaway",
                                image: "/images/lake-eyasi-sunset.webp",
                                services: [
                                    "Lake dinner",
                                    "Champagne & roses",
                                    "Late checkout",
                                    "Photography session",
                                ],
                                badge: "Most Popular",
                                badgeColor: "bg-pink-600",
                            },
                            {
                                name: "Wellness Retreat",
                                description: "Complete wellness experience for mind and body",
                                image: "/images/lake-eyasi.webp",
                                services: [
                                    "Room Service",
                                    "Sunset Dinner at the Lodge",
                                    "Lake Eyasi Tour",
                                ],
                                badge: "New",
                                badgeColor: "bg-green-600",
                            },
                            {
                                name: "Adventure Explorer",
                                description: "For guests who love excitement and exploration",
                                image: "/images/hunting-with-the-hadzabe.webp",
                                services: [
                                    "Guided mountain tours",
                                    "Cultural experiences",
                                    "Local guide service",
                                ],
                                badge: "Seasonal",
                                badgeColor: "bg-blue-600",
                            },
                        ].map((package_, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <Image
                                        src={package_.image}
                                        alt={package_.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-48 object-cover"
                                    />
                                    <Badge className={`absolute top-4 left-4 ${package_.badgeColor} text-white`}>{package_.badge}</Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{package_.name}</CardTitle>
                                    <CardDescription>{package_.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {package_.services.map((service, serviceIndex) => (
                                            <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Learn More</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Hours */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Hours</h2>
                        <p className="text-xl text-gray-600">When our services are available to serve you</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                category: "Guest Services",
                                services: [
                                    { name: "Front Desk", hours: "24/7" },
                                    { name: "Concierge", hours: "24/7" },
                                    { name: "Room Service", hours: "24/7" },
                                    { name: "Housekeeping", hours: "8AM-6PM" },
                                ],
                            },
                            {
                                category: "Dining",
                                services: [
                                    { name: "Ocean Terrace", hours: "6AM-11PM" },
                                    { name: "Beach Bar", hours: "11AM-1AM" },
                                    { name: "Café Lounge", hours: "6AM-11PM" },
                                    { name: "Room Service", hours: "24/7" },
                                ],
                            },
                            {
                                category: "Recreation",
                                services: [
                                    { name: "Fitness Center", hours: "24/7" },
                                    { name: "Spa", hours: "9AM-9PM" },
                                    { name: "Pool Area", hours: "6AM-10PM" },
                                    { name: "Beach Access", hours: "Sunrise-Sunset" },
                                ],
                            },
                            {
                                category: "Business",
                                services: [
                                    { name: "Business Center", hours: "24/7" },
                                    { name: "Meeting Rooms", hours: "7AM-11PM" },
                                    { name: "Event Planning", hours: "9AM-6PM" },
                                    { name: "AV Support", hours: "8AM-8PM" },
                                ],
                            },
                        ].map((category, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg text-amber-600">{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {category.services.map((service, serviceIndex) => (
                                            <div key={serviceIndex} className="flex justify-between items-center">
                                                <span className="text-sm text-gray-700">{service.name}</span>
                                                <Badge variant="outline" className="text-xs">
                                                    {service.hours}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-amber-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Our Services?</h2>
                    <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
                        Contact our reservation manager to learn more about our services or to make special arrangements for your stay.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8">
                            Contact Reservation Manager
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 border-white text-white hover:bg-white hover:text-amber-600"
                        >
                            Book Your Stay
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
