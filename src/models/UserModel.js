export const create = async (prismaClient,data) => {
    return await prismaClient.user.create({ data })
}
