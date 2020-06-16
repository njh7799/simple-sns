import Link from "next/link";

const linkStyle = {
  marginRight: "1rem",
};
const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>홈</a>
      </Link>
      <Link href="/newpost">
        <a style={linkStyle}>새 게시글</a>
      </Link>
      <Link href="/search">
        <a style={linkStyle}>검색</a>
      </Link>
    </div>
  );
};

export default Header;
