"use client";
import { experiences, projects } from "@/lib/data";
import { jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FileIcon, StackIcon } from "@radix-ui/react-icons";
import ExperienceCard from "../experience-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "../project-card";

export default function Projects({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div className={cn(className)} id="projects">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-4 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
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
            key={index}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
