import { prisma } from "../core/database.js";

export const show = async ({id}) => {
    const produto =  await prisma.produto.findUnique({
        where: { id: id },
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
        where: { id: id},
        data: data
    });

    return produto;
}

export const destroy = async ({id}) => {
    await prisma.produto.update({
        where: { id: id },
        data: {
            ativo: false
        }
    });
}

export const findMany = async ({ ids, empresa_id }) => {

  return prisma.produto.findMany({ where: { empresa_id, id: { in: ids } }, select: {id: true, nome: true, preco: true} })
}
