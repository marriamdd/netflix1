import { CategoryContext } from "../App";
import Data from "../data.json";
import { useContext } from "react";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import styled from "styled-components";
import AddPlayInfoSection from "../components/AddPlayInfoSection";

export default function Category() {
  const { category, setCategoryChange } = useContext(CategoryContext);

  return (
    <div>
      {category === "Movie" && (
        <CoverDiv>
          <img src="public/assets/moviesIMGbase/cover.png" alt="" />
        </CoverDiv>
      )}
      {category === "TV Series" && (
        <CoverDiv>
          <img src="public/assets/moviesIMGbase/tvcover.png" alt="" />
        </CoverDiv>
      )}
      {category === "All" && (
        <CoverDiv>
          <img src="public/assets/moviesIMGbase/allcover.png" alt="" />
        </CoverDiv>
      )}
      {(category === "TV Series" ||
        category === "Movie" ||
        category === "All") && <AddPlayInfoSection />}

      <MoviesStyledContainer
        style={{ paddingTop: category === "isBookmarked" ? "10rem" : "" }}
      >
        {category === "Movie" || category === "TV Series"
          ? Data.movies
              .filter(
                (item) =>
                  item.category.toLocaleLowerCase() ==
                  category.toLocaleLowerCase()
              )
              .map((item) => (
                <div
                  key={Math.random()}
                  style={{
                    backgroundImage: `url(${item.thumbnail.regular.small})`,
                  }}
                ></div>
              ))
          : category === "isBookmarked"
          ? Data.movies
              .filter((item) => item.isBookmarked)
              .map((item) => (
                <div
                  key={Math.random()}
                  style={{
                    backgroundImage: `url(${item.thumbnail.regular.small})`,
                  }}
                ></div>
              ))
          : Data.movies.map((item) => (
              <div
                key={Math.random()}
                style={{
                  backgroundImage: `url(${item.thumbnail.regular.small})`,
                }}
              ></div>
            ))}
      </MoviesStyledContainer>
    </div>
  );
}

const CoverDiv = styled.div`
  padding-bottom: 1rem;
  img {
    width: 100%;
    height: 330px;
  }
`;
