
// src/server.ts
import 'reflect-metadata';

import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes/index";
import { AppError } from "../src/errors/AppErros"; 
import "@prisma/client";
import './modules/projetos/container/index'; 




const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

app.use( routes); 

// Middleware para tratamento de erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    if (err instanceof AppError) {
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running on port 3333!!"));
