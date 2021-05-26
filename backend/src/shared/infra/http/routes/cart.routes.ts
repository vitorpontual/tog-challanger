import express from "express"

import { ListCartController } from "@modules/cart/UseCase/ListCartUseCase/ListCartController"
import ensureAuthenticated from "../middleware/ensureAuthenticated";

export const cartRouter = express.Router()

const listCartController = new ListCartController();

cartRouter.get("/", ensureAuthenticated, listCartController.handle)
