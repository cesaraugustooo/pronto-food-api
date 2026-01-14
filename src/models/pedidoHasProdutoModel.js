import { prisma } from "../core/database.js";

export const create = async ({ data }) => {
    const bulkInsertion = await prisma.produtoHasPedido.createMany({ data });

    return bulkInsertion;
}