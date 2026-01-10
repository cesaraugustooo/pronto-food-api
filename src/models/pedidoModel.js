import { prisma } from "../core/database.js";

export const index = async ({ empresa_id, skip, take }) => {

}

export const create = async ({ empresa_id, data }) => {

      const pedido = await prisma.$transaction(
         async (tx) => {
            const ultimo = await tx.pedido.findFirst({
               where: { empresa_id },
               orderBy: { numero: 'desc' }
            })

            const numero = (ultimo?.numero ?? 0) + 1

            return tx.pedido.create({
               data: { ...data, empresa_id, numero }
            })
         },
         {
            isolationLevel: 'Serializable'
         }
      )

}


export const show = async ({ id }) => {

}
