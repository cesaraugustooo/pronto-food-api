import { show } from "../models/empresaModel.js";
import { create, show as showPedido } from "../models/pedidoModel.js";
import { AppError } from "../errors/errorHandler.js";
import { createService as produtoHasPedidoCReateService } from "./pedidoHasProdutoService.js";

export const storeService = async ({slug, data, produtosData}) => {
    const empresa = await show(slug);

    if(!empresa){
        throw new AppError("Empresa nao encontrada, tente novamente mais tarde.",404)
    }

    for(let i = 0; i < 3; i++){
        try {
            const produtosInsertion = await produtoHasPedidoCReateService({data: produtosData, empresa_id: empresa.id});
            const {pedido,produtos} = await create({empresa_id: empresa.id, data, produtosData: produtosInsertion}); 
            
            return pedido;
        } catch (error) {
            if(error.code !== "P2034"){
                throw error
            }
        }
    }
} 

export const showService = async ({ id }) => {
    const pedido = await showPedido({ id });

    if(!pedido){
        throw new AppError("pedido não encontrado",404);
    }

    return pedido;
}