import styled from "styled-components";

export const MoviesContainer = styled.div`
  padding-block: 8rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  & > div img {
    width: 100%;
    max-height: 100%;
  }

  .markDiv {
    padding-top: 1rem;
    padding-left: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    & > p {
      color: #fffefe;
    }

    & > img {
      width: 15px;
    }
  }
`;
