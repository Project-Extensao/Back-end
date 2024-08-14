

// src/projetosCases/getProjetos/getProjetosController.ts
import { Request, Response } from "express";
import { GetProjetosUseCase } from "./getProjetosUseCase";

export class GetProjetosController {
  async handle(req: Request, res: Response) {
    const { id_projeto } = req.params;

    const getProjetosUseCase = new GetProjetosUseCase();

    try {
      if (id_projeto) {
        const projeto = await getProjetosUseCase.getById(Number(id_projeto));
        if (!projeto) {
          return res.status(404).json({ message: 'Project not found' });
        }
        return res.status(200).json(projeto);
      } else {
        const projetos = await getProjetosUseCase.getAll();
        return res.status(200).json(projetos);
      }
    } catch (error) {
      // Verificar se o erro é uma instância de Error
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Error fetching projects', error: error.message });
      } else {
        return res.status(500).json({ message: 'Unexpected error occurred', error: String(error) });
      }
    }
  }
}
