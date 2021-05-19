import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import IChacheProvider from "@shared/container/providers/CacheProvider/ICacheProvider";
import IHashProvider from "@shared/container/providers/HashProvider/IHashProvider";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  password: string;
}

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

  async execute({ email, password }: IRequest): Promise<void> {
   
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if(userAlreadyExists){
      throw new AppError("User already exists.")
    }

    const passwordHash = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      email,
      password: passwordHash
    })

    await this.cacheProvider.invalidatePrefix('providers-list')

    return user

  }
}