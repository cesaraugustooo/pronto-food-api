import { show } from "../models/empresaModel.js";
import { create } from "../models/pedidoModel.js";
import { AppError } from "../errors/errorHandler.js";

export const storeService = async ({slug,data}) => {
    const empresa = await show(slug);

    if(!empresa){
        throw new AppError("Empresa nao encontrada, tente novamente mais tarde.",404)
    }

    for(let i = 0; i < 3; i++){
        try {
            return await create({empresa_id: empresa.id, data});            
        } catch (error) {
            if(error.code !== "P2034"){
                throw error
            }
        }
    }
} 