import type { createInterface, pedidoHasProduto } from "../core/interfaces/pedidoHasProdutoInterface.js";
import { AppError } from "../errors/errorHandler.js";
import { create } from "../models/pedidoHasProdutoModel.js";
import { findMany } from "../models/produtoModel.js";

export const createService = async ({ data, empresa_id }: createInterface): Promise<pedidoHasProduto[]>  => {
    const products = await findMany({ ids: data, empresa_id });

    if(products.length == 0){
        throw new AppError("Nenhum produto foi encontrado",404);
    }

    const productMap = new Map(products.map(obj => [obj.id,obj]));

    const produtosInsert: pedidoHasProduto[] = data.map(id => {
        const produto = productMap.get(id);

        if(!produto){
            throw new AppError(`O produto de id ${id} selecionado não pertence a empresa selecionada`,409);
        }

        return {
            nome_snapshot: produto.nome,
            preco_snapshot: produto.preco,
            produto_id: id
        }

    }); 

    return produtosInsert;
}
