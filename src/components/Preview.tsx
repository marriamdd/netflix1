import Data from "../data.json";
import styled from "styled-components";
export default function Preview() {
  const filteredData = Data.filter((item) => item.thumbnail?.trending?.small);
  return (
    <PreviewContainer>
      {" "}
      <span>Previews</span>
      <PreviewItems>
        {filteredData.map((item, index) => (
          <div key={index}>
            <img src={item.thumbnail.trending?.small} alt="" />
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
