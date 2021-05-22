import { IUpadateArticle } from "@modules/blog/dto/IUpdateArticle";
import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class EditArticleUseCase {

  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository
  ){}

  async execute(data: IUpadateArticle): Promise<void> {
    const article = await this.articleRepository.findById(data.id)


    if(!article)
      throw new AppError("Article not found", 404)

      console.log(data.user_id, article.user_id)

    if(data.user_id != article.user_id)
      throw new AppError("User invalid", 400)

    await this.articleRepository.create({...data})
  }
}