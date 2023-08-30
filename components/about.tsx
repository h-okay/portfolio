"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
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
