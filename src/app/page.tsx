"use client";
import ExperienceCard from "@/components/experience-card";
import MessageForm from "@/components/messages/message-form";
import ProjectCard from "@/components/project-card";
import { experiences, projects } from "@/lib/data";
import { inter, jetBrainsMono, xp } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  FileIcon,
  FileTextIcon,
  MixIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-[120px] lg:gap-[20px]">
      <div className="lg:grid lg:grid-cols-[450px,auto] lg:py-20 flex flex-col gap-16 max-w-[800px] mx-auto lg:max-w-[9999px]">
        <div className="pt-16 lg:pt-0  lg:w-full pb-6 lg:pb-0 ">
          <div className="lg:sticky top-20 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Hero />
            </motion.div>
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
      </div>
    </div>
  );
}

function Hero({ className }: { className?: string }) {
  return (
    <div className={cn(className, "relative")}>
      <h1 className="text-4xl font-bold mb-1" id="home">
        Marcus Georgievski
      </h1>

      <h2 className="text-lg @ HTS / KORE font-light text-slate-100 mb-8 ">
        Software Developer
      </h2>

      <p
        className={cn(
          jetBrainsMono.className,
          "text-xs max-w-[400px] text-slate-400 leading-5 "
        )}
      >
        Building full stack applications with a focus on performance and user
        experience. Currently enjoying{" "}
        <svg
          role="img"
          fill="#94a3b8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-6 inline"
        >
          <title>Go</title>
          <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
        </svg>
      </p>
    </div>
  );
}

function Experience({ className }: { className?: string }) {
  return (
    <div className={cn(className, "")} id="experience">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-8 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
        )}
      >
        <FileIcon height={16} width={16} />
        {"experience;"}
      </h3>

      <div className="grid grid-cols-[auto,auto]">
        <section className="grid grid-cols-1 gap-10 border-dashed">
          {experiences.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98, rotate: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            >
              <ExperienceCard key={index} {...experience} />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Projects({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div className={cn(className, "m")} id="projects">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-8 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
        )}
      >
        <StackIcon height={16} width={16} />
        {"projects;"}
      </h3>

      <section
        className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8")}
        ref={ref}
      >
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}

function Highlight({ className }: { className?: string }) {
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
            "text-sm text-slate-400 mb-8 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
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
              width={40}
              height={40}
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
