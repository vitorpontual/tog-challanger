import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { ICreateArticleDTO } from "@modules/blog/dto/ICreateArticleDTO";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateArticleUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("ArticleRepository")
    private articleRepository: IArticleRepository,
  ){}

  async execute(data: ICreateArticleDTO): Promise<void>{
    const user = await this.usersRepository.findById(data.user_id)

    if(!user){
      throw new AppError("User not found", 404)
    }

    await this.articleRepository.create({...data})
   
  }
}