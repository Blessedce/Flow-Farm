import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout(){

  return(
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 p-4 sm:p-6">
        <Outlet />
      </div>

    </div>
  );
}