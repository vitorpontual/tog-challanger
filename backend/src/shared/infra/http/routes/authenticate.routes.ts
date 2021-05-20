import AuthenticateUserController from "@modules/account/UseCase/AuthenticateUser/AuthenticateUserController";
import { Router } from "express";

const sessionRouter = Router();

const authenticateController = new AuthenticateUserController();

sessionRouter.post("/sessions", authenticateController.handle)

export { sessionRouter}