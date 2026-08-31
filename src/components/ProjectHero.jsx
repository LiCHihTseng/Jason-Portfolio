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

      // start 必須是 "top top" 而不是 "top bottom":主視覺就貼在頁面最上面,
      // 永遠不會從畫面下方捲進來。用 "top bottom" 的話,捲動位置 0 就已經在
      // 進度 0.7 附近 —— 而換頁動畫期間祖先帶著 y 位移,ScrollTrigger 量到的
      // 是錯的位置、先畫成進度 0,等 PageTransition 結束 refresh 才跳到 0.7,
      // 於是圖片會在頁面停好之後才二次定位。改成 "top top" 之後,捲動位置 0
      // 兩次都是進度 0,refresh 前後同一個值,不會跳。
      gsap.fromTo(
        imageRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top top",
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

  // 外框刻意不給 w-full:寬度會被鎖成「內距之後的內容寬」,呼叫端的負 margin
  // 就只是把整塊往左推,右邊少掉兩倍內距的白邊。拿掉之後 block 的 auto 寬度
  // 會把兩側負 margin 一起算進去,才真的滿版。
  return (
    <div
      ref={frameRef}
      className={`relative h-[40vh] overflow-hidden ${className}`}
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
