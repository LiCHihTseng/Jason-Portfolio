"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectHero({ src, alt = "", className = "" }) {
  const frameRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      if (!src) return;

      // 圖片比框高 30%、起點往上挪 15%,再上下各位移 10%(= 框高的 13%)。
      // 兩端都還留 2% 餘裕,所以捲到頭或尾都不會在框裡露出空白。
      gsap.fromTo(
        imageRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            refreshPriority: 0, // 位在頁面最上方
          },
        }
      );
    },
    { scope: frameRef, dependencies: [src] }
  );

  if (!src) return null;

  return (
    <div
      ref={frameRef}
      className={`relative h-[40vh] w-full overflow-hidden ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        fetchPriority="high"
        className="absolute inset-x-0 h-[130%] w-full object-cover will-change-transform"
        style={{ top: "-15%" }}
      />
    </div>
  );
}
