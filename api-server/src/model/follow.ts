import db from "./db";

const Follow = {
  async follow(my_id: number, target_id: number) {
    const [
      data,
    ] = await db.query(`insert into follow(follower, followee) values (?,?)`, [
      my_id,
      target_id,
    ]);
    return data;
  },
  async unfollow(my_id: number, target_id: number) {
    const [
      data,
    ] = await db.query(`delete from follow where follower=? and followee=?`, [
      my_id,
      target_id,
    ]);
    return data;
  },
};

export default Follow;
