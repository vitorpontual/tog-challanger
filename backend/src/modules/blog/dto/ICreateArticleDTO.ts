export interface ICreateArticleDTO{
  id?: string;
  user_id?: string;
  title: string;
  body_text: string;
  price: number;
  tags: string;
}