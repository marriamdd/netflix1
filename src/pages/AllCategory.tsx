import Data from "../data.json";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import styled from "styled-components";

export default function AllCategory() {
  return (
    <div style={{ height: "650px", overflowY: "auto" }}>
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
    </div>
  );
}
