"use client"

import { cn } from "@/lib/utils"
import { Bed, Bell, Calendar, Car, CheckCircle, CreditCard, Key, MapPin, Users, Utensils, Wifi } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

const CheckFilled = ({ className }: { className?: string }) => {
    return <CheckCircle className={cn("w-6 h-6", className)} />
}

// Custom icons for different hospitality loading states
const LoadingIcon = ({ type, className }: { type: string; className?: string }) => {
    const iconMap = {
        booking: Calendar,
        room: Bed,
        location: MapPin,
        guests: Users,
        payment: CreditCard,
        checkin: Key,
        dining: Utensils,
        parking: Car,
        amenities: Wifi,
        service: Bell,
        complete: CheckCircle,
    }

    const Icon = iconMap[type as keyof typeof iconMap] || Calendar
    return <Icon className={cn("w-6 h-6", className)} />
}

type LoadingState = {
    text: string
    icon?: string
}

const LoaderCore = ({
    loadingStates,
    value = 0,
}: {
    loadingStates: LoadingState[]
    value?: number
}) => {
    return (
        <div className="flex relative justify-start max-w-xl mx-auto flex-col mt-40">
            {loadingStates.map((loadingState, index) => {
                const distance = Math.abs(index - value)
                const opacity = Math.max(1 - distance * 0.2, 0)
                const isCompleted = index < value
                const isCurrent = index === value

                return (
                    <motion.div
                        key={index}
                        className={cn("text-left flex gap-3 mb-6 items-center")}
                        initial={{ opacity: 0, y: -(value * 40) }}
                        animate={{ opacity: opacity, y: -(value * 40) }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            {isCompleted ? (
                                <CheckFilled className={cn("text-[#2E5E45] dark:text-[#3B7A57]")} />
                            ) : isCurrent ? (
                                <div className="relative">
                                    <LoadingIcon type={loadingState.icon || "booking"} className={cn("text-primary animate-pulse")} />
                                    <div className="absolute inset-0 rounded-full border-2 border-primary dark:border-primary-foreground animate-spin border-t-transparent" />
                                </div>
                            ) : (
                                <LoadingIcon type={loadingState.icon || "booking"} className="text-gray-400 dark:text-gray-600" />
                            )}
                        </div>
                        <div className="flex-1">
                            <span
                                className={cn(
                                    "text-lg font-medium",
                                    isCompleted && "text-[#2E5E45] dark:text-[#3B7A57]",
                                    isCurrent && "text-primary font-semibold",
                                    !isCompleted && !isCurrent && "text-gray-500 dark:text-gray-600",
                                )}
                            >
                                {loadingState.text}
                            </span>
                            {isCurrent && (
                                <motion.div
                                    className="h-1 bg-primary rounded-full mt-2"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            )}
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export const MultiStepLoader = ({
    loadingStates,
    loading,
    duration = 2000,
    loop = true,
}: {
    loadingStates: LoadingState[]
    loading?: boolean
    duration?: number
    loop?: boolean
}) => {
    const [currentState, setCurrentState] = useState(0)

    useEffect(() => {
        if (!loading) {
            setCurrentState(0)
            return
        }

        const timeout = setTimeout(() => {
            setCurrentState((prevState) =>
                loop
                    ? prevState === loadingStates.length - 1
                        ? 0
                        : prevState + 1
                    : Math.min(prevState + 1, loadingStates.length - 1),
            )
        }, duration)

        return () => clearTimeout(timeout)
    }, [currentState, loading, loop, loadingStates.length, duration])

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl bg-black/20 dark:bg-black/40"
                >
                    <div className="bg-white/65 bg:bg-gray-900/70 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/65 dark:border-gray-700/70 p-8 max-w-md w-full mx-4">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                                <Bed className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-800 mb-2">Processing Your Reservation</h2>
                            <p className="text-gray-600 dark:text-gray-600">Please wait while we prepare your stay</p>
                        </div>
                        <div className="h-96 relative overflow-hidden">
                            <LoaderCore value={currentState} loadingStates={loadingStates} />
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500 dark:text-gray-600">This may take a few moments...</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Predefined loading states for common hospitality scenarios
export const homepageLoadingStates: LoadingState[] = [
    { text: "Welcome to Aurevo", icon: "location" },
    { text: "Loading room availability", icon: "room" },
    { text: "Preparing amenities showcase", icon: "amenities" },
    { text: "Fetching current offers", icon: "booking" },
    { text: "Personalizing your experience", icon: "service" },
    { text: "Homepage ready!", icon: "complete" },
];

export const editRoomsLoadingStates: LoadingState[] = [
  { text: "Fetching room details", icon: "file-search" },
  { text: "Loading images and media", icon: "image" },
  { text: "Retrieving amenities", icon: "list" },
  { text: "Preparing room editor", icon: "pencil" },
  { text: "Applying saved configurations", icon: "sliders" },
  { text: "Edit page ready!", icon: "check-circle" },
];

export const hotelBookingStates: LoadingState[] = [
    { text: "Checking room availability", icon: "room" },
    { text: "Processing payment", icon: "payment" },
    { text: "Confirming your dates", icon: "booking" },
    { text: "Preparing your reservation", icon: "checkin" },
    { text: "Booking confirmed!", icon: "complete" },
];

export const checkInStates: LoadingState[] = [
    { text: "Verifying your reservation", icon: "booking" },
    { text: "Preparing your room", icon: "room" },
    { text: "Generating room keys", icon: "checkin" },
    { text: "Welcome to our hotel!", icon: "complete" },
];

export const roomServiceStates: LoadingState[] = [
    { text: "Receiving your order", icon: "dining" },
    { text: "Preparing your meal", icon: "service" },
    { text: "Dispatching to your room", icon: "room" },
    { text: "Order on its way!", icon: "complete" },
];

export const conciergeStates: LoadingState[] = [
    { text: "Understanding your request", icon: "service" },
    { text: "Checking local availability", icon: "location" },
    { text: "Making arrangements", icon: "booking" },
    { text: "All set for you!", icon: "complete" },
];

export const amenityBookingStates: LoadingState[] = [
    { text: "Checking spa availability", icon: "amenities" },
    { text: "Reserving your slot", icon: "booking" },
    { text: "Confirming your appointment", icon: "service" },
    { text: "Spa booking confirmed!", icon: "complete" },
];

export const vipServiceStates: LoadingState[] = [
    { text: "Arranging airport pickup", icon: "parking" },
    { text: "Preparing VIP suite", icon: "room" },
    { text: "Coordinating concierge services", icon: "service" },
    { text: "VIP experience ready!", icon: "complete" },
];
