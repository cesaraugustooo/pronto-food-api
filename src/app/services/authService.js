import { prisma } from "../core/database.js"
import bcrypt from "bcrypt";
import { AppError } from "../errors/errorHandler.js";
import { create as userCreate } from "../models/userModel.js";
import { create as empresaCreate } from "../models/empresaModel.js";
import { createToken } from "./jwtService.js";

export const loginService = async (data,params) => {
    const user = await prisma.user.findUnique({
        where:{
            email: data.email,
        }
    });

    if(!user){
        throw new AppError("Credenciais Invalidas!",401);
    }

    const senhaParse = await bcrypt.compare(data.password,user.password);

    if(!senhaParse){
        throw new AppError("Credenciais Invalidas!",401);
    }

    const token = await createToken(user);

    return token;
}

export const registerService = async (data) => {
    const user = await prisma.user.findUnique({
        where:{
            email: data.user.email
        }
    });

    if(user){
        throw new AppError("Email ja cadastrado.",409);
    }

    try{
        const result = await prisma.$transaction(async (tx) => {
            const empresa = await empresaCreate(tx,data.empresa);
            const user = await userCreate(tx,{...data.user,empresa_id: empresa.id});

            return {empresa: empresa, user: user};
            }
        )

        return result;
        
    }catch(error){
        console.log(error);
        throw new AppError("Erro ao registrarse.",400);
    }
}