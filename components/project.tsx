'use client';

import { useScroll, useTransform } from 'framer-motion';

import { projectsData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { AiOutlineLink } from 'react-icons/ai';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  link,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 last:mb-0 sm:mb-8'
    >
      <section className='relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8'>
        <div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
          <h3 className='group-event:text-start text-2xl font-semibold sm:group-even:text-end'>
            <div className='flex items-center gap-x-1 sm:group-even:justify-end'>
              <Link
                href={link}
                className='link-underline hover:rainbow-text transition'
                target='_blank'
              >
                {title}
              </Link>
              <AiOutlineLink className='text-sm' />
            </div>
          </h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70 sm:group-even:text-end'>
            {description}
          </p>
          <ul className='mt-4 flex flex-wrap gap-2 pt-3 sm:mt-auto sm:group-even:justify-end'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className='group/tooltip relative rounded-full border border-black/20 px-3 py-1 text-lg text-black shadow-lg  shadow-black/[0.1] hover:bg-gray-400/50 dark:border-white/20 dark:text-white/70 dark:shadow-white/[0.03] dark:hover:bg-gray-300/20'
              >
                {tag.icon}
                <span className='absolute -left-0 bottom-full scale-0 whitespace-pre rounded bg-gray-800 p-2 text-xs text-white transition group-hover/tooltip:scale-100'>
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality='95'
          className='absolute -right-40 top-[4.21rem] hidden w-[28.25rem] rounded-t-lg border border-black/10 shadow-2xl  transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 dark:border-white/10 sm:block'
        />
      </section>
    </motion.div>
  );
}
