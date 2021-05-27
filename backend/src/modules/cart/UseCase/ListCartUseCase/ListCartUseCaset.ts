import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { ICartProvider } from "@shared/container/providers/CartProvider/ICartProvider";
import { inject, injectable } from "tsyringe";



@injectable()
export class ListCartUseCase {
  constructor(
    @inject("CartProvider")
    private cartProvider: ICartProvider
  ){}

  execute(cart) {

    cart = this.cartProvider.init(cart)

    return cart
    

  }
}