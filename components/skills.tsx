"use client";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import SkillsSection from "./skills-section";

const skillSectionMapping = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  platform: "Platforms & Tools",
  progress: "In Progress",
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="text-lg text-gray-800">
        {Object.entries(skillSectionMapping).map(([type, title], index) => (
          <SkillsSection
            key={index}
            type={type as keyof typeof skillSectionMapping}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
}
