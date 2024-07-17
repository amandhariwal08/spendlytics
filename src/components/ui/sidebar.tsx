"use client";
import React from "react";
import { Nav } from "./nav";
import {
  ChevronRight,
  LayoutDashboard,
  Receipt,
  ListIcon,
  File,
} from "lucide-react";
import { Button } from "./button";
import { ModeToggle } from "../ToggleMode";

type Props = {};

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      }
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Transactions",
            href: "/transactions",
            icon: ListIcon,
            variant: "ghost",
          },
          {
            title: "Statements",
            href: "/transactions/statements",
            icon: File,
            variant: "ghost",
            subLinks: [
              {
                title: "Statements",
                href: "/transactions/statements",
                icon: File,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Bills",
            href: "/bills",
            icon: Receipt,
            variant: "ghost",
          },
        ]}
      />
      <ModeToggle />
    </div>
  );
}
