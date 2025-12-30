import { z } from "zod";
import { timeSchema } from "./timerDTO.js";

export const updateDTO = z.object({
    nome: z.string().max(255).optional(),
    slug: z.string().max(255).optional(),
    inicio_exp: timeSchema.optional(),
    fim_exp: timeSchema.optional()
}).strict()