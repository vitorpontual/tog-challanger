import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProfileUseCase } from "./ProfileUseCase";


export class ProfileController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.user;

    const profileUseCase = container.resolve(ProfileUseCase)

    const user = await profileUseCase.execute(id)

    return response.status(200).json(user)
  }
}