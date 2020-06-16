import { Router } from "express";

import FollowController from "../controller/follow";

const FollowRouter = Router();

FollowRouter.post("/:my_id/:target_id", FollowController.follow);

FollowRouter.delete("/:my_id/:target_id", FollowController.unfollow);

export default FollowRouter;
