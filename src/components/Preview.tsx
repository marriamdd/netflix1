import { Link } from "react-router-dom";

import styled from "styled-components";

import { Movie } from "../types";
export default function Preview({ data }: { data: Movie[] }) {
  const randomMovie: Movie[] = data;

  let randomIds = [];
  for (let i = 0; i <= 10; i++) {
    let random = Math.floor(Math.random() * randomMovie.length + 1);
    randomIds.push(random);
  }
  const filteredData = data.filter((item: Movie) =>
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
              <img src={item.thumbnail.regular.small} alt="" />
            </Link>
          </div>
        ))}
      </PreviewItems>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  background-color: black;
  margin: 2rem;
  span {
    font-size: 26.748px;

    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.073px;
  }
`;
const PreviewItems = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  width: 360px;

  img {
    margin-top: 1.5rem;
    width: 102px;
    height: 102px;
    flex-shrink: 0;
    border-radius: 102px;
  }
`;
