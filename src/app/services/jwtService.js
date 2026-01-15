import "dotenv/config";
import jwt from "jsonwebtoken";

export const createToken = async (user) => {
    const token = await jwt.sign({user_id: user.id,user_email: user.email, empresa_id : user.empresa_id},process.env.SECRET_KEY,{
        expiresIn: process.env.EXPIRATION_JWT_TIME
    });

    return token;
}