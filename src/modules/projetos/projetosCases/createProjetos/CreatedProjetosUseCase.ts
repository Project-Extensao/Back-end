// src/useCases/CreateProjetosUseCase.ts

import { PrismaClient } from '@prisma/client';
import { CreateProjetosDTO } from '../../dtos/CreateProjetosDTO';

const prisma = new PrismaClient();

export class CreateProjetosUseCase {
  async execute(dto: CreateProjetosDTO): Promise<void> {
    try {
      await prisma.projeto.create({
        data: {
          modalidade: dto.modalidade,
          unidade_origem: dto.unidade_origem,
          titulo_projeto: dto.titulo_projeto,
          area_conhecimento: dto.area_conhecimento,
          area_tematica: dto.area_tematica,
          linha_tematica: dto.linha_tematica,
          coord_projeto: dto.coord_projeto,
          email_coord_projeto: dto.email_coord_projeto,
          dt_inicio_proj: dto.dt_inicio_proj,
          dt_fim_proj: dto.dt_fim_proj,
          situacao: dto.situacao,
          ult_alter_proj: dto.ult_alter_proj,
          palavras_chave: dto.palavras_chave,
          resumo: dto.resumo,
          parcerias: dto.parcerias,
        },
      });
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Error creating project');
    }
  }
}
