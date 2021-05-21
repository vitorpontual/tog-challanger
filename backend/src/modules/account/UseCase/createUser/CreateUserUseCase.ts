import { ICreateUserDTO } from "@modules/account/DTO/ICreateUserDTO";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import IChacheProvider from "@shared/container/providers/CacheProvider/ICacheProvider";
import IHashProvider from "@shared/container/providers/HashProvider/IHashProvider";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";


@injectable()
export class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,

    @inject("CacheProvider")
    private cacheProvider: IChacheProvider
  ) { }

  async execute(data: ICreateUserDTO): Promise<void> {
   
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists){
      throw new AppError("User already exists.")
    }

    const passwordHash = await this.hashProvider.generateHash(data.password)

    const user = await this.usersRepository.create({
      ...data,
      password: passwordHash
    })

    await this.cacheProvider.invalidatePrefix('providers-list')

    return user

  }
}