import { ICreateReadDTO } from "../dto/ICreateReadDTO";
import { Read } from "../infra/typeorm/entities/Read";


export interface IReadRepository {
  create(data: ICreateReadDTO): Promise<void>
  findById(id: string): Promise<Read>;
}