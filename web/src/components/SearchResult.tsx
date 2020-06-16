import axios from "axios";
import { useState } from "react";

const userid = 1;

const SearchResult = ({ user }) => {
  if (!user.exist) {
    return <div>해당 유저는 존재하지 않습니다.</div>;
  }

  const [followed, setFollowed] = useState(
    user.follower.find((follower) => follower === userid)
  );
  const [delta, setDelta] = useState(0);

  async function followButtonClickHandler() {
    await axios.post(`http://127.0.0.1:4000/follow/${userid}/${user.id}`);
    setFollowed(true);
    setDelta(1);
  }

  async function unfolloweButtonClickHandler() {
    await axios.delete(`http://127.0.0.1:4000/follow/${userid}/${user.id}`);
    setFollowed(false);
    setDelta(-1);
  }

  let followButton = (
    <button type="button" onClick={followButtonClickHandler}>
      팔로우
    </button>
  );
  if (followed) {
    followButton = (
      <button type="button" onClick={unfolloweButtonClickHandler}>
        팔로우 취소
      </button>
    );
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <div>팔로워: {user.follower.length + delta} 명</div>
      {followButton}
    </div>
  );
};

export default SearchResult;
