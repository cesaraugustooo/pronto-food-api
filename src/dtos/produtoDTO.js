import { string, z } from "zod";

export const createDTO = z.object({
    nome: string().max(190),
    descricao: string().max(500).optional(),
}).strict()

export const updateDTO = z.object({
    nome: string().max(190).optional(),
    descricao: string().max(500).optional(),
}).strict()

