import styled from "styled-components";
import { Movie } from "../types";
import { MoviesContainer } from "../styleComponents/moviesContainer";

export default function MyListPage({ data }: { data: Movie[] }) {
  console.log(data);
  return (
    <MoviesContainer>
      {data
        .filter((item) => item.isBookmarked)
        .map((item) => (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular.small} alt="" />
          </div>
        ))}
    </MoviesContainer>
  );
}
