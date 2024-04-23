import { Dispatch, SetStateAction } from "react";

import { Movie } from "../types";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";

export default function Movies({
  data,
  setData,
}: {
  data: Movie[];
  setData: Dispatch<SetStateAction<Movie[]>>;
}) {
  const toggleBookMark = (clickedTitle: string) => {
    const updatedData = data.map((item) =>
      item.title === clickedTitle
        ? { ...item, isBookmarked: !item.isBookmarked }
        : item
    );
    setData(updatedData);
  };
  return (
    <MoviesStyledContainer>
      {data
        .filter((item) => item.category == "Movie")
        .map((item) => (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular.small} alt="" />
            <div className="markDiv">
              <p>{item.title}</p>

              <img
                onClick={() => toggleBookMark(item.title)}
                src={
                  item.isBookmarked
                    ? "/assets/icon-bookmark-full.svg"
                    : "/assets/icon-bookmark-empty.svg"
                }
                alt=""
              />
            </div>
          </div>
        ))}
    </MoviesStyledContainer>
  );
}
