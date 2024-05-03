import Data from "../data.json";

import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function MyList() {
  const storage = localStorage.getItem("isBookmarked");
  const storagearray = storage ? JSON.parse(storage) : [];
  const myListItems = Data.movies.filter((item) =>
    storagearray.includes(item.title)
  );

  return (
    <div style={{ height: "600px", overflow: "auto" }}>
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
