import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function OutHeader() {
  const location = useLocation();
  const pathname = location.pathname;

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
    <div style={{ position: "relative" }}>
      <Header1Container>
        <div className="logoDiv">
          <Link to={"/"}>
            <img src="/assets/design/logos_netflix.svg" alt="" />
          </Link>
        </div>

        {showSignInButton && <Link to={"SignIn"}>Sign In</Link>}
      </Header1Container>
    </div>
  );
}

const Header1Container = styled.header`
  position: absolute;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  width: 375px;
  justify-content: space-between;
  z-index: 99999;

  & > a {
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
`;
