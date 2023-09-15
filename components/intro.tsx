"use client";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";

import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] sm:mb-0 text-center scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/avatar.png"
              alt="Hakan avatar image"
              width="192"
              height="192"
              quality="95"
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              className="absolute text-4xl bottom-0 right-0"
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-normal leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, <span className="font-semibold">I'm Hakan.</span> I'm a Software
        Developer with 3 years of experience. I ❤️ building{" "}
        <span className="font-semibold">web applications</span> to solve
        real-world problems and share{" "}
        <span className="font-semibold">data-driven insights.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          id="contact"
          aria-label="Contact me"
          title="Contact me"
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-[#84A7A1] dark:text-black"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Say Hello{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          id="resume"
          aria-label="Resume"
          title="Resume"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/HakanOkayResume.pdf"
          target="_blank"
          download
        >
          Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <div className="flex gap-3">
          <Link
            id="linkedin"
            aria-label="LinkedIn"
            title="LinkedIn"
            href="https://www.linkedin.com/in/hakan-okay/"
            className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            id="github"
            aria-label="GitHub"
            title="GitHub"
            href="https://github.com/h-okay"
            className="bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            target="_blank"
          >
            <BsGithub />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
