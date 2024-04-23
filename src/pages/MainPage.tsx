import styled from "styled-components";
import Preview from "../components/Preview";
import Add_Play_Info_Section from "../components/Add_Play_Info_Section";
import PopularOnNetflix from "../components/PopularOnNetflix";
import Footer from "../components/Footer";
import { Movie } from "../types";
export default function MainPage({ data }: { data: Movie[] }) {
  console.log("l");
  return (
    <>
      <MainPageContainer>
        <PageIntro />
        <Add_Play_Info_Section />
        <Main>
          <PopularOnNetflix data={data} />
          <Preview data={data} />
        </Main>
      </MainPageContainer>
    </>
  );
}
const MainPageContainer = styled.div`
  margin-bottom: 30px;
`;
const Main = styled.main``;
const PageIntro = styled.div`
  width: 424.046px;
  height: 415px;
  flex-shrink: 0;
  background-image: url("/assets/Rectangle 26.png");
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
`;
