import { Router } from "express";

import { userRoutes as users } from "./users.router"
import { sessionRouter as sessions} from './authenticate.routes'

const router = Router();

router.use("/users", users)

router.use("/", sessions)


export { router }
