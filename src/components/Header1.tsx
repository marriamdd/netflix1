import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import MyListPage from "../pages/MyListPage";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const [showSignInButton, setShowSignInButton] = useState(true);
  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      setShowSignInButton(true);
    } else {
      setShowSignInButton(false);
    }

    [pathname];
  });

  return (
    <Header1Container>
      <div className="logoDiv">
        <img src="/assets/efe87fc48de87facd3a9555f467b33a8 (1).png" alt="" />
      </div>

      {showSignInButton && <Link to={"SignIn"}>Sign In</Link>}
    </Header1Container>
  );
}

const Header1Container = styled.header`
  margin-left: 3rem;
  position: fixed;

  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 99999;

  & > a {
    margin-right: 7rem;
    background-color: red;
    height: 35px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    padding-inline: 1.5rem;
    padding-top: 0.5rem;
    border-radius: 4px;
    font-size: 1.8rem;
    text-decoration: none;
  }
  .logoDiv {
    img {
      width: 80px;
      height: 40px;
      background-color: transparent;
    }
  }
`;
