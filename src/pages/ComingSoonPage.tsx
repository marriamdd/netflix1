import styled from "styled-components";
import ComingSoonShow from "../components/ComingSoonShow";

export default function ComingSoonPage() {
  return (
    <ComingSoonContainer>
      <div className="notificationDiv">
        <div className="bellDiv">
          <img src="/assets/bi_bell-fill.svg" alt="" />
        </div>
        <h2>Notifications</h2>
      </div>
      <ComingSoonMovie>
        <div>
          <img
            src="public/assets/moviesIMGbase/coming1.jpeg"
            alt="coming Soon Movie El Chapo"
          />
          <div>
            <span>New Arrival</span>
            <span className="title">El Chapo</span>
            <span className="date">Nov 6</span>
          </div>
        </div>
      </ComingSoonMovie>
      <ComingSoonMovie>
        <div>
          <img
            src="public/assets/moviesIMGbase/coming2.png"
            alt="coming Soon Movie Peaky Blinders"
          />
          <div>
            <span>New Arrival</span>
            <span className="title">Peaky Blinders</span>
            <span className="date">Nov 6</span>
          </div>
        </div>
      </ComingSoonMovie>
      <ComingSoonShow />
    </ComingSoonContainer>
  );
}
const ComingSoonContainer = styled.div`
  padding: 8rem 3rem 7rem;
  height: 600px;
  overflow-y: auto;
  .notificationDiv {
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    h2 {
      font-size: 16.906px;
    }
    .bellDiv {
      padding: 0.3rem;
      background-color: red;
      border-radius: 50%;
      img {
        width: 19px;
        height: 19px;
      }
    }
  }
`;
const ComingSoonMovie = styled.div`
  padding-bottom: 1rem;
  & > :hover {
    background-color: gray;
  }
  div {
    display: flex;
    gap: 3rem;
    font-size: 13.72px;
    line-height: 10.258px;
    letter-spacing: -0.038px;
    padding: 0.8rem;
    align-items: center;
    .date {
      color: rgba(255, 255, 255, 0.48);
    }
    .title {
      color: rgba(255, 255, 255, 0.83);
    }
    img {
      width: 113px;
      height: 55px;
      border: 2px;
    }

    & > div {
      justify-content: center;
      gap: 0.8rem;
      display: flex;
      flex-direction: column;
    }
  }
`;
