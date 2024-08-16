import { z } from 'zod';
export const dalai = "dalai";

export const UserSchema = z.object({
    id: z.string().uuid(), // UUID string
    name: z.string().min(1), // Non-empty string
    age: z.number().int().min(0), // Non-negative integer
    email: z.string().email(), // Valid email address
});