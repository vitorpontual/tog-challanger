import { Request, Response} from "express";
import { container } from "tsyringe";
import { EditArticleUseCase } from "./EditArticleUseCase";


export class EditArticleController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { id: user_id} = request.user
    const { title, body_text, price, tags} = request.body

    const editArticleUseCase = container.resolve(EditArticleUseCase)

    await editArticleUseCase.execute({id, user_id, title, body_text, price, tags})

    return response.status(201).send()
  }
}