import { z } from "zod";

export const contactSchema = z.object({
    name: z.string(),
    lastname: z.string().optional(),
    number: z.string()
});

export const contactUpdateSchema = z.object({
    name: z.string().optional(),
    lastname: z.string().optional(),
    number: z.string().optional()
});

export const contactDeleteSchema = z.object({
    number: z.string()
});

