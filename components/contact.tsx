"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";

const icons = {
  submit: (
    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
  ),
  sent: <AiFillCheckCircle className="text-xl opacity-70 transition-all" />,
} as const;

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonIcon, setButtonIcon] = useState(icons.submit);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@example.com">
          example@gmail.com
        </a>{" "}
        using this form
      </p>

      <form
        className="mt-10 flex flex-col"
        onSubmit={(event) => {
          event.preventDefault();
          setEmail("");
          setMessage("");
          setButtonText("Sent");
          setButtonIcon(icons.sent);
          setTimeout(() => {
            setButtonText("Submit");
            setButtonIcon(icons.submit);
          }, 2500);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
          className="h-14 px-4 rounded-lg border borderBlack"
          placeholder="Your email"
          maxLength={500}
          required
        />
        <textarea
          value={message}
          onChange={(event) => setMessage(event?.target.value)}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          maxLength={500}
          required
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          >
            {buttonText} {buttonIcon}
          </button>
        </div>
      </form>
    </motion.section>
  );
}
