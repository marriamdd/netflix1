import Data from "../data.json";

import AddPlayInfoSection from "../components/AddPlayInfoSection";
import CoverDiv from "../styleComponents/CoverDivStyles";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import styled from "styled-components";

export default function AllCategory() {
  return (
    <Container style={{ height: "600px", overflowY: "auto" }}>
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
    </Container>
  );
}
const Container = styled.div`
  ::-webkit-scrollbar-track {
    all: unset;
    background-color: black;
  }
`;
