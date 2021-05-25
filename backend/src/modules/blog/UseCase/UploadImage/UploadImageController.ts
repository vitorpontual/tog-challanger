import upload from "@config/upload";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImageUseCase } from "./UploadImageUseCase";



export class UploadImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const image_file = request.file.filename;

    const uploadImageUseCase = container.resolve(UploadImageUseCase)

    await uploadImageUseCase.execute({article_id: id, image_file})

    return response.status(204).send()
  }
}