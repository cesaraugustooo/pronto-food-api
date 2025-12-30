import { string, z } from "zod"

export const createDTO = z.object({
    nome: string().max(150)
}).strict()

export const updateDTO = z.object({
    nome: string().max(150)
}).strict()