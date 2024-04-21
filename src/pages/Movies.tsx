import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
export default function Movies() {
  useEffect(() => {
    getMovies();
  }, []);
  const [movies, setMovies] = useState<Movie[]>([]);
  async function getMovies() {
    try {
      let i = 0;
      while (true) {
        const response = await axios(`http://localhost:3000/${i}`);
        const data = response.data;
        console.log(data);
        if (!response || !response.data) {
          break;
        }
        if (data.category) {
          setMovies((prev) => [...prev, data]);
        }
        i++;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <MoviesContainer>
      {movies.map((item) => (
        <div key={Math.random()}>
          <img src={item.thumbnail.regular.small} alt="" />
          <p>{item.title}</p>
        </div>
      ))}
    </MoviesContainer>
  );
}
const MoviesContainer = styled.div`
  padding-top: 9rem;
  background-color: black;
  display: grid;
  gap: 1rem;

  grid-template-columns: auto minmax(190px, 1fr);
  img {
    width: 100%;
    max-height: 100%;
  }
  p {
    padding-top: 0.5rem;
    font-size: 1.5rem;
    color: #fffefe;
  }
`;
