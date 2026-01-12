import { float32, string, z } from "zod";

export const pedidoCreateDTO = z.object({
    nome_cliente: string().max(50),
    telefone_cliente: string().max(12),
    endereco_cliente: string().max(191),
    observacoes_cliente:string().max(191),
    total: float32()
}).strict();