import styled from "styled-components";

export default function () {
  return (
    <Container>
      <div>
        <img
          src="public/assets/Screenshot 2024-04-21 at 3.06.54 AM.png"
          alt=""
        />
      </div>
      <div>
        <img src="/assets/Screenshot 2024-04-21 at 3.06.26 AM.png" alt="" />
      </div>
      <div>
        <img src="/assets/Screenshot 2024-04-21 at 3.05.58 AM.png" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 1rem;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* flex-direction: column; */
  & > div img {
    width: 40px;
    cursor: pointer;
  }
`;
