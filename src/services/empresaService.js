import { create as empresaCreateModel } from "../models/EmpresaModel.js";
import { create as userCreateModel }  from "../models/UserModel.js";
import { prisma } from "../core/database.js";
import { AppError } from "../errors/errorHandler.js";

export const empresaCreate = async (data) => {
    const user = await prisma.user.findUnique({
        where:{
            email: data.user.email
        }
    });
    
    if(user){
        throw new AppError("Email ja cadastrado por outro usuario.",400);
    }

    const result = await prisma.$transaction(
        async (tx) => {
            const empresaCreated = await empresaCreateModel(tx,data.empresa)
            const userCreated = await userCreateModel(tx,{ ...data.user,empresa_id: empresaCreated.id })

            return { empresa: empresaCreated, user: userCreated }
        }
    )

    return result
}
