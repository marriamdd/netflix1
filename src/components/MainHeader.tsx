import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useContext, useEffect } from "react";
import { CategoryContext } from "../App";

export default function MainHeader() {
  const { setCategory, category, categoryChange, setCategoryChange } =
    useContext(CategoryContext);
  const { pathname } = useLocation();
  const endPoint = pathname.replace("/", "");

  useEffect(() => {
    switch (endPoint) {
      case "Movies":
        localStorage.setItem("category", "Movie");
        break;
      case "TVSeries":
        localStorage.setItem("category", "TV Series");
        break;
      case "MyList":
        localStorage.setItem("category", "isBookmarked");
        break;
      case "AllCategory":
        localStorage.setItem("category", "All");
        break;
    }
  }, [category]);
  const handleHomeClick = () => {
    setCategory("");
    localStorage.removeItem("category");
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
                : category === "All"
                ? "All"
                : ""}
              <span style={{ paddingLeft: ".7rem" }}>
                <img src="/assets/moviesIMGbase/Polygon 1.svg" alt="" />
              </span>
            </h2>
            <div className="dropdown-content" style={{ height: "600px" }}>
              <Link
                to={"/AllCategory"}
                onClick={() => {
                  setCategory("All");
                  setCategoryChange(false);
                }}
              >
                All
              </Link>
              <Link
                to={"/Movies"}
                onClick={() => {
                  setCategory("Movie");
                  setCategoryChange(false);
                }}
              >
                Movies
              </Link>
              <Link
                to={"/TVSeries"}
                onClick={() => {
                  setCategory("TV Series");
                  setCategoryChange(false);
                }}
              >
                TV Series
              </Link>
              <Link
                to={"/MyList"}
                onClick={() => {
                  setCategory("isBookmarked");
                  setCategoryChange(false);
                }}
              >
                MY List
              </Link>

              <button onClick={() => setCategoryChange(false)}>X</button>
            </div>
          </div>
        ) : (
          <div>
            <Link
              to={"/Movies"}
              onClick={() => {
                setCategory("Movie");
                setCategoryChange(false);
              }}
            >
              Movies
            </Link>
            <Link
              to={"/TVSeries"}
              onClick={() => {
                setCategory("TV Series");
                setCategoryChange(false);
              }}
            >
              TV Series
            </Link>
            <Link
              to={"/MyList"}
              onClick={() => {
                setCategory("isBookmarked");
                setCategoryChange(false);
              }}
            >
              MY List
            </Link>
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
  width: 375px;
  padding-block: 1rem;
  padding-inline: 2rem;
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
      .current {
    display: none;
  }
      .dropdown{
      
        position:absolute;
        left:0rem;
      // min-height:100vh;
   
        top:0rem;
      
      }
     
      .dropdown-content {
         display: flex;
      position: absolute;
      flex-direction: column;
      border-radius:30px;
      text-align: start;
      align-items: center;
      justify-content:center;
      width: 375px;
      height: 100vh;
      overflow:hidden;
     
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
