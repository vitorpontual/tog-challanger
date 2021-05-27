import express from "express"

import { ListCartController } from "@modules/cart/UseCase/ListCartUseCase/ListCartController"
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { AddArticleController } from "@modules/cart/UseCase/addArticle/AddArticleController";

export const cartRouter = express.Router()

const listCartController = new ListCartController();
const addArticleController = new AddArticleController();

cartRouter.get("/", ensureAuthenticated, listCartController.handle)

cartRouter.post("/:id/add-one", ensureAuthenticated, addArticleController.handle )
