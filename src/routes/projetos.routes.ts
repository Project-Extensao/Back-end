// src/routes/projetosRoutes.ts

import { Router } from "express";
import { CreatedProjetosController } from "../modules/projetos/projetosCases/createProjetos/CreatedProjetosController";

const projetosRoutes = Router();
const createdProjetosController = new CreatedProjetosController();

// Define a rota para criar um projeto
projetosRoutes.post("/", createdProjetosController.handle.bind(createdProjetosController));

export { projetosRoutes };
