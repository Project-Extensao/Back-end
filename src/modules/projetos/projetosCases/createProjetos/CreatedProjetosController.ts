// src/controllers/CreatedProjetosController.ts

import { Request, Response } from 'express';
import { CreateProjetosDTO } from '../../dtos/CreateProjetosDTO'; // Corrija o caminho se necessário
import { CreateProjetosUseCase } from '../../projetosCases/createProjetos/CreatedProjetosUseCase'; // Corrija o caminho se necessário

export class CreatedProjetosController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Extrai os dados do corpo da requisição
      const dto: CreateProjetosDTO = req.body;

      // Cria uma instância do caso de uso
      const createProjetosUseCase = new CreateProjetosUseCase();

      // Executa o caso de uso
      await createProjetosUseCase.execute(dto);

      // Retorna uma resposta de sucesso
      return res.status(201).json({ message: 'Projeto criado com sucesso' });
    } catch (error) {
      // Trata o erro do tipo unknown de forma segura
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Erro ao criar projeto', error: error.message });
      } else {
        // Caso o erro não seja uma instância de Error, retorna uma mensagem genérica
        return res.status(500).json({ message: 'Erro desconhecido ao criar projeto' });
      }
    }
  }
}
