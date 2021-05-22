import { Router } from 'express';
import multer from 'multer';
import uploadConfig from "@config/upload"

import { CreateReadController } from '@modules/blog/UseCase/CreateArticle/CreateArticleController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import { ListArticleController } from '@modules/blog/UseCase/ListArticle/ListArticleController';
import { ListUserArticleController } from '@modules/blog/UseCase/ListUserArticle/ListUserArticleController';
import { EditArticleController } from '@modules/blog/UseCase/EditArticle/EditArticleController';

const upload = multer(uploadConfig)

const articleRoute = Router()

const createReadController = new CreateReadController();
const listArticleController = new ListArticleController();
const listUserArticleController = new ListUserArticleController()
const editArticleController = new EditArticleController()

articleRoute.get("/user", ensureAuthenticated, listUserArticleController.handle)
articleRoute.get("/", ensureAuthenticated, listArticleController.handle )
articleRoute.post("/", ensureAuthenticated, createReadController.handle )
articleRoute.put("/:id/edit", ensureAuthenticated, editArticleController.handle)

export { articleRoute }