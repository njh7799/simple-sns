import React, { useState } from "react";
import Layout from "../components/Layout";
import SearchResult from "../components/SearchResult";
import useFetch from "../hooks/useFetch";

const Search = ({}) => {
  const [username, setUsername] = useState("");
  const [state, fetchData] = useFetch();

  function searchUser(event) {
    event.preventDefault();
    fetchData(`http://127.0.0.1:4000/user?username=${username}`);
  }

  let searchResult = <div></div>;
  if (state.data) {
    console.log(state.data);
    searchResult = <SearchResult user={state.data} />;
  }

  return (
    <Layout>
      <form>
        <label>유저 검색</label>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input type="submit" value="검색" onClick={searchUser}></input>
      </form>
      {searchResult}
    </Layout>
  );
};

export default Search;
