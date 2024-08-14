// src/projetosCases/deleteProjetos/deleteProjetosController.ts
import { Request, Response } from "express";
import { DeleteProjetosUseCase } from "./deleteProjetosUseCase";

export class DeleteProjetosController {
  async handle(req: Request, res: Response) {
    const { id_projeto } = req.params;

    const deleteProjetosUseCase = new DeleteProjetosUseCase();

    try {
      await deleteProjetosUseCase.execute(Number(id_projeto));
      return res.status(204).send(); // No content
    } catch (error) {
      // Verificar se o erro é uma instância de Error
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Error deleting project', error: error.message });
      } else {
        return res.status(500).json({ message: 'Unexpected error occurred', error: String(error) });
      }
    }
  }
}
