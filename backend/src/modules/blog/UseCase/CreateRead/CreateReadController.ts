import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReadUseCase } from "./CreateReadUseCase";


export class CreateReadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const { title, body_text } = request.body
    

    const createReadUseCase = container.resolve(CreateReadUseCase)

    await createReadUseCase.execute({title, body_text}, id)

    return response.status(201).json({message: "Read Created"})
  }
}