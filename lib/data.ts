import React from "react";
import { TbDatabaseHeart, TbSql } from "react-icons/tb";
import { AiFillPlusCircle, AiOutlineCloudServer } from "react-icons/ai";
import { BsCode } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { BiLogoGit, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  SiApacheairflow,
  SiExpress,
  SiNextdotjs,
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
    title: "Software Developer",
    location: "Ottawa, ON",
    description:
      "Crafted tailored solutions using diverse technologies, such as Python, Docker, and BigQuery, to create data-driven marketing approaches, secure backend APIs, and interactive dashboards for informed decision-making",
    icon: React.createElement(BsCode),
    date: "2022 - present",
  },
  {
    title: "Data Scientist",
    location: "Istanbul, Turkey",
    description:
      "Contributed to efficient cloud-based data pipelines and analysis endpoints, enabling cross-platform insights, user engagement improvements, and growth within the Blast Data Platform while utilizing Airflow, Kubernetes, and various cloud services",
    icon: React.createElement(TbDatabaseHeart),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Blast Data Platform",
    description:
      "I worked as a Data / Backend Engineer on this startup for a year. Users can easily create and manage data pipelines on the cloud.",
    tags: ["Python", "SQL", "Airflow", "Kubernetes", "Docker", "GCP"],
    imageUrl: blastImg,
  },
  {
    title: "Dash NBA",
    description:
      "Dashboard providing NBA stats, analytics and machine learning predictions. It has features for classification, clustering as well as player and team statistics.",
    tags: ["Python", "SQL", "Airflow", "Dash", "Scikit-Learn"],
    imageUrl: nbaImg,
  },
  {
    title: "Diamonds",
    description:
      "Web application for diamond price prediction. It has features for data exploration, filtering, sorting and price prediction.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    imageUrl: diamondsImg,
  },
] as const;

export const skillsData = [
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "SQL", icon: React.createElement(TbSql) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "Git", icon: React.createElement(BiLogoGit) },
  { name: "Airflow", icon: React.createElement(SiApacheairflow) },
  { name: "Linux", icon: React.createElement(FaLinux) },
  { name: "Docker", icon: React.createElement(FaDocker) },
  {
    name: "Google Cloud Platform",
    icon: React.createElement(AiOutlineCloudServer),
  },
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(BiLogoJavascript) },
  { name: "TypeScript", icon: React.createElement(BiLogoTypescript) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { name: "Express", icon: React.createElement(SiExpress) },
  {
    name: "Many more to come...",
    icon: React.createElement(AiFillPlusCircle),
  },
] as const;
