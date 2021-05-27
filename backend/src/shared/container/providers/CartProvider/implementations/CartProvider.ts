import { Article } from "@modules/blog/infra/typeorm/entities/Article"
import { ICartProvider } from "../ICartProvider";


export class CartPorvider implements ICartProvider {

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


    return this
  }

}