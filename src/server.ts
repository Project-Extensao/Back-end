// src/server.ts

import express from "express";
import { routes } from "./routes/index";

const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.use("/api", routes); // Usa as rotas definidas no index.ts

app.listen(3333, () => console.log("Server is running on port 3333!!"));
