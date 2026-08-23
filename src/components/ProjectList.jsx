"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion as Motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./Project_Card";

export default function ProjectList({ projects }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window === "undefined"
      ? true
      : window.matchMedia("(min-width: 1024px)").matches
  );

  const listRef = useRef(null);
  const prevIndexRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const previewX = useTransform(mouseX, (value) => value - 240);
  const previewY = useTransform(mouseY, (value) => value - 170);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateLayout = (event) => setIsDesktop(event.matches);

    setIsDesktop(desktopQuery.matches);
    desktopQuery.addEventListener("change", updateLayout);

    return () => desktopQuery.removeEventListener("change", updateLayout);
  }, []);
  // 預覽圖是 hover 當下才建立 <img>,第一次會等網路。桌機版趁瀏覽器 idle
  // 先把這幾張讀進快取(全部加起來不到 1MB),hover 當下就只是讀快取。
  useEffect(() => {
    if (!isDesktop) return;

    const warmCache = () => {
      projects.forEach((project) => {
        new Image().src = project.img;
      });
    };

    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(warmCache, { timeout: 2000 })
      : setTimeout(warmCache, 300);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else clearTimeout(idleId);
    };
  }, [isDesktop, projects]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleHover = (project, index) => {
    if (project.disabled) return;

    if (prevIndexRef.current !== null && prevIndexRef.current !== index) {
      setDirection(index > prevIndexRef.current ? 1 : -1);
    }
    prevIndexRef.current = index;
    setHoveredId(project.id);
  };

  const hoveredProject = projects.find((p) => p.id === hoveredId);

  if (!isDesktop) {
    return (
      <div className="max-w-8xl mx-auto px-4">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">
          Recent Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              size={project.size || "md"}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={listRef} className="relative max-w-8xl mx-20 md:mx-40 px-6">
      <Motion.div
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
              <div key={project.id}>
                <Link
                  to={project.disabled ? "" : project.route}
                  onClick={(e) => {
                    if (project.disabled) e.preventDefault();
                  }}
                  onMouseEnter={() => handleHover(project, index)}
                  onMouseLeave={() => setHoveredId(null)}
                  onMouseMove={project.disabled ? undefined : handleMouseMove}
                  className={`relative flex items-center justify-between border-b border-gray-200 py-25 ${
                    project.disabled
                      ? "cursor-not-allowed opacity-60"
                      : "cursor-pointer"
                  }`}
                >
                  <Motion.h2
                    animate={{
                      color: isHovered ? "#9CA3AF" : "#111111",
                      x: isHovered ? -40 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-normal tracking-tight select-none"
                  >
                    {project.title}
                  </Motion.h2>

                  <Motion.span
                    animate={{
                      color: isHovered ? "#9CA3AF" : "#111111",
                      x: isHovered ? 40 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg select-none"
                  >
                    {project.category}
                  </Motion.span>
                </Link>
              </div>
            );
          })}
        </div>
      </Motion.div>

      {/* ---------- Floating preview box ---------- */}
      <AnimatePresence>
        {hoveredProject && (
          <Motion.div
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
              top: 0,
              left: 0,
              x: previewX,
              y: previewY,
              willChange: "transform, opacity",
            }}
            className="z-50 w-[480px] h-[340px] rounded-md overflow-hidden bg-gray-100 pointer-events-none shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence
                initial={false}
                
                mode="popLayout"
              >
                <Motion.div
                  key={hoveredProject.id}
                  custom={direction}
                  initial={{ y: direction > 0 ? "100%" : "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: direction > 0 ? "-100%" : "100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={hoveredProject.img}
                    alt={hoveredProject.title}
                    decoding="async"
                    width="480"
                    height="340"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </Motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-[#111111] text-sm font-medium text-center leading-tight">
                  {hoveredProject.disabled ? "Coming Soon" : "View"}
                </span>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
