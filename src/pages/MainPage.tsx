import styled from "styled-components";
import Preview from "../components/Preview";
import PopularOnNetflix from "../components/PopularOnNetflix";
import { Movie } from "../types";
import AddPlayInfoSection from "../components/AddPlayInfoSection";
export default function MainPage({ data }: { data: Movie[] }) {
  console.log("l");
  return (
    <>
      <MainPageContainer>
        <PageIntro />
        <AddPlayInfoSection />
        <Main>
          <Preview data={data} />
          <PopularOnNetflix data={data} />
        </Main>
      </MainPageContainer>
    </>
  );
}
const MainPageContainer = styled.div``;
const Main = styled.main`
  padding-bottom: 9rem;
`;
const PageIntro = styled.div`
  width: 100%;
  height: 415px;
  flex-shrink: 0;
  background-image: url("/assets/design/Rectangle 26.png");
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
`;
