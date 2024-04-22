import { Link } from "react-router-dom";

import styled from "styled-components";

import { Movie } from "../types";
export default function Preview({ data }: { data: Movie }) {
  const randomMovie: Movie[] = data;
  console.log(randomMovie.length);
  let randomIds = [];
  for (let i = 0; i <= 10; i++) {
    let random = Math.floor(Math.random() * randomMovie.length + 1);
    randomIds.push(random);
  }
  console.log(randomIds);
  console.log("esdata", data);
  const filteredData = data.filter((item: Movie) =>
    randomIds.includes(+item.id)
  );
  console.log(filteredData);
  return (
    <PreviewContainer>
      {" "}
      <span>Previews</span>
      <PreviewItems>
        {}

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
  height: 240px;
  span {
    font-size: 3rem;
    padding: 1rem;
    font-weight: 700;
  }
`;
const PreviewItems = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  width: 370px;

  img {
    margin-top: 1.5rem;
    width: 150px;
    height: 150px;
    border-radius: 10%;
    /* overflow-x: auto; */
  }
`;
