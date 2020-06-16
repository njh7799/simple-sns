import express from "express";
import dotenv from "dotenv";

dotenv.config();

import cors from "cors";

import FollowRouter from "./routes/follow";
import LikeRouter from "./routes/like";
import PostRouter from "./routes/post";
import UserRouter from "./routes/user";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/follow", FollowRouter);
app.use("/like", LikeRouter);
app.use("/post", PostRouter);
app.use("/user", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
