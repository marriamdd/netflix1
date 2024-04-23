import { Movie } from "../types";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function MyListPage({ data }: { data: Movie[] }) {
  console.log(data);
  return (
    <MoviesStyledContainer>
      {data
        .filter((item) => item.isBookmarked)
        .map((item) => (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular.small} alt="" />
          </div>
        ))}
    </MoviesStyledContainer>
  );
}
