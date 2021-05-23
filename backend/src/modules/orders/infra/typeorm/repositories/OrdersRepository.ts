import { Cart } from "@config/cart";
import { ICreateOrder } from "@modules/orders/dto/ICreateOrder";
import { IOrdersRepository } from "@modules/orders/repositories/IOrdersRepository";
import { getRepository, Repository } from "typeorm";
import { Orders } from "../entities/Orders";


export class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Orders>

  constructor(){
    this.repository = getRepository(Orders)
  };

  async create(data: ICreateOrder): Promise<Orders> {
    const order = this.repository.create({...data})

    return order
  }
  
}