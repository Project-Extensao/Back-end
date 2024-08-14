// src/projetosCases/updateProjetos/updateProjetosUseCase.ts
import { PrismaClient } from "@prisma/client";
import { UpdateProjetosDTO } from "../../dtos/UpdateProjetosDTO";

const prisma = new PrismaClient();

export class UpdateProjetosUseCase {
  async execute(id_projeto: number, data: UpdateProjetosDTO) {
    const projeto = await prisma.projeto.update({
      where: { id_projeto },
      data,
    });

    return projeto;
  }
}
