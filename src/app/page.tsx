import MessageForm from "@/components/messages/message-form";
import Messages from "@/components/messages/messages";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Highlight from "@/components/sections/highlight";
import Projects from "@/components/sections/projects";
import { Suspense } from "react";

export default function HomePage({ searchParams: { foo } }: any) {
  return (
    <div className="grid grid-cols-1 gap-[120px] lg:gap-[20px]">
      <div className="lg:grid lg:grid-cols-[450px,auto] lg:py-20 flex flex-col gap-16 max-w-[800px] mx-auto lg:max-w-[9999px]">
        <div className="pt-16 lg:pt-0  lg:w-full pb-6 lg:pb-0 ">
          <div className="lg:sticky top-20 animate-fade-in pb-[100px]">
            <Hero />
          </div>

          <div></div>
        </div>

        <div className="grid grid-cols-1 gap-[100px] lg:gap-[80px] ">
          <div className="animate-fade-in">
            <Highlight />
          </div>

          <div>
            <Experience />
          </div>
        </div>
      </div>

      <div className="grid gap-[100px]">
        <Projects />

        <MessageForm />

        {foo === process.env.FOO && (
          <Suspense fallback={<div>Loading...</div>}>
            <Messages />
          </Suspense>
        )}
      </div>
    </div>
  );
}
