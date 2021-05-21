import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserArticleUseCase } from "./ListUserArticleUseCase";


export class ListUserArticleController { 

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user

    const listUserUseCase = container.resolve(ListUserArticleUseCase)

    const articles = await listUserUseCase.execute(id)

    return response.status(200).json(articles)
  }
}