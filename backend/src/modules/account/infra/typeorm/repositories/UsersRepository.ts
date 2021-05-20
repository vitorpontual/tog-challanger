import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/account/DTO/ICreateUserDTO";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { User } from "../entities/User";


export class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  public constructor(){
    this.repository = getRepository(User)
  }
  
  async create(data: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      ...data
    })

    await this.repository.save(user)
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email})

    return user
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)
    return user
  }

}