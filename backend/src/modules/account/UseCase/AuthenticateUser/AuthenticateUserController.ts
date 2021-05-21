import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass} from "class-transformer"

import AuthenticateUserUseCase from "./AuthenticateUserUseCase";

export default class AuthenticateUserController{

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password} = request.body;

    
    const authenticateUser = container.resolve(AuthenticateUserUseCase)

    const { user, token } = await  authenticateUser.execute({ 
      email,
      password})

    return response.json({user: classToClass(user), token})

      
  }
}