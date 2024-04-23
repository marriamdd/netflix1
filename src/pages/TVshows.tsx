import { Movie } from "../types";

import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
export default function TVshows({ data }: { data: Movie[] }) {
  console.log(data);
  const tvShows = data.filter((item) => item.category === "TV Series");
  console.log(tvShows);
  return (
    <MoviesStyledContainer>
      {tvShows.map((item) => {
        return (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular.small} alt="" />
          </div>
        );
      })}
    </MoviesStyledContainer>
  );
}
