import { Request, Response, NextFunction } from "express";

import UserService from "../service/user";

const UserController = {
  async getUser(req: Request, res: Response, next: NextFunction) {
    const username = String(req.query.username);
    const a = await UserService.getUser(username);
    res.send(a);
  },
};

export default UserController;
