import { ListArticleController } from "@modules/blog/UseCase/ListArticle/ListArticleController";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCartUseCase } from "./ListCartUseCaset";


export class ListCartController {

  async handle(request: Request, response: Response): Promise<Response>{

    const cart = request.cookies
   
    const listCartUseCase = container.resolve(ListCartUseCase)

    const carts = listCartUseCase.execute(cart)


    return response.status(200).json(carts)
  }
}