import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Movie } from "../types";
import Data from "../data.json";
import AddPlayInfoSection from "../components/AddPlayInfoSection";
export default function SingleMovie() {
  const { title } = useParams();

  const currentMovie = Data.movies.find(
    (item) => item.title.replaceAll(" ", "_") === title
  );

  const formattedTitle = currentMovie?.title.replaceAll("_", " ");

  return (
    <CurrentMovieDiv>
      <CurrentMovieContainer>
        <img src={currentMovie?.thumbnail?.regular?.small} alt="" />
        <div className="vectorContainer">
          <div className="line"></div>
          <span>92.44</span>
          <img
            className="ellipse"
            src="/assets/design/Ellipse 10.svg"
            alt="red Ellipse"
          />
        </div>
      </CurrentMovieContainer>

      <AddPlayInfoSection />
      <h1>{formattedTitle}</h1>
    </CurrentMovieDiv>
  );
}
const CurrentMovieDiv = styled.div`
  h1 {
    padding: 1rem 0rem 2rem 2rem;
  }
`;
const CurrentMovieContainer = styled.div`
  padding-top: 9rem;
  background-color: black;
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  /* height: 100vh; */

  .vectorContainer {
    position: relative;
    width: 100%;
    img {
      width: 37px;
      height: 44.4px;
      position: absolute;
      top: -15rem;
      left: 18rem;
    }
    .line {
      position: absolute;

      width: 75%;
      top: -5rem;
      height: 1px;
      left: 4rem;
      background-color: aliceblue;
    }
    .ellipse {
      position: absolute;
      z-index: 99999;
      top: -6rem;
      left: 4.1rem;
      width: 22px;
      height: 22px;
    }
  }
  span {
    position: absolute;
    top: -5.6rem;
    right: 0.8rem;
    font-size: 9.05px;
    line-height: 9.02px;
    font-weight: 400;
    opacity: 0.8;
  }
`;
