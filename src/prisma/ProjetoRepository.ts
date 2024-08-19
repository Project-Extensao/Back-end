import { PrismaClient } from "@prisma/client";
import IProjetoDTO from "../modules/projetos/dtos/IProjetoDTO";
import ProjetoEntity from "../modules/projetos/entities/ProjetosEntity";
import IProjetoRepository from "../modules/projetos/infra/repositories/IProjetosRepository";


const prisma = new PrismaClient();

export default class ProjetoRepository implements IProjetoRepository {
    public async create(data: IProjetoDTO): Promise<ProjetoEntity> {
        const projeto = await prisma.projeto.create({ data });
        return projeto as ProjetoEntity;
    }

    public async delete(id: number): Promise<void> {
        await prisma.projeto.delete({ where: { id_projeto: id } });
    }

    public async findById(id: number): Promise<ProjetoEntity | null> {
       
        const projeto = await prisma.projeto.findUnique({
            where: {
                id_projeto: id 
            }
        });
        return projeto as ProjetoEntity | null;
    }

    public async update(data: ProjetoEntity): Promise<ProjetoEntity> {
        const projeto = await prisma.projeto.update({
            where: { id_projeto: data.id_projeto },
            data
        });
        return projeto as ProjetoEntity;
    }

    public async listAll(): Promise<ProjetoEntity[]> {
        return await prisma.projeto.findMany();
    }
}
