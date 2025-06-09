"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Insync from "../assets/img/iPhone 12 Pro.png";
import yoUQuest from "../assets/img/MacBook Pro 16.png";
import AussieWild from "../assets/img/MacBook Air.png";
import AnimatedArrowButton from "./AnimatedArrowButton";

// Project data - update with your actual projects
const projects = [
  {
    id: 1,
    title: "InSync",
    // Replace with your actual import or path
    img: Insync, // This will be replaced with your Insync import
    client: "Design Studio",
    platform: ["Mobile App", "Physical Products"],
    desc: "An ambient home interface for effortless family coordination, InSync blends seamlessly into daily life to support family schedules and social engagement.",
  },
  {
    id: 2,
    title: "yoUQuest",
    // Replace with your actual import or path
    img: yoUQuest, // This will be replaced with your yoUQuest import
    client: "University Project",
    platform: ["Website", "ReactJS"],
    desc: "yoUQuest is a gamified task management platform that helps university students combat academic burnout through progress tracking, customizable goals, and break reminders, promoting balance and productivity.",
  },
  {
    id: 3,
    title: "Aussie Wildlife",
    // Replace with your actual import or path
    img: AussieWild, // This will be replaced with your AussieWild import
    client: "Educational Platform",
    platform: ["Website", "JavaScript"],
    desc: "Aussie Wildlife is an interactive educational platform that uses game-based learning to inspire curiosity and appreciation for Australia's unique biodiversity through immersive RPG-style exploration.",
  },
];

function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  return (
    <section ref={ref} className="py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto mb-40">
        <motion.div style={{ opacity }}>
          <h2 className="text-3xl font-semibold text-left mb-12 text-[#111111]">My Projects</h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <Link
                  to={`/project/${project.id}`}
                  state={project}
                  key={project.id}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`block rounded-xl overflow-hidden transition-colors ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index === 0
                        ? "md:aspect-[16/6] aspect-[16/6] bg-white/80"
                        : "md:aspect-[4/3] aspect-[16/6] bg-white/5"
                    } overflow-hidden rounded-2xl flex items-center justify-center`}
                  >
                    <div className="absolute bottom-4 left-4 z-10 hidden md:block">
                      <AnimatedArrowButton isHovered={isHovered} />
                    </div>

                    <img
                      src={project.img}
                      alt={project.title}
                      className={`transition-transform duration-500 ${
                        index === 0 ? "w-2/3" : "w-full"
                      } md:object-contain object-cover rounded-lg ${
                        isHovered ? "scale-105" : ""
                      }`}
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-400 mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-xl font-semibold text-[#111111]">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
