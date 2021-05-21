import { container } from "tsyringe";

import "@shared/container/providers"

import { UsersRepository } from "@modules/account/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { IReadRepository } from "@modules/blog/repositories/IReadRepository";
import { ReadRepository } from "@modules/blog/infra/typeorm/respositories/ReadRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IReadRepository>(
  "ReadRepository",
  ReadRepository
)