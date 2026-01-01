import { indexService, showService, updateService } from "../services/empresaService.js";

export const index = async (req,res,next) => {
    try{
        const empresa = await indexService(req.user);

        return res.json(empresa);
    }catch(error){
        next(error);
    }
}

export const show = async (req,res,next) => {
    try{
        const slug = req.params.slug;
        const empresa = await showService(slug);

        return res.json(empresa);
    }catch(error){
        next(error)
    }
}

export const update = async (req,res,next) => {
    try {
        const id = req.user.empresa_id;
        const data = req.body;
        
        const empresa = await updateService(id,data);

        return res.json(empresa);
    } catch (error) {
        next(error)
    }
}

export const destroy = async (req,res,next) => {
    try {
        await deleteService(id);

        return res.status(204).json({});
    } catch (error) {
        next(error)
    }
}
