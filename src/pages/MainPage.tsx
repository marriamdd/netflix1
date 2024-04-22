import styled from "styled-components";
import Preview from "../components/Preview";
import Add_Play_Info_Section from "../components/Add_Play_Info_Section";
import PopularOnNetflix from "../components/PopularOnNetflix";
import Footer from "../components/Footer";
export default function MainPage() {
  console.log("l");
  return (
    <>
      <MainPageContainer>
        <PageIntro />
        <Add_Play_Info_Section />
        <Main>
          <PopularOnNetflix />
          <Preview />
        </Main>
      </MainPageContainer>
      <Footer />
    </>
  );
}
const MainPageContainer = styled.div`
  margin-bottom: 30px;
`;
const Main = styled.main``;
const PageIntro = styled.div`
  width: 100%;
  height: 260px;
  background-image: url("/assets/adry9XA.jpg");
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  top: 0;
`;
