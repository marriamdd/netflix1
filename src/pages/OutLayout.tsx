import { Outlet } from "react-router-dom";
import OutHeader from "../components/outHeader";

export default function OutLayout() {
  return (
    <div>
      <OutHeader />
      <Outlet />
    </div>
  );
}
