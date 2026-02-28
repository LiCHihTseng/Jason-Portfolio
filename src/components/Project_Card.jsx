// components/ProjectCard.jsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedArrowButton from "./AnimatedArrowButton";
import * as Icon from "@phosphor-icons/react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({
      x: e.clientX - rect.left, // 轉相對於卡片座標
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      to={`/project/${project.id}`}
      state={project}
      className="block rounded-xl overflow-hidden transition-colors"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={onMouseMove}
        className={`group relative ${
          index === 0
            ? "md:aspect-[4/3] aspect-[14/10] bg-[#b9b9b9]/10"
            : "md:aspect-[4/3] aspect-[14/10] bg-white/5"
        } overflow-hidden rounded-2xl flex items-center justify-center
           `}
      >
        {/* 左下角箭頭按鈕 */}
        <div className="absolute bottom-4 right-4 z-10 hidden md:block">
          <AnimatedArrowButton isHovered={isHovered} />
        </div>

        {/* 你的主圖 */}
        <img
          src={project.img}
          alt={project.title}
          className={`transition-transform duration-500 origin-bottomc:\Users\User\Desktop\test1.png
    : "w-full self-end md:self-center"}
    md:object-contain object-cover object-bottom rounded-lg
    ${isHovered ? "scale-105" : ""}
    self-end md:self-center
  `}
        />

      </div>

      {/* 卡片下方標題/資訊 */}
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-0">{project.client}</p>
        <h3 className="text-xl font-medium text-[#0E1217]">{project.title}</h3>
      </div>
    </Link>
  );
}
