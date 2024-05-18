import { ActivitySquare, Cog, Shapes } from "lucide-react"
import {
  BiLogoGit,
  BiLogoGoLang,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoTypescript,
} from "react-icons/bi"
import { DiGoogleCloudPlatform, DiPostgresql } from "react-icons/di"
import {
  FaAws,
  FaConfluence,
  FaCss3,
  FaDocker,
  FaGithub,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaStripe,
} from "react-icons/fa"
import { GiMatterStates } from "react-icons/gi"
import {
  SiAmazonredshift,
  SiApacheairflow,
  SiAuth0,
  SiChatbot,
  SiFastapi,
  SiGnubash,
  SiGooglebigquery,
  SiHtml5,
  SiJavascript,
  SiJinja,
  SiJira,
  SiJupyter,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiSnowflake,
  SiSpring,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
  SiTrpc,
  SiTypescript,
  SiVectorlogozone,
} from "react-icons/si"
import { TbBrandLaravel, TbSql } from "react-icons/tb"

import bruinImg from "@/public/bruin.png"
import diamondsImg from "@/public/diamonds.png"
import githubImg from "@/public/github.png"
import musmeImg from "@/public/musme.png"
import nbaImg from "@/public/nba.png"
import quillImg from "@/public/quill.png"
import selfdrivingImg from "@/public/selfdriving.png"
import React from "react"
import { BsGraphUpArrow } from "react-icons/bs"
import { GrMysql } from "react-icons/gr"
import { VscGithubAction } from "react-icons/vsc"

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
] as const

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "TwinsMusic Enterprises",
    description:
      "I work on Musme Library & App to improve the performance and generate more traffic. I mentor team members/interns and integrate various services on a small but efficient cloud infrastructure.",
    icon: React.createElement(Shapes),
    date: "Sep 2023 - Present",
  },
  {
    title: "Software Engineer",
    location: "hakanokay.dev",
    description:
      "I developed machine learning models and APIs, created web applications, improved and managed ETL processes for different organizations.",
    icon: React.createElement(Cog),
    date: "Feb 2023 - Sep 2023",
  },
  {
    title: "Software Engineer",
    location: "Bruin",
    description:
      "I built solutions for faster onboarding, worked on a custom querying language's parser, improved a CLI tool for data transformations, optimized RESTful API endpoints for analytics, and managed ETL pipelines.",
    icon: React.createElement(ActivitySquare),
    date: "Mar 2022 - Feb 2023",
  },
] as const

export const projectsData = [
  {
    title: "Musme Library",
    description:
      "MusMe is an subscription-based, affordable, royalty-free music library. Find the right sound for your content.",
    link: "https://www.musmelibrary.com/",
    tags: [
      { icon: React.createElement(SiTypescript), name: "TypeScript" },
      { icon: React.createElement(SiTailwindcss), name: "Tailwind" },
      { icon: React.createElement(FaReact), name: "React" },
      { icon: React.createElement(SiMysql), name: "MySQL" },
      { icon: React.createElement(SiNextdotjs), name: "Next.js" },
      { icon: React.createElement(FaAws), name: "AWS" },
      { icon: React.createElement(SiAuth0), name: "JWT" },
      { icon: React.createElement(GiMatterStates), name: "Zustand" },
      { icon: React.createElement(SiJira), name: "Jira" },
      { icon: React.createElement(FaConfluence), name: "Confluence" },
    ],
    imageUrl: musmeImg,
  },
  {
    title: "Quill",
    description:
      "Quill allows you to engage in conversations with a Language Model (LLM) customized with the content of the uploaded PDF files.",
    link: "https://quill.hakanokay.dev/",
    tags: [
      { icon: React.createElement(SiTypescript), name: "TypeScript" },
      { icon: React.createElement(SiTailwindcss), name: "Tailwind" },
      { icon: React.createElement(FaReact), name: "React" },
      { icon: React.createElement(SiMysql), name: "MySQL" },
      { icon: React.createElement(SiNextdotjs), name: "Next.js" },
      { icon: React.createElement(SiTrpc), name: "tRPC" },
      { icon: React.createElement(SiVectorlogozone), name: "Pinecone" },
      { icon: React.createElement(SiChatbot), name: "Langchain" },
      { icon: React.createElement(FaStripe), name: "Stripe" },
      { icon: React.createElement(SiAuth0), name: "Kinde" },
    ],
    imageUrl: quillImg,
  },
  {
    title: "WorldMaker",
    description:
      "Create cities right in your browser using roads, traffic signs, buildings and trees. The next phase is to add self-driving cars using neural networks.",
    link: "https://selfdriving.hakanokay.dev/",
    tags: [
      { icon: React.createElement(SiJavascript), name: "Javascript" },
      { icon: React.createElement(SiHtml5), name: "HTML" },
      { icon: React.createElement(FaCss3), name: "CSS" },
    ],
    imageUrl: selfdrivingImg,
  },
  {
    title: "Bruin",
    description:
      "Transform, document, and monitor your data on a serverless infrastructure and easily create and manage data pipelines on the cloud.",
    link: "https://getbruin.com/",
    tags: [
      { icon: React.createElement(FaPython), name: "Python" },
      { icon: React.createElement(TbSql), name: "SQL" },
      { icon: React.createElement(SiApacheairflow), name: "Airflow" },
      { icon: React.createElement(SiKubernetes), name: "Kubernetes" },
      {
        icon: React.createElement(DiGoogleCloudPlatform),
        name: "Google Cloud",
      },
      { icon: React.createElement(FaDocker), name: "Docker" },
      { icon: React.createElement(TbBrandLaravel), name: "Laravel" },
      { icon: React.createElement(SiFastapi), name: "FastAPI" },
      { icon: React.createElement(FaLinux), name: "Linux" },
      { icon: React.createElement(SiJinja), name: "Jinja" },
    ],
    imageUrl: bruinImg,
  },
  {
    title: "NBA Analytics",
    description:
      "Dashboard providing NBA stats, analytics and machine learning predictions. It has features for classification, clustering as well as player and team statistics.",
    link: "https://github.com/h-okay/dash-nba",
    tags: [
      { icon: React.createElement(FaPython), name: "Python" },
      { icon: React.createElement(TbSql), name: "SQL" },
      { icon: React.createElement(BiLogoPhp), name: "PHP" },
      { icon: React.createElement(SiGnubash), name: "Bash" },
      { icon: React.createElement(VscGithubAction), name: "Github Actions" },
      { icon: React.createElement(SiScikitlearn), name: "Scikit-learn" },
      { icon: React.createElement(SiTensorflow), name: "Tensorflow" },
      {
        icon: React.createElement(DiGoogleCloudPlatform),
        name: "Google Cloud",
      },
      { icon: React.createElement(SiFastapi), name: "FastAPI" },
      { icon: React.createElement(SiPlotly), name: "Plotly" },
    ],
    imageUrl: nbaImg,
  },
  {
    title: "Gem Trend",
    description:
      "Web application for diamond price prediction. Explore, filter, sort your data and access prediction through XGBoost and Linear Regressions models.",
    link: "https://github.com/h-okay/random/tree/main/diamonds",
    tags: [
      { icon: React.createElement(FaPython), name: "Python" },
      { icon: React.createElement(SiPandas), name: "Pandas" },
      { icon: React.createElement(SiScikitlearn), name: "Scikit-learn" },
      { icon: React.createElement(SiStreamlit), name: "Streamlit" },
      { icon: React.createElement(FaDocker), name: "Docker" },
      { icon: React.createElement(SiJupyter), name: "Jupyter" },
      { icon: React.createElement(SiGnubash), name: "Bash" },
      { icon: React.createElement(BsGraphUpArrow), name: "Matplotlib" },
      { icon: React.createElement(SiNumpy), name: "Numpy" },
      { icon: React.createElement(FaGithub), name: "Github" },
    ],
    imageUrl: diamondsImg,
  },
  {
    title: "Check my GitHub!",
    description:
      "I'm always working on something new. Check out my GitHub for more projects. I'm always open to new ideas and collaborations!",
    link: "https://github.com/h-okay?tab=repositories",
    tags: [{ icon: "🧑‍💻", name: "✨" }],
    imageUrl: githubImg,
  },
] as const

export const skillsData = [
  // Languages
  { name: "Python", icon: React.createElement(FaPython), type: "language" },
  { name: "SQL", icon: React.createElement(TbSql), type: "language" },
  {
    name: "TypeScript",
    icon: React.createElement(BiLogoTypescript),
    type: "language",
  },
  {
    name: "JavaScript",
    icon: React.createElement(BiLogoJavascript),
    type: "language",
  },
  { name: "Go", icon: React.createElement(BiLogoGoLang), type: "language" },
  { name: "Java", icon: React.createElement(FaJava), type: "language" },
  // Frameworks
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
  { name: "FastAPI", icon: React.createElement(SiFastapi), type: "framework" },
  {
    name: "Spring Boot",
    icon: React.createElement(SiSpring),
    type: "framework",
  },
  {
    name: "Pandas",
    icon: React.createElement(SiPandas),
    type: "framework",
  },
  {
    name: "Scikit-learn",
    icon: React.createElement(SiScikitlearn),
    type: "framework",
  },
  // Platforms
  { name: "Linux", icon: React.createElement(FaLinux), type: "platform" },
  { name: "Git", icon: React.createElement(BiLogoGit), type: "platform" },
  { name: "Docker", icon: React.createElement(FaDocker), type: "platform" },
  {
    name: "Airflow",
    icon: React.createElement(SiApacheairflow),
    type: "platform",
  },
  {
    name: "GCP",
    icon: React.createElement(DiGoogleCloudPlatform),
    type: "platform",
  },
  { name: "AWS", icon: React.createElement(FaAws), type: "platform" },
  // Databases
  { name: "MySQL", icon: React.createElement(GrMysql), type: "databases" },
  {
    name: "Postgres",
    icon: React.createElement(DiPostgresql),
    type: "databases",
  },
  { name: "MongoDB", icon: React.createElement(SiMongodb), type: "databases" },
  {
    name: "BigQuery",
    icon: React.createElement(SiGooglebigquery),
    type: "databases",
  },
  {
    name: "Redshift",
    icon: React.createElement(SiAmazonredshift),
    type: "databases",
  },
  {
    name: "Snowflake",
    icon: React.createElement(SiSnowflake),
    type: "databases",
  },
] as const
