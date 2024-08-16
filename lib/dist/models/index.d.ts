import { z } from 'zod';
export declare const dalai = "dalai";
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    age: z.ZodNumber;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    email: string;
    age: number;
}, {
    id: string;
    name: string;
    email: string;
    age: number;
}>;
