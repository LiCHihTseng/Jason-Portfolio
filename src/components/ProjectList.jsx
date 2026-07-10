"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ProjectCard from "./Project_Card";
import CurveReveal from "./CurveReveal";

// helper: decide if a source is a Lottie JSON file
const isLottie = (src) =>
  typeof src === "string" && src.toLowerCase().endsWith(".json");

export default function ProjectList({ projects }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);

  const prevIndexRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const isLottie = (src) =>
    src && typeof src === "object" && ("v" in src || "layers" in src);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleHover = (id, index) => {
    if (prevIndexRef.current !== null && prevIndexRef.current !== index) {
      setDirection(index > prevIndexRef.current ? 1 : -1);
    }
    prevIndexRef.current = index;
    setHoveredId(id);
  };

  const hoveredProject = projects.find((p) => p.id === hoveredId);

  if (!isDesktop) {
    return (
      <div className="max-w-8xl mx-auto px-4">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
          Recent Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              size={project.size || "md"}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-8xl mx-20 md:mx-40 px-6">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-lg tracking-widest text-gray-400 mb-6 uppercase">
          Recent Work
        </p>

        <div className="border-t border-gray-200">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to={project.disabled ? "" : project.route}
                  onClick={(e) => {
                    if (project.disabled) e.preventDefault();
                  }}
                  onMouseEnter={() => handleHover(project.id, index)}
                  onMouseLeave={() => setHoveredId(null)}
                  onMouseMove={handleMouseMove}
                  className={`relative flex items-center justify-between border-b border-gray-200 py-25 ${
                    project.disabled
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }`}
                >
                  <motion.h2
                    animate={{
                      color: isHovered ? "#9CA3AF" : "#111111",
                      x: isHovered ? -40 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-normal tracking-tight select-none"
                  >
                    {project.title}
                  </motion.h2>

                  <motion.span
                    animate={{
                      color: isHovered ? "#9CA3AF" : "#111111",
                      x: isHovered ? 40 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg select-none"
                  >
                    {project.category}
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ---------- Floating preview box ---------- */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            key="preview-box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{
              position: "fixed",
              top: mousePos.y,
              left: mousePos.x,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="z-50 w-[480px] h-[340px] rounded-md overflow-hidden bg-gray-100 pointer-events-none shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={hoveredProject.id}
                  custom={direction}
                  initial={{ y: direction > 0 ? "100%" : "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: direction > 0 ? "-100%" : "100%" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  {isLottie(hoveredProject.img) ? (
                    <Lottie
                      animationData={hoveredProject.img}
                      loop
                      autoplay
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={hoveredProject.img}
                      alt={hoveredProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-[#111111] text-sm font-medium text-center leading-tight">
                  {hoveredProject.disabled ? "Coming Soon" : "View"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
