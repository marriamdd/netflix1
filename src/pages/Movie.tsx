import Data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export default function Movie() {
  const { title } = useParams();
  console.log(title);

  const currentMovie = Data.find(
    (item) => item.title.replaceAll(" ", "_") === title
  );
  const formattedTitle = currentMovie?.title.replaceAll("_", " ");

  console.log(currentMovie?.thumbnail.regular.small);
  return (
    <CurrentMovieContainer>
      <img src={currentMovie?.thumbnail.regular.small} alt="" />
      <img src="/assets/maxresdefault.jpg" alt="Sample Image" />

      <h1>{formattedTitle}</h1>
    </CurrentMovieContainer>
  );
}
const CurrentMovieContainer = styled.div`
  padding-top: 6rem;
  background-color: black;
  height: 100vh;
  img {
    width: 100px;
    height: 100px;
    margin-left: 2.2rem;
  }
  h1 {
    margin: 1rem;
  }
`;
