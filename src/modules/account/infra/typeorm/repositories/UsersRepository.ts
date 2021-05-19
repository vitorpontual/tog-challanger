import { IUsersRepository } from "../backend/src/modules/account/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
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
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

}