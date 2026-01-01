import express  from "express";
import { Forcejson } from "../src/middlewares/forceJson.js";
import { app as authRouter } from "../src/routes/authRoute.js";
import { app as empresaRouter } from "../src/routes/empresaRouter.js";
import { app as categoriaRouter } from "../src/routes/categoriaRoute.js";
import { app as produtoRouter } from "../src/routes/produtoRoute.js";
import { errorMiddleware } from "../src/middlewares/ErrorMiddleware.js";
import { ownerMiddleware } from "../src/middlewares/empresa/empresaMiddleware.js";
const app = express()

// Middlewares Globais

app.use(express.json())
app.use(Forcejson);

// Rotas

app.use('/auth',authRouter);
app.use('/companys',empresaRouter);
app.use('/categorias',categoriaRouter);
app.use('/produtos',produtoRouter);

//

// Middleware de Erros

app.use(errorMiddleware)

app.listen(3000)

