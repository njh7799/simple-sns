import { Router } from "express";

import PostController from "../controller/post";

const PostRouter = Router();

PostRouter.get("/", PostController.getPosts);

PostRouter.post("/", PostController.createPost);

export default PostRouter;
