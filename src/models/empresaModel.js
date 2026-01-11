import { prisma } from "../core/database.js"

export const create = async (prismaClient, data) => {
    return await prismaClient.empresa.create({ data: data })
}

export const update = async (id,data) => {
    const empresa = await prisma.empresa.update({
        where: {id: Number(id)},
        data: data
    })

    return empresa;
}

export const show = (slug) => {
    const empresa =  prisma.empresa.findUnique({
        where:{
            slug: slug
        }
    })

    return empresa;
}

export const index = async (user) => {
    return await prisma.user.findUnique({
        where: {
            id: user.user_id
        },
        select: {
            id: true,
            name: true,
            email: true,
            empresa: {
                select: {
                    id: true,
                    nome: true,
                    slug: true,
                    ativo: true,
                    inicio_exp: true,
                    fim_exp: true,
                    categorias: {
                        select: {
                            id: true,
                            nome: true,
                            ativo: true,
                            produtos: true
                        }
                    }
                }
            }
        }
    
    });
}
