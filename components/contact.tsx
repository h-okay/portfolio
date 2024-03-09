'use client';

import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from '@/components/submit-btn';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='-mt-6 text-gray-700 dark:text-white/80'>
        Please{' '}
        <a
          className='hover:text- border-b-2 border-black/50 dark:border-white dark:hover:border-gray-300 dark:hover:text-gray-300'
          href='https://koalendar.com/e/hakan-okay'
          target='_blank'
          rel='noopener noreferrer'
        >
          book a meeting
        </a>{' '}
        or contact me through this form.
      </p>

      <form
        id='contact-form'
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
          const form = document.getElementById('contact-form') as HTMLFormElement;
          form.reset();
        }}
      >
        <input
          className='borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <div className='flex items-center justify-center'>
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
