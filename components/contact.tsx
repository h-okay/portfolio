"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please{" "}
        <a
          className="border-b-2 border-black/50 hover:text- dark:border-white dark:hover:border-gray-300 dark:hover:text-gray-300"
          href="https://koalendar.com/e/hakan-okay"
          target="_blank"
          rel="noopener noreferrer"
        >
          book a meeting
        </a>
        {" "}or contact me through this form.
      </p>

      <form
        id="contact-form"
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
          const form = document.getElementById(
            "contact-form"
          ) as HTMLFormElement;
          form.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex justify-center items-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
