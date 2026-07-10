"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const GROUP_MAP = [
  0,
  1,
  1,
  1,
  0,
  0, // S o l v e .
  1,
  1,
  2,
  2,
  2,
  1,
  1,
  1, // (空白) D e s i g n .
  2,
  2,
  2,
  0,
  0,
  0,
  0, // (空白) B u i l d .
];
const GROUP_TIMING = [0, 0.25, 0.4];

export default function MaskedSwapText({
  text = "Solve. Design. Build.",
  oldText = "Solve. Design. Build.",
  onReady,
}) {
  const newRef = useRef(null);
  const oldRef = useRef(null);

  useEffect(() => {
    const newSplit = SplitText.create(newRef.current, {
      type: "chars",
      mask: "chars",
      charsClass: "char",
    });

    const oldSplit = SplitText.create(oldRef.current, {
      type: "chars",
      mask: "chars",
      charsClass: "char",
    });

    gsap.set(newSplit.chars, { yPercent: 100 });
    gsap.set(oldSplit.chars, { yPercent: 0 });

    // 把「怎麼建立這段動畫」包成函式,交給外部 timeline 呼叫,
    // 不再自己建立 ScrollTrigger,觸發時機完全交給外部統一管理
    const buildAnimation = (tl, startTime = 0) => {
      const charDuration = 0.5;

      oldSplit.chars.forEach((char, i) => {
        const groupIndex = GROUP_MAP[i] ?? 0;
        const groupTime = startTime + (GROUP_TIMING[groupIndex] ?? 0);

        tl.to(
          char,
          { yPercent: -100, ease: "power2.inOut", duration: charDuration },
          groupTime
        );
      });

      newSplit.chars.forEach((char, i) => {
        const groupIndex = GROUP_MAP[i] ?? 0;
        const groupTime = startTime + (GROUP_TIMING[groupIndex] ?? 0);

        tl.to(
          char,
          { yPercent: 0, ease: "power2.inOut", duration: charDuration },
          groupTime
        );
      });
    };

    onReady?.(buildAnimation);

    return () => {
      newSplit.revert();
      oldSplit.revert();
    };
  }, [text, oldText, onReady]);

  return (
    <div className="relative">
      <h2
        ref={oldRef}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.15]"
      >
        {oldText}
      </h2>

      <h2
        ref={newRef}
        className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.15]"
      >
        {text}
      </h2>
    </div>
  );
}
