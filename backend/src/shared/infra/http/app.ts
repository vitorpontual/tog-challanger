import 'reflect-metadata';
import "express-async-errors";
import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";

import "@shared/container"
import {router} from './routes';
import { createConnection } from 'typeorm';
import { AppError } from '@shared/errors/AppError';

console.log("Open Database")
createConnection();

const app = express();

app.use(express.json())
app.use(router)

app.use(
  (err: Error, resquest: Request, response: Response, next: NextFunction) => {
    if( err instanceof AppError ){
      return response.status(err.statusCode).json(err.message)
    } 
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`
    })
  }
)


export { app }
