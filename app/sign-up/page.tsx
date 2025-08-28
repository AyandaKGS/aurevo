"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSignIn, useSignUp } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { Building, Home, Loader, Users } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod";
import { OAuthStrategy } from "@clerk/types";
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const signUpSchema = z.object({
    firstName: z.string().min(1, "Please enter a first name"),
    lastName: z.string().min(1, "Please enter a last name"),
    email: z.email({ error: "Please enter a valid email address" }),
    role: z.string({ error: "Please select a role." })
});

type SignUpData = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
    return (
        <Suspense>
            <SignUpComp />
        </Suspense>
    )
};
export function SignUpComp() {
    const searchParams = useSearchParams();
    const { isLoaded, signUp } = useSignUp();
    const { signIn, setActive } = useSignIn();
    const [userRole, setUserRole] = useState<"guest" | "host">("guest");
    const [loading, setLoading] = useState(true);
    const [from, setFrom] = useState("");
    const router = useRouter();

    const signUpForm = useForm<SignUpData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            role: userRole
        }
    });

    async function onSubmit(data: SignUpData) {
        if (!isLoaded && !signUp) return null;

        const { email, firstName, lastName } = data;

        try {
            await signUp.create({
                emailAddress: email,
                firstName,
                lastName,
                unsafeMetadata: {
                    role: userRole,
                }
            })

            await signUp.prepareEmailAddressVerification();
            toast.success("Success, verification email sent to " + email, {
                description: "Redirecting"
            });
            router.push(`/verify-email?isSignUp=true`);

        } catch (error: any) {
            console.error("Error", JSON.stringify(error, null, 2));
            toast.error(error.errors[0].longMessage);
        }
    }

    const signUpWith = (strategy: OAuthStrategy) => {
        if (!isLoaded && !signUp) return null;
        try {
            signUp.authenticateWithRedirect({
                strategy,
                unsafeMetadata: {
                    role: userRole,
                },
                redirectUrl: `/sign-up/sso-callback?role=${userRole}`,
                redirectUrlComplete: "/",
            });
        } catch (error) {
            console.error("Error signing up", error);
        }
    };

    const handleOAuthSignUp = async (strategy: OAuthStrategy) => {
        if (!isLoaded && !signUp || !signIn) return null;

        try {
            const userExistsButNeedsToSignIn =
                signUp.verifications.externalAccount.status === "transferable" &&
                signUp.verifications.externalAccount.error?.code ===
                "external_account_exists";

            if (userExistsButNeedsToSignIn) {
                const res = await signIn.create({ transfer: true });


                if (res.status === "complete") {
                    setActive({
                        session: res.createdSessionId,
                    });
                    router.push("/");
                    return
                }
            }

            const userNeedsToBeCreated =
                signIn.firstFactorVerification.status === "transferable";

            if (userNeedsToBeCreated) {
                const res = await signUp.create({
                    transfer: true,
                    unsafeMetadata: {
                        role: userRole,
                    }
                });

                if (res.status === "complete") {
                    setActive({
                        session: res.createdSessionId,
                    });
                    router.push("/");
                }
            } else {
                signUpWith(strategy);
            }
        } catch (error) {
            console.error("Error signing up", error);
        }
    };

    useEffect(() => {
        const from = searchParams.get("from");
        if (from) setFrom(from);
        setLoading(false);
    }, [searchParams]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading Sign-up...</p>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center border-t-[1px] px-4 py-8">
            <Card className="w-full max-w-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">{from === "booking" ? "Sign up or Login to book." : "Join Aurevo"}</CardTitle>
                    <CardDescription className="text-center">
                        {userRole === "guest"
                            ? "Find and book amazing accommodations worldwide"
                            : "Share your space and earn money as a host"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-3">
                        <Label className="text-sm font-medium">I want to join as a:</Label>
                        <Tabs value={userRole} onValueChange={(value) => {
                            setUserRole(value as "guest" | "host")
                            signUpForm.setValue("role", value)
                        }} className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="guest" className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    Guest
                                </TabsTrigger>
                                <TabsTrigger value="host" className="flex items-center gap-2">
                                    <Home className="h-4 w-4" />
                                    Host
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background dark:bg-card px-2 text-muted-foreground">Continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <Button
                                variant="outline"
                                disabled={signUpForm.formState.isSubmitting}
                                onClick={() => handleOAuthSignUp("oauth_google")}
                                className="w-full flex items-center justify-center gap-3 h-11 bg-transparent"
                            >
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </Button>

                            <Button
                                variant="outline"
                                disabled={signUpForm.formState.isSubmitting}
                                onClick={() => handleOAuthSignUp("oauth_apple")}
                                className="w-full flex items-center justify-center gap-3 h-11 bg-transparent"
                            >
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                </svg>
                                Continue with Apple
                            </Button>

                            <Button
                                variant="outline"
                                disabled={signUpForm.formState.isSubmitting}
                                onClick={() => handleOAuthSignUp("oauth_linkedin_oidc")}
                                className="w-full flex items-center justify-center gap-3 h-11 bg-transparent"
                            >
                                <svg
                                    className="mr-2 h-4 w-4"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="24" height="24" fill="#0A66C2" /> {/* LinkedIn blue background */}
                                    <path
                                        fill="#FFFFFF"
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                                    />
                                </svg>
                                Continue with LinkedIn
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background dark:bg-card px-2 text-muted-foreground">Or continue with email</span>
                            </div>
                        </div>
                    </div>

                    <Form {...signUpForm}>
                        <form onSubmit={signUpForm.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={signUpForm.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel htmlFor="firstName">First name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="firstName"
                                                    placeholder="John"
                                                    {...field}
                                                    required
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signUpForm.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel htmlFor="lastName">Last name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    {...field}
                                                    required
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={signUpForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                placeholder="Doe"
                                                {...field}
                                                required
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                {
                                    signUpForm.formState.isSubmitting ? (
                                        <>
                                            <Loader className="mr-2 h-4 w-4 animate-spin" />
                                            {userRole === "guest" ? "Creating guest account..." : "Creating host account..."}
                                        </>
                                    ) : userRole === "guest" ? "Create guest account" : "Create host account"
                                }
                            </Button>
                            <div id="clerk-captcha" />
                        </form>
                    </Form>
                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <a href="/sign-in" className="text-primary hover:underline">
                            Sign in
                        </a>
                    </div>
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-start gap-3">
                            {userRole === "guest" ? (
                                <Users className="h-5 w-5 text-primary mt-0.5" />
                            ) : (
                                <Building className="h-5 w-5 text-primary mt-0.5" />
                            )}
                            <div>
                                <h4 className="font-medium text-sm mb-1">
                                    {userRole === "guest" ? "Guest Benefits" : "Host Benefits"}
                                </h4>
                                <ul className="text-xs text-muted-foreground space-y-1">
                                    {userRole === "guest" ? (
                                        <>
                                            <li>• Access to luxury accommodations worldwide</li>
                                            <li>• Access to booking discounts and first time offers.</li>
                                            <li>• 24/7 customer support</li>
                                            <li>• Secure booking and payment protection</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>• Earn money from your property</li>
                                            <li>• 24/7 customer support</li>
                                            <li>• Host payment insurance</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
