import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Pure Science Stream",
    location: "MARA Junior Science College (MRSM) Betong, Sarawak",
    description: [
      "﻿Sijil Pelajaran Malaysia (SPM) 7A+ 2A",
      "Pentaksiran Tingkatan Tiga (PT3) 8A 2B",
      "CGPA 3.90/4.0",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2021",
  },
  {
    title: "Foundation of Science in Computer Science",
    location: "PETRONAS University of Technology (UTP), Perak",
    description: [
      "PETRONAS Scholar",
      "CGPA 3.53 / 4.0",
      "Two-time Dean's List achiever",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title:
      "Bachelor's in Computer Science (Hons.), Minor in Financial Management",
    location: "PETRONAS University of Technology (UTP), Perak",
    description: [
      "PETRONAS Scholar",
      "CGPA 3.62 / 4.0",
      "Three-time Dean's List achiever",
    ],
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "TypeScript",
  "Framer Motion",
  "Python",
  "C++",
  "MySQL",
  "MATLAB",
  "Prolog",
  "Adobe Photoshop/Illustrator",
  "PowerBI",
  "Microsoft Office",
  "Filmora",
] as const;
