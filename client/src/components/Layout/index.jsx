import { Outlet } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Sidebar from "./Sidebar";
import Style from "./style.module.css";

function DashboardLayout() {
  return (
    <PrivateRoute>
      <div className={Style.wrapper}>
        <Sidebar />
        <div className={Style.content}>
          <Outlet />
        </div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayout;
