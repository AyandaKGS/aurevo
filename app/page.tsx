"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  AirVent,
  ArrowRight,
  Bath,
  Bed,
  Car,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Tv,
  Utensils,
  Waves,
  Wifi
} from "lucide-react"
import Image from "next/image"


export default function HomePage() {

  const testimonials = [
    {
      name: "Kallie L",
      review:
        "Had a great stay while doing volunteer work at Lake Eyasi Medical Clinic. Wonderful service, yummy food and comfortable rooms. Quiet and lovely. Kellie Lala",
      rating: 5,
      date: "3 years ago",
    },
    {
      name: "Eric S",
      review:
        "During my Safari to Lake Eyasi and Ngorongoro crater, I stayed for 2 nights in this accommodation. Sonayi Safari Lodge was very nice, clean, quiet, and comfortable. The food was excellent, and since we were many at the lodge restaurant they had put the buffet style. I got served many different varieties. The service was perfect for all the places inside the bedroom and outside. The security is perfect and I would like to encourage other people to go on safari in this wonderful country and visit Lake Eyasi and experience the beautiful natural people and things.",
      rating: 5,
      date: "4 years ago",
    },
    {
      name: "Peter V",
      review:
        "We had a lovely camping facilities at Lake Manyara Sonayi Camp during our visit in Tanzania. Very quite environment full of activities to do, delicious food, well secured with a wall. At Tembo house we had a clear view of a small town of Mto Wa Mbu especial in the night. We also did a visit down the Kirurumu river and enjoy the stunning view of the gorge that this river offers. At the far end you can also see the Lake Manyara at distance but worth much to stay at this friendly environment with the best people around. We highly recommend this camping site for anybody or group looking forward to stay in Tanzania during wildlife safaris.",
      rating: 5,
      date: "3 weeks ago",
    },
  ];
  
  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Hero Section with Booking */}
      <section className="relative h-screen bg-gradient-to-r from-black/50 to-black/30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(`/placeholder.svg?height=1080&width=1920`)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white">
              <Badge className="mb-4 bg-amber-600 text-white border-amber-600">⭐ 3-Star Luxury Resort</Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Experience
                <span className="block text-amber-400">The Wilderness</span>
                Like Never Before
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Discover unparalleled comfort and elegance at Sonayi Safari Lodge and Campsite. A home away from home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  Explore Rooms
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 border-white border-[0.5px] bg-transparent text-foreground hover:bg-foreground hover:text-gray-900"
                >
                  Virtual Tour
                </Button>
              </div>
            </div>

            {/* Booking Widget */}
            <Card className="bg-card rounded-2xl p-8 shadow-2xl">
              <CardHeader className="text-2xl font-bold text-card-foreground mb-6">Book Your Stay</CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin">Check-in</Label>
                    <Input type="date" id="checkin" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="checkout">Check-out</Label>
                    <Input type="date" id="checkout" className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests">Guests</Label>
                    <Input type="number" id="guests" placeholder="2" min="1" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="rooms">Rooms</Label>
                    <Input type="number" id="rooms" placeholder="1" min="1" className="mt-1" />
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">Check Availability</Button>
                <p className="text-sm text-gray-600 text-center">Best Rate Guaranteed • Free Cancellation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Luxurious Accommodations</h2>
            <p className="text-xl text-muted/60 max-w-3xl mx-auto">
              Choose from our carefully designed rooms and suites, each offering comfort and elegance.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Single Room",
                status: "Available",
                statusColor: "bg-orange-600",
                image: "/images/single-room-cover.webp",
                features: ["Ocean View", "King Bed", "Private Balcony", "Marble Bathroom"],
                amenities: [Bed, Bath, Tv, AirVent, Wifi],
              },
              {
                name: "Double Room",
                status: "Limited",
                statusColor: "bg-orange-600",
                image: "/images/double-room-cover.webp",
                features: ["Separate Living Area", "Panoramic Views", "Luxury Amenities", "Butler Service"],
                amenities: [Bed, Bath, Tv, AirVent, Wifi],
              },
              {
                name: "Triple Room",
                status: "Exclusive",
                statusColor: "bg-orange-600",
                image: "/images/triple-room-cover.webp",
                features: ["Private Pool", "Personal Chef", "Concierge Service", "Exclusive Access"],
                amenities: [Bed, Bath, Tv, AirVent, Wifi],
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${room.statusColor} text-white`}>{room.status}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <div className="flex space-x-2">
                    {room.amenities.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground/80">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Book This Room</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">World-Class Amenities</h2>
            <p className="text-xl text-muted-foreground">
              Indulge in our premium facilities designed for your comfort and enjoyment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Waves, name: "Infinity Pool", description: "Stunning pool with poolside service" },
              {
                icon: Utensils,
                name: "Fine Dining",
                description: "Great restaurant with world-class chef",
              },
              { icon: Coffee, name: "Room Service", description: "Order food straight to your room." },
              { icon: Wifi, name: "Free WiFi", description: "High-speed internet throughout the property" },
              { icon: Car, name: "Free Parking", description: "Complimentary free parking for all guests" },
              { icon: Shield, name: "24/7 Security", description: "Round-the-clock security and concierge service" },
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <amenity.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">{amenity.name}</h3>
                <p className="text-muted-foreground/70 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Culinary Excellence</h2>
              <p className="text-lg text-gray-600 mb-8">
                Savor exceptional cuisine crafted by our world-class chef. From fine dining to casual beachside
                meals, every dish is a celebration of flavor and artistry.
              </p>
              <div className="space-y-6">
                {[
                  {
                    name: "The Lodge Restaurant",
                    type: "Fine Dining",
                    description: "Elegant dining with contemporary cuisine",
                  },
                  {
                    name: "Sunset Lake Dinner",
                    type: "Casual Dining",
                    description: "Tropical cocktails and light bites with stunning sunset views",
                  },
                  {
                    name: "Room Service",
                    type: "24/7 Available",
                    description: "Gourmet meals delivered to your room anytime",
                  },
                ].map((restaurant, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-600 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                      <p className="text-amber-600 text-sm font-medium">{restaurant.type}</p>
                      <p className="text-gray-600 text-sm">{restaurant.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-amber-600 hover:bg-amber-700">View Menus & Reservations</Button>
            </div>
            <div className="relative">
              <Image
                src="/images/restaurant-and-bar.webp"
                alt="Fine dining restaurant"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-900">Highly Recommended</p>
                <p className="text-sm text-gray-600">Excellent cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-lg font-semibold text-muted-foreground ml-2">4.9/5</span>
              <span className="text-muted-foreground/60">(2,847 reviews)</span>
            </div>
          </div>
          <div className="rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              pauseOnHover
              speed="normal"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Prime Location</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nestled on pristine mountaintop with easy access to local attractions, shopping, and cultural
                experiences. Discover the perfect blend of tranquility and adventure.
              </p>
              <div className="space-y-4">
                {[
                  { name: "Hunting with the Hadzabe", distance: "15min drive" },
                  { name: "Lake Manyara National Park", distance: "1hr 25mins drive" },
                  { name: "International Airport", distance: "4hr 19mins drive" },
                  { name: "Lake Eyasi", distance: "16mins drive" },
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-foreground rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <span className="font-medium text-background">{location.name}</span>
                    </div>
                    <span className="text-sm text-gray-300 dark:text-gray-600">{location.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hadzabe.webp"
                alt="Resort location map"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-foreground p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-background">Hunting with the Hadzabe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Exclusive Offers</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Don&apos;t miss out on our limited-time packages and special deals
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Badge className="w-fit bg-white text-amber-600 mb-2">Limited Time</Badge>
                <CardTitle className="text-2xl">Early Bird Special</CardTitle>
                <CardDescription className="text-amber-100">Book 60 days in advance and save up to 30%</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Badge className="w-fit bg-white text-amber-600 mb-2">Popular</Badge>
                <CardTitle className="text-2xl">Romance Package</CardTitle>
                <CardDescription className="text-amber-100">
                  Couples retreat with dining, and champagne
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">We&apos;re here to help make your stay unforgettable</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+255742446107",
                description: "24/7 Reservations & Concierge",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "sonayilodge@gmail.com",
                description: "We respond within 2 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "Karatu Eyasi, Tanzania",
                description: "Karatu, Tanzania",
              },
            ].map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <contact.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-amber-600 font-medium mb-1">{contact.content}</p>
                  <p className="text-gray-600 text-sm">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
