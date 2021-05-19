import { NextFunction, Request, Response, } from "express"
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try{
    const { sub } = verify(token, auth.jwt.secret) as IPayload;



    request.user = { id: sub}

    next()
  }catch(err){
    throw new AppError("invalid token!", 401)
  }
}