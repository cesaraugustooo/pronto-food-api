import { prisma } from "../core/database.js";
import type { pedidoHasProduto } from "../core/interfaces/pedidoHasProdutoInterface.js";

export const create = async (data: pedidoHasProduto[], prisma: any ) => {
    const bulkInsertion = await prisma.produtoHasPedido.createMany({data: data});

    return bulkInsertion;
}