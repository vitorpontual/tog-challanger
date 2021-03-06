import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateArticleUseCase } from "./CreateArticleUseCase";


export class CreateReadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { title, body_text, price, tags } = request.body
    

    const createReadUseCase = container.resolve(CreateArticleUseCase)

    await createReadUseCase.execute({title, body_text, price, tags, user_id: id})

    return response.status(201).json({message: "Read Created"})
  }
}