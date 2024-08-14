"use client";
import { experiences } from "@/lib/data";
import { jetBrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { FileIcon } from "@radix-ui/react-icons";
import ExperienceCard from "../experience-card";
import { motion } from "framer-motion";

export default function Experience({ className }: { className?: string }) {
  return (
    <div className={cn(className, "")} id="experience">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-6 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-slate-700 lg:border-none "
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
              key={index}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
