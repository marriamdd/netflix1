import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

import { useContext } from "react";
import { CategoryContext } from "../App";
import Category from "../pages/Category";
export default function MainHeader() {
  const options = ["TV Series", "Movies", "My List"];
  const { setCategory, category } = useContext(CategoryContext);
  const categoryClick = (item: string) => {
    console.log(category);
    setCategory(item);
  };
  const handleHomeClick = () => {
    setCategory("");
  };
  return (
    <Header2Container category={category}>
      <Link to={"/MainPage"} onClick={handleHomeClick}>
        <img src="/assets/design/logos_netflix-icon.svg" alt="" />
      </Link>

      <NavLinksContainer>
        {category ? (
          <div className="dropdown">
            {" "}
            <h2 className="current">
              {category}{" "}
              <span>
                <img src="/assets/moviesIMGbase/Polygon 1.svg" alt="" />
              </span>
            </h2>
            <div className="dropdown-content">
              {options.map((item) => (
                <Link
                  to={"/Category"}
                  onClick={() => categoryClick(item)}
                  key={Math.random()}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {options.map((item) => (
              <Link
                to={"/Category"}
                onClick={() => categoryClick(item)}
                key={Math.random()}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </NavLinksContainer>
    </Header2Container>
  );
}
const Header2Container = styled.div<{ category: string }>`
  display: flex;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: ${(props) => (props.category ? "null" : "space-between")};
  position: absolute;
  z-index: 99999;
  & > a img {
    width: 5.3rem;
    height: 5.7rem;
  }
`;
const NavLinksContainer = styled.div`
  div {
    gap: 2rem;

    display: flex;

    align-items: center;
  }
  .dropdown {
    align-self: flex-start;
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;

    z-index: 1;
    a {
      opacity: 0.6;
    }
  }
  .dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
    font-size: 17.197px;
    font-weight: 500;
    text-align: start;
    align-items: start;
    gap: 0;
    a {
      line-height: 15px;
      font-size: 1rem;
      text-align: start;
    }
  }
  .dropdown-content a:hover {
    opacity: 1;
  }
  & > div a {
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
