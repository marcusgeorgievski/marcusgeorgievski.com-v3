"use client";
import { scrollTo } from "@/lib/utils";
import {
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full backdrop-blur-md border border-slate-800 bg-slate-900/80 top-4 right-0 left-0 sticky h-[48px] rounded-md flex items-center mx-auto z-40">
      <div className="">
        <div className="absolute inset-x-2 bottom-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-2 bottom-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-2 bottom-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-2 bottom-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent h-px w-1/4" />
      </div>

      {/*  */}
      <div className="px-4 md:px-8 flex items-center gap-3 justify-between w-full">
        <button className="hidden md:block" onClick={() => scrollTo("top")}>
          <PersonIcon height={17} width={17} className="text-slate-300" />
        </button>
        <ul className="flex items-center gap-6 text-slate-400 text-sm">
          <li>
            <button
              className="hover:text-white  transition-all"
              onClick={() => scrollTo("top")}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className="hover:text-white  transition-all"
              onClick={() => scrollTo("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="hover:text-white  transition-all"
              onClick={() => scrollTo("skills")}
            >
              About
            </button>
          </li>
        </ul>

        <nav className="flex items-center gap-4 text-slate-300">
          <Link href={"https://devpost.com/marcusgeorgievski"} target="_blank">
            <CodeIcon
              height={17}
              width={17}
              className="hover:scale-[1.2]  hover:text-white transition-all"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/marcusgeorgievski"}
            target="_blank"
          >
            <LinkedInLogoIcon
              height={17}
              width={17}
              className="hover:scale-[1.2]  hover:text-white transition-all"
            />
          </Link>
          <Link href={"https://github.com/marcusgeorgievski"} target="_blank">
            <GitHubLogoIcon
              height={17}
              width={17}
              className="hover:scale-[1.2]  hover:text-white transition-all"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function HeaderAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="top-4 right-0 left-0 sticky h-[48px] backdrop-blur-md z-40"
    >
      <Header />
    </motion.div>
  );
}
