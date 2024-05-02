import Data from "../data.json";

import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function MyList() {
  let storage = localStorage.getItem("isBookmarked");
  console.log(storage);
  const myListItems = Data.movies.filter((item) => item.isBookmarked);

  return (
    <div style={{ height: "100vh" }}>
      <MoviesStyledContainer style={{ paddingTop: "10rem" }}>
        {myListItems.map((item) => (
          <div
            key={Math.random()}
            style={{
              backgroundImage: `url(${item.thumbnail.regular.small})`,
            }}
          ></div>
        ))}
      </MoviesStyledContainer>
    </div>
  );
}
