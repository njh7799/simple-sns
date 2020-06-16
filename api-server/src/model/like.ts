import db from "./db";

const LikeModel = {
  async like(user_id: number, posts_id: number) {
    const [
      data,
    ] = await db.query(`insert into likes(users_id, posts_id) values (?,?)`, [
      user_id,
      posts_id,
    ]);
    return data;
  },
  async unlike(user_id: number, posts_id: number) {
    const [
      data,
    ] = await db.query(`delete from likes where users_id=? and posts_id=?`, [
      user_id,
      posts_id,
    ]);
    return data;
  },
};

export default LikeModel;
