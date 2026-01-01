import { login, register } from "../controllers/authController.js";
import { Router } from "express";
import { validated } from "../middlewares/validatedZod.js";
import * as empresaSchema  from "../dtos/authDTO.js"; 

const app = Router()

app.post('/register',validated(empresaSchema.createdSchema),register);
app.post('/login',validated(empresaSchema.loginSchema),login);

export { app }