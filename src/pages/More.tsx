import { Link } from "react-router-dom";
import styled from "styled-components";

export default function More() {
  return (
    <MoreContainer>
      <ProfilesContainer>
        <div>
          <img src="/assets/design/Rectangle 2.png" alt="" />
          <span>Dad</span>
        </div>
        <div>
          <img src="/assets/Rectangle 3.png" alt="" />
          <span>Mom</span>
        </div>
        <div>
          <img src="/assets/design/Rectangle 4.png" alt="" />
          <span>Aunt</span>
        </div>
        <div>
          <img src="/assets/design/Rectangle 5.png" alt="" />
          <span>Kids</span>
        </div>
        <div className="emptyDiv"></div>
      </ProfilesContainer>
      <div className="manageContainer">
        <img
          src="/assets/design/Screenshot 2024-04-25 at 5.23.19 PM.png"
          alt=""
        />
        <h2>Manage Profiles</h2>
      </div>
      <div>
        <div className="tellFriendsContainer">
          <img
            src="/assets/design/Screenshot 2024-04-25 at 5.29.16 PM.png"
            alt=""
          />
          <h2>Tell friends about Netflix.</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui,
          vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan
          quis. Massa,
        </p>
        <span style={{ textDecorationLine: " underline" }}>
          Terms & Conditions
        </span>
        <div className="navContainer">
          <img
            src="/assets/design/Screenshot 2024-04-25 at 5.33.19 PM.png"
            alt=""
          />
          <div className="rightLine"></div>
          <img
            src="/assets/design/Screenshot 2024-04-25 at 5.29.16 PM.png"
            alt=""
          />
          <div className="rightLine"></div>
          <img
            src="/assets/design/Screenshot 2024-04-25 at 5.32.25 PM.png"
            alt=""
          />
          <div className="rightLine"></div>
          <img
            src="/assets/design/Screenshot 2024-04-25 at 5.32.35 PM.png"
            alt=""
          />
        </div>
        <div className="additionalNav">
          <span>App Settings</span>
          <span>Account</span>
          <span>Help</span>
          <Link to={"/"}>Sign Out</Link>
        </div>
      </div>
    </MoreContainer>
  );
}

const MoreContainer = styled.div`
  padding-block: 7rem;
  .additionalNav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 2rem;
    padding-top: 2rem;
    & > span {
      font-size: 12px;
    }
    a {
      padding-left: 1rem;
      font-size: 12px;
      text-decoration: none;
    }
  }
  p {
    font-size: 10.781px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.18px;
    padding-block: 2rem;
    padding-left: 1rem;
  }
  span {
    font-size: 10.781px;
    padding-left: 1rem;
    font-weight: 500;
    line-height: 18px;
    color: #c4c4c4;
    letter-spacing: -0.18px;

    border-bottom: #8c8787;
  }
  .manageContainer {
    margin-block: 1.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    & > img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  }

  .navContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    background: #1a1a1a;
    height: 60px;
    & > img {
      width: 36px;
      height: 33.6px;
    }
    .rightLine {
      width: 1px;
      height: 41px;
      background: #8c8787;
    }
  }
  .tellFriendsContainer {
    display: flex;
    align-items: center;
    padding-left: 2rem;
    & > img {
      width: 24px;
      height: 21px;
    }
  }
`;
const ProfilesContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  padding-inline: 1rem;
  align-items: center;
  justify-content: center;
  .emptyDiv {
    background-image: url(/assets/design/ant-design_plus-outlined.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 60px;
    height: 54px;
    border-radius: 3px;
    border: 1px solid #8c8787;
    margin-bottom: 2rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    & > span {
      font-size: 12.35px;
      font-weight: 400;
      line-height: 17.6px;
      letter-spacing: 0.441px;
    }
  }
`;
