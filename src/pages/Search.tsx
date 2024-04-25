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
    // if (input.length >= 3) {
    //   let filtered = data.filter((item) =>
    //     item.title.toLowerCase().includes(input)
    //   );
    //   setSearched(filtered);
    //   if (!input) {
    //     setSearched([]);
    //   }
    // }
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
      <h1>Top Searches</h1>
      {Data.movies
        .filter((item) =>
          inputValue
            ? item.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
            : false
        )
        ?.map((item) => (
          <div className="foundMovie" key={Math.random()}>
            <img
              className="foundImg"
              src={item.thumbnail.regular?.small}
              alt=""
            />
            <span>{item.title}</span>{" "}
          </div>
        ))}
    </SearchContainer>
  );
}
const SearchContainer = styled.div`
  padding-block: 9rem 3rem;
  h1 {
    padding: 2rem;
  }
  .foundMovie {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .foundImg {
    width: 200px;
    height: 200px;
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
