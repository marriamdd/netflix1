import { CategoryContext } from "../App";
import Data from "../data.json";
import { useContext } from "react";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
export default function Movies() {
  //   const { category, setCategoryChange } = useContext(CategoryContext);
  return (
    <>
      <CoverDiv>
        <img src="public/assets/moviesIMGbase/cover.png" alt="" />
      </CoverDiv>
      <AddPlayInfoSection />
      <MoviesStyledContainer>
        {Data.movies

          .filter((item) => item.category == "Movie")

          .map((item) => (
            <div
              key={Math.random()}
              style={{
                backgroundImage: `url(${item.thumbnail.regular.small})`,
              }}
            ></div>
          ))}
      </MoviesStyledContainer>
    </>
  );
}
