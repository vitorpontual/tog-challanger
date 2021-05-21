import { Router } from 'express';
import multer from 'multer';
import uploadConfig from "@config/upload"

import { CreateReadController } from '@modules/blog/UseCase/CreateArticle/CreateArticleController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import { ListArticleController } from '@modules/blog/UseCase/ListArticle/ListArticleController';
import { Article } from '@modules/blog/infra/typeorm/entities/Article';
import { ListUserArticleController } from '@modules/blog/UseCase/ListUserArticle/ListUserArticleController';

const upload = multer(uploadConfig)

const articleRoute = Router()

const createReadController = new CreateReadController();
const listArticleController = new ListArticleController();
const listUserArticleController = new ListUserArticleController()

articleRoute.get("/user", ensureAuthenticated, listUserArticleController.handle)
articleRoute.get("/", ensureAuthenticated, listArticleController.handle )
articleRoute.post("/", ensureAuthenticated, createReadController.handle )

export { articleRoute }