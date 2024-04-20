import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const [showSignInButton, setShowSignInButton] = useState(true);
  const [mainSection, setMainSection] = useState(false);

  useEffect(() => {
    if (pathname === "/" || "") {
      setShowSignInButton(true);
    } else {
      setShowSignInButton(false);
    }
    if (pathname.replace("/", "") === "MainPage") {
      setMainSection(true);
      console.log("mmm");
    }
    [];
  });
  return (
    <HeaderContainer mainSection={mainSection}>
      <div className="logoDiv">
        {mainSection ? (
          <img
            style={{ width: "35px" }}
            src="/assets/51cec8ced2b272fc2e11ad1d6d6a29e8.png"
            alt=""
          />
        ) : (
          <img src="/assets/efe87fc48de87facd3a9555f467b33a8 (1).png" alt="" />
        )}
      </div>
      {mainSection ? (
        <div className="navLinksContainer">
          <Link to={"/MyList"}>My List</Link>
          <Link to={"/MainPage"}>Movies</Link>
        </div>
      ) : null}

      <div>{showSignInButton && <Link to={"SignIn"}>Sign In</Link>}</div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header<{ mainSection: boolean }>`
  margin-left: 3rem;
  position: fixed;
  top: ${(props) => (props.mainSection ? "1rem" : "3.5rem")};
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
  .navLinksContainer {
    gap: 2rem;
    width: 70%;
    display: flex;
    align-items: start;
    justify-content: end;
    & > a {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: white;
      text-decoration: none;
      font-weight: 400;
      font-size: 1.4rem;
      padding-top: 0.5rem;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    }
  }
`;
