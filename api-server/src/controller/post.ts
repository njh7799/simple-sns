import { Request, Response, NextFunction } from "express";

import PostModel from "../model/post";
import PostService from "../service/post";

const PostController = {
  async createPost(req: Request, res: Response, next: NextFunction) {
    const user_id = Number(req.body.user_id);
    const content = String(req.body.content);
    const a = await PostModel.createPost(user_id, content);
    res.send(a);
  },
  async getPosts(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.query.id);
    const posts = await PostService.getPosts(id);
    res.send(posts);
  },
};

export default PostController;
