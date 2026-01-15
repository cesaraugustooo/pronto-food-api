import { prisma } from "../core/database.js";
import { create as pedidoHasProdutoCreate } from "./pedidoHasProdutoModel.js"

export const index = async ({ empresa_id, skip, take }) => {

}

export const create = async ({ empresa_id, data, produtosData }) => {

      const pedido = await prisma.$transaction(
         async (tx) => {
            const ultimo = await tx.pedido.findFirst({
               where: { empresa_id },
               orderBy: { numero: 'desc' }
            })

            const numero = (ultimo?.numero ?? 0) + 1

            let totalPedido =  0;

            produtosData.map(produto => totalPedido += produto.preco_snapshot);

            const pedido = await tx.pedido.create({
               data: { ...data, empresa_id, numero, total: totalPedido}
            })

            const insertProduts = produtosData.map(produto => ({...produto, pedido_id: pedido.id}));

            const pedidoHasProdutos = await pedidoHasProdutoCreate(insertProduts,tx);

            return {
               pedido: pedido,
               produtos: pedidoHasProdutos
            }
         },
         {
            isolationLevel: 'Serializable'
         }
      )

      return pedido;
}


export const show = async ({ id }) => {
   return await prisma.pedido.findUnique({where:{ id }});
}
