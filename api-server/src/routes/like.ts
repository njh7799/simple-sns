import { Router } from "express";

import LikeControlloer from "../controller/like";

const LikeRouter = Router();

LikeRouter.post("/:post_id/:user_id", LikeControlloer.like);

LikeRouter.delete("/:post_id/:user_id", LikeControlloer.unlike);

export default LikeRouter;
