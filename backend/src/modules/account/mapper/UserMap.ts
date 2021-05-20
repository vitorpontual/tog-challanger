import { classToClass } from "class-transformer";

import { IUserResponseDTO } from "../DTO/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";


export class UserMap{
  static toDTO({id, name, email, avatar, avatar_url}: User): IUserResponseDTO{
    const user = classToClass({
      id, name, email, avatar, avatar_url
    })

    return user
  }
}