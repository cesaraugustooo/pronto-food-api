import { prisma } from "../core/database.js"

export const create = async (prismaClient,data) => {
    return await prismaClient.empresa.create({ data })
}
