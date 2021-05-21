import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListArticleUseCase } from "./ListArticleUseCase";


export class ListArticleController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    
    console.log(id)
    
    const listArticleUseCase = container.resolve(ListArticleUseCase)

    const articles = await listArticleUseCase.execute()

    return response.status(200).json(articles)
  }
}