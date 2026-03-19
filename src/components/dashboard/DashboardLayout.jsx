import { useState } from "react";
import { Menu, X } from "lucide-react"; // Added X for a close button
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // overflow-hidden prevents the "double scrollbar" bug
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar Wrapper */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50 
          w-64 bg-gray-900 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile Close Button (Optional but helpful) */}
        <button 
          className="md:hidden absolute right-4 top-4 text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        
        {/* Topbar - Removed flex-1 so it stays at 56px height */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 shrink-0">
          <button
            className="md:hidden p-2 -ml-2 mr-2"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex-1">
            <Topbar />
          </div>
        </header>

        {/* Page Content - Independent scroll */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}