import React from "react";
import { Movie } from "../types";
import styled from "styled-components";
import { MoviesContainer } from "../styleComponents/moviesContainer";
export default function TVshows({ data }: { data: Movie[] }) {
  console.log(data);
  const tvShows = data.filter((item) => item.category === "TV Series");
  console.log(tvShows);
  return (
    <MoviesContainer>
      {tvShows.map((item) => {
        return (
          <div key={Math.random()}>
            <img src={item.thumbnail.regular.small} alt="" />
          </div>
        );
      })}
    </MoviesContainer>
  );
}
