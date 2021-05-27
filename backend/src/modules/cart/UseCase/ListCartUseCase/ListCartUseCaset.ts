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

    const total = cart.reduce((acc, total) => {
      return acc + total.price
    }, 0)
     

    return {
      cart,
      total
    }
    

  }
}