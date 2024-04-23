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

  width: 360px;

  img {
    margin-top: 1.5rem;
    width: 103px;
    height: 161px;
    flex-shrink: 0;
    border-radius: 2px;
  }
`;
