"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import lottie1 from "../assets/img/GIF/2.json";
import lottie2 from "../assets/img/GIF/3.json";
import lottie3 from "../assets/img/GIF/5.json";
import lottie4 from "../assets/img/GIF/yoUQuest_card.json";
import ThreeCardProfile from "../assets/img/ThreeCardProfile.png";
import Story_Solve from "../assets/img/Story_Solve.jpg";
import Story_Design from "../assets/img/Story_Design.jpg";
import Story_Dev from "../assets/img/Story_Dev.jpg";
gsap.registerPlugin(SplitText, ScrollTrigger);


const LOTTIE_SEQUENCE = [lottie1, lottie2, lottie3, lottie4];


export default function ScrollStory() {
  const introRootRef = useRef(null);
  const stageWrapperRef = useRef(null);
  const photoStageRef = useRef(null);
  const photoMouseRef = useRef(null);
  const finalAnchorRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [currentLottieIndex, setCurrentLottieIndex] = useState(0);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleLottieComplete = () => {
    setCurrentLottieIndex((prev) => (prev + 1) % LOTTIE_SEQUENCE.length);
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
            markers: true,
          },
        });
      });

      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const { innerWidth } = window;
        const xRatio = (e.clientX / innerWidth - 0.5) * 2;

        const containerWidth =
          photoStageRef.current.getBoundingClientRect().width;
        const maxOffset = containerWidth * 0.25;

        gsap.to(photoMouseRef.current, {
          x: xRatio * maxOffset,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
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
                <Lottie
                key={currentLottieIndex}
                  animationData={LOTTIE_SEQUENCE[currentLottieIndex]}
                  loop={false}
                  autoplay
                  onComplete={handleLottieComplete}
                  className="w-full h-full"
                  rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
                />
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
