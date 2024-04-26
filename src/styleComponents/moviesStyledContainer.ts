import styled from "styled-components";

export const MoviesStyledContainer = styled.div`
  width: 100%;

  padding: 9rem 1rem 11rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  div {
    width: 170px;
    height: 130px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: red;
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
