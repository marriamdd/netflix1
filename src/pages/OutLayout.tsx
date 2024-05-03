import { Outlet } from "react-router-dom";
import OutHeader from "../components/OutHeader";

export default function OutLayout() {
  return (
    <div
      style={{
        height: "600px",
        overflowY: "auto",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <OutHeader />
      <Outlet />
    </div>
  );
}
