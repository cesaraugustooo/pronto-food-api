import { z } from "zod"

export const UserCreate = z.object({
    nome: z.string().max(100),
    email: z.string().max(255),
    password: z.string().max(10)
})