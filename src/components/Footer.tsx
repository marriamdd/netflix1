import { Link } from "react-router-dom";
import styled from "styled-components";
import MainPage from "../pages/MainPage";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src="/assets/footer/line-md_home-simple.svg" alt="home icon" />
        <Link to={"/MainPage"}>Home</Link>
      </div>
      <div>
        <Link to={"/Search"}>
          <img src="/assets/footer/feather_search.svg" alt="search icon" />
        </Link>

        <span>Search</span>
      </div>
      <div>
        <img src="/assets/footer/Vector.svg" alt="coming soon" />
        <span>Coming Soon</span>
      </div>
      <div>
        <img src="/assets/footer/fe_download.svg" alt="downloads icon" />
        <span>Downloads</span>
      </div>
      <div>
        <img src="/assets/footer/Vector (1).svg" alt="" />
        <span>More</span>
      </div>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: black;
  padding: 1rem;
  a {
    text-decoration: none;
  }
  & > div {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
