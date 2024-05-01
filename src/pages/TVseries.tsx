import { CategoryContext } from "../App";
import Data from "../data.json";
import { useContext } from "react";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import styled from "styled-components";
import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
export default function TVseries() {
  //   const { category, setCategoryChange } = useContext(CategoryContext);
  return (
    <div>
      <CoverDiv>
        <img src="public/assets/moviesIMGbase/tvcover.png" alt="" />
      </CoverDiv>
      <AddPlayInfoSection />
      <MoviesStyledContainer>
        {Data.movies
          .filter((item) => item.category === "TV Series")

          .map((item) => (
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
