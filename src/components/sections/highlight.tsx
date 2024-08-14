"use client";
import { jetBrainsMono, xp } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MixIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

export default function Highlight({ className }: { className?: string }) {
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  const empty = true;

  if (empty) {
    return (
      <div>
        <h3
          className={cn(
            jetBrainsMono.className,
            "text-sm text-slate-400 mb-6 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
          )}
        >
          <MixIcon height={16} width={16} />
          {"hightlights;"}
        </h3>

        <div
          className={cn(
            jetBrainsMono.className,
            "flex items-center gap-6 text-slate-500 text-sm font-light"
          )}
        >
          <div className="flex  mb-4 gap-4 w-full items-center">
            <Image
              src="/ie.png"
              alt="me"
              width={30}
              height={30}
              className="rounded-md "
            />
            <p className={cn(xp.className, "text-xl")}>Nothing here yet...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-8 animate-fade-in  px-1  inline-flex items-center gap-3"
        )}
      >
        <MixIcon height={16} width={16} />
        {"hightlights;"}
      </h3>

      <div
        className={cn(
          jetBrainsMono.className,
          "flex items-center gap-6 text-slate-500 text-sm font-light"
        )}
      >
        <div className="flex  mb-4 gap-4 w-full items-stretch">
          {/* <Image
              src="/email.png"
              alt="me"
              width={40}
              height={40}
              className="rounded-md "
            /> */}
          <div className="relative w-full flex-1 ">
            <textarea
              placeholder="nothing here yet..."
              className="bg-transparent ring-0 focus:ring-0 focus:outline-none text-slate-400 resize-none flex-1 border border-slate-800 rounded border-dashed p-2 h-16 w-full"
              value={value}
              onChange={handleChange}
            />
            <div className="absolute left-0 -bottom-8 z-50">
              <button
                className={cn(
                  xp.className,
                  "text-lg text-black bg-[#f7f7f4] px-5  font-medium  rounded h-6 flex items-center justify-center focus-within:scale-90/ relative group",
                  "active:scale-[0.95]"
                )}
              >
                <div
                  className="absolute right-[1px] left-[1px] top-[1px] bottom-[1px] rounded  border-dotted 
                    group-focus-within:border group-focus-within:border-blue-600"
                />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
