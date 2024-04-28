import styled from "styled-components";
import Data from "../data.json";
export default function ComingSoonShow() {
  const comingSoonMovies = Data.movies.filter(
    (item) => item.category === "Coming Soon"
  );
  return (
    <div>
      {comingSoonMovies.map((item) => (
        <div key={Math.random()}>
          {item.thumbnail && (
            <img src={item.thumbnail.regular.small} alt={item.title} />
          )}
          <IconsContainer>
            <div className="iconDiv">
              <img src="/assets/bi_bell-fill.svg" alt="" />
              <span>Remind Me</span>
            </div>
            <div className="iconDiv">
              <img src="/assets/moviesIMGbase/bx_bxs-share-alt.svg" alt="" />
              <span>Share</span>
            </div>
          </IconsContainer>
          <p style={{ paddingBlock: "1rem" }}>Season 1 Coming December 14</p>
          <h2 style={{ paddingBlock: "1rem" }}>{item.title}</h2>
          <p style={{ paddingBottom: "1rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            unde sed distinctio aspernatur. Saepe numquam nulla porro ipsum cum
            aliquam quas obcaecati corporis, assumenda consequuntur aperiam in
            autem sed necessitatibus.
          </p>
          <h2 style={{ paddingBottom: "1.6rem", fontSize: "11.6px" }}>
            Steamy . Soapy . Slow Burn . suspenseful . Teen . Mystery{" "}
          </h2>
        </div>
      ))}
    </div>
  );
}

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding: 0.8rem 0.2rem;
  .iconDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: 11.131px;
      font-weight: 400;
      line-height: 8.323px;
      letter-spacing: -0.031px;
      color: rgba(255, 255, 255, 0.83);
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
