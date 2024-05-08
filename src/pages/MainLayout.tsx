import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import { FC, useContext, useEffect } from "react";
import { CategoryContext } from "../App";
const MainLayout: FC<{}> = () => {
  const { login } = useContext(CategoryContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, []);
  return (
    <MainLayoutStyle>
      <MainHeader />
      <Outlet />
      <Footer />
    </MainLayoutStyle>
  );
};
export default MainLayout;

const MainLayoutStyle = styled.div`
  height: 650px;
  overflow-y: auto;
  border-radius: 30px;
`;
