import db from "./db";

const PostModel = {
  async createPost(user_id: number, content: string) {
    const [
      data,
    ] = await db.query(`Insert into Posts (writer, content) values(?,?)`, [
      user_id,
      content,
    ]);
    return data;
  },
  async getPosts(id: number) {
    const [
      data,
    ] = await db.query(
      `select post_id, username, content, users_id as liker from likes right join (select username, content, post_id  from users join (Select id as post_id, writer, content from Posts where writer in (select followee from follow where follower=${id})) as posts  on id=writer)as t2 on posts_id=post_id order by post_id`,
      [id]
    );
    return JSON.parse(JSON.stringify(data));
  },
};

export default PostModel;
