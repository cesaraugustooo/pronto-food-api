import { Router } from "express";
import { verifyToken } from "../middlewares/auth/verifyToken.js"
import { ownerMiddleware } from "../middlewares/empresa/empresaMiddleware.js";
import { destroy, show, store, update } from "../controllers/categoriaController.js";
import { validated } from "../middlewares/validatedZod.js";
import * as dto from "../dtos/categoriaDTO.js";

const app = Router();
app.use(verifyToken)

app.post('', validated(dto.createDTO), store);
app.get('/:categoria',ownerMiddleware({ compare: "categoria" }),show);
app.put('/:categoria', ownerMiddleware({compare: "categoria"}), validated(dto.updateDTO), update);
app.delete('/:categoria', ownerMiddleware({compare: "categoria"}), destroy);

export { app };

