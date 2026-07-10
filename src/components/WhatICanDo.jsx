"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReactIcon from "../assets/img/react.svg?react";
import TailwindIcon from "../assets/img/tailwind.svg?react";
import TSIcon from "../assets/img/TS.svg?react";
import JSIcon from "../assets/img/js.svg?react";
import FigmaIcon from "../assets/img/figma.svg?react";
import FramerIcon from "../assets/img/frame.svg?react";
import MotionIcon from "../assets/img/motion.svg?react";
import Vercel from "../assets/img/vercel.svg?react";
import GAIcon from "../assets/img/greensock.svg?react";

gsap.registerPlugin(ScrollTrigger);

const bigSkills = [
  { id: 1, name: "React", Icon: ReactIcon },
  { id: 2, name: "TypeScript", Icon: TSIcon },
  { id: 3, name: "JavaScript", Icon: JSIcon },
];

const smallSkills = [
  { id: 4, name: "Tailwind", Icon: TailwindIcon },
  { id: 5, name: "Figma", Icon: FigmaIcon },
  { id: 6, name: "Framer", Icon: FramerIcon },
  { id: 7, name: "Google Analytics", Icon: GAIcon },
  { id: 8, name: "Vercel", Icon: Vercel },
  { id: 9, name: "Motion", Icon: MotionIcon },
];

/*
  每個內層陣列是一個完整單字。
  每個字串則是一起翻動的字群。

  例如：
  ["Thought", "ful"] = Thoughtful
  ["tech", "nol", "o", "gy."] = technology.
*/
const sloganLineOne = [
  ["Thought", "ful"],
  ["de", "sign."],
];

const sloganLineTwo = [
  ["Pow", "ered"],
  ["by"],
  ["mod", "ern"],
  ["tech", "nol", "o", "gy."],
];

function RollingSyllable({ children }) {
  return (
    <span className="rolling-syllable relative inline-block h-[1em] overflow-hidden align-top">
      <span className="syllable-current block leading-none">{children}</span>
      <span className="syllable-next absolute left-0 top-0 block leading-none">{children}</span>
    </span>
  );
}

function RollingLine({ words, className = "" }) {
  return (
    <span className={`flex flex-wrap justify-center ${className}`}>
      {words.map((syllables, wordIndex) => (
        <span key={`word-${wordIndex}`} className="mr-[0.28em] inline-flex whitespace-nowrap last:mr-0">
          {syllables.map((syllable, syllableIndex) => (
            <RollingSyllable key={`${syllable}-${syllableIndex}`}>{syllable}</RollingSyllable>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function SkillsGrid() {
  const sectionRef = useRef(null);
  const sloganRef = useRef(null);
  const containerRef = useRef(null);
  const highlightRef = useRef(null);
  const cellRefs = useRef({});
  const iconRefs = useRef({});

  const [hoveredId, setHoveredId] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const syllableGroups = gsap.utils.toArray(".rolling-syllable", sloganRef.current);
  
      syllableGroups.forEach((group) => {
        const current = group.querySelector(".syllable-current");
        const next = group.querySelector(".syllable-next");
  
        gsap.set(current, { yPercent: 0 });
        gsap.set(next, { yPercent: 110 });
      });
  
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sloganRef.current,
          start: "top 80%",
          end: "bottom 15%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
  
      syllableGroups.forEach((group, index) => {
        const current = group.querySelector(".syllable-current");
        const next = group.querySelector(".syllable-next");
  
        const startTime = index * 0.22;
  
        timeline.to(current, {
          yPercent: -110,
          duration: 0.5,
          ease: "none",
        }, startTime);
  
        timeline.fromTo(next, {
          yPercent: 110,
        }, {
          yPercent: 0,
          duration: 0.5,
          ease: "none",
        }, startTime);
      });
    }, sectionRef);
  
    return () => context.revert();
  }, []);


  const handleCellEnter = (id, multiColor) => {
    const cell = cellRefs.current[id];
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!cell || !container || !highlight) return;

    const cellRect = cell.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const x = cellRect.left - containerRect.left;
    const y = cellRect.top - containerRect.top;

    gsap.to(highlight, {
      x,
      y,
      width: cellRect.width,
      height: cellRect.height,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });

    if (!multiColor && iconRefs.current[id]) {
      gsap.to(iconRefs.current[id], {
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    setHoveredId(id);
  };

  const handleCellLeave = (id, multiColor) => {
    if (!multiColor && iconRefs.current[id]) {
      gsap.to(iconRefs.current[id], {
        color: "#000000",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleContainerLeave = () => {
    if (highlightRef.current) {
      gsap.to(highlightRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    if (hoveredId && iconRefs.current[hoveredId]) {
      gsap.to(iconRefs.current[hoveredId], {
        color: "#000000",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    setHoveredId(null);
  };

  const renderCell = ({ id, name, Icon, multiColor }, size) => (
    <div key={id} ref={(element) => (cellRefs.current[id] = element)} onMouseEnter={() => handleCellEnter(id, multiColor)} onMouseLeave={() => handleCellLeave(id, multiColor)} className={`flex items-center justify-center border-r border-b border-gray-200 bg-white cursor-pointer ${size === "lg" ? "h-40 sm:h-40 md:h-40 lg:h-100 xl:h-120" : "aspect-square"}`}>
      <div ref={(element) => (iconRefs.current[id] = element)} style={{ color: "#000000" }} className="relative z-10 flex items-center justify-center">
        <Icon className={size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" : "h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20"} aria-label={name} />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white">
      <div className="w-full max-w-8xl mx-auto px-5 pt-24 pb-16 sm:px-10 md:px-20 md:pt-36 md:pb-24 lg:px-28 lg:pt-44">
        <div ref={sloganRef} className="py-16 md:py-24">
          <h2 className="text-center text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-[#111111]">
            <RollingLine words={sloganLineOne} />
            <RollingLine words={sloganLineTwo} className="mt-[0.16em] text-gray-400" />
          </h2>
        </div>
      </div>

      <div className="flex justify-center mb-20 md:mb-40">
        <div ref={containerRef} onMouseLeave={handleContainerLeave} className="relative mt-20 w-full max-w-8xl sm:mx-10 md:mx-20">
          <p className="mb-6 text-lg uppercase tracking-widest text-gray-400 sm:mx-10 md:mx-20 lg:mx-40">Professional At</p>

          <div ref={highlightRef} className="pointer-events-none absolute left-0 top-0 z-0 bg-black" style={{ width: 0, height: 0, opacity: 0 }} />

          <div className="grid grid-cols-3">
            {bigSkills.map((skill) => renderCell(skill, "lg"))}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6">
            {smallSkills.map((skill) => renderCell(skill, "sm"))}
          </div>
        </div>
      </div>
    </section>
  );
}