import styled from "styled-components";

export default function () {
  return (
    <Container>
      <div>
        <img
          src="/assets/design/ant-design_plus-outlined.svg"
          alt="plus-outlined"
        />
        <span>My List</span>
      </div>
      <div className="PlayContainer">
        <img src="/assets/design/Vector (2).svg" alt="play" />
        <span>Play</span>
      </div>
      <div>
        <img src="/assets/design/feather_info.svg" alt="more info" />
        <span>Info</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 1rem;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 13.642px;
      font-style: normal;
      font-weight: 400;
      line-height: 2rem;
      letter-spacing: -0.041px;
    }
  }
  .PlayContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 110.625px;
    height: 4.5rem;
    border-radius: 5.625px;
    background: #c4c4c4;
    span {
      color: #000;
      font-size: 20.462px;
      font-weight: 600;
      line-height: 3rem;
      letter-spacing: -0.061px;
    }
  }

  & > div img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;
