import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

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
  className = '',
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
      <p className='text-semibold py-4 text-black dark:text-white/70'>
        {title}
      </p>
      <motion.div className='flex flex-row flex-wrap justify-center gap-2'>
        {skillsData
          .filter((skill) => skill.type === type)
          .map((skill, index) => (
            <motion.li
              key={index}
              className='rounded-xl border border-black/[0.2] bg-white px-5 py-3 shadow-lg shadow-black/[0.03] dark:border-white/[0.1] dark:bg-white/10 dark:text-white/80 dark:shadow-white/[0.01]'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              custom={index}
            >
              <div className='flex flex-row items-center justify-center gap-2'>
                {skill.icon} {skill.name}
              </div>
            </motion.li>
          ))}
      </motion.div>
    </motion.div>
  );
}
