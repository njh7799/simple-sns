import { Request, Response, NextFunction } from "express";

import LikeModel from "../model/like";

const LikeController = {
  async like(req: Request, res: Response, next: NextFunction) {
    const user_id = Number(req.params.user_id);
    const post_id = Number(req.params.post_id);
    const a = await LikeModel.like(user_id, post_id);
    res.send(a);
  },
  async unlike(req: Request, res: Response, next: NextFunction) {
    const user_id = Number(req.params.user_id);
    const post_id = Number(req.params.post_id);
    const a = await LikeModel.unlike(user_id, post_id);
    res.send(a);
  },
};

export default LikeController;
