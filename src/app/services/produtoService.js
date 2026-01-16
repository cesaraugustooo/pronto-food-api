import { AppError } from "../errors/errorHandler.js";
import { create, update, show, destroy, finByCategory } from "../models/produtoModel.js"

export const indexService = async ({categoria, skip, take}) => {
    const produtos = await finByCategory({ categoria, skip, take });

    if(produtos.produtos.length == 0){
        throw new AppError("categoria não encontrada.",404);
    }

    return produtos;
}

export const showService = async ({id}) => {
    const produto = await show({id});

    return produto;
}

export const createService = async ({ data}) => {
    const produto = await create({ data });

    return produto;
}

export const updateService = async ({ id, data }) => {
    const produto = await update({ id , data});

    return produto;
}

export const deleteService = async ({id}) => {
    await destroy({id});
}