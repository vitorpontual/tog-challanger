import { Router } from "express";

import { userRoutes as users } from "./users.router"
import { sessionRouter as sessions} from './authenticate.routes'
import { readRoute as read} from './read.routes'

const router = Router();

router.use("/users", users)
router.use("/reading", read)

router.use("/", sessions)


export { router }
