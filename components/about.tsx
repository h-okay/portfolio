"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="group mb-3">
        My journey in the tech world began with a deep fascination for data
        science and its potential to uncover valuable insights from complex
        datasets. As a Data Scientist, I honed my skills in machine learning,
        data analysis, and visualization, working on projects that involved
        solving real-world challenges with data-driven solutions. I had the
        chance to collaborate with some of the biggest gaming companies in
        Europe, which provided me with invaluable experiences and a deep
        understanding of the industry's inner workings.
      </p>
      <p>
        After I decided to learn web development to be able to provide
        end-to-end, full-stack solutions to companies so that the insights can
        be easily shared with relevant stakeholders. I added various web
        development technologies to my skillset, including React, Next.js, and
        Tailwind CSS. Currently, I'm working as a freelance software developer, helping
        companies build their online presence and create data-driven web
        applications.
      </p>
    </motion.section>
  );
}
