"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Insync from "../assets/img/test1.png";
import yoUQuest from "../assets/img/yoUQuest.png";
import AussieWild from "../assets/img/MacBook Air.png";
import Chatstat from "../assets/img/Chatstat.png";
import Chatstat_mobile from "../assets/img/Chatstat_mobile.png";
import ProjectCard from "./Project_Card"; // 確認檔名正確

// Project data
const projects = [
  {
    id: 4,
    title: "Design for Chatstat Website",
    img: Chatstat,
    client: "Internship",
    platform: ["Website", "Product Design"],
    desc: "Chatstat project description...",
    route: "/project/chatstat",
    disabled: true,
  },
  {
    id: 5,
    title: "Chatstat Mobile",
    img: Chatstat_mobile,
    client: "Internship",
    platform: ["Website", "Product Design"],
    desc: "Chatstat project description...",
    route: "/project/chatstat_mobile",
    disabled: true,
  },
  {
    id: 1,
    title: "InSync",
    img: Insync,
    client: "Design Studio",
    platform: ["Mobile App", "Physical Products"],
    desc: "An ambient home interface for effortless family coordination, InSync blends seamlessly into daily life to support family schedules and social engagement.",
    route: "/project/1",
    disabled: false,
  },
  {
    id: 2,
    title: "yoUQuest",
    img: yoUQuest,
    client: "University Project",
    platform: ["Website", "ReactJS"],
    desc: "yoUQuest is a gamified task management platform that helps university students combat academic burnout through progress tracking, customizable goals, and break reminders, promoting balance and productivity.",
    route: "/project/2",
    disabled: false,
  },
  // {
  //   id: 3,
  //   title: "Aussie Wildlife",
  //   img: AussieWild,
  //   client: "Educational Platform",
  //   platform: ["Website", "JavaScript"],
  //   desc: "Aussie Wildlife is an interactive educational platform that uses game-based learning to inspire curiosity and appreciation for Australia's unique biodiversity through immersive RPG-style exploration.",
  //   route: "/project/3",
  //   disabled: false,
  // },

];

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <section ref={ref} className="py-16 px-6 md:mt-0 mt-10" id="projects">
      <div className="max-w-6xl mx-auto mb-40">
        <motion.div style={{ opacity }}>
          <h2 className="text-3xl font-semibold text-left mb-12 text-[#111111]">
            My Projects
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
