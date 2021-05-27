import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { ICartProvider } from "@shared/container/providers/CartProvider/ICartProvider";
import { CartPorvider } from "@shared/container/providers/CartProvider/implementations/CartProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
export class AddArticleUseCase {

  constructor(

    @inject("CartProvider")
    private cartProvider: ICartProvider,

    @inject("ArticleRepository")
    private articleRepository: IArticleRepository
  ){}

  async execute(article_id: string, cart, user_id:string){
    const article = await this.articleRepository.findById(article_id)

    if(article.user_id == user_id){
      throw new AppError("You cant buy your product", 400)
    }
    
    let currentCart = this.cartProvider.init(cart)
    currentCart = this.cartProvider.addOne(article)

    
 
    return currentCart
  }
}