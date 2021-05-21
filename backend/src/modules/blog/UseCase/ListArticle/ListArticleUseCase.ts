import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListArticleUseCase {
  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository
  ){}

  async execute(): Promise<Article[]> {
    const article = await this.articleRepository.findAll()

    return article
  }
}