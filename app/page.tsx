"use client"

import BookingDialog from "@/components/BookingDialogue"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ImagesSlider } from "@/components/ui/images-slider"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { homepageLoadingStates, MultiStepLoader } from "@/components/ui/multi-step-loader"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { experience, room } from "@/generated"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconCheese, IconYoga } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { addDays, formatDate, isBefore, subDays } from "date-fns"
import {
  AirVent,
  ArrowRight,
  Bed,
  BrushCleaning,
  ChefHat,
  ChevronDownIcon,
  Clock,
  Dog,
  Droplets,
  Dumbbell,
  Flame,
  GlassWater,
  Heart,
  Map,
  MapPin,
  Music,
  ShieldCheck,
  Shirt,
  ShowerHead,
  Smile,
  Sparkles,
  SprayCan,
  Star,
  Table,
  Timer,
  Truck,
  Tv,
  UtensilsCrossed,
  Wifi,
  Wine
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useForm } from "react-hook-form"
import z from "zod"

const availabilityFormSchema = z.object({
  checkIn: z.date({ error: "Please select a check-in date." }),
  checkOut: z.date({ error: "Please select a check-out date." }),
  guests: z.string({ error: "Please select the number of guests." }),
  rooms: z.string({ error: "Please select the number of rooms." }),
});

type AvailabilityFilterData = z.infer<typeof availabilityFormSchema>;

export default function HomePage() {
  const { isSignedIn } = useAuth();
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const router = useRouter();

  const availabilityForm = useForm<AvailabilityFilterData>({
    resolver: zodResolver(availabilityFormSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: addDays(new Date(), 1),
      guests: "2",
      rooms: "1",
    },
  });

  const onSubmit = (data: AvailabilityFilterData) => {
    const params = new URLSearchParams()
    const { checkIn, checkOut, guests, rooms } = data;

    params.set("checkIn", checkIn.toISOString());
    params.set("checkOut", checkOut.toISOString());
    params.set("guests", guests.toString())
    params.set("rooms", rooms.toString())

    router.push(`/rooms?${params.toString()}`)
  }


  const getData = useQuery({
    queryKey: ["homepage-data"],
    queryFn: async () => {
      const { data } = await axios.get("/api/get-availability");
      const { data: rooms } = await axios.get("/api/get-rooms", {
        params: {
          page: 1,
          pageSize: 3,
          featured: true
        },
      });
      const { data: experiences } = await axios.get("/api/get-experiences", {
        params: {
          page: 1,
          pageSize: 3,
          featured: true
        },
      });

      return {
        availability: data,
        rooms,
        experiences
      };
    },
  });


  const testimonials = [
    {
      name: "Ade",
      review:
        "Ngozi and Uzoma were great hosts. Always responsive and very helpful, they made sure my stay was as comfortable as possible. One of my best Airbnb experience. I will stay here again and again.",
      rating: 5,
      date: "10 May 2025",
    },
    {
      name: "Fortunate",
      review:
        "Great space! Very clean and comfortable. The studio room is a bit small, I had to squeeze myself to enter into the shower, however it wasn’t a deal breaker for me. Something to consider for those with bigger builds as I am on the smaller side. The host and the staff and super helpful and responsive. I felt very welcomed and very at home. The location is very convenient as well. Would definitely rebook for a future stay.",
      location: "Chicago, Illinois",
      rating: 5,
      date: "12 December 2024",
    },
    {
      name: "Nwabudike",
      review:
        "Very nice place with proximity to so many amenities, Good staff and great ambience. Definitely coming back!",
      rating: 5,
      date: "21 July 2025",
    },
    {
      name: "Zulu",
      review: "Enjoyed my stay. The apartment was as described and matched the pictures. Host was helpful and accommodating. It was peaceful. I enjoyed my stay.",
      location: "Lagos, Nigeria",
      rating: 5,
      date: "21 May 2025",
    },
    {
      name: "Tommy",
      review: "Very good! I recommend this place.",
      rating: 4,
      date: "7 July 2025"
    },
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

  const images = [
    "/images/ngoziliving-1.jpeg",
    "/images/ngoziliving-2.jpeg",
    "/images/ngoziliving-3.avif",
  ];

  if (getData.isFetching) return (
    <MultiStepLoader
      loadingStates={homepageLoadingStates}
      loading={getData.isFetching}
      duration={2000}
    />
  );

  const averageRating = testimonials.map((testimonial) => testimonial.rating).reduce((a, b) => a + b, 0) / testimonials.length;

  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Hero Section with Booking */}
      <ImagesSlider className="min-h-fit h-screen py-5 lg:py-0" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="text-white">
                <Badge className="mb-4 bg-gold-gradient text-white border-0">⭐ 3-Star+ Luxury Apartments</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Built for the
                  <span className="block text-amber-400">Roaming</span>
                  Nomad.
                </h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                  Discover exceptional homes in iconic cities and breathtaking destinations—all in one seamless platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gold-gradient text-lg px-8">
                    <Link href={"/rooms"} className="flex items-center">
                      Explore Rooms
                      <ArrowRight className="ml-2 h-5 w-5 mt-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    className="text-lg hidden md:blockpx-8 border-white border-[0.5px] bg-transparent text-white hover:bg-white hover:text-gray-900"
                  >
                    <Link href={"/virtual-tour"}>
                      Virtual Tour
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Booking Widget */}
              <Card className="bg-card rounded-2xl p-8 shadow-2xl">
                <CardHeader className="text-2xl font-bold text-card-foreground mb-6">Book Your Stay</CardHeader>
                <CardContent className="space-y-4">
                  <Form {...availabilityForm}>
                    <form className="space-y-4" onSubmit={availabilityForm.handleSubmit(onSubmit)}>
                      <div className="flex flex-col min-[394]:grid min-[394]:grid-cols-2 gap-4">
                        <FormField
                          control={availabilityForm.control}
                          name="checkIn"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel htmlFor="check-in">Check-in</FormLabel>
                              <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      id="date"
                                      className={cn("w-full justify-between font-normal", !field.value && "text-muted-foreground")
                                      }
                                    >
                                      {field.value ? formatDate(field.value, "dd/MM/yyyy") : "Select date"}
                                      <ChevronDownIcon />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={new Date(field.value)}
                                    captionLayout="dropdown"
                                    onSelect={field.onChange}
                                    disabled={(date) => isBefore(date, subDays(new Date(), 1))}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={availabilityForm.control}
                          name="checkOut"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel htmlFor="check-out">Check-out</FormLabel>
                              <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      id="date"
                                      className={cn("w-full justify-between font-normal", !field.value && "text-muted-foreground")
                                      }
                                    >
                                      {field.value ? formatDate(field.value, "dd/MM/yyyy") : "Select date"}
                                      <ChevronDownIcon />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={new Date(field.value)}
                                    captionLayout="dropdown"
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date() || isBefore(date, addDays(availabilityForm.watch("checkIn"), 1))}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={availabilityForm.control}
                          name="guests"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <FormLabel htmlFor="guests">Guests</FormLabel>
                              <Input
                                type="number"
                                id="guests"
                                {...field}
                                min="1"
                                max={getData?.data?.availability?.guests || 10}
                                className="mt-1"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={availabilityForm.control}
                          name="rooms"
                          render={({ field }) => (
                            <FormItem className="space-y-1.5">
                              <Label htmlFor="rooms">Rooms</Label>
                              <Input
                                type="number"
                                id="rooms"
                                {...field}
                                min="1"
                                max={getData?.data?.availability?.rooms || 5}
                                className="mt-1"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button className="w-full text-lg py-3">
                        Check Availability
                      </Button>
                    </form>
                  </Form>
                  <p className="text-sm text-gray-600 text-center">Best Rate Guaranteed • Free Cancellation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>


      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-300 dark:text-[#4A3322] mb-4">Quality Stays</h2>
            <p className="text-xl text-neutral-300/70 dark:text-[#4A3322]/70 max-w-3xl mx-auto">
              Browse our curated apartments and suites, each designed to be comfortable and stylish.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {getData?.data?.rooms?.map((room: room) => (
              <Card
                key={`featured-rooms-${room.id}`}
                className="overflow-hidden hover:shadow-xl bg-background transition-shadow duration-300 pt-0 px-0 border-0">
                <div className="relative">
                  <Image
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.name}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 text-white ${room.availability === "available"
                      ? "bg-primary"
                      : room.availability === "limited"
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-gray-300 text-gray-700"
                      }`}
                  >
                    {room.availability.charAt(0).toUpperCase() + room.availability.slice(1)}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{room.name}</CardTitle>
                  <div className="flex space-x-2">
                    {[Bed, ShowerHead, Tv, AirVent, Wifi].map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {
                    isSignedIn ? (
                      <BookingDialog
                        room={room}
                        featured
                        page={1}
                      >
                        <Button className="w-full" disabled={room.availability === "booked"}>
                          {room.availability === "booked" ? "Booked" : "Book This Room"}
                        </Button>
                      </BookingDialog>
                    ) : (
                      <Button className="w-full" disabled={room.availability === "booked"}>
                        <Link href={"/sign-up?from=booking"}>
                          {room.availability === "booked" ? "Booked" : "Book This Room"}
                        </Link>
                      </Button>
                    )
                  }
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">World-Class Experiences</h2>
            <p className="text-xl text-muted-foreground">
              Immerse yourself in unique experiences crafted for your enjoyment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getData?.data?.experiences?.map((experience: experience) => (
              <Card
                key={`featured-rooms-${experience.id}`}
                className="overflow-hidden hover:shadow-xl bg-background transition-shadow duration-300 pt-0 px-0 border-0">
                <div className="relative">
                  <Image
                    src={experience.images[0] || "/placeholder.svg"}
                    alt={experience.name}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 text-white ${experience.availability === "available"
                      ? "bg-primary"
                      : experience.availability === "limited"
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-gray-300 text-gray-700"
                      }`}
                  >
                    {experience.availability.charAt(0).toUpperCase() + experience.availability.slice(1)}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{experience.name}</CardTitle>
                  <div className="flex space-x-2">
                    {
                      experience.name === "Private Chef" ? (
                        [ChefHat, UtensilsCrossed, Wine, Table, Flame].map((Icon, iconIndex) => (
                          <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                        ))
                      ) : experience.name === "Personal Trainer" ? (
                        [Dumbbell, Timer, Droplets, Heart, IconYoga].map((Icon, iconIndex) => (
                          <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                        ))
                      ) : [Wine, IconCheese, GlassWater, Music, Sparkles].map((Icon, iconIndex) => (
                        <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                      ))
                    }

                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {experience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* {
                    isSignedIn ? (
                      <BookingDialog
                        room={experience}
                        featured
                        page={1}
                      >
                        <Button className="w-full" disabled={experience.availability === "booked"}>
                          {experience.availability === "booked" ? "Booked" : "Book This Room"}
                        </Button>
                      </BookingDialog>
                    ) : (
                      <Button className="w-full" disabled={experience.availability === "booked"}>
                        <Link href={"/sign-up?from=booking"}>
                          {experience.availability === "booked" ? "Booked" : "Book This Room"}
                        </Link>
                      </Button>
                    )
                  } */}
                  <Button className="w-full bg-gold-gradient">Coming Soon</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-300 dark:text-[#4A3322] mb-4">Exceptional Services</h2>
            <p className="text-xl text-neutral-300/70 dark:text-[#4A3322]/70 max-w-3xl mx-auto">
              Explore our curated services, each thoughtfully designed to enhance your lifestyle with comfort and convenience.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Cleaning Services",
                status: "Available",
                statusColor: "bg-primary",
                image: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                features: [
                  "Thorough housekeeping for all rooms",
                  "Eco-friendly cleaning products",
                  "Flexible scheduling options",
                  "Trained professional staff",
                  "High attention to detail"
                ],
                amenities: [BrushCleaning, SprayCan, ShieldCheck, Clock, Smile]
              },
              {
                name: "Laundry and Dry Cleaning",
                status: "Limited",
                statusColor: "bg-primary",
                image: "https://images.unsplash.com/photo-1696546760882-1d34a7af6800?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                features: [
                  "Pickup and delivery service",
                  "Premium fabric care",
                  "Same-day cleaning available",
                  "Delicate garment handling",
                  "Convenient scheduling"
                ],
                amenities: [Shirt, Truck, Clock, ShieldCheck, Star]
              },
              {
                name: "Dog Walking",
                status: "Exclusive",
                statusColor: "bg-primary",
                image: "https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                features: [
                  "Experienced and trusted walkers",
                  "Flexible walk durations",
                  "Pet-safe walking routes",
                  "Daily photo updates",
                  "Pet-friendly service"
                ],
                amenities: [Dog, Heart, ShieldCheck, Clock, Map]
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl bg-background transition-shadow duration-300 pt-0 px-0 border-0"
              >
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${service.statusColor} text-white`}>
                    {service.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="flex space-x-2">
                    {service.amenities.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="h-4 w-4 text-muted-foreground/70" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground/80"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gold-gradient">Coming Soon</Button>
                </CardContent>
              </Card>
            ))}
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
              <span className="text-lg font-semibold text-muted-foreground ml-2">{averageRating.toFixed(2)}/5</span>
              <span className="text-muted-foreground/60">({testimonials.length} reviews)</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Prime Locations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Situated in the world’s most sought-after destinations,
                with effortless access to local attractions, dining, and
                culture—experience the perfect balance of convenience and
                exclusivity.
              </p>
              <div className="space-y-4">
                {[
                  { name: "Nigeria" },
                  { name: "Canada" },
                  { name: "United States" },
                  { name: "London" },
                ].map((location, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-foreground rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <span className="font-medium text-background">{location.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noCA0DKxjI502fPj-_MDi_68liMJdbmwA95UlyVRsz-lo-l1zdEKkAaZgnRIc1kutqQSULV8FJc9crOnz8TmUcF2zbC-k48OgQSfgLCUD2riEM3Df7C2ciX0HvtCG34KEPNc7Orhw=s680-w680-h510-rw"
                alt="Resort location map"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-foreground p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-background">Lekki Conservational Center, Nigeria</span>
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
                <CardTitle className="text-2xl">Long Stay Offer</CardTitle>
                <CardDescription className="text-amber-100">
                  Book for longer than 28 days and save up to 30%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Book now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
