import { showService, storeService } from "../services/pedidoService.js"

export const store = async (req,res,next) => {
    try {
        const slug = req.params.slug;
        const pedidoBody = req.body.pedido;
        const produtos = req.body.produtos;

        const pedido = await storeService({slug,data: pedidoBody,produtosData: produtos.ids});

        return res.json(pedido);
    } catch (error) {
        next(error)
    }
}

export const show = async (req,res,next) => {
    try {
        const id = req.params.id;

        const pedido = await showService({ id });

        return res.json(pedido);
    } catch (error) {
        next(error)
    }
}