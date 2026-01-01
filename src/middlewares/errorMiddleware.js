import { AppError, NotFounError } from "../errors/errorHandler.js";

export const errorMiddleware = (err, req, res, next) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({message: err.message});
    }

    if(err instanceof NotFounError){
        return res.status(err.statusCode).json({message: err.message});
    }

    console.log(err);
    return res.status(500).json({message: "Erro interno do servidor, tente novamente mais tarde"});
}