"use client"

import SectionHeading from "@/components/section-heading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] scroll-mt-28 text-center leading-8 font-poppins font-light mb-28 sm:mb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg tracking-wide">
        I'm an adaptable, results-driven, versatile Software Engineer with 4+
        years of experience designing and implementing diverse web applications
        and services across various domains using modern technological
        frameworks, tools and languages.
      </p>
      <br />
      <p className="mb-3 text-lg tracking-wide">
        I ❤️ working with Python, SQL and Go. I also written a good amount of
        TypeScript/JavaScript/Java. I hold a B.Sc. in Engineering and a Diploma
        in CS.
      </p>
    </motion.section>
  )
}
