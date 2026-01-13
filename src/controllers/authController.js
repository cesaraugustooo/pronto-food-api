import { loginService, registerService } from "../services/authService.js";

export const register = async (req,res,next) => {
    try {
        const data = req.body;

        const result = await registerService(data);

        return res.json({message: "Cadastro efetuado com sucesso!!!"});
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next) => {
    try {
        const data = req.body;

        const user = await loginService(data);

        return res.json({token: user});
    } catch (error) {
        next(error)
    }
}