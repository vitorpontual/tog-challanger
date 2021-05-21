import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";


interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
export class UploadAvatarUserCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("LocalStorageProvider")
    private localStorageProvider: IStorageProvider
  ){}

  async execute({user_id, avatar_file}: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if(user.avatar){
      await this.localStorageProvider.delete(user.avatar, "avatar")
    }

    console.log("aqui")
    await this.localStorageProvider.save(avatar_file, "avatar")
    user.avatar = avatar_file;

    await this.usersRepository.create(user)
  }
}