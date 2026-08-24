"use client";

import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { projects } from "./Project";

/*
  用作品集裡的專案圖。每張落點不同 —— 位移與角度都不一樣,疊起來像隨手放上去的
  一疊照片。大小刻意保持一致:尺寸也跟著變會讓整疊看起來散掉。
  數值寫死而非每次隨機,重整才不會長得不一樣。
*/
// 用標題排除而不是排除圖片路徑,之後換圖也不會失效
const SLIDES = projects
  .filter((project) => project.title !== "AussieWildlife")
  .map((project) => project.img)
  .reverse();

// 第一張不在 0% 就出現 —— 先留一小段空白,再一張一張長出來,最後一張落在 92%
const STACK_START = 8;
const STACK_END = 92;
const STACK_STEP = (STACK_END - STACK_START) / Math.max(SLIDES.length - 1, 1);

const PLACEMENTS = [
  { x: "-5%", y: "3%", rotate: -7 },
  { x: "6%", y: "-4%", rotate: 5 },
  { x: "-7%", y: "-2%", rotate: -3 },
  { x: "4%", y: "6%", rotate: 8 },
  { x: "-2%", y: "-6%", rotate: -5 },
];

// 數字爬完的時間。疊圖是跟著數字走的,所以這個值也決定了疊上去的節奏。
const COUNT_DURATION = 3.2;

export default function LoadingScreen({ onFinish }) {
  /*
    百分比每一幀都在變。若走 React state,3.2 秒會觸發約 190 次重繪,
    而那正好落在 Total Blocking Time 的量測視窗裡。
    改成直接寫 DOM;React 只負責「疊了幾張」,那個整段只變 4 次。
  */
  const percentRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);
  const loadedRef = useRef(0);
  const reduceMotion = useReducedMotion();

  // 真的去載圖。數字可以先跑,但沒載完不會讓它走到 100。
  useEffect(() => {
    let alive = true;

    SLIDES.forEach((src) => {
      const image = new Image();
      const bump = () => {
        if (alive) loadedRef.current += 1;
      };
      image.onload = bump;
      image.onerror = bump;
      image.src = src;
    });

    return () => {
      alive = false;
    };
  }, []);

  // 載入期間鎖住捲動
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // 數字穩定地爬。圖片還沒載完就卡在 92,載完才讓它補到 100。
  useEffect(() => {
    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value: 100,
      duration: COUNT_DURATION,
      ease: "power1.inOut",
      onUpdate: () => {
        const allLoaded = loadedRef.current >= SLIDES.length;
        const capped = allLoaded ? counter.value : Math.min(counter.value, 92);

        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(capped)}%`;
        }

        // 傳入同值時 React 會略過,所以整段實際只重繪 4 次
        setVisibleCount(
          SLIDES.filter(
            (_, index) => capped >= STACK_START + index * STACK_STEP
          ).length
        );

        if (capped >= 100) setDone(true);
      },
    });

    return () => tween.kill();
  }, []);

  // 保險:進度或動畫萬一卡住,也不能讓整站永遠停在黑畫面
  useEffect(() => {
    const failsafe = setTimeout(() => setDone(true), 9000);
    return () => clearTimeout(failsafe);
  }, []);

  return (
    <Motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      initial={{ y: 0 }}
      animate={{ y: done ? "-100%" : 0 }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
      }
      onAnimationComplete={() => {
        if (done) onFinish?.();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0e0e0e]"
    >
      <div className="relative aspect-[4/3] w-[76vw] max-w-[500px]">
        {SLIDES.slice(0, visibleCount).map((src, index) => {
          const place = PLACEMENTS[index % PLACEMENTS.length];

          return (
            <Motion.img
              key={src}
              src={src}
              alt=""
              // 由小長大疊上去。expo-out 讓它前段快、尾段穩穩落定。
              initial={{
                opacity: 0,
                x: place.x,
                y: place.y,
                rotate: place.rotate,
                scale: 0.55,
              }}
              animate={{
                opacity: 1,
                x: place.x,
                y: place.y,
                rotate: place.rotate,
                scale: 1,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: index }}
              className="absolute inset-0 h-full w-full rounded-[2px] object-cover shadow-[0_28px_70px_rgba(0,0,0,0.6)]"
            />
          );
        })}
      </div>

      <p
        ref={percentRef}
        className="absolute bottom-10 left-0 right-0 text-center text-lg font-bold italic tabular-nums text-white/85 md:bottom-14"
      >
        0%
      </p>
    </Motion.div>
  );
}
