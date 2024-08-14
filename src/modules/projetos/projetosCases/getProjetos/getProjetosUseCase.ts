// src/projetosCases/getProjetos/getProjetosUseCase.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetProjetosUseCase {
  async getAll() {
    return await prisma.projeto.findMany();
  }

  async getById(id_projeto: number) {
    return await prisma.projeto.findUnique({
      where: { id_projeto },
    });
  }
}
