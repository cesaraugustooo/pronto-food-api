import { z } from "zod";

export const timeSchema = z
  .string()
  .refine((value) => {
    const [h, m] = value.split(":").map(Number);
    return h >= 0 && h <= 23 && m >= 0 && m <= 59;
  }, {
    message: "Horário inválido",
});
