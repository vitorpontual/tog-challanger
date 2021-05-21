import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { ICreateReadDTO } from "@modules/blog/dto/ICreateReadDTO";
import { Read } from "@modules/blog/infra/typeorm/entities/Read";
import { IReadRepository } from "@modules/blog/repositories/IReadRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateReadUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("ReadRepository")
    private readRepository: IReadRepository,
  ){}

  async execute(data: ICreateReadDTO, user_id): Promise<void>{
    const user = await this.usersRepository.findById(user_id)

    if(!user){
      throw new AppError("User not found", 404)
    }

    await this.readRepository.create({...data, user_id})
   
  }
}