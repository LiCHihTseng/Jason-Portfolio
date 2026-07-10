// components/CurveReveal.jsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function CurveReveal({ children, maskColor = "#ffffff" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const maskY = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={containerRef} className="relative">
      {children}

      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none z-10">
        <motion.div style={{ y: maskY }} className="relative w-full h-full">
          {/* 矩形,只有底部兩個角是大圓角 */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-all shadow-md"
            style={{
              backgroundColor: maskColor,

            }}
          />
        </motion.div>
      </div>
    </div>
  );
}