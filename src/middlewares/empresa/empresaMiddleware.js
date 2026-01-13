import { prisma } from "../../core/database.js";

const empresaExists = async (req,res,id) => {
    const empresa = await prisma.empresa.findUnique({
        where:{
            id: Number(id)
        }
    });

    if(!empresa){
        return res.status(404).json({message: "Empresa não encontrada"});
    }

    return empresa;
} 

export const expedienteMiddleware = async (req,res,next) => {
    const id = req.params.id;
    const empresa = await empresaExists(id);
 
}

export const ownerMiddleware = ({compare}) => 
    { 
        return async (req,res,next) => {
        const user = req.user;

        if(compare){
            const compare_id = req.params[compare]

            if(!compare_id){
                return res.status(404).json({message: "Parametro de comparacao não encontrado."});
            }

            if (!prisma[compare]) {
                return res.status(500).json({ message: "Recurso não configurado." });
            }

            const result = await prisma[compare].findUnique({where: { id: compare_id }})

            if(!result){
                return res.status(404).json({message: `${compare} não encontrado(a).`});
            }

            if(result.empresa_id !== user.empresa_id){
                return res.status(401).json({message: "Permissão negada."});
            }

            req.resource = result

        }

        next()
    }
}
