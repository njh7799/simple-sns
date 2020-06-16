import { useEffect, useState } from "react";

import axios from "axios";

const userid = 1;

const Post = ({ post }) => {
  const [liked, setLiked] = useState(
    post.likers.find((liker) => liker === userid)
  );
  const [delta, setDelta] = useState(0);

  async function likeButtonClickHandler() {
    await axios.post(`http://127.0.0.1:4000/like/${post.post_id}/${userid}`);
    setLiked(true);
    setDelta(1);
  }

  async function unlikeButtonClickHandler() {
    await axios.delete(`http://127.0.0.1:4000/like/${post.post_id}/${userid}`);
    setLiked(false);
    setDelta(-1);
  }

  let likeButton = (
    <button type="button" onClick={likeButtonClickHandler}>
      좋아요{" "}
    </button>
  );
  if (liked) {
    likeButton = (
      <button type="button" onClick={unlikeButtonClickHandler}>
        좋아요 취소
      </button>
    );
  }

  return (
    <li>
      <span>
        {post.username}: {post.content}
        {likeButton}
        좋아요: {Number(post.likers.length) + delta}개
      </span>
    </li>
  );
};

export default Post;
