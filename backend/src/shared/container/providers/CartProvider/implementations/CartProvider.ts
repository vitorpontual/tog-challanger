import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { ICartProvider } from "../ICartProvider";

interface Cart {
  items: Article[];
  total: {
    price: number;
  }
}


export class CartProvider implements ICartProvider{

   items: Article[];
   total: {
      price: number;
    }
  

  // constructor(oldCart: Cart){
  //   if(oldCart){
  //     this.cart.items = oldCart.items
  //     this.cart.total = oldCart.total
  //   } else {
  //     this.cart.items = []
  //     this.cart.total = {
  //       price: 0
  //     }
  //   }
  // }

  init(oldCart: Cart): Cart{
    if(oldCart){
      this.items = oldCart.items
      this.total = oldCart.total
    } else {
      this.items = []
      this.total = {
        price: 0
      }
    }

    return this
  }

  getItemCart(articleId: string){
    return this.items.find(item => item.id == articleId)
  }

  addOne(article: Article): Cart{ 
    let inCart = this.getItemCart(article.id)

    if(!inCart){
      inCart = {
        ...article,
        price: 0
      }

      this.items.push(inCart)
    }

    this.total.price += inCart.price

    return this
  }

  
}