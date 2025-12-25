import { empresaCreate } from "../services/empresaService.js";
import { createdSchema } from "../schemas/RegisterSchema.js";

export async function register(req,res,next) {
    try {
        const data = req.body;
        const result = await empresaCreate(data);

        return res.json({ data: data });            
    } catch (error) {
        next(error)
    }
}