import { Router } from "express";
import multer from "multer";

import upload from '@config/upload'

import { CreateUserController } from "@modules/account/UseCase/createUser/CreateUserController"
import ensureAuthenticated from "../middleware/ensureAuthenticated";

const userRoutes = Router();
const uploadAvatar = multer(upload)


const createUserController = new CreateUserController();


userRoutes.post("/", createUserController.handle)

userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"),)


export { userRoutes }
