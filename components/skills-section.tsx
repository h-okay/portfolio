import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

type SkillSectionProps = {
  type: "language" | "framework" | "platform" | "progress";
  title: string;
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function SkillsSection({ type, title }: SkillSectionProps) {
  return (
    <>
      <p className="first:pt-2 pt-8 pb-4 text-semibold dark:text-white/70">
        {title}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {skillsData
          .filter((skill) => skill.type === type)
          .map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="flex flex-row justify-center items-center gap-2">
                {skill.icon} {skill.name}
              </div>
            </motion.li>
          ))}
      </div>
    </>
  );
}
