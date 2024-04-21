import { Outlet } from "react-router-dom";
import Header1 from "../components/Header1";

export default function Layout1() {
  return (
    <div>
      <Header1 />
      <Outlet />
    </div>
  );
}
