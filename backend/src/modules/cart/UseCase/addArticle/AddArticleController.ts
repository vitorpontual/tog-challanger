import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddArticleUseCase } from "./AddArticleUseCase";


export class AddArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const { id: user_id } = request.user

    const cart = request.cookies
    
    
    const addArticleUseCase = container.resolve(AddArticleUseCase)
    
    const cartAr = await addArticleUseCase.execute(id, cart, user_id)
    

    response.cookie("cart", [cartAr])
    return response.status(200).json(cartAr)
  }
}