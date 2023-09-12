import React from "react";
import { TbBrandThreejs, TbDatabaseHeart, TbSql } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsCode, BsGraphUpArrow } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
} from "react-icons/fa";
import { BiLogoAws, BiLogoGit, BiLogoGoLang, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import {
  SiApacheairflow,
  SiExpress,
  SiFastapi,
  SiLooker,
  SiMetabase,
  SiMicrosoftexcel,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTailwindcss,
} from "react-icons/si";
import blastImg from "@/public/blast.png";
import nbaImg from "@/public/nba.png";
import diamondsImg from "@/public/diamonds.png";

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
    title: React.createElement("span", { className: "text-sm" }, "Software Developer @ Freelance"),
    location: "Ottawa, ON 🍁",
    description:
      "Crafted tailored solutions using diverse technologies, such as Python, Docker, and BigQuery, to create data-driven marketing approaches, secure backend APIs, and interactive dashboards for informed decision-making",
    icon: React.createElement(BsCode),
    date: "Feb 2023 - present",
  },
  {
    title: React.createElement("span", { className: "text-sm" }, "Data Scientist @ Datablast"),
    location: "Remote",
    description:
      "Contributed to efficient cloud-based data pipelines and analysis endpoints, enabling cross-platform insights, user engagement improvements, and growth within the Blast Data Platform while utilizing Airflow, Kubernetes, and various cloud services",
    icon: React.createElement(TbDatabaseHeart),
    date: "Mar 2022 - Feb 2023",
  },
] as const;
// TODO: Make the project tech stack icons clickable and link to the project
// TODO: Also change techologies on click with user feedback, user should have hints that the icons are clickable
export const projectsData = [
  {
    title: "Blast Data Platform",
    description:
      "I worked as a Data / Backend Engineer on this startup for a year. Users can easily create and manage data pipelines on the cloud.",
    tags: ["Python", "SQL", "Airflow", "Kubernetes", "Docker", "..."],
    imageUrl: blastImg,
  },
  {
    title: "NBA Analytics",
    description:
      "Dashboard providing NBA stats, analytics and machine learning predictions. It has features for classification, clustering as well as player and team statistics.",
    tags: ["Python", "SQL", "PHP", "Bash", "Github CI/CD", "Scikit-learn", "Tensorflow", "GCP", "FastAPI"],
    imageUrl: nbaImg,
  },
  {
    title: "Gem Trend",
    description:
      "Web application for diamond price prediction. It has features for data exploration, filtering, sorting and price prediction.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    imageUrl: diamondsImg,
  },
] as const;

export const skillsData = [
  { name: "Python", icon: React.createElement(FaPython), type: "language" },
  { name: "Java", icon: React.createElement(FaJava), type: "language" },
  { name: "SQL", icon: React.createElement(TbSql), type: "language" },
  { name: "HTML", icon: React.createElement(FaHtml5), type: "language" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), type: "language" },
  { name: "JavaScript", icon: React.createElement(BiLogoJavascript), type: "language" },
  { name: "TypeScript", icon: React.createElement(BiLogoTypescript), type: "language" },
  { name: "NoSQL", icon: React.createElement(BiLogoMongodb), type: "language" },
  { name: "Pandas", icon: React.createElement(SiPandas), type: "framework" },
  { name: "NumPy", icon: React.createElement(SiNumpy), type: "framework" },
  { name: "Matplotlib", icon: React.createElement(BsGraphUpArrow), type: "framework" },
  { name: "Scikit-learn", icon: React.createElement(SiScikitlearn), type: "framework" },
  { name: "FastAPI", icon: React.createElement(SiFastapi), type: "framework" },
  { name: "React", icon: React.createElement(FaReact), type: "framework" },
  { name: "Next.js", icon: React.createElement(SiNextdotjs), type: "framework" },
  { name: "Node.js", icon: React.createElement(FaNodeJs), type: "framework" },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss), type: "framework" },
  { name: "Express", icon: React.createElement(SiExpress), type: "framework" },
  { name: "Linux", icon: React.createElement(FaLinux), type: "platform" },
  { name: "Git", icon: React.createElement(BiLogoGit), type: "platform" },
  { name: "Docker", icon: React.createElement(FaDocker), type: "platform" },
  { name: "Airflow", icon: React.createElement(SiApacheairflow), type: "platform" },
  { name: "Google Cloud", icon: React.createElement(AiOutlineCloudServer), type: "platform" },
  { name: "Looker", icon: React.createElement(SiLooker), type: "platform" },
  { name: "Metabase", icon: React.createElement(SiMetabase), type: "platform" },
  { name: "Excel", icon: React.createElement(SiMicrosoftexcel), type: "platform" },
  { name: "Go", icon: React.createElement(BiLogoGoLang), type: "progress" },
  { name: "Rust", icon: React.createElement(FaRust), type: "progress" },
  { name: "Three.js", icon: React.createElement(TbBrandThreejs), type: "progress" },
  { name: "AWS", icon: React.createElement(BiLogoAws), type: "progress" },
] as const;
