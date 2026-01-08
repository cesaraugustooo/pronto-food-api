import { prisma } from "../core/database.js";

export const index = async ({ empresa_id, skip, take }) => {
   
}

export const create = async ({ empresa_id, data }) => {
   return prisma.empresa.create({data: {...data,empresa_id}})
}

export const show = async ({ id }) => {
   
}
