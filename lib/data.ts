import { ActivitySquare, Cog, Shapes } from 'lucide-react';
import { BiLogoGit, BiLogoGoLang, BiLogoJavascript, BiLogoPhp, BiLogoTypescript } from 'react-icons/bi';
import { DiGoogleCloudPlatform, DiPostgresql } from 'react-icons/di';
import { FaAws, FaDocker, FaGithub, FaJava, FaLinux, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiApacheairflow,
  SiFastapi,
  SiGnubash,
  SiGooglebigquery,
  SiJinja,
  SiJupyter,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiSpring,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandLaravel, TbSql } from 'react-icons/tb';

import { BsGraphUpArrow } from 'react-icons/bs';
import { GrMysql } from 'react-icons/gr';
import React from 'react';
import { VscGithubAction } from 'react-icons/vsc';
import bruinImg from '@/public/bruin.png';
import diamondsImg from '@/public/diamonds.png';
import githubImg from '@/public/github.png';
import nbaImg from '@/public/nba.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Developer',
    location: 'TwinsMusic Enterprises',
    description:
      "Redesigned and developed Musme Library, an online, subscription-based music library service for content creators. I'm working on new features and maintaining the platform.",
    icon: React.createElement(Shapes),
    date: 'September 2023 - Present',
  },
  {
    title: 'Freelance Software Developer',
    location: 'hakanokay.dev',
    description:
      'As a Freelancer, I combine Data Science and Full Stack Development to provide end-to-end, full-stack solutions to companies so that the insights can be easily shared with relevant stakeholders.',
    icon: React.createElement(Cog),
    date: 'June 2022 - Present',
  },
  {
    title: 'Software Developer',
    location: 'Bruin',
    description:
      'Built and managed ETL pipelines, implemented new features, fixed bugs, created documentation, trained and deployed machine learning models for clients from various industries. I also worked on Bruin Platform to implement data lineage, monitoring, analysis and orchestration features.',
    icon: React.createElement(ActivitySquare),
    date: 'March 2022 - Feb 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Bruin',
    description:
      'I worked as a Software Developer on this startup for a year. Users can easily create and manage data pipelines on the cloud.',
    link: 'https://getbruin.com/',
    tags: [
      { icon: React.createElement(FaPython), name: 'Python' },
      { icon: React.createElement(TbSql), name: 'SQL' },
      { icon: React.createElement(SiApacheairflow), name: 'Airflow' },
      { icon: React.createElement(SiKubernetes), name: 'Kubernetes' },
      { icon: React.createElement(DiGoogleCloudPlatform), name: 'Google Cloud' },
      { icon: React.createElement(FaDocker), name: 'Docker' },
      { icon: React.createElement(TbBrandLaravel), name: 'Laravel' },
      { icon: React.createElement(SiFastapi), name: 'FastAPI' },
      { icon: React.createElement(FaLinux), name: 'Linux' },
      { icon: React.createElement(SiJinja), name: 'Jinja' },
    ],
    imageUrl: bruinImg,
  },
  {
    title: 'NBA Analytics',
    description:
      'Dashboard providing NBA stats, analytics and machine learning predictions. It has features for classification, clustering as well as player and team statistics.',
    link: 'https://github.com/h-okay/dash-nba',
    tags: [
      { icon: React.createElement(FaPython), name: 'Python' },
      { icon: React.createElement(TbSql), name: 'SQL' },
      { icon: React.createElement(BiLogoPhp), name: 'PHP' },
      { icon: React.createElement(SiGnubash), name: 'Bash' },
      { icon: React.createElement(VscGithubAction), name: 'Github Actions' },
      { icon: React.createElement(SiScikitlearn), name: 'Scikit-learn' },
      { icon: React.createElement(SiTensorflow), name: 'Tensorflow' },
      { icon: React.createElement(DiGoogleCloudPlatform), name: 'Google Cloud' },
      { icon: React.createElement(SiFastapi), name: 'FastAPI' },
      { icon: React.createElement(SiPlotly), name: 'Plotly' },
    ],
    imageUrl: nbaImg,
  },
  {
    title: 'Gem Trend',
    description:
      'Web application for diamond price prediction. It has features for data exploration, filtering, sorting and price prediction through XGBoost and Linear Regressions models.',
    link: 'https://github.com/h-okay/random/tree/main/diamonds',
    tags: [
      { icon: React.createElement(FaPython), name: 'Python' },
      { icon: React.createElement(SiPandas), name: 'Pandas' },
      { icon: React.createElement(SiScikitlearn), name: 'Scikit-learn' },
      { icon: React.createElement(SiStreamlit), name: 'Streamlit' },
      { icon: React.createElement(FaDocker), name: 'Docker' },
      { icon: React.createElement(SiJupyter), name: 'Jupyter' },
      { icon: React.createElement(SiGnubash), name: 'Bash' },
      { icon: React.createElement(BsGraphUpArrow), name: 'Matplotlib' },
      { icon: React.createElement(SiNumpy), name: 'Numpy' },
      { icon: React.createElement(FaGithub), name: 'Github' },
    ],
    imageUrl: diamondsImg,
  },
  {
    title: 'Check my GitHub!',
    description:
      "I'm always working on something new. Check out my GitHub for more projects. I'm always open to new ideas and collaborations!",
    link: 'https://github.com/h-okay?tab=repositories',
    tags: [{ icon: '🧑‍💻', name: '✨' }],
    imageUrl: githubImg,
  },
] as const;

export const skillsData = [
  // Languages
  { name: 'Python', icon: React.createElement(FaPython), type: 'language' },
  { name: 'SQL', icon: React.createElement(TbSql), type: 'language' },
  { name: 'TypeScript', icon: React.createElement(BiLogoTypescript), type: 'language' },
  { name: 'JavaScript', icon: React.createElement(BiLogoJavascript), type: 'language' },
  { name: 'Go', icon: React.createElement(BiLogoGoLang), type: 'language' },
  { name: 'Java', icon: React.createElement(FaJava), type: 'language' },
  // Frameworks
  { name: 'React', icon: React.createElement(FaReact), type: 'framework' },
  { name: 'Next.js', icon: React.createElement(SiNextdotjs), type: 'framework' },
  { name: 'Node.js', icon: React.createElement(FaNodeJs), type: 'framework' },
  { name: 'Spring Boot', icon: React.createElement(SiSpring), type: 'framework' },
  { name: 'Tailwind', icon: React.createElement(SiTailwindcss), type: 'framework' },
  { name: 'FastAPI', icon: React.createElement(SiFastapi), type: 'framework' },
  // Platforms
  { name: 'Linux', icon: React.createElement(FaLinux), type: 'platform' },
  { name: 'Git', icon: React.createElement(BiLogoGit), type: 'platform' },
  { name: 'Docker', icon: React.createElement(FaDocker), type: 'platform' },
  { name: 'Airflow', icon: React.createElement(SiApacheairflow), type: 'platform' },
  { name: 'GCP', icon: React.createElement(DiGoogleCloudPlatform), type: 'platform' },
  { name: 'AWS', icon: React.createElement(FaAws), type: 'platform' },
  // Databases
  { name: 'MySQL', icon: React.createElement(GrMysql), type: 'databases' },
  { name: 'Postgres', icon: React.createElement(DiPostgresql), type: 'databases' },
  { name: 'MongoDB', icon: React.createElement(SiMongodb), type: 'databases' },
  { name: 'BigQuery', icon: React.createElement(SiGooglebigquery), type: 'databases' },
  // Learning
  { name: 'C#', icon: React.createElement(TbBrandCSharp), type: 'progress' },
] as const;
