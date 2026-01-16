import { createService, updateService, deleteService, indexService } from "../services/produtoService.js";
import { getPaginateParams } from "../utils/paginate.js";

export const viewProductsPublic = async (req,res,next) => {
    try {
        const categoria = req.params.categoria
        const paginate = getPaginateParams(req);

        const produtos = await indexService({ categoria, skip: paginate.skip, take: paginate.take }); 

        return res.json(produtos);

    } catch (error) {
        next(error)
    }
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