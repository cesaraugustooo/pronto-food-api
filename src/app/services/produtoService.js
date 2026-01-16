import { create, update, show, destroy } from "../models/produtoModel.js"

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