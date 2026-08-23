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
const LOTTIE_SEQUENCE = [dashboard_video, lottie2, lottie3, lottie4];
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

    const ctx = gsap.context(() => {
      const headlineSplit = SplitText.create(headlineRef.current, {
        type: "chars",
        charsClass: "char",
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
                  >
                    <Lottie
                      key={clip}
                      lottieRef={slotRefs[slot]}
                      path={LOTTIE_SEQUENCE[clip]}
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
