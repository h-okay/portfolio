import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const uniqueSections = Array.from(
  new Set(skillsData.map((skill) => skill.type))
);

type SkillSectionProps = {
  className?: string;
  type: (typeof uniqueSections)[number];
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

export default function SkillsSection({
  className = "",
  type,
  title,
}: SkillSectionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInAnimationVariants}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="py-4 text-semibold dark:text-white/70 text-black">
        {title}
      </p>
      <motion.div className="flex flex-row flex-wrap justify-center gap-2">
        {skillsData
          .filter((skill) => skill.type === type)
          .map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border border-black/[0.2] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-white/[0.1] shadow-lg shadow-black/[0.03] dark:shadow-white/[0.01]"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex flex-row justify-center items-center gap-2">
                {skill.icon} {skill.name}
              </div>
            </motion.li>
          ))}
      </motion.div>
    </motion.div>
  );
}
