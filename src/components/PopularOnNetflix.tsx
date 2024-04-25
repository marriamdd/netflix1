import styled from "styled-components";
import { Movie } from "../types";
import Data from "../data.json";
export default function PopularOnNetflix() {
  const filteredData = Data.movies.filter((item) => item.isTrending);
  return (
    <PopularContainer>
      {" "}
      <span>Popular On Netflix</span>
      <PopularItems>
        {filteredData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.thumbnail?.trending?.small})`,
            }}
          >
            {/* Content */}
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
    padding-left: 1.5rem;
    font-size: 20.921px;
    font-weight: 700;
    line-height: 15.643px;
    letter-spacing: -0.057px;
  }
`;
const PopularItems = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  /* width: 100%; */
  & > div {
    margin-top: 1.5rem;
    min-width: 130px;
    height: 150px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2px;
  }
  /* img {
    margin-top: 1.5rem;
    width: 103px;
    height: 150px;

    border-radius: 2px;
  } */
`;
