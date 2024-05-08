import { Outlet } from "react-router-dom";
import OutHeader from "../components/OutHeader";

export default function OutLayout() {
  return (
    <div
      style={{
        height: "650px",
        overflowY: "auto",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <OutHeader />
      <Outlet />
    </div>
  );
}
