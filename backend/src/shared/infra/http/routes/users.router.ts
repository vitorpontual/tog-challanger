import { Router } from "express";
import multer from "multer";

import upload from '@config/upload'

import { CreateUserController } from "@modules/account/UseCase/createUser/CreateUserController"
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { UploadAvatarController } from "@modules/account/UseCase/Upload/UploadAvatarController";
import { ProfileController } from "@modules/account/UseCase/Profile/ProfileController";

const userRoutes = Router();
const uploadAvatar = multer(upload)


const createUserController = new CreateUserController();
const uploadAvatController = new UploadAvatarController();
const profileController = new ProfileController();


userRoutes.post("/", createUserController.handle)

userRoutes.get("/profile", ensureAuthenticated, profileController.handle)
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), uploadAvatController.handle)


export { userRoutes }
