import { z } from "zod"
import { timeSchema } from "./timerDTO.js";

export const createdSchema = z.object({
    empresa: z.object({
        nome: z.string().max(255),
        slug: z.string().max(255),
        inicio_exp: timeSchema,
        fim_exp: timeSchema
    }).strict(),
    user: z.object({
        name: z.string().max(100),
        email: z.string().max(255),
        password: z.string().max(10),
    }).strict()
}).strict();

export const loginSchema = z.object({
    email: z.string().max(255),
    password: z.string().max(10),
}).strict();