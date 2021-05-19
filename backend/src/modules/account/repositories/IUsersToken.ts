import { UserToken } from "../infra/typeorm/entities/UserToken";


export interface IUserToken {
  create(user_id): Promise<UserToken> ;
  findByToken(token: string): Promise<UserToken | undefined> ;
}