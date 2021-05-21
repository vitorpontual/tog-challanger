import { IUserToken } from "@modules/account/repositories/IUsersToken";
import { getRepository, Repository } from "typeorm";
import { UserToken } from "../entities/UserToken";

export default class UserTokenRepository implements IUserToken {

  private repository: Repository<UserToken>;

  constructor(){
    this.repository = getRepository(UserToken)
  }

  async create(user_id: string): Promise<UserToken>{
    const userToken = this.repository.create({
      user_id
    });

    await this.repository.save(userToken)

    return userToken;
  }
  async findByToken(token: string): Promise<UserToken | undefined>  {
    const userToken = await this.repository.findOne({where: { token }})

    return userToken;
  }

}