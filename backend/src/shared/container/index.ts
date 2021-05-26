import { container } from "tsyringe";

import "@shared/container/providers"

import { UsersRepository } from "@modules/account/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { ArticleRepository } from "@modules/blog/infra/typeorm/respositories/ArticledRepository";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { OrdersRepository } from "@modules/orders/infra/typeorm/repositories/OrdersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IArticleRepository>(
  "ArticleRepository",
  ArticleRepository
)

container.registerSingleton<IOrdersRepository>(
  "OrdersRepository",
  OrdersRepository
)

