import { Outlet } from "react-router-dom";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

export default function Layout2() {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  );
}
