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
        const empresa_id = req.user.empresa_id;
        const categoria_id = req.resource.id;
        const data = req.body;
        
        const produto = await createService({empresa_id, categoria_id, data})

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