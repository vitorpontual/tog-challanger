import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { ICartProvider } from "@shared/container/providers/CartProvider/ICartProvider";
import { inject, injectable } from "tsyringe";


interface Cart {
  items: Article[],
  total: {
    price: number
  }
}

@injectable()
export class ListCartUseCase {

  constructor(
    @inject("CartProvider")
    private cartProvider: ICartProvider,
  ){}

  execute(cart: Cart): Cart{

    const newCart = this.cartProvider.init(cart)

    return newCart  

  }
}