import { deleteService, showService, storeService, updateService } from "../services/categoriaService.js";

export const store = async (req,res,next) => {
    try{
        const data = req.body;
        const empresa_id = req.user.empresa_id;

        const empresa = await storeService({ empresa_id, data});
    
        return res.json(empresa);
    }catch(error){
        next(error)
    }
}

export const update = async (req,res,next) => {
    try {
        const data = req.body;
        const id = req.params.categoria
    
        const categoria = await updateService({ id: id, data: data});
        
        return res.json(categoria);
    } catch (error) {
        next(error)
    }
}

export const destroy = async (req,res,next) =>{
    try{
        const id = req.params.categoria;

        await deleteService({id: id});

        return res.status(204).json({});
    }catch(error){
        next(error);
    }
}

export const show = async (req,res,next) => {
    try{
        const id = req.params.categoria;

        const categoria = await showService({id: id});

        return res.json(categoria);
    }catch(error){
        next (error)
    }
}