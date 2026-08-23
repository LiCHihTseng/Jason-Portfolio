"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StorySolve from "../assets/img/Story_Solve.jpg";
import StoryDesign from "../assets/img/Story_Design.jpg";
import StoryDev from "../assets/img/Story_Dev.jpg";

gsap.registerPlugin(ScrollTrigger);

export const PANELS = [
  {
    number: "01",
    title: "Solve",
    description: "I uncover user pain points through research, testing, and analysis before designing any solution.",
    tags: ["User Research", "Problem Framing", "Usability Testing", "Product Strategy", "Journey Mapping", "Observation"],
    image: StorySolve,
  },
  {
    number: "02",
    title: "Design",
    description: "I design intuitive interfaces and user experiences that balance business goals with human needs.",
    tags: ["UX", "UI", "Design Systems", "Interaction Design", "Wireframe", "Typography", "Prototype", "Accessibility", "WCAG"],
    image: StoryDesign,
  },
  {
    number: "03",
    title: "Build",
    description: "I develop responsive interfaces using React and modern front-end technologies to turn ideas into working products.",
    tags: ["Frontend Development", "Tailwind CSS", "React", "Motion", "GSAP", "Responsive", "SEO", "Databases"],
    image: StoryDev,
  },
];

export default function ScrollPanel({ panel }) {
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageInnerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.set([numberRef.current, titleRef.current, descRef.current, tagsRef.current], {
        autoAlpha: 0,
        y: -40,
      });

      gsap.set(imageWrapperRef.current, {
        autoAlpha: 0,
        y: 60,
      });

      gsap.set(imageInnerRef.current, {
        yPercent: -15,
      });

      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      revealTimeline
        .to(numberRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0)
        .to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, 0.1)
        .to(descRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0.25)
        .to(tagsRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0.35)
        .to(imageWrapperRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, 0.15);

      gsap.to(imageInnerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mx-4 rounded-lg border-t border-white/10 bg-[#333333] px-6 py-16 md:mx-10 md:px-12 md:py-24 lg:mx-20">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 lg:grid-cols-[2fr_4fr_4fr_4fr] lg:gap-24">
        <div className="flex items-center gap-4 lg:contents">
          <span ref={numberRef} className="block text-2xl text-white/40 lg:mb-4">{panel.number}</span>

          <h3 ref={titleRef} className="text-4xl font-semibold text-white md:text-5xl lg:mb-6">{panel.title}</h3>
        </div>

        <div>
          <p ref={descRef} className="mb-6 text-lg leading-relaxed text-white/80 md:text-xl">{panel.description}</p>

          <div ref={tagsRef} className="mt-8 flex flex-wrap gap-3">
            {panel.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-[#767676] px-3 py-1 text-sm uppercase tracking-wide text-white">{tag}</span>
            ))}
          </div>
        </div>

        <div ref={imageWrapperRef} className="relative min-h-80 h-full w-full overflow-hidden rounded-lg shadow-2xl">
          <div ref={imageInnerRef} className="absolute inset-x-0 will-change-transform" style={{ top: "-15%", height: "130%", backgroundImage: `url(${panel.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </div>
    </section>
  );
}