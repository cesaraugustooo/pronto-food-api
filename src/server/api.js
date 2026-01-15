import express  from "express";
import { Forcejson } from "../app/middlewares/forceJson.js";
import { app as authRouter } from "../app/routes/authRoute.js";
import { app as empresaRouter } from "../app/routes/empresaRouter.js";
import { app as categoriaRouter } from "../app/routes/categoriaRoute.js";
import { app as produtoRouter } from "../app/routes/produtoRoute.js";
import { app as pedidoRoute} from "../app/routes/pedidoRoute.js";
import { errorMiddleware } from "../app/middlewares/errorMiddleware.js";

const app = express()

// Middlewares Globais

app.use(express.json())
app.use(Forcejson);

// Rotas

app.use('/auth',authRouter);
app.use('/companys',empresaRouter);
app.use('/categorias',categoriaRouter);
app.use('/produtos',produtoRouter);
app.use('/pedidos',pedidoRoute);

//

// Middleware de Erros

app.use(errorMiddleware)

app.listen(3000)

