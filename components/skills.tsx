'use client';

import { useSectionInView } from '@/lib/hooks';
import clsx from 'clsx';
import SectionHeading from './section-heading';
import SkillsSection from './skills-section';

const SectionNameMapping = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  platform: 'Platforms & Tools',
  databases: 'Databases & Warehouses',
  progress: 'In Progress',
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className='text-lg text-gray-800'>
        {Object.entries(SectionNameMapping).map(([type, title], index) => (
          <SkillsSection
            className={clsx(
              index !== 0 ? 'pt-4' : '',
              index === Object.keys(SectionNameMapping).length - 1 ? '' : 'pb-4'
            )}
            key={index}
            type={type as keyof typeof SectionNameMapping}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
}
