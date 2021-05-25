import { Router } from 'express';
import multer from 'multer';
import uploadConfig from "@config/upload"

import { CreateReadController } from '@modules/blog/UseCase/CreateArticle/CreateArticleController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import { ListArticleController } from '@modules/blog/UseCase/ListArticle/ListArticleController';
import { ListUserArticleController } from '@modules/blog/UseCase/ListUserArticle/ListUserArticleController';
import { EditArticleController } from '@modules/blog/UseCase/EditArticle/EditArticleController';
import { UploadImageController } from '@modules/blog/UseCase/UploadImage/UploadImageController';

const upload = multer(uploadConfig)

const articleRoute = Router()

const createReadController = new CreateReadController();
const listArticleController = new ListArticleController();
const listUserArticleController = new ListUserArticleController()
const editArticleController = new EditArticleController()
const uploadImageController = new UploadImageController()

articleRoute.get("/", listArticleController.handle )


articleRoute.get("/user", ensureAuthenticated, listUserArticleController.handle)
articleRoute.post("/", ensureAuthenticated, createReadController.handle )
articleRoute.patch("/image/:id", ensureAuthenticated, upload.single("image"), uploadImageController.handle)
articleRoute.put("/:id/edit", ensureAuthenticated, editArticleController.handle)

export { articleRoute }
