import { create } from "../models/pedidoHasProdutoModel.js";
import { findMany } from "../models/produtoModel.js";

export const createService = async ({ data, empresa_id, pedido_id }) => {
    const products = await findMany({ ids: data, empresa_id });

    if(products.length != data.length){
       
    }

    const produtosInsert = [];

    for(const produto of products){
        produtosInsert.push({nome_snapshot: produto.nome,produto_id: produto.id, pedido_id})
    }

    console.log(produtosInsert);

}
