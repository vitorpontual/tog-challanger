

export interface ICreateOrder {
  seller_id: string;
  buyer_id: string;
  article_id: string;
  total: number;
  price: number;
}