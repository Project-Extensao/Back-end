import { Router } from "express";
import { CreatedProjetosController } from "../modules/projetos/projetosCases/createProjetos/CreatedProjetosController";
import { UpdateProjetosController } from "../modules/projetos/projetosCases/createProjetos/updateProjetosController";
import { DeleteProjetosController } from "../modules/projetos/projetosCases/createProjetos/deleteProjetosController";
import { GetProjetosController } from "../modules/projetos/projetosCases/getProjetos/getProjetosController";

const projetosRoutes = Router();
const createdProjetosController = new CreatedProjetosController();
const updateProjetosController = new UpdateProjetosController();
const deleteProjetosController = new DeleteProjetosController();
const getProjetosController = new GetProjetosController();

// Rotas para projetos
projetosRoutes.post("/", createdProjetosController.handle.bind(createdProjetosController));
projetosRoutes.put("/:id_projeto", updateProjetosController.handle.bind(updateProjetosController));
projetosRoutes.delete("/:id_projeto", deleteProjetosController.handle.bind(deleteProjetosController));
projetosRoutes.get("/:id_projeto?", getProjetosController.handle.bind(getProjetosController));

export { projetosRoutes };
