import { Link } from "react-router-dom";
import styled from "styled-components";

import { useContext } from "react";
import { CategoryContext } from "../App";

export default function MainHeader() {
  const options = ["TV Series", "Movies", "My List"];
  const insideOptions = ["All", "TV Series", "Movies", "My List"];

  const { setCategory, category, categoryChange, setCategoryChange } =
    useContext(CategoryContext);
  const categoryClick = (item: string) => {
    switch (item) {
      case "Movies":
        setCategory("Movie");
        setCategoryChange(false);
        break;
      case "TV Series":
        setCategory("TV Series");
        setCategoryChange(false);
        break;
      case "My List":
        setCategory("isBookmarked");
        setCategoryChange(false);
        break;

      default:
        setCategory("All");
        setCategoryChange(false);
    }
  };

  const handleHomeClick = () => {
    setCategory("");
  };
  const handleChangeCategory = () => {
    setCategoryChange(true);
  };
  return (
    <Header2Container category={category} categoryChange={categoryChange}>
      <Link to={"/MainPage"} onClick={handleHomeClick}>
        <img src="/assets/design/logos_netflix-icon.svg" alt="" />
      </Link>

      <NavLinksContainer categoryChange={categoryChange}>
        {category ? (
          <div className="dropdown">
            {" "}
            <h2 onClick={handleChangeCategory} className="current">
              {category === "Movie"
                ? "Movies"
                : category === "TV Series"
                ? "TV Series"
                : category === "isBookmarked"
                ? "MY List"
                : "All"}{" "}
              <span style={{ paddingLeft: ".7rem" }}>
                <img src="/assets/moviesIMGbase/Polygon 1.svg" alt="" />
              </span>
            </h2>
            <div className="dropdown-content">
              {insideOptions.map((item) => (
                <Link
                  to={"/Category"}
                  onClick={() => categoryClick(item)}
                  key={Math.random()}
                >
                  {item}
                </Link>
              ))}
              <button onClick={() => setCategoryChange(false)}>X</button>
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
const Header2Container = styled.div<{
  category: string;
  categoryChange: boolean;
}>`
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
const NavLinksContainer = styled.div<{ categoryChange: boolean }>`
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
  h2 {
    font-size: 17.197px;
    font-weight: 500;
    line-height: 30.447px;
    letter-spacing: 0.762px;
    padding-left: 1rem;
  }
  ${({ categoryChange }) =>
    categoryChange
      ? `
      .dropdown{
      
        position:fixed;
        left:0;
        right:0;
        top:0;
      }
     
      .dropdown-content {
         display: flex;
      position: absolute;
      flex-direction: column;
     
      text-align: start;
      align-items: center;
      justify-content:center;
      min-width: 340px;
      height: 100vh;
      top: 0rem;
      left: 0;
      right: 0;
      background-color:black;
      gap: 1rem;
     
      button{
        margin-top:60px;
        width: 70px;
height: 70px;
background:white;
border-radius:50%;
color:black;
border:none;
font-size:38px
      }

      a {
      
        font-size: 24.677px;

font-weight: 300;
line-height: 52.2px; 
letter-spacing: -0.412px;
        text-align: start;
      }}
    `
      : ``}

  .dropdown-content a:hover {
    opacity: 1;
    font-size: 29.68px;
    font-weight: 600;
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
