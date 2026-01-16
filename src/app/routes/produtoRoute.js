import { Router } from "express";
import { verifyToken } from "../middlewares/auth/verifyToken.js"
import { ownerMiddleware } from "../middlewares/empresa/empresaMiddleware.js";
import { create, destroy, show, update, viewProductsPublic } from "../controllers/produtoController.js";
import { validated } from "../middlewares/validatedZod.js";
import * as produtoSchema from "../dtos/produtoDTO.js";

const app = Router();

app.get('/public/:categoria',viewProductsPublic);

app.use(verifyToken);

app.post('/:categoria',ownerMiddleware({compare: "categoria"}),validated(produtoSchema.createDTO),create);
app.put('/:produto',ownerMiddleware({compare: "produto"}),validated(produtoSchema.updateDTO),update);
app.delete('/:produto',ownerMiddleware({compare: "produto"}),destroy);
app.get('/:produto',ownerMiddleware({compare: "produto"}),show);

export { app }