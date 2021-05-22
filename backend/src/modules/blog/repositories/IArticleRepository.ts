import { ICreateArticleDTO } from "../dto/ICreateArticleDTO";
import { Article } from "../infra/typeorm/entities/Article";


export interface IArticleRepository {
  create(data: ICreateArticleDTO): Promise<void>
  findById(id: string): Promise<Article>;
  findAll(): Promise<Article[]>
  findArticleByUserId(user_id: string): Promise<Article[]>
  editArticle(data: ICreateArticleDTO): Promise<void>
}