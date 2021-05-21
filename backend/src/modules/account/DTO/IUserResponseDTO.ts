import { Article } from "@modules/blog/infra/typeorm/entities/Article";

export interface IUserResponseDTO{
  id: string;
  name: string;
  email: string;
  avatar: string;
  avatar_url(): string;
  article: Article[];
}