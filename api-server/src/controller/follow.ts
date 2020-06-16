import { Request, Response, NextFunction } from "express";

import FollowModel from "../model/follow";

const FollowController = {
  async follow(req: Request, res: Response, next: NextFunction) {
    const my_id = Number(req.params.my_id);
    const target_id = Number(req.params.target_id);
    const a = await FollowModel.follow(my_id, target_id);
    res.send(a);
  },
  async unfollow(req: Request, res: Response, next: NextFunction) {
    const my_id = Number(req.params.my_id);
    const target_id = Number(req.params.target_id);
    const a = await FollowModel.unfollow(my_id, target_id);
    res.send(a);
  },
};

export default FollowController;
