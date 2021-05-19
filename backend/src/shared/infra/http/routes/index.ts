import { Router } from "express";

import { userRoutes as users } from "./users.router"

const router = Router();

router.use("/users", users)


export { router }
