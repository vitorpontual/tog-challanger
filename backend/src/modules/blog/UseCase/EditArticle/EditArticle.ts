import { IUpadateArticle } from "@modules/blog/dto/IUpdateArticle";
import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";


export class EditArticleUseCase {

  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository
  ){}

  async execute(data: IUpadateArticle): Promise<void> {
    const article = await this.articleRepository.findById(data.id)

    if(!article)
      throw new AppError("Article not found", 404)

    await
  }
}