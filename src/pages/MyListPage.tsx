import { Movie } from "../types";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import Data from "../data.json";
export default function MyListPage() {
  return (
    <MoviesStyledContainer>
      {Data.movies
        .filter((item) => item.isBookmarked)
        .map((item) => (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular?.small} alt="" />
          </div>
        ))}
    </MoviesStyledContainer>
  );
}
