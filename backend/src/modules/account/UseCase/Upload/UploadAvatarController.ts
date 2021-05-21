import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadAvatarUserCase } from "./UploadAvatarUseCase";


export class UploadAvatarController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.user
    const avatar_file = request.file.filename;

    const uploadAvatarUseCase = container.resolve(UploadAvatarUserCase)

    await uploadAvatarUseCase.execute({user_id: id, avatar_file})

    return response.status(204).send()

  }
}