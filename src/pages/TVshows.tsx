import { Movie } from "../types";
import Data from "../data.json";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
export default function TVshows() {
  const tvShows = Data.movies.filter((item) => item.category === "TV Series");
  console.log(tvShows);
  return (
    <MoviesStyledContainer>
      {tvShows.map((item) => {
        return (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular?.small} alt="" />
          </div>
        );
      })}
    </MoviesStyledContainer>
  );
}
