import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex">
        <AppSidebar />

        <main className="h-full w-full flex flex-col">
          <Navbar />
          <div className="p-2 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
