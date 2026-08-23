"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import dashboard_video from "../assets/img/GIF/Dashboard.json?url";
import lottie2 from "../assets/img/GIF/3.json?url";
import lottie3 from "../assets/img/GIF/5.json?url";
import lottie4 from "../assets/img/GIF/yoUQuest_card.json?url";

gsap.registerPlugin(SplitText, ScrollTrigger);


// 全部用預設的 SVG renderer。試過 canvas renderer,但 lottie-web 5.13 畫不出
// 有 track matte (tt:1) 的檔案 —— Dashboard.json 與 5.json 在 canvas 下整張
// 都是全透明的,所以不要再改成 canvas。
//
// scale:各支的畫板比例不同(1.38 / 1.60 / 1.49 / 1.76),在固定的 16:10 框裡
// 用 meet 塞進去之後,填滿的方向不一樣,看起來就大小不一。實測「可見像素」
// 佔整個框的比例:
//     Dashboard 93% 寬 / 100% 高      3.json   100% 寬 / 100% 高
//     5.json    86% 寬 / 100% 高      yoUQuest 100% 寬 /  91% 高
//
// 下面這組倍率把「可見面積」拉齊到約 93%,幅度小、不會超出框、不會壓到標題,
// 但也因為幅度小,剩下的形狀差異修不掉。
// 想改成「等寬」(視覺上齊左右邊)就換成這組:
//     Dashboard 1.075 / 3.json 1.0 / 5.json 1.163 / yoUQuest 1.0
// 但 5.json 的高度會變成 116%,上下各溢出約 8%,有機會壓到下面的標題,要先看過。
//
// 這是暫時的補償。AE 重新輸出成同一個合成尺寸之後,整組 scale 可以直接拿掉。
const LOTTIE_SEQUENCE = [
  { src: dashboard_video, scale: 1.0 },
  { src: lottie2, scale: 0.97 },
  { src: lottie3, scale: 1.04 },
  { src: lottie4, scale: 1.01 },
];
const nextClip = (i) => (i + 1) % LOTTIE_SEQUENCE.length;


export default function ScrollStory() {
  const introRootRef = useRef(null);
  const stageWrapperRef = useRef(null);
  const photoStageRef = useRef(null);
  const photoMouseRef = useRef(null);
  const finalAnchorRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const slotARef = useRef(null);
  const slotBRef = useRef(null);
  const slotRefs = [slotARef, slotBRef];
  const isLottieVisibleRef = useRef(true);
  const activeSlotRef = useRef(0);

  const [isReady, setIsReady] = useState(false);
  // 兩個圖層輪流播。正在播的那層永遠不會被卸載,下一段影片事先在被蓋住的
  // 那層載好並停在第 0 幀,換片時只切 opacity,所以中間不會閃白。
  const [slotClips, setSlotClips] = useState([0, 1]);
  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => {
    setIsReady(true);
  }, []);

  // lottie-web 的 SVG renderer 每一幀都會改動大量 DOM。捲出畫面時讓它停下來,
  // 滾動其他區塊就不會一直被 style / layout / paint 拖慢。
  useEffect(() => {
    if (!isReady) return;

    const stage = photoStageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isLottieVisibleRef.current = entry.isIntersecting;
        const active = slotRefs[activeSlotRef.current].current;
        if (entry.isIntersecting) active?.play();
        else active?.pause();
      },
      { rootMargin: "100px 0px" }
    );

    observer.observe(stage);
    return () => observer.disconnect();
    // slotRefs 每次 render 都是新陣列,但裡面的 ref 物件本身是穩定的
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  // 換到新的一層時,如果人不在這一段就別讓它自己播起來
  useEffect(() => {
    activeSlotRef.current = activeSlot;
    if (!isLottieVisibleRef.current) slotRefs[activeSlot].current?.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlot]);

  const handleLottieComplete = (slot) => {
    // 只有正在播的那層播完才需要換片;被蓋住那層是預載用的,不理它
    if (slot !== activeSlot) return;

    const incoming = 1 - slot;
    setActiveSlot(incoming);
    // 接手的那層已經載好且停在第 0 幀,直接接著播就好
    slotRefs[incoming].current?.goToAndPlay(0, true);

    // 剛播完的這層現在被蓋住了,趁沒人看得到把「再下一段」載進去
    setSlotClips((prev) => {
      const updated = [...prev];
      updated[slot] = nextClip(prev[incoming]);
      return updated;
    });
  };

  useEffect(() => {
    if (!isReady) return;

    let cancelled = false;

    const ctx = gsap.context((self) => {
      // Poppins 是自訂字型。SplitText 若在字型載入前切字,會用 fallback 字型
      // 量測每個字元的位置,等 Poppins 換上來時整排字會位移。等字型就緒再切。
      // self.add() 讓非同步建立的動畫仍然登記進這個 context,卸載時才會被 revert。
      document.fonts.ready.then(() => {
        if (cancelled) return;
        self.add(() => {
          const headlineSplit = SplitText.create(headlineRef.current, {
            type: "chars",
            charsClass: "char",
            // 只切 chars 時每個字母都是獨立元素,窄螢幕會從單字中間折行。
            // smartWrap 會把單字包進 white-space: nowrap,官方建議的做法。
            smartWrap: true,
          });
          gsap.set(eyebrowRef.current, { autoAlpha: 0, y: -10 });
          gsap.set(headlineSplit.chars, { autoAlpha: 0 });
          gsap.set(headlineSplit.chars, {
            yPercent: () => gsap.utils.random(-150, 150),
            xPercent: () => gsap.utils.random(-80, 80),
            rotation: () => gsap.utils.random(-90, 90),
          });
          gsap.set(subheadRef.current, { autoAlpha: 0, y: 20 });

          const introTl = gsap.timeline({
            scrollTrigger: {
              trigger: introRootRef.current,
              start: "top 70%",
              once: true,
              refreshPriority: 0, // 頁面順序:這一段在 ScrollPanel / WhatICanDo 之前
            },
          });

          introTl
            .to(
              eyebrowRef.current,
              { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
              0
            )
            .to(
              headlineSplit.chars,
              {
                autoAlpha: 1,
                yPercent: 0,
                xPercent: 0,
                rotation: 0,
                ease: "back.out(1.7)",
                duration: 0.8,
                stagger: { amount: 0.4, from: "random" },
              },
              0.2
            )
            .to(
              subheadRef.current,
              { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
              0.6
            );
        });
      });

      requestAnimationFrame(() => {
        const stageRect = photoStageRef.current.getBoundingClientRect();
        const anchorRect = finalAnchorRef.current.getBoundingClientRect();
        const deltaY = anchorRect.top - stageRect.top;

        gsap.set(photoStageRef.current, { y: 0, scale: 0.5 });

        gsap.to(photoStageRef.current, {
          y: deltaY,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: introRootRef.current,
            start: "top 100%",
            end: "top 20%",
            scrub: 0.6,
            // 這個 ScrollTrigger 建立在 requestAnimationFrame 裡,會變成最後才建立,
            // 但它其實位在頁面很前面 —— 必須明講 refresh 的優先順序。
            refreshPriority: 0,
          },
        });
      });

      const moveX = gsap.quickTo(photoMouseRef.current, "x", {
        duration: 0.6,
        ease: "power2.out",
      });

      let maxOffset = photoStageRef.current.getBoundingClientRect().width * 0.25;
      const measure = () => {
        maxOffset = photoStageRef.current.getBoundingClientRect().width * 0.25;
      };

      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
        moveX(xRatio * maxOffset);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("resize", measure, { passive: true });

      return () => {
        cancelled = true;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", measure);
      };
    }, introRootRef);

    return () => ctx.revert();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <div className="w-full overflow-x-hidden">
      <div
        ref={introRootRef}
        className="relative w-full min-h-screen py-32 md:py-40 px-6 bg-white overflow-visible"
      >
        <div className="max-w-5xl mx-auto" ref={stageWrapperRef}>
          <div className="relative">
            {/* 拿掉 overflow-hidden,Lottie 現在完整可見,超出方塊範圍也沒關係 */}
            <div
              ref={photoStageRef}
              className="absolute left-1/2 -translate-x-1/2 w-[90vw] max-w-2xl aspect-[16/10] z-30"
              style={{
                top: "-180px",
                maxWidth: "min(1200px, calc(100vw - 2rem))",
              }}
            >
              <div ref={photoMouseRef} className="absolute inset-0">
                {slotClips.map((clip, slot) => (
                  <div
                    key={slot}
                    className={`absolute inset-0 ${
                      slot === activeSlot ? "z-10 opacity-100" : "z-0 opacity-0"
                    }`}
                    style={{ transform: `scale(${LOTTIE_SEQUENCE[clip].scale})` }}
                  >
                    <Lottie
                      key={clip}
                      lottieRef={slotRefs[slot]}
                      path={LOTTIE_SEQUENCE[clip].src}
                      loop={false}
                      autoplay={slot === activeSlot}
                      onComplete={() => handleLottieComplete(slot)}
                      className="w-full h-full"
                      rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p
              ref={eyebrowRef}
              className="text-sm tracking-widest text-gray-400 uppercase mb-6"
            >
              What I Bring
            </p>
            <h2
              ref={headlineRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-8"
            >
              Solve. Design. Build.
            </h2>
            <p
              ref={subheadRef}
              className="text-xl md:text-2xl text-gray-500 max-w-4xl leading-relaxed"
            >
              I don't just design screens — I close the gap between idea and
              shipped product.
            </p>

            <div
              ref={finalAnchorRef}
              className="w-full aspect-[16/10] mt-16"
              style={{ visibility: "hidden" }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
