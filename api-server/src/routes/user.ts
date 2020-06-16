import { Router } from "express";

import UserControlloer from "../controller/user";

const UserRouter = Router();

UserRouter.get("/", UserControlloer.getUser);

export default UserRouter;
