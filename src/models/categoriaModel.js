import { prisma } from "../core/database.js";

export const create = async ({ empresa_id, data }) => {
    const empresa = Number(empresa_id);

    const categoria = await prisma.categoria.create({data: {...data,empresa_id: empresa}});

    return categoria;
}

export const show = async ({ id }) => {
    const categoria = await prisma.categoria.findUnique({
        where:{ id: Number(id), ativo: true },
        include: { produtos: true }
    });

    return categoria;
}

export const update = async ({ id, data }) => {
    const categoria = await prisma.categoria.update({
        where:{ id: Number(id)},
        data: data
    })

    return categoria
}

export const destroy = async ({ id }) => {
    const categoria = await prisma.categoria.update({
        where:{ id: Number(id)},
        data: {
            ativo: false
        }
    })
}