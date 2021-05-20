import { ICreateReadDTO } from "@modules/blog/dto/ICreateReadDTO";
import { IReadRepository } from "@modules/blog/repositories/IReadRepository";
import { getRepository, Repository } from "typeorm";
import { Read } from "../entities/Read";



export class ReadRepository implements IReadRepository{
  private repository: Repository<Read>;

  constructor(){
    this.repository = getRepository(Read)
  }
  async create(data: ICreateReadDTO): Promise<void> {
    const read = await this.repository.create(data)

    await this.repository.save(read)
  }
  findById(id: string): Promise<Read> {
    throw new Error("Method not implemented.");
  }
}