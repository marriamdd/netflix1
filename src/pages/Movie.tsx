import Data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export default function Movie() {
  const { title } = useParams();
  console.log(title);

  const currentMovie = Data.find((item) => item.title == title);
  console.log(currentMovie);
  return (
    <CurrentMovieContainer>
      <img src={currentMovie?.thumbnail.regular.small} alt="" />
      <h1> {currentMovie?.title}</h1>
    </CurrentMovieContainer>
  );
}
const CurrentMovieContainer = styled.div`
  padding-top: 6rem;
  background-color: black;
  height: 100vh;
  img {
    margin-left: 2.2rem;
  }
  h1 {
    margin: 1rem;
  }
`;
