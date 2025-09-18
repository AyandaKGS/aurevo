"use client";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

export default function NavBar() {
    return (
        <Suspense>
            <NavbarComp />
        </Suspense>
    )
};

export function NavbarComp() {
    const { user } = useUser();
    const { isSignedIn, signOut } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [role, setRole] = useState("");
    const router = useRouter();

    const navItems = [
        {
            name: "Rooms",
            link: "/rooms",
        },
        {
            name: "Experiences",
            link: "/#experiences",
        },
        {
            name: "Services",
            link: "/#services",
        },
    ];

    useEffect(() => {
        if (user) setRole(user.publicMetadata?.role as string);
    }, [user]);

    return (
        <Navbar className="top-0">
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={
                    role === "host" ?
                        navItems.concat([{ name: "CMS", link: "/cms" }])
                        : navItems
                } />
                <div className="flex items-center gap-5">
                    <NavbarButton variant="secondary" className="relative left-6">
                        <DarkModeToggle />
                    </NavbarButton>
                    {isSignedIn ? (
                        <>
                            <NavbarButton
                                onClick={() => {
                                    // router.push("/profile")
                                    signOut()
                                }}
                                variant="secondary"
                                className={`relative cursor-pointer overflow-hidden transition-all duration-300 group rounded-full size-9 p-0`}
                                aria-label="Go to user profile"
                            >
                                <Avatar className="size-9">
                                    <AvatarImage src={user?.imageUrl || "/placeholder.svg"} alt={user?.firstName ? user?.firstName + " " + user?.lastName : "User"} />
                                    <AvatarFallback>
                                        <User className="w-5 h-5" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full" />
                            </NavbarButton>
                        </>
                    ) :
                        (
                            <NavbarButton
                                onClick={() => {
                                    router.push("/sign-in")
                                }}
                                variant="secondary"
                            >
                                Sign In
                            </NavbarButton>
                        )
                    }
                    {/* <NavbarButton variant="primary">Send a message</NavbarButton> */}
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">              <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                    >
                        <DarkModeToggle />
                    </NavbarButton>
                        {isSignedIn ? (
                            <>
                                <NavbarButton
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        router.push("/profile")
                                    }}
                                    variant="primary"
                                    className={`relative cursor-pointer overflow-hidden transition-all duration-300 group`}
                                    aria-label="Go to user profile"
                                >
                                    <Avatar className="size-10">
                                        <AvatarImage src={user?.imageUrl || "/placeholder.svg"} alt={user?.firstName ? user?.firstName + " " + user?.lastName : "User"} />
                                        <AvatarFallback>
                                            <User className="w-5 h-5" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full" />
                                </NavbarButton>
                                <NavbarButton
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        router.push("/rooms")
                                    }}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Book now
                                </NavbarButton>
                            </>
                        ) :
                            (
                                <NavbarButton
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        router.push("/sign-in")
                                    }}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Sign In
                                </NavbarButton>
                            )
                        }
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar >
    );
}
