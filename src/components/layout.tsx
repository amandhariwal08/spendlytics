import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ToggleMode";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Toggle } from "@/components/ui/toggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className
        )}
      >
        <Sidebar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
