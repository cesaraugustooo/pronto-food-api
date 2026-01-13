import { prisma } from "./src/core/database.js";

const test = async (ids) => {
    const products = await prisma.produto.findMany({
        where: { id: {in: ids}, empresa_id: 2},
     
    });

    console.log(products);
}
test([2,3]);