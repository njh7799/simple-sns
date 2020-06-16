import UserModel from "../model/user";

const UserService = {
  async getUser(username: string) {
    const user = {
      id: null,
      username: username,
      follower: [],
      exist: false,
    };
    const rawUserData = await UserModel.getUser(username);
    if (rawUserData.length) {
      user.exist = true;
      user.id = rawUserData[0].id;
    }
    rawUserData.forEach((e) => {
      user.follower.push(e.follower);
    });
    return user;
  },
};

export default UserService;
