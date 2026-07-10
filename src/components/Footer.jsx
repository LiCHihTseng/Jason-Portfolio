"use client";

import { useRef } from "react";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CurveReveal from "./CurveReveal";
import ProfileImage from "../assets/img/profile.jpg";

export default function Footer() {
  const buttonRef = useRef(null);
  const buttonBgRef = useRef(null);
  const buttonTextRef = useRef(null);
  const arrowRef = useRef(null);

  const handleButtonEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.08,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonBgRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonTextRef.current, {
      color: "#111111",
      duration: 0.3,
      overwrite: "auto",
    });
  
    gsap.to(arrowRef.current, {
      rotate: 45,
      x: 4,
      y: -4,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };
  
  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonBgRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonTextRef.current, {
      color: "#ffffff",
      duration: 0.3,
      overwrite: "auto",
    });
  
    gsap.to(arrowRef.current, {
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMagneticMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;
  
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
  
    gsap.to(button, {
      x: distanceX * 0.28,
      y: distanceY * 0.28,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonTextRef.current, {
      x: distanceX * 0.1,
      y: distanceY * 0.1,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };
  
  const handleMagneticLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.35)",
      overwrite: "auto",
    });
  
    gsap.to(buttonTextRef.current, {
      x: 0,
      y: 0,
      color: "#ffffff",
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  
    gsap.to(buttonBgRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });
  };
  const footerLinks = [
    {
      name: "Email",
      href: "mailto:zxcjason234@gmail.com",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/li-chih-tseng/",
    },
    {
      name: "CV",
      href: "https://drive.google.com/file/d/1jHwb37AMMcoHAgEzrhpAtSFiaAuHAjlR/view?usp=sharing",
    },
  ];

  return (
    <CurveReveal maskColor="#ffffff">
      <footer className="relative overflow-hidden bg-[#1d1e20] text-white">
      <div className="w-full  max-w-[2000px] mx-auto px-6 py-16 md:py-20">

          {/* Main heading */}
          <div className="max-w-6xl">
            <div className="flex items-start gap-5 md:gap-8">
              <img src={ProfileImage} alt="Jason Tseng" className="mt-2 h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28" />

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[0.9] tracking-[-0.06em]">
                Let&apos;s work
                <br />
                together
              </h2>
            </div>
          </div>

          {/* Line + circular button */}
          <div className="relative mt-20 md:mt-28">
            <div className="h-px w-full bg-white/15" />

            <a ref={buttonRef} href="mailto:zxcjason234@gmail.com" onMouseMove={handleMagneticMove} onMouseEnter={handleButtonEnter} onMouseLeave={handleMagneticLeave} className="absolute right-[5%] top-1/2 z-20 flex h-36 w-36 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#Ec5c29] sm:h-40 sm:w-40 md:right-[8%] md:h-48 md:w-48 lg:h-52 lg:w-52 will-change-transform" aria-label="Get in touch">
  <span ref={buttonBgRef} className="absolute inset-0 scale-0 rounded-full bg-white" />
  <span ref={buttonTextRef} className="relative z-10 text-sm font-medium text-white sm:text-base will-change-transform">Get in touch</span>
</a>

          </div>

          {/* Contact pills */}
          <div className="mt-24 flex flex-wrap gap-3 sm:gap-4 md:mt-20 md:max-w-[70%]">
            {footerLinks.map((link) => {
              const isExternal = !link.href.startsWith("mailto:");

              return (
                <a key={link.name} href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="group flex min-w-[150px] items-center justify-between gap-6 rounded-full border border-white/20 px-6 py-4 text-sm text-white transition-all duration-300 hover:border-[#EC5C29] hover:bg-[#EC5C29] hover:text-white sm:min-w-[180px] sm:px-8 sm:py-5 sm:text-base">
                  <span>{link.name}</span>
                  <ArrowOutwardIcon className="transition-transform duration-300 group-hover:rotate-45" sx={{ fontSize: 20 }} />
                </a>
              );
            })}
          </div>

          {/* Bottom section */}
          <div className="mt-28 flex flex-col gap-8 border-t border-white/10 pt-8 md:mt-36 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Version</p>
              <p className="mt-3 text-sm text-white/90">© {new Date().getFullYear()} Edition</p>
            </div>

          </div>

        </div>
      </footer>
    </CurveReveal>
  );
}