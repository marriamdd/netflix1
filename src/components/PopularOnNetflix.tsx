import Data from "../data.json";
import styled from "styled-components";
import { Movie } from "../types";

export default function PopularOnNetflix({ data }: { data: Movie[] }) {
  const filteredData = data.filter((item) => item.thumbnail?.trending);
  return (
    <PopularContainer>
      {" "}
      <span>Popular On Netflix</span>
      <PopularItems>
        {filteredData.map((item, index) => (
          <div key={index}>
            <img src={item.thumbnail.trending?.small} alt="" />
          </div>
        ))}
      </PopularItems>
    </PopularContainer>
  );
}
const PopularContainer = styled.div`
  background-color: black;
  height: 170px;
  span {
    font-size: 3rem;
    padding: 1rem;
    font-weight: 700;
  }
`;
const PopularItems = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  width: 370px;

  img {
    margin-top: 1.5rem;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* overflow-x: auto; */
  }
`;
