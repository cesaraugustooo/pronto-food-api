import { prisma } from "../core/database.js";

export const index = async () => {
    //Paginate
}

export const show = async ({id}) => {
    const produto =  await prisma.produto.findUnique({
        where: { id: Number(id) },
        limit
    });

    return produto;
}

export const create = async ({ empresa_id, categoria_id, data }) => {
    const produto = await prisma.produto.create({
        data:{ ...data, empresa_id: empresa_id, categoria_id: categoria_id }
    });

    return produto;
}

export const update = async ({ id, data }) => {
    const produto = await prisma.produto.update({
        where: { id: Number(id)},
        data: data
    });

    return produto;
}

export const destroy = async ({id}) => {
    await prisma.produto.update({
        where: { id: Number(id) },
        data: {
            ativo: false
        }
    });
}