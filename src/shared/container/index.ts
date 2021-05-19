import { container } from "tsyringe";

import "../backend/src/shared/container/providers"

import { UsersRepository } from "../backend/src/modules/account/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../backend/src/modules/account/repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)