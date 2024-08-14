import { jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export default function Key() {
  return (
    <div
      className={cn(
        jetBrainsMono.className,
        "text-xs px-1.5 py-[2px]  inline rounded bg-gray-900 relative z-20"
      )}
    >
      <div className="absolute w-[104%] bg-gray-700 h-[115%] -z-10 rounded-md left-[50%] -translate-x-[50%] -bottom-[2px]" />
    </div>
  );
}
