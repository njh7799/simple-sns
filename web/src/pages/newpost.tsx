import { useState } from "react";
import axios from "axios";
import Router from "next/router";

import Layout from "../components/Layout";

const userid = 1;

const NewPost = () => {
  const [content, setContent] = useState("");

  async function submitHandler(event) {
    event.preventDefault();
    console.log(33);
    await axios.post(`http://127.0.0.1:4000/post`, {
      user_id: userid,
      content: content,
    });
    Router.push("/");
  }

  return (
    <Layout>
      <form>
        <label>게시글 작성</label>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <input type="submit" value="제출" onClick={submitHandler}></input>
      </form>
    </Layout>
  );
};

export default NewPost;
