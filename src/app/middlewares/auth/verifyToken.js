import "dotenv/config";
import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
    
        if(!token){
            return res.status(422).json({message: "Token ausente."});
        }

        const user = jwt.verify(token,process.env.SECRET_KEY);
        
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({message: "Token Invalido."});
    }
}