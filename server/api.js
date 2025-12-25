import express  from "express";
import { Forcejson } from "../src/middlewares/forceJson.js";
import { app as authRouter } from "../src/routes/authRoute.js";
import { errorMiddleware } from "../src/middlewares/ErrorMiddleware.js";

const app = express()

// Middlewares Globais

app.use(express.json())
app.use(Forcejson);

// Rotas

app.use('/auth',authRouter);

//

// Middleware de Erros

app.use(errorMiddleware)

app.listen(3000)

