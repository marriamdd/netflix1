import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Movie } from "../types";

export default function SingleMovie({ data }: { data: Movie[] }) {
  const { title } = useParams();
  console.log("title", title);
  console.log("data", data);
  const currentMovie = data.find(
    (item) => item.title.replaceAll(" ", "_") === title
  );
  const formattedTitle = currentMovie?.title.replaceAll("_", " ");
  console.log("lk");
  console.log(currentMovie?.thumbnail.regular.small);
  return (
    <CurrentMovieContainer>
      <img src={currentMovie?.thumbnail.regular.small} alt="" />

      <h1>{formattedTitle}</h1>
    </CurrentMovieContainer>
  );
}
const CurrentMovieContainer = styled.div`
  padding-top: 9rem;
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
