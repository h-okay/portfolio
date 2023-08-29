"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, animi!
        Rem, ducimus. Inventore nobis temporibus debitis saepe, quia in facilis
        dolor quod. Tempore natus, ratione ex nulla dolor eaque dolorem. Minus
        est ad nam ratione a error voluptate impedit eos quod eveniet, et omnis
        quisquam laudantium delectus harum modi tempora animi unde, consequatur
        obcaecati veritatis voluptas culpa voluptatem eum. Obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error
        reprehenderit veritatis adipisci cum officia natus porro, consequatur a
        doloremque non repellendus accusamus nemo et optio hic, nihil
        perferendis? Neque. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Quis inventore incidunt quisquam ex hic. Dicta, quod commodi
        nesciunt vel quas harum illum est suscipit animi dolore porro eius ipsa
        eligendi.
      </p>
    </motion.section>
  );
}
