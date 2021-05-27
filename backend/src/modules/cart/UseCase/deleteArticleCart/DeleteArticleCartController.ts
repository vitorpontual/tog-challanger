import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteArticleCartUseCase } from "./DeleteArticleCartUseCase";
import cookieParser from "cookie-parser"



export class DeleteArticleCartController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { cart } = request.cookies

    const deleteArticleCartUseCase = container.resolve(DeleteArticleCartUseCase)

    const update = await deleteArticleCartUseCase.execute(id, cart)

    const ok = cookieParser.JSONCookies(update)
    

    return response.status(200).send()
  }
}