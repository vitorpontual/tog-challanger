import { ICreateArticleDTO } from "@modules/blog/dto/ICreateArticleDTO";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { getRepository, Repository } from "typeorm";
import { Article } from "../entities/Article";



export class ArticleRepository  implements IArticleRepository{
  private repository: Repository<Article>;

  constructor(){
    this.repository = getRepository(Article)
  }
  async create(data: ICreateArticleDTO): Promise<void> {
    const article = this.repository.create({...data})


    await this.repository.save(article)
  }
1
  async findAll(): Promise<Article[]> {
    return this.repository.find({ relations: ['user']});
  } 
  
  async findById(id: string): Promise<Article> {
    const article = await this.repository.findOne(id)


    return article;
  }

  async findArticleByUserId(user_id: string): Promise<Article[]> {
    const articles = await this.repository.find({where: {user_id}})

    return articles
  }

  async editArticle(data: ICreateArticleDTO): Promise<void> {
    const article = this.repository.create({...data})


  }
}