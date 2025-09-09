import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Cookies from "js-cookie";

const AppLayout = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const savedState = Cookies.get("sidebar_state") === "true";
    setOpen(savedState);
  }, []);

  useEffect(() => {
    Cookies.set("sidebar_state", open.toString());
  }, [open]);

  return (
    <SidebarProvider defaultOpen={open}>
      <div className="h-screen w-screen flex">
        <AppSidebar />

        <main className="h-full w-full flex flex-col overflow-auto">
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
