import Link from "next/link";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const userid = 1;

const Index = () => {
  const [state, fetchData] = useFetch();
  useEffect(() => {
    fetchData(`http://127.0.0.1:4000/post?id=${userid}`);
  }, []);
  const { loading, data: posts, error } = state; // state.data 를 users 키워드로 조회
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  return (
    <Layout>
      <h1>Simple SNS에 오신 것을 환영합니다.</h1>
      <Posts posts={posts} />
    </Layout>
  );
};

export default Index;
