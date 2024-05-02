import Data from "../data.json";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function AllCategory() {
  return (
    <>
      <CoverDiv>
        <img src="/assets/moviesIMGbase/allcover.png" alt="" />
      </CoverDiv>
      <AddPlayInfoSection />
      <MoviesStyledContainer>
        {Data.movies.map((item) => (
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
