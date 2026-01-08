import { storeService } from "../services/pedidoService"

export const store = (req,res,next) => {
    try {
        const slug = req.params.slug
        const data = req.body

        const pedido = storeService({slug,data});

        return res.json(pedido);
    } catch (error) {
        next(error)
    }
}