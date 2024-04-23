import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

export default function MainLayout() {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
