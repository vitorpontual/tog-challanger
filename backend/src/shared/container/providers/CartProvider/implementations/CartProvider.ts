import { Article } from "@modules/blog/infra/typeorm/entities/Article"
import { ICartProvider } from "../ICartProvider";


interface Cart {
  article: Article[];
  total: number;
}

export class CartPorvider implements ICartProvider {
  private cart: Cart[]

  article: Article[];
  total: number;

  constructor(){
    this.cart = []
  }
  
  init(oldCart){
    if(oldCart){
      this.article = oldCart.article
      this.total = oldCart.total
    } else {
      this.article = [];
      this.total = 0
    }
    
    return this.cart
  }
  addOne(article: any) {
    const novo = new CartPorvider();

    const findId = this.cart.find(item => item.id == article.id)

    if(!findId){

      this.cart.push(article)
    }


    return this.cart
  }
  delete(article_id){
    const del = this.cart.filter(item => item.id != article_id)

    return del
  }

}