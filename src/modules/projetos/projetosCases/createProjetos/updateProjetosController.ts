// src/projetosCases/updateProjetos/updateProjetosController.ts
import { Request, Response } from "express";
import { UpdateProjetosUseCase } from "./updateProjetosUseCase";

export class UpdateProjetosController {
  async handle(req: Request, res: Response) {
    const { id_projeto } = req.params;
    const data = req.body;

    const updateProjetosUseCase = new UpdateProjetosUseCase();

    try {
      const result = await updateProjetosUseCase.execute(Number(id_projeto), data);
      return res.status(200).json(result);
    } catch (error) {
      // Verificar se o erro é uma instância de Error
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Error updating project', error: error.message });
      } else {
        return res.status(500).json({ message: 'Unexpected error occurred', error: String(error) });
      }
    }
  }
}
