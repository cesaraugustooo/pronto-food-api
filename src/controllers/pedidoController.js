import { storeService } from "../services/pedidoService.js"

export const store = async (req,res,next) => {
    try {
        const slug = req.params.slug
        const data = req.body

        const pedido = await storeService({slug,data});

        return res.json(pedido);
    } catch (error) {
        next(error)
    }
}