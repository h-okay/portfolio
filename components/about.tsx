'use client';

import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 text-lg tracking-wide'>
        I'm a versatile software developer with the experience of developing web applications and services, creating
        efficient data pipelines and training/deploying machine learning models for different purposes.
      </p>
      <br />
      <p className='mb-3 text-lg tracking-wide'>
        I'm fluent in Python, SQL, and English. I've also written a good amount of TypeScript, JavaScript, HTML, and
        CSS. I have some exposure to Go and Java. I learn quickly, care about detail and I like finishing tasks and
        focusing on the results.
      </p>
    </motion.section>
  );
}
