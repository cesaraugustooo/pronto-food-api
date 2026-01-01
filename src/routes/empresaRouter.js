import { Router } from "express";
import { verifyToken } from "../middlewares/auth/verifyToken.js"
import { index, show, update  } from "../controllers/empresaController.js";
import { ownerMiddleware } from "../middlewares/empresa/empresaMiddleware.js";
import * as dto from "../dtos/empresaDTO.js";
import { validated } from "../middlewares/validatedZod.js";

const app = Router();

app.use(verifyToken);

app.get('/my-company',index);
app.put('',validated(dto.updateDTO),update);
app.get('/:slug',show);

export { app }