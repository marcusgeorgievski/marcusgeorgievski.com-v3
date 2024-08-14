"use client";
import ExperienceCard from "@/components/experience-card";
import ProjectCard from "@/components/project-card";
import { experiences, projects } from "@/lib/data";
import { jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CodeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-[120px]">
      <div className="xl:grid xl:grid-cols-[450px,auto] xl:py-20 flex flex-col gap-16">
        <div className="pt-12 xl:pt-0  xl:w-full">
          <div className="xl:sticky top-20 ">
            <Hero />
          </div>

          <div></div>
        </div>

        <div>
          <Experience />
        </div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 40, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      > */}
      <Projects />
      {/* </motion.div> */}
    </div>
  );
}

function Hero({ className }: { className?: string }) {
  return (
    <div className={cn(className, "relative")}>
      <h2 className="text-4xl font-bold mb-1" id="home">
        Marcus Georgievski
      </h2>

      <h3 className="text-lg @ HTS / KORE font-light text-slate-400 mb-8 ">
        Software Developer
      </h3>

      <p
        className={cn(
          jetBrainsMono.className,
          "text-xs max-w-[400px] text-slate-300 leading-5"
        )}
      >
        Building full stack applications with a focus on performance and user
        experience. Currently working with Go.
      </p>

      {/* <div className="absolute top-0 opacity-10 inset-0 h-full w-full  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-10 dot-mask" /> */}
    </div>
  );
}

function Experience({ className }: { className?: string }) {
  return (
    <div className={cn(className, "max-w-[800px] mx-auto")} id="experience">
      {/* <div className="flex items-center gap-3 mb-10 p-2 rounded border-dashed border/ border-slate-700 justify-between "> */}
      {/* <h3 className="text-2xl font-semibold ">Experience</h3> */}
      {/* <KeyboardIcon height={20} width={20} /> */}
      {/* </div> */}

      <div className="grid grid-cols-[auto,auto]">
        <section className="grid grid-cols-1 gap-20 border-dashed">
          {experiences.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
  return (
    <div className={cn(className, "m")} id="projects">
      <div className="flex items-center gap-3 mb-4 p-2 rounded border-dashed  justify-between group/project">
        <h3 className={cn(jetBrainsMono.className, "text-xl")}>Projects</h3>
        <CodeIcon height={20} width={20} />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
