import { register } from "../controllers/authController.js";
import { Router } from "express";
import { validated } from "../middlewares/validatedZod.js";
import * as empresaSchema  from "../schemas/RegisterSchema.js"; 

const app = Router()

app.post('/register',validated(empresaSchema.createdSchema),register);

export { app }