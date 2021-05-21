import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListUserArticleUseCase {
  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute(id: string): Promise<Article[]> {
    console.log(id)
    const article = await this.articleRepository.findArticleByUserId(id)

    return article
  }
}