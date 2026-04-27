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
        I am a Computer Science graduate specialising in Software Quality from
        Universiti Teknologi PETRONAS (UTP). My coursework and 7-month
        internship at PETRONAS Digital Sdn. Bhd. have equipped me with solid
        experience in software testing, full-stack development and UI/UX design.
      </p>
      <p className="mb-3">
        During my internship at PETRONAS Digital Sdn. Bhd., I collaborated with
        engineers to design and implement automated testing frameworks,
        improving software validation efficiency by 40% and reducing manual
        testing effort. I participated in Agile development cycles, assisted
        with test case design, defect tracking and feature validation and gained
        hands-on exposure to CI/CD pipelines and Azure DevOps.
      </p>
      <p className="mb-3">
        Proficient in web and mobile development technologies such as React,
        React Native, Node.js and TypeScript. Experienced in automated testing,
        CI/CD pipelines and Azure DevOps. Adept in non-programming tools such as
        Figma, PowerBI and Adobe Illustrator/Photoshop.
      </p>
      <p>
        Beyond my academic pursuits, I was an active member of the UTPHOST Club,
        where we collaborated with other clubs to organise and manage college
        events. I also volunteered as a facilitator for the UTP-MARA Gear Up
        programme, participated in wildlife conservation efforts and organised
        community fundraising drives, all of which honed my leadership and
        communication skills.
      </p>
    </motion.section>
  );
}
