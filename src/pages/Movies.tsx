import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Movie } from "../types";

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
    <MoviesContainer>
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
    </MoviesContainer>
  );
}
const MoviesContainer = styled.div`
  padding-block: 8rem;
  background-color: black;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  & > div img {
    width: 100%;
    max-height: 100%;
  }

  .markDiv {
    padding-top: 1rem;
    padding-left: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    & > p {
      color: #fffefe;
    }

    & > img {
      width: 15px;
    }
  }
`;
