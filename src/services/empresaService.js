import { prisma } from "../core/database.js";
import { AppError } from "../errors/errorHandler.js";
import { index, show, update } from "../models/EmpresaModel.js";

export const indexService = async (user) => {
    return await index(user);
}

export const updateService = async (id,data) =>{
    const empresa = await update(id,data);
    return empresa;
} 

export const showService = async (slug) =>{
    const empresa = await show(slug);

    if(!empresa){
        throw new AppError("Empresa nao encontrada, tente novamente mais tarde.",404)
    }

    return empresa;   
} 
