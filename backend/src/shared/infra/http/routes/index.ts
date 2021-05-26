import { Router } from "express";

import { userRoutes as users } from "./users.router"
import { sessionRouter as sessions} from './authenticate.routes'
import { articleRoute as articles} from './article.routes'
import { cartRouter as carts} from "./cart.routes"

const router = Router();

router.use("/users", users)
router.use("/articles", articles)
router.use("/cart",carts )

router.use("/", sessions)


export { router }
