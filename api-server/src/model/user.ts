import db from "./db";

const UserModel = {
  async getUser(username: string) {
    const [
      data,
    ] = await db.query(
      `select id, username, follower from (select id, username from users where username=?) as t1 left join follow on id=followee`,
      [username]
    );
    return JSON.parse(JSON.stringify(data));
  },
};

export default UserModel;
