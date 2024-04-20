import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <img
        src="public/assets/footer/Screenshot 2024-04-21 at 3.40.08 AM.png"
        alt=""
      />
      <img
        src="public/assets/footer/Screenshot 2024-04-21 at 3.40.53 AM.png"
        alt=""
      />
      <img
        src="public/assets/footer/Screenshot 2024-04-21 at 3.41.18 AM.png"
        alt=""
      />
      <img
        src="public/assets/footer/Screenshot 2024-04-21 at 3.41.27 AM.png"
        alt=""
      />
      <img
        src="public/assets/footer/Screenshot 2024-04-21 at 3.41.36 AM.png"
        alt=""
      />
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 60px;

  img {
    width: 75px;
  }
`;
