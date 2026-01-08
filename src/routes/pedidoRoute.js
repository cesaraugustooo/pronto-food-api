import { Router } from "express";
import { store } from "../controllers/pedidoController";

const app = Router();

app.post('/:slug/pedido',store);

export { app }