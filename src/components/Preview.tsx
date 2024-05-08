import { Link } from "react-router-dom";

import styled from "styled-components";
import Data from "../data.json";

export default function Preview() {
  const randomIds: number[] = [];
  for (let i = 0; i <= 6; i++) {
    const random = Math.floor(Math.random() * Data.movies.length + 1);
    randomIds.push(random);
  }
  const filteredData = Data.movies.filter((item) =>
    randomIds.includes(+item.id)
  );

  return (
    <PreviewContainer>
      <span>Previews</span>
      <PreviewItems>
        {filteredData.map((item) => (
          <div key={Math.random()}>
            <Link
              to={`/single/${decodeURIComponent(
                item.title.replace(/\s/g, "_")
              )}`}
            >
              <div
                style={{
                  backgroundImage: `url(${item.thumbnail?.regular?.small})`,
                }}
              ></div>
            </Link>
          </div>
        ))}
      </PreviewItems>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  background-color: black;
  box-sizing: border-box;
  padding: 2rem;

  overflow-x: auto;

  span {
    font-size: 26.748px;

    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.073px;
  }
  div {
    width: 100%;
    margin-top: 0.5rem;
    width: 102px;
    height: 100px;

    border-radius: 102px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
const PreviewItems = styled.div`
  display: flex;
  gap: 0.5rem;

  width: 360px;

  img {
    margin-top: 1.5rem;
    width: 102px;
    height: 102px;
    flex-shrink: 0;
    border-radius: 102px;
  }
`;
