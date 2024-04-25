import { Dispatch, SetStateAction } from "react";

import { Movie } from "../types";
import { MoviesStyledContainer } from "../styleComponents/moviesStyledContainer";
import axios from "axios";
import Data from "../data.json";
export default function Movies() {
  // const toggleBookMark = (clickedItem: Movie) => {
  //   axios.patch(`http://localhost:3000/movies/${clickedItem.id}`, {
  //     isBookmarked: !clickedItem.isBookmarked,
  //   });
  //   const updatedData = Data.movies.map((item) =>
  //     item.id === clickedItem.id
  //       ? { ...item, isBookmarked: !item.isBookmarked }
  //       : item
  //   );
  //   // setData(updatedData);
  // };
  return (
    <MoviesStyledContainer>
      {Data.movies
        .filter((item) => item.category == "Movie")
        .map((item) => (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular?.small} alt="" />
            <div className="markDiv">
              <p>{item.title}</p>

              <img
                // onClick={() => toggleBookMark(item)}
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
