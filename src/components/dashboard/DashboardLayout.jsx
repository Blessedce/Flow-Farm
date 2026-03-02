import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
export default function DashboardLayout(){

  return(
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />


            {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="p-4 sm:p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}