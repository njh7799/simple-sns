import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post post={post} key={post.post_id} />
      ))}
    </ul>
  );
};

export default Posts;
