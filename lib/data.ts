import {
  BiLogoAws,
  BiLogoGit,
  BiLogoGoLang,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPhp,
  BiLogoTypescript,
} from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDev,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa";
import {
  SiApacheairflow,
  SiExpress,
  SiFastapi,
  SiGnubash,
  SiJinja,
  SiJupyter,
  SiKubernetes,
  SiLooker,
  SiMetabase,
  SiMicrosoftexcel,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandLaravel, TbBrandThreejs, TbSql } from "react-icons/tb";

import { DiGoogleCloudPlatform } from "react-icons/di";
import { MdScience } from "react-icons/md";
import React from "react";
import { VscGithubAction } from "react-icons/vsc";
import blastImg from "@/public/blast.png";
import diamondsImg from "@/public/diamonds.png";
import nbaImg from "@/public/nba.png";
import githubImg from "@/public/github.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: React.createElement(
      "span",
      { className: "text-sm" },
      "Software Developer @ Freelance"
    ),
    location: "Ottawa, ON 🍁",
    description:
      "Crafted tailored solutions using diverse technologies, such as Python, Docker, and BigQuery, to create data-driven marketing approaches, secure backend APIs, and interactive dashboards for informed decision-making",
    icon: React.createElement(FaDev),
    date: "Feb 2023 - present",
  },
  {
    title: React.createElement(
      "span",
      { className: "text-sm" },
      "Data Scientist @ Datablast"
    ),
    location: "Remote",
    description:
      "Contributed to efficient cloud-based data pipelines and analysis endpoints, enabling cross-platform insights, user engagement improvements, and growth within the Blast Data Platform while utilizing Airflow, Kubernetes, and various cloud services",
    icon: React.createElement(MdScience),
    date: "Mar 2022 - Feb 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Blast Data Platform",
    description:
      "I worked as a Data and Backend Engineer on this startup for a year. Users can easily create and manage data pipelines on the cloud.",
    link: "https://www.datablast.io/blast",
    tags: [
      React.createElement(FaPython),
      React.createElement(TbSql),
      React.createElement(SiApacheairflow),
      React.createElement(SiKubernetes),
      React.createElement(FaDocker),
      React.createElement(DiGoogleCloudPlatform),
      React.createElement(TbBrandLaravel),
      React.createElement(SiFastapi),
      React.createElement(FaLinux),
      React.createElement(SiJinja),
    ],
    imageUrl: blastImg,
  },
  {
    title: "NBA Analytics",
    description:
      "Dashboard providing NBA stats, analytics and machine learning predictions. It has features for classification, clustering as well as player and team statistics.",
    link: "https://github.com/h-okay/dash-nba",
    tags: [
      React.createElement(FaPython),
      React.createElement(TbSql),
      React.createElement(BiLogoPhp),
      React.createElement(SiGnubash),
      React.createElement(VscGithubAction),
      React.createElement(SiScikitlearn),
      React.createElement(SiTensorflow),
      React.createElement(DiGoogleCloudPlatform),
      React.createElement(SiFastapi),
      React.createElement(SiPlotly),
    ],
    imageUrl: nbaImg,
  },
  {
    title: "Gem Trend",
    description:
      "Web application for diamond price prediction. It has features for data exploration, filtering, sorting and price prediction through XGBoost and Linear Regressions models.",
    link: "https://github.com/h-okay/random/tree/main/diamonds",
    tags: [
      React.createElement(FaPython),
      React.createElement(SiPandas),
      React.createElement(SiScikitlearn),
      React.createElement(SiStreamlit),
      React.createElement(FaDocker),
      React.createElement(SiJupyter),
      React.createElement(SiGnubash),
      React.createElement(BsGraphUpArrow),
      React.createElement(SiNumpy),
      React.createElement(FaGithub),
    ],
    imageUrl: diamondsImg,
  },
  {
    title: "Check my GitHub!",
    description:
      "I'm always working on something new. Check out my GitHub for more projects. I'm always open to new ideas and collaborations!",
    link: "https://github.com/h-okay?tab=repositories",
    tags: ["🧑‍💻"],
    imageUrl: githubImg,
  },
] as const;

export const skillsData = [
  { name: "Python", icon: React.createElement(FaPython), type: "language" },
  { name: "Java", icon: React.createElement(FaJava), type: "language" },
  { name: "SQL", icon: React.createElement(TbSql), type: "language" },
  { name: "HTML", icon: React.createElement(FaHtml5), type: "language" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), type: "language" },
  {
    name: "JavaScript",
    icon: React.createElement(BiLogoJavascript),
    type: "language",
  },
  {
    name: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
    type: "language",
  },
  { name: "NoSQL", icon: React.createElement(BiLogoMongodb), type: "language" },
  { name: "Pandas", icon: React.createElement(SiPandas), type: "framework" },
  { name: "NumPy", icon: React.createElement(SiNumpy), type: "framework" },
  {
    name: "Matplotlib",
    icon: React.createElement(BsGraphUpArrow),
    type: "framework",
  },
  {
    name: "Scikit-learn",
    icon: React.createElement(SiScikitlearn),
    type: "framework",
  },
  { name: "FastAPI", icon: React.createElement(SiFastapi), type: "framework" },
  { name: "React", icon: React.createElement(FaReact), type: "framework" },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
    type: "framework",
  },
  { name: "Node.js", icon: React.createElement(FaNodeJs), type: "framework" },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    type: "framework",
  },
  { name: "Express", icon: React.createElement(SiExpress), type: "framework" },
  { name: "Linux", icon: React.createElement(FaLinux), type: "platform" },
  { name: "Git", icon: React.createElement(BiLogoGit), type: "platform" },
  { name: "Docker", icon: React.createElement(FaDocker), type: "platform" },
  {
    name: "Airflow",
    icon: React.createElement(SiApacheairflow),
    type: "platform",
  },
  {
    name: "Google Cloud",
    icon: React.createElement(DiGoogleCloudPlatform),
    type: "platform",
  },
  { name: "Looker", icon: React.createElement(SiLooker), type: "platform" },
  { name: "Metabase", icon: React.createElement(SiMetabase), type: "platform" },
  {
    name: "Excel",
    icon: React.createElement(SiMicrosoftexcel),
    type: "platform",
  },
  { name: "Go", icon: React.createElement(BiLogoGoLang), type: "progress" },
  { name: "Rust", icon: React.createElement(FaRust), type: "progress" },
  {
    name: "Three.js",
    icon: React.createElement(TbBrandThreejs),
    type: "progress",
  },
  { name: "AWS", icon: React.createElement(BiLogoAws), type: "progress" },
] as const;
