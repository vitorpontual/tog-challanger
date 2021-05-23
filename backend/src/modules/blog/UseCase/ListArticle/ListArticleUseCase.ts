import { Article } from "@modules/blog/infra/typeorm/entities/Article";
import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import articleViews from "@modules/blog/views/articleViews";
import { inject, injectable } from "tsyringe";

interface IResponse {
  id: string; 
  title: string;
  body_text: string;
  price: number;
  tags: string[];
  user: {
    name: string;
    avatar: string;
  };
}

@injectable()
export class ListArticleUseCase {
  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository
  ){}

  async execute(): Promise<IResponse[]> {
    const article = await this.articleRepository.findAll()

    const articles = articleViews.renderMany(article)
    
    return articles
  }
}