import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainHeader() {
  return (
    <Header2Container>
      <Link to={"/MainPage"}>
        <img src="/assets/design/logos_netflix-icon.svg" alt="" />
      </Link>

      <NavLinksContainer>
        <Link to={"/TVshows"}>TV Shows</Link>
        <Link to={"/Movies"}>Movies</Link>
        <Link to={"/MyList"}>My List</Link>
      </NavLinksContainer>
    </Header2Container>
  );
}
const Header2Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  position: absolute;
  z-index: 99999;
  & > a img {
    width: 5.3rem;
    height: 5.7rem;
  }
`;
const NavLinksContainer = styled.div`
  gap: 2rem;

  display: flex;
  align-items: center;
  & > a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30.447px;
    letter-spacing: 0.762px;
  }
`;
