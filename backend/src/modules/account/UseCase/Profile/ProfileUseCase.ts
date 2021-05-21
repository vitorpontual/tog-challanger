import { UserMap } from "@modules/account/mapper/UserMap";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProfileUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute(id: string): Promise<UserMap> {
    const user = await this.usersRepository.findById(id)

    return UserMap.toDTO(user)

  }
}