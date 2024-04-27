import styled from "styled-components";
import { Movie } from "../types";
import React, { useState } from "react";
import Data from "../data.json";
export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searched, setSearched] = useState<Movie[]>([]);

  console.log(searched);
  console.log(inputValue);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setInputValue(input);
  };
  return (
    <SearchContainer>
      <SearchInputContainer>
        <img src="/assets/design/ant-design_search-outlined.svg" alt="search" />
        <input
          onChange={handleInput}
          value={inputValue}
          type="text"
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <img src="/assets/design/ic_baseline-mic.svg" alt="microphone" />
      </SearchInputContainer>

      <div className="foundedContainer">
        {Data.movies
          .filter((item) =>
            inputValue
              ? item.title
                  .toLowerCase()
                  .includes(inputValue.toLocaleLowerCase())
              : false
          )
          ?.map((item) => (
            <div className="foundMovie" key={Math.random()}>
              <img
                className="foundImg"
                src={item.thumbnail.regular?.small}
                alt=""
              />
              <div className="nameIconDiv">
                <span>{item.title}</span>{" "}
                <img src="/assets/moviesIMGbase/bx_bx-play-circle.svg" alt="" />
              </div>
            </div>
          ))}
      </div>
    </SearchContainer>
  );
}
const SearchContainer = styled.div`
  padding-block: 9rem 3rem;

  .foundedContainer {
    height: 370px;
    overflow-y: auto;
  }
  h1 {
    padding: 2rem;
  }
  .foundMovie {
    width: 100%;
    background: #424242;
    display: flex;
    align-items: center;

    border-bottom: 2px solid black;

    .nameIconDiv {
      padding-inline: 1rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
  .foundImg {
    border-radius: 3px;
    width: 146px;
    height: 76px;
  }
`;
const SearchInputContainer = styled.div`
  input {
    width: 244.556px;
    height: 3.1rem;
    background-color: transparent;
    border: none;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #424242;
  height: 52px;
  gap: 1rem;
`;
