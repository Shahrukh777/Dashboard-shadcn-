import React from "react";
import { Link } from "react-router-dom";

import { SidebarTrigger } from "./ui/sidebar";
import { LogOut, Settings, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="h-12 w-full flex justify-between items-center bg-primary/20 ">
      <div>
        <SidebarTrigger size={"lg"} />
      </div>
      <div className="flex items-center gap-4 mr-5">
        <Link to={"/"}>Dashboard</Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/Shahrukh777"
                alt="SS"
              />
              <AvatarFallback className="text-3xl "> ◌ </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="mr-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <UserIcon className="h-1.2 w-1.2 mr-1.5" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Settings className="h-1.2 w-1.2 mr-1.5" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              {" "}
              <LogOut className="h-1.2 w-1.2 mr-1.5" /> Log Out{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
