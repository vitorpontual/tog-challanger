import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../backend/src/config/auth";
import { AppError } from "../backend/src/shared/errors/AppError";
import { User } from "../backend/src/modules/account/infra/typeorm/entities/User";
import IHashProvider from "../backend/src/shared/container/providers/HashProvider/IHashProvider";
import { IUsersRepository } from "../backend/src/modules/account/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string,
}

interface IResponse {
  user: User;
  token: string;
}


@injectable()
export default class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user)
      throw new AppError('Incorrect email or password, try again!', 401)


    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password
    )

    if (!passwordMatch)
      throw new AppError('Incorrect email or password, try again!', 401)

    const { secret, expiresIn } = auth.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    });

    return {
      user,
      token
    }
  }
}