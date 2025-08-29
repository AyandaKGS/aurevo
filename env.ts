import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        REDIS_URL: z.string().min(1),
        STRIPE_SECRET_KEY: z.string().min(1),
        CLERK_SIGNING_SECRET: z.string().min(1),
        STRIPE_WEBHOOK_SECRET: z.string().min(1),
        EMAIL_USER: z.string().min(1),
        EMAIL_PASSWORD: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_BASE_URL: z.string().min(1),
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    }
})