// src/projetosCases/deleteProjetos/deleteProjetosUseCase.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteProjetosUseCase {
  async execute(id_projeto: number) {
    await prisma.projeto.delete({
      where: { id_projeto },
    });
  }
}
