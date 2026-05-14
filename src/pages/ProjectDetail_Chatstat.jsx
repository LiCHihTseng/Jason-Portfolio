import React from "react";
import { motion } from "framer-motion";
import chatstat_banner from "../assets/img/Chatstat_Banner.png";
import DelayedLoopLottie from "../components/DelayedLoopLottie";
import Chatstat_CTA from "../assets/img/GIF/CTA.json";
import Chatstat_Feature from "../assets/img/Chatstat_Feature.svg";
import Chatstat_avatar1 from "../assets/img/Chatstat_avatar1.svg";
import Chatstat_avatar2 from "../assets/img/chatstat_avatar2.svg";
import Chatstat_FAQ from "../assets/img/Chatstat_FAQ.svg";
import Lottie from "lottie-react";
import { useState } from "react";
const ProjectDetail_Chatstat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [faqHovered, setFaqHovered] = useState(false);
  const project = {
    title: "Chatstat Homepage Experience Redesign",
    platform: ["Website", "UX Design", "Product Design"],
    img: chatstat_banner,
  };

  const improvements = [
    {
      title: "Hero Section CTA Consistency",
      description:
        "Unified the CTA messaging to reduce decision friction and create a clearer conversion path for first-time visitors.",
    },
    {
      title: "Feature Set Structure",
      description:
        "Restructured related product features into clearer groups to improve scanability and reduce cognitive load.",
    },
    {
      title: "Alert Category Visibility",
      description:
        "Moved key alert-related content higher in the homepage hierarchy to improve discoverability of core product value.",
    },
    {
      title: "Testimonials & Trust Building",
      description:
        "Collaborated with the marketing team to transform parent interview insights into more authentic and relatable testimonials.",
    },
    {
      title: "FAQ & Cross-Page Consistency",
      description:
        "Redesigned the FAQ into a familiar question-and-answer layout and improved visual consistency across supporting pages.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-5 sm:px-6 lg:px-8 text-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20 md:space-y-28"
        >
          {/* Project Header */}
          <section className="text-center">
            <p className="font-normal text-[#242726] mb-3">Chatstat</p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 text-[#242726] leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {project.platform.map((item, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg font-normal bg-[#f6f5f5] rounded-full"
                  tabIndex={0}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Banner Image */}
          <section>
            <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-[#f6f5f5] shadow-sm">
              <img
                src={project.img}
                alt="Chatstat homepage redesign preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Project Meta */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Platform", value: "Website" },
              {
                label: "Team",
                value: ["UI/UX", "Software Engineer", "Marketing"],
              },
              {
                label: "Tools",
                value: ["Figma", "WordPress"],
              },
              ,
            ].map((item, index) => (
              <div key={index} className="rounded-2xl p-6 ">
                <p className="text-xl text-[#777777] mb-2">{item.label}</p>
                <p className="text-xl font-medium text-[#242726] ">
                  {Array.isArray(item.value)
                    ? item.value.map((tool, i) => (
                        <span key={i} className="block mt-2">
                          {tool}
                        </span>
                      ))
                    : item.value}
                </p>
              </div>
            ))}
          </section>

          {/* Project Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-lg text-[#777777] mb-2">Overview</p>
              <h2 className="text-2xl md:text-3xl font-medium text-[#242726]">
                Improving homepage clarity and trust
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg md:text-xl leading-8 text-[#444444]">
                At Chatstat, I worked on improving the homepage experience
                through stakeholder feedback, UX reviews, and collaboration with
                the marketing team.
              </p>
              <p className="text-lg md:text-xl leading-8 text-[#444444] mt-4">
                The goal was to help first-time visitors better understand the
                platform and create a clearer onboarding journey.
              </p>
            </div>
          </section>

          {/* Problem */}
          <section className="bg-[#f8f8f8] rounded-3xl p-6 sm:p-8 md:p-10">
            <p className="text-lg text-[#777777] mb-3">Problem</p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Main problem statement */}
              <div className="lg:col-span-5">
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight text-[#242726]">
                  The homepage had strong product content, but the communication
                  experience was unclear.
                </h2>
              </div>

              {/* Supporting explanation */}
              <div className="lg:col-span-7">
                <p className="text-base md:text-lg leading-8 text-[#444444]">
                  Through stakeholder feedback and UX reviews, we identified
                  several communication and usability issues that made it
                  difficult for first-time visitors to quickly understand
                  Chatstat’s value and move confidently through the homepage.
                </p>
              </div>
            </div>

            {/* Issue cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {[
                {
                  title: "CTA Clarity",
                  desc: "Hero section CTAs used inconsistent messaging, making the primary action less clear.",
                },
                {
                  title: "Feature Communication",
                  desc: "Product features were spread across multiple sections, making the value harder to scan.",
                },
                {
                  title: "Feature Visibility",
                  desc: "Important alert-related content appeared too low in the page hierarchy.",
                },
                {
                  title: "Trust Building",
                  desc: "User and stakeholder feedback highlighted the importance of testimonials in making the platform feel more trustworthy and easier to understand for first-time visitors.",
                },
                {
                  title: "Page Consistency",
                  desc: "Supporting pages needed stronger visual and communication consistency with the homepage.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 md:p-6 border border-[#eeeeee]"
                >
                  <p className="text-sm text-[#777777] mb-3">0{index + 1}</p>

                  <h3 className="text-lg md:text-xl font-medium text-[#242726] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base leading-7 text-[#555555]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left */}
            <div>
              <p className="text-sm text-[#777777] mb-2">Challenges</p>

              <h2 className="text-2xl md:text-3xl font-medium leading-tight text-[#242726]">
                Aligning UX clarity with marketing communication
              </h2>
            </div>

            {/* Right */}
            <div className="md:col-span-2 space-y-6">
              {/* Highlight */}
              <div className="pl-5">
                <p className="text-lg md:text-xl leading-8 text-[#444444]">
                  The challenge wasn’t only improving the UI — it was deciding
                  how information should be communicated more clearly while
                  maintaining the platform’s existing brand and marketing voice.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#f8f8f8] rounded-2xl p-5">
                  <p className="text-sm text-[#777777] mb-2">Collaboration</p>

                  <p className="text-base leading-7 text-[#444444]">
                    Worked closely with the marketing team to refine messaging,
                    testimonials, and homepage communication.
                  </p>
                </div>

                <div className="bg-[#f8f8f8] rounded-2xl p-5">
                  <p className="text-sm text-[#777777] mb-2">
                    Communication Focus
                  </p>

                  <p className="text-base leading-7 text-[#444444]">
                    Prioritized trust-building, onboarding clarity, and
                    user-friendly language for parents and educational
                    audiences.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Design Improvements */}
          <section>
            <div className="mb-14">
              <p className="text-sm text-[#777777] mb-3">Design Improvements</p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#242726] leading-tight">
                Key areas I improved
              </h2>
            </div>

            <div className="space-y-28">
              {/* 01 CTA Clarity */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f5f5] flex items-center justify-center mb-6 text-sm font-medium">
                    01
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726] leading-tight">
                    CTA Clarity
                  </h3>

                  <p className="text-lg leading-8 text-[#555555]">
                    Unified the hero section CTA messaging to reduce decision
                    friction and create a clearer conversion path for first-time
                    visitors.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="">
                    <Lottie
                      animationData={Chatstat_CTA}
                      delay={5000}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="mt-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                    <p className="text-xs uppercase tracking-wide text-[#777777] mb-2">
                      UX Decision
                    </p>

                    <h4 className="text-base md:text-lg font-medium text-[#242726] mb-2">
                      Unified CTA messaging
                    </h4>

                    <p className="text-sm leading-6 text-[#555555]">
                      Updated the homepage CTA wording to create a more
                      consistent onboarding flow. “Get Started” and “Sign Up”
                      were revised into clearer trial-focused actions such as
                      “Start Your Free Trial” and “Try It Free.”
                    </p>
                  </div>
                </div>
              </div>

              {/* 02 Feature Communication & Visibility */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div
                    className="relative overflow-hidden rounded-3xl bg-[#fafafa]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      src={Chatstat_Feature}
                      alt="Chatstat feature communication improvement"
                      className="w-full h-auto object-cover"
                    />
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 80,
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : 80,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      className="absolute top-4 right-4 md:top-6 md:right-6 max-w-[300px] bg-[#242726]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10"
                    >
                      <p className="text-xs uppercase tracking-wide text-[#9ca3af] mb-2">
                        Annotation
                      </p>

                      <h4 className="text-base md:text-lg font-medium text-white mb-2">
                        Clearer feature grouping
                      </h4>

                      <p className="text-sm leading-6 text-white/80">
                        Grouped product features into scannable sections and
                        surfaced key safety-related content earlier in the
                        homepage hierarchy.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="lg:col-span-4 order-1 lg:order-2">
                  <div className="w-12 h-12 rounded-full bg-[#f6f5f5] flex items-center justify-center mb-6 text-sm font-medium">
                    02
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726] leading-tight">
                    Feature Communication & Visibility
                  </h3>

                  <p className="text-lg leading-8 text-[#555555]">
                    Reorganized homepage features into clearer content groupings
                    to improve scanability and help users understand Chatstat’s
                    core value more quickly.
                  </p>
                </div>
              </div>

              {/* 03 Trust Building Through Testimonials */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-full bg-[#f6f5f5] flex items-center justify-center mb-6 text-sm font-medium">
                    03
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726] leading-tight">
                    Trust Building Through Testimonials
                  </h3>

                  <p className="text-lg leading-8 text-[#555555]">
                    Collaborated with the marketing team to transform parent
                    interview insights into more authentic, relatable, and
                    trust-focused homepage messaging.
                  </p>
                </div>

                <div className="lg:col-span-8 ">
                  <div className="rounded-3xl border border-[#eeeeee] text-black p-4 md:p-8">
                    <p className="text-sm text-[#111111] mb-5">
                      Trust Building Example
                    </p>

                    <blockquote className="text-lg md:text-xl leading-relaxed font-medium mb-8 text-[#555555]">
                      “Chatstat has been a game-changer for my family’s online
                      safety. Its AI flags risks, helping me talk openly with my
                      kids and feel confident they’re protected.”
                    </blockquote>
                    <div className="flex">
                      <img
                        className="round-xl mr-3"
                        src={Chatstat_avatar1}
                      ></img>
                      <div>
                        <p className="text-black/70">Oliver</p>
                        <p>Father of two kids</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-[#eeeeee] text-black p-4 md:p-8 mt-4">
                    <p className="text-sm text-[#111111] mb-5">
                      Trust Building Example
                    </p>

                    <blockquote className="text-lg md:text-xl leading-relaxed font-medium mb-8 text-[#555555]">
                      “Chatstat has been a game-changer for my family’s online
                      safety. Its AI flags risks, helping me talk openly with my
                      kids and feel confident they’re protected.”
                    </blockquote>
                    <div className="flex">
                      <img
                        className="round-xl mr-3"
                        src={Chatstat_avatar2}
                      ></img>
                      <div>
                        <p className="text-black/70">Jessica, Nurses</p>
                        <p>Mother of one</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 04 FAQ & Page Consistency */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-8 order-2 lg:order-1">
                  <div
                    className="relative overflow-hidden rounded-3xl border border-[#eeeeee] bg-[#fafafa]"
                    onMouseEnter={() => setFaqHovered(true)}
                    onMouseLeave={() => setFaqHovered(false)}
                  >
                    <motion.img
                      src={Chatstat_FAQ}
                      alt="Chatstat FAQ layout improvement"
                      animate={{
                        scale: faqHovered ? 1.02 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="w-full h-auto object-cover"
                    />

                    <motion.div
                      initial={{ opacity: 0, x: -80 }}
                      animate={{
                        opacity: faqHovered ? 1 : 0,
                        x: faqHovered ? 0 : -80,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50"
                    >
                      <p className="text-xs uppercase tracking-wide text-[#777777] mb-2">
                        UX Pattern
                      </p>

                      <h4 className="text-base md:text-lg font-medium text-[#242726] mb-2">
                        Familiar Q&A layout
                      </h4>

                      <p className="text-sm leading-6 text-[#555555]">
                        Improved readability by using a more familiar
                        question-and-answer structure.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="lg:col-span-4 order-1 lg:order-2">
                  <div className="w-12 h-12 rounded-full bg-[#f6f5f5] flex items-center justify-center mb-6 text-sm font-medium">
                    04
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726] leading-tight">
                    FAQ & Page Consistency
                  </h3>

                  <p className="text-lg leading-8 text-[#555555]">
                    Redesigned the FAQ into a familiar question-and-answer
                    layout and improved visual consistency across supporting
                    pages.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Example
          <section className="bg-[#242726] text-white rounded-3xl p-6 sm:p-8 md:p-12 ">
            <p className="text-sm text-white/60 mb-4">Trust Building Example</p>

            <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium mb-6">
              “Chatstat has been a game-changer for my family’s online safety.
              Its AI flags risks, helping me talk openly with my kids and feel
              confident they’re protected.”
            </blockquote>

            <p className="text-white/70">— Jessica, mother of two</p>
          </section> */}

          {/* Outcome */}
          <section className="border-t border-[#eeeeee] pt-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left */}
              <div className="lg:col-span-4">
                <p className="text-sm text-[#777777] mb-3">Project Impact</p>

                <h2 className="text-2xl md:text-3xl font-medium leading-tight text-[#242726]">
                  Creating a clearer and more trustworthy homepage experience
                </h2>
              </div>

              {/* Right */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Improved CTA clarity",
                    "Clearer feature communication",
                    "Better content scanability",
                    "Stronger trust-focused messaging",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#f8f8f8] rounded-2xl px-5 py-5"
                    >
                      <p className="text-base md:text-lg text-[#242726]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-base md:text-lg leading-8 text-[#555555] mt-8">
                  Although the redesign direction was not fully deployed during
                  the project timeline, it helped align stakeholders around a
                  clearer communication strategy and established a stronger
                  foundation for future homepage iterations.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="border-t border-[#eeeeee] pt-12">
            <p className="text-sm text-[#777777] mb-2">Reflection</p>

            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726]">
              What I learned
            </h2>

            <p className="text-base md:text-lg leading-8 text-[#444444] max-w-4xl">
              This project helped me better understand how small communication
              and hierarchy decisions can significantly influence user trust and
              onboarding clarity. Rather than focusing only on visual
              improvements, this experience strengthened my understanding of how
              content structure, trust signals, and decision flow shape the
              overall product experience.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail_Chatstat;
