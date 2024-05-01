import { Navigate, Outlet, useNavigate } from "react-router-dom";

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
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
