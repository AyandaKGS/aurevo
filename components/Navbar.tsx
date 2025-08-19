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
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export function NavbarComp() {
    const { isSignedIn, signOut } = useAuth();
    const router = useRouter();

    const navItems = [
        {
            name: "Rooms",
            link: "/rooms",
        },
        {
            name: "Experiences",
            link: "/experiences",
        },
        {
            name: "Services",
            link: "/services",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar className="top-0">
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <NavbarButton variant="secondary" className="relative left-6">
                        <DarkModeToggle />
                    </NavbarButton>
                    {isSignedIn ? (
                        <>
                            <NavbarButton
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    signOut();
                                }}
                                variant="secondary"
                            >
                                Sign Out
                            </NavbarButton>
                        </>
                    ) :
                        (
                            <NavbarButton
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    router.push("/sign-in")
                                }}
                                variant="secondary"
                            >
                                Sign In
                            </NavbarButton>
                        )
                    }
                    <NavbarButton variant="primary">Send a message</NavbarButton>
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
                                        signOut();
                                    }}
                                    variant="primary"
                                    className="w-full"
                                >
                                    Sign Out
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
