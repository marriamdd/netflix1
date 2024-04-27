import { CategoryContext } from "../App";
import Data from "../data.json";
import { useContext } from "react";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function Category() {
  const { category } = useContext(CategoryContext);

  console.log(category);
  return (
    <MoviesStyledContainer>
      {Data.movies
        .filter(
          (item) =>
            item.category.toLocaleLowerCase() == category.toLocaleLowerCase()
        )
        .map((item) => (
          <div
            key={Math.random()}
            style={{
              backgroundImage: `url(${item.thumbnail.regular.small})`,
            }}
          ></div>
        ))}
    </MoviesStyledContainer>
  );
}