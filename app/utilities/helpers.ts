import React from "react";
import heimdallThumb from "../assets/Heimdall-thumb.png";
import jlThumb from "../assets/jl-thumb.png";
export const JOBS = [
  {
    company: "SimplMachine",
    duration: "March 2023 - Present",
    role: "Lead Developer",
    description:
      "Co-founded and launched a technology startup focused on developing innovative software solutions for the test automation industry. Led the technical vision, architecture, and development of the product from idea to fully functional prototype",
    skills: ["Node.js", "JavaScript", "Express", "React", "Remix"],
  },
  {
    company: "BombBomb",
    duration: "Sept 2019 - July 2023",
    role: "Sr. Fullstack Engineer",
    url: "https://www.bombbomb.com",
    description:
      "Led the development process of a new product that generated over $1M for the sales pipeline. Developed and maintained a full stack web application using modern front-end frameworks like React and back-end technologies such as php and PostgreSQL.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "AWS",
      "php",
      "PostgreSQL",
      "MySQL",
      "Express.js",
      "Node.js",
      "Emotion.js",
    ],
  },
  {
    company: "BombBomb",
    duration: "June 2017 - Sept 2019",
    role: "QA Engineer",
    url: "https://www.bombbomb.com",
    description:
      "Collaborated with cross-functional teams to define test strategies, test plans, and test cases for software products. Designed and implemented automated test scripts using Cypress and JavaScript, resulting in a 50% reduction in manual testing efforts.",
    skills: ["JavaScript", "Cypress", "Selenium", "TestCafe"],
  },
];

export const PROJECTS = [
  {
    name: "Heimdall",
    description:
      "A productivity desktop application that allows the user to create workspaces with a list blocked applications. Enter Focus Mode to then block those apps from being accessed, eliminating all distractions",
    skills: ["Electron.js", "Node.js", "HTML", "CSS", "JavaScript", "Webpack"],
    image: heimdallThumb,
    url: "https://github.com/jeremyMLtz/project_heimdall",
  },
  {
    name: "jeremylentz.io",
    description:
      "My personal blogfolio website. A place to host my projects and my thoughts",
    skills: ["Remix", "TypeScript", "CSS", "React"],
    image: jlThumb,
    url: "https://github.com/jeremyMLtz/jl_blogfolio",
  },
];

export interface HeaderProps {
  activeLink?: string;
}
