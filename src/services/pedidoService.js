import { show } from "../models/empresaModel";
import { create } from "../models/pedidoModel"

export const storeService = async ({slug,data}) => {
    const empresa = show(slug);
    return await create({empresa_id: empresa.id, data});
} 