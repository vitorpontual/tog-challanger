import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { ICartProvider } from "@shared/container/providers/CartProvider/ICartProvider";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteArticleCartUseCase {

  constructor(
    @inject("CartProvider")
    private cartProvider: ICartProvider,

    @inject("ArticleRepository")
    private articleRepository: IArticleRepository,
  ){}

  execute(article_id, cart) {
    let currentCart = this.cartProvider.init(cart)
    currentCart = this.cartProvider.delete(article_id)

    return currentCart

  }
}