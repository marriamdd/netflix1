import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import Category from "../pages/Category";
import { useContext } from "react";
import { CategoryContext } from "../App";
export default function MainHeader() {
  const options = ["TV Series", "Movies", "My List"];
  const { setCategory } = useContext(CategoryContext);
  const categoryClick = (item: string) => {
    console.log(item);
    setCategory(item);
  };
  return (
    <Header2Container>
      <Link to={"/MainPage"}>
        <img src="/assets/design/logos_netflix-icon.svg" alt="" />
      </Link>

      <NavLinksContainer>
        {options.map((item) => (
          <Link
            to={"/Category"}
            onClick={() => categoryClick(item)}
            key={Math.random()}
          >
            {item}
          </Link>
        ))}
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
