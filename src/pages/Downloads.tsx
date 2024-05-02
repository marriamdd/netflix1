import styled from "styled-components";
export default function Downloads() {
  return (
    <DownloadsContainer>
      <span className="start_download">Smart Downloads</span>
      <h2 style={{ alignSelf: "flex-start" }}>Introducing Downloads For You</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui,
        vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan
        quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.
      </p>
      <div className="circleDiv"></div>
      <div className="setupdiv">
        <span>SETUP</span>
      </div>
      <h2
        style={{
          backgroundColor: "#424242",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        Find Something to Download
      </h2>
    </DownloadsContainer>
  );
}
const DownloadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-block: 9rem;
  background-color: black;
  /* height: 100vh; */
  margin-left: 2rem;
  .start_download {
    display: block;
    font-size: 14.722px;
    line-height: 30px;
    letter-spacing: -0.25px;
  }
  h2 {
    font-size: 19.634px;
    font-weight: 700;
    line-height: 14.681px;
    letter-spacing: -0.054px;
  }
  .circleDiv {
    margin-block: 2rem;
    width: 177px;
    height: 177px;
    background-color: #424242;
    border-radius: 50%;
  }
  .setupdiv {
    width: 100%;
    height: 40.891px;
    border-radius: 2px;
    background: #0071eb;
    text-align: center;
    padding-top: 0.8rem;
    margin-right: 1.5rem;
    font-size: 13.859px;
    font-weight: 400;
    line-height: 28.24px;
    letter-spacing: 0.707px;
  }
`;
