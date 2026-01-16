import { prisma } from "../core/database.js";

export const index = async ({ empresa_id, skip, take }) => {
    const [categorias,total] = await prisma.$transaction([
        prisma.categoria.findMany({
            where: { empresa_id: empresa_id },
            include: { produtos: true },
            skip,take    
        }),
        prisma.categoria.count({  where: { empresa_id: empresa_id },})
    ]);

    const totalPage = Math.ceil( total / take );

    return {total, totalPage, categorias};
}

export const create = async ({ data }) => {
    const empresa = data.empresa_id;

    const categoria = await prisma.categoria.create({data: {...data,empresa_id: empresa}});

    return categoria;
}

export const show = async ({ id }) => {
    const categoria = await prisma.categoria.findUnique({
        where:{ id: id, ativo: true },
        include: { produtos: true }
    });

    return categoria;
}

export const update = async ({ id, data }) => {
    const categoria = await prisma.categoria.update({
        where:{ id: id},
        data: data
    })

    return categoria
}

export const destroy = async ({ id }) => {
    const categoria = await prisma.categoria.update({
        where:{ id: id},
        data: {
            ativo: false
        }
    })
}