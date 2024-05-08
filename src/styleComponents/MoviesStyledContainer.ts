import styled from "styled-components";

export const MoviesStyledContainer = styled.div`
  width: 100%;
  padding: 0rem 1rem 11rem;
  background-color: black;
  display: grid;
  column-gap: 1rem;
  row-gap: 0.5rem;

  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  div {
    width: 170px;
    height: 100px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: black;
  }

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
