import { createService, updateService, deleteService } from "../services/produtoService.js";

export const index = async () => {

}

export const show = async (req,res,next) => {
    try {
        const produto = req.resource;

        return res.json(produto)
    } catch (error) {
        next(error)
    }
}

export const create = async (req,res,next) => {
    try {
        const data = {...req.body, empresa_id: req.user.empresa_id, categoria_id: req.resource.id};
        
        const produto = await createService({ data })

        return res.json(produto);

    } catch (error) {
        next(error)
    }
}

export const update = async (req,res,next) => {
    try {
        const id = req.params.produto;
        const data = req.body;
    
        const produto = await updateService({ id, data });
    
        return res.json(produto);
    } catch (error) {
        next(error)
    }
}

export const destroy = async (req,res,next) => {
    try {
        const id = req.params.produto;

        await deleteService({id});

        return res.status(204).json({});

    } catch (error) {
        next(error)
    }
}