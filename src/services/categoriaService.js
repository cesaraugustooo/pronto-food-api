import { create, destroy, show, update } from "../models/categoriaModel.js"
import { AppError } from "../errors/errorHandler.js";

export const storeService = async ({ empresa_id, data}) => {
    const categoria = await create({empresa_id: empresa_id, data: data});

    return categoria;
}

export const updateService = async ({id, data}) => {
    const categoria = await update({id: id, data: data});

    return categoria;
}

export const deleteService = async ({id}) => {
    await destroy({id: id});
} 

export const showService = async ({id}) => {
    const categoria = await show({id: id});
    
    if(!categoria){
        throw new AppError("categoria não encontrada.",404);
    }

    return categoria;
}