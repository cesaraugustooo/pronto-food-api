import { Router } from "express";
import { show, store } from "../controllers/pedidoController.js";
import { validated } from "../middlewares/validatedZod.js";
import { pedidoCreateDTO } from "../dtos/pedidoDTO.js";

const app = Router();

app.post('/:slug',validated(pedidoCreateDTO),store);
app.get('/:id',show);

export { app }