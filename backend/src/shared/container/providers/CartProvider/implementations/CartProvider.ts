import { Article } from "@modules/blog/infra/typeorm/entities/Article"
import { ICartProvider } from "../ICartProvider";


export class CartPorvider implements ICartProvider {
  
  private article: Article[];
  private total: number;
  
  init(oldCart){
    console.log(oldCart)
    if(oldCart){
      this.article = oldCart.article
      this.total = oldCart.total
    } else {
      this.article = [];
      this.total
    }
    
    return this
  }
  addOne(article: any) {
    throw new Error("Method not implemented.");
  }

}