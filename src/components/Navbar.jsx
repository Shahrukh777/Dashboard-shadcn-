import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-12 w-full flex justify-between items-center bg-amber-100">
      <div>
        <SidebarTrigger size={"lg"} />
      </div>
      <div className="flex items-center gap-4 mr-5">
        <Link to={"/"}>Dashboard</Link>
        <Moon />
      </div>
    </nav>
  );
}
