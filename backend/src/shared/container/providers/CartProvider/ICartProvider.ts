import { Article } from "@modules/blog/infra/typeorm/entities/Article";

interface Cart {
  items: Article[];
  total: {
    price: number;
  }
}

export interface ICartProvider {
  init(oldCart: Cart): Cart
  addOne(article: Article): Cart;
  getItemCart(productId: string): Article;
}