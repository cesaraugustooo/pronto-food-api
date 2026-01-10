import { Router } from "express";
import { store } from "../controllers/pedidoController.js";

const app = Router();

app.post('/:slug',store);

export { app }