// components/ProjectCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedArrowButton from "./AnimatedArrowButton";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative ${
        index === 0
          ? "md:aspect-[4/3] aspect-[14/10] bg-white/10"
          : "md:aspect-[4/3] aspect-[14/10] bg-white/5"
      } overflow-hidden rounded-2xl flex items-center justify-center`}
    >
      {/* Coming Soon Overlay */}
      {project.disabled && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <span className="text-white text-lg font-semibold tracking-wide">
            Coming Soon
          </span>
        </div>
      )}

      {/* 左下角箭頭 */}
      {!project.disabled && (
        <div className="absolute bottom-4 right-4 z-10 hidden md:block">
          <AnimatedArrowButton isHovered={isHovered} />
        </div>
      )}

      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className={`w-full md:object-contain object-cover object-bottom rounded-lg transition-transform duration-500 ${
          isHovered && !project.disabled ? "scale-105" : ""
        }`}
      />
    </div>
  );

  return project.disabled ? (
    <div className="block rounded-xl overflow-hidden cursor-not-allowed opacity-80">
      {CardContent}

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-0">{project.client}</p>
        <h3 className="text-xl font-medium text-[#0E1217]">{project.title}</h3>
      </div>
    </div>
  ) : (
    <Link
      to={project.route}
      state={project}
      className="block rounded-xl overflow-hidden transition-colors"
    >
      {CardContent}

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-0">{project.client}</p>
        <h3 className="text-xl font-medium text-[#0E1217]">{project.title}</h3>
      </div>
    </Link>
  );
}
