import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <Link to={"/MainPage"}>
          <img src="/assets/footer/line-md_home-simple.svg" alt="home icon" />
        </Link>
        <span>Home</span>
      </div>
      <div>
        <Link to={"/Search"}>
          <img src="/assets/footer/feather_search.svg" alt="search icon" />
        </Link>

        <span>Search</span>
      </div>
      <div>
        <Link className="comingSoonDiv" to={"/ComingSoon"}>
          <div>4</div>
          <img src="/assets/footer/Vector.svg" alt="coming soon" />
        </Link>
        <span>Coming Soon</span>
      </div>
      <div>
        <Link to={"/Downloads"}>
          {" "}
          <img src="/assets/footer/fe_download.svg" alt="downloads icon" />
        </Link>

        <span>Downloads</span>
      </div>
      <div>
        <Link to={"/More"}>
          {" "}
          <img src="/assets/footer/Vector (1).svg" alt="" />
        </Link>
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
  .comingSoonDiv {
    position: relative;
    div {
      width: 14px;
      height: 13px;
      background-color: red;
      text-align: center;
      border-radius: 50%;
      color: white;
      position: absolute;
      left: 1.4rem;
      top: -0.6rem;
    }
  }
`;
