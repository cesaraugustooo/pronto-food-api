import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashed = async (senha) => {
    return await bcrypt.hash(senha,SALT_ROUNDS);
}