import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainHeader() {
  return (
    <Header2Container>
      <Link to={"/MainPage"}>
        <img
          style={{ width: "35px" }}
          src="/assets/51cec8ced2b272fc2e11ad1d6d6a29e8.png"
          alt=""
        />
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
  position: fixed;
  z-index: 99999;
`;
const NavLinksContainer = styled.div`
  gap: 2rem;

  display: flex;
  align-items: center;
  & > a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.4rem;
    padding-top: 0.5rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  }
`;
