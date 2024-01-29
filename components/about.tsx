"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        I am currently pursuing a Bachelor's degree in Computer Science at
        Universiti Teknologi Petronas (UTP). My coursework has equipped me with
        a solid foundation in algorithms, data structures, and software
        development methodologies.
      </p>
      <p className="mb-3">
        Proficient in web development technologies such as HTML, CSS, Node.js
        and React. Experienced in data science with skills in Python, Java and
        C++ and familiarity with machine learning frameworks. Possess strong
        problem-solving and collaboration abilities. Adept in non-programming
        skills such as Filmora, PowerBI and Adobe Illustrator/Photoshop.
      </p>
      <p>
        Beyond my academic pursuits, I am an active member of the UTPHOST Club,
        where we collaborate with other clubs to organize and handle events in
        college which honed my leadership and communications skills.
      </p>
    </motion.section>
  );
}
