import { ICreateOrder } from "../dto/ICreateOrder";
import { Orders } from "../infra/typeorm/entities/Orders";


export interface IOrdersRepository { 
  create(data: ICreateOrder): Promise<Orders>
}