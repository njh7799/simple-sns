import { Request, Response, NextFunction } from "express";

import PostModel from "../model/post";

const PostService = {
  async getPosts(id: number) {
    const postList = await PostModel.getPosts(id);
    const s = new Set();
    const posts = [];
    postList.forEach((post) => {
      if (!s.has(post.post_id)) {
        posts.push({
          post_id: post.post_id,
          username: post.username,
          content: post.content,
          likers: [],
        });
        s.add(post.post_id);
      }
      if (!post.liker) {
        return;
      }
      const lastPost = posts[posts.length - 1];
      lastPost.likers.push(post.liker);
    });
    return posts;
  },
};

export default PostService;
