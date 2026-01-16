import { hashed } from "../services/bcryptService.js"; 

export const create = async (prismaClient,data) => {
    const password = await hashed(data.password);
    return await prismaClient.user.create({ data:{...data,password: password } })
}
