import { cn } from "@/lib/utils";
import React from "react";
import { Settings, User2 } from "lucide-react";

type Props = {
  title: string;
  classname?: string;
};

export default function PageTitle({ title, classname }: Props) {
  return (
    <div className="flex justify-between">
      <h1 className={cn("text-2xl font-semibold", classname)}>{title}</h1>
      <div className="flex gap-10">
        <Settings />
        <User2 />
      </div>
    </div>
  );
}
