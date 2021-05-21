import { Router } from 'express';
import multer from 'multer';
import uploadConfig from "@config/upload"

import { CreateReadController } from '@modules/blog/UseCase/CreateRead/CreateReadController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const upload = multer(uploadConfig)

const readRoute = Router()

const createReadController = new CreateReadController();

readRoute.post("/", ensureAuthenticated, createReadController.handle )

export { readRoute }