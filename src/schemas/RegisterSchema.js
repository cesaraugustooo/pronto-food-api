import { z } from "zod"

export const createdSchema = z.object({
    empresa: z.object({
        nome: z.string().max(255),
        slug: z.string().max(255)
    }),
    user: z.object({
        name: z.string().max(100),
        email: z.string().max(255),
        password: z.string().max(10),
    })
})