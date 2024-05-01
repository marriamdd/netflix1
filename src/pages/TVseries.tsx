import Data from "../data.json";

import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
export default function TVseries() {
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
