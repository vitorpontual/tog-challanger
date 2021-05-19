import { Router } from "express";

import { CreateUserController } from "../backend/src/modules/account/UseCase/createUser/CreateUserController"

const userRoutes = Router();

const createUserController = new CreateUserController();


userRoutes.post("/", createUserController.handle)


export { userRoutes }
