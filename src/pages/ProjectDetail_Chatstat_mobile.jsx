import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import Lottie from "lottie-react";
import Chatstat_mobile_Banner from "../assets/img/GIF/Onboarding_mobile.json";
import Chatstat_1 from "../assets/img/GIF/Chatstat_1.json";
import Chatstat_2 from "../assets/img/GIF/Chatstat_2.json";
import Chatstat_3 from "../assets/img/GIF/Chatstat_3.json";
import Chatstat_4 from "../assets/img/GIF/Chatstat_4.json";
import DelayedLoopLottie from "../components/DelayedLoopLottie";
import {
  ChatTeardropDotsIcon,
  NotepadIcon,
  Lightbulb,
  ShieldCheck,
  CreditCard,
  Asterisk,
  Target,
  ArrowUpRight, House
} from "@phosphor-icons/react";
import CHatstat_affinity from "../assets/img/Affinity_mapping.png";
import CHatstat_userflow from "../assets/img/chatstat_userflow.jpg";

const ProjectDetail_Chatstat_mobile = () => {
  const location = useLocation();
  const heroLottieRef = useRef();
  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    title: "Chatstat Mobile",
    platform: ["Mobile App", "Onboarding Flow"],
    img: Chatstat_mobile_Banner,
    details: {
      overview: {
        description:
          "Designed an onboarding setup flow for new users to better understand and configure the Chatstat platform.",
      },
    },
  };
  console.log("location.state:", location.state);
  console.log("project:", project);
  console.log("project.platform:", project.platform);

  return (
    <div className="min-h-screen pt-24 pb-16 text-[#111111] ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-[120px]"
        >
          {/* Project Header */}
          <div>
            <p className="font-normal text-[#242726]  mb-2 text-center">
              Chatstat
            </p>
            <h1 className="text-3xl md:text-4xl font-medium mb-6 text-center text-[#242726]">
              Chatstat App: onboarding setup
            </h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.platform.map((item, index) => (
                <span
                  key={index}
                  className="px-6 py-2 text-lg font-normal bg-[#f6f5f5] rounded-full"
                  tabIndex={0}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                01. Overview
              </h5>
              <p className="font-regular text-base md:text-lg  text-[#444444] mb-8 text-center mt-5 mx-5 md:mx-30">
                {project.details.overview.description}
              </p>
            </div>
            <div className="relative rounded-lg mb-8">
              {/* 左半邊線條（往左延伸並斜向下） */}
              {/* <motion.div
                initial={{ x: "0%", width: "0px" }}
                whileInView={{ x: `calc(-45vw - 200px)`, width: "50vw" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2"
                style={{
                  height: "8px",
                  background: "#000000",
                  transform: "rotate(-10deg)",
                  transformOrigin: "right center",
                  rotate: -10,
                }}
              /> */}

              {/* 右半邊線條（往右延伸並斜向上） */}
              {/* <motion.div
                initial={{ x: "0%", width: "0px" }}
                whileInView={{ x: `calc(2vw)`, width: "50vw" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2"
                style={{
                  height: "8px",
                  background: "#000000",
                  transform: "rotate(10deg)",
                  transformOrigin: "left center",
                  rotate: -10,
                }}
              /> */}

              {/* Lottie 容器（動態調整邊框） */}
              <div className="relative z-30 overflow-hidden rounded-lg flex items-center justify-center">
                {project.img && (
                  <Lottie
                    lottieRef={heroLottieRef}
                    animationData={Chatstat_mobile_Banner}
                    loop={false}
                    style={{ width: "120%", height: "80%" }}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
                  />
                )}
              </div>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "My Role",
                    content: ["UI Designer", "UX Research"],
                  },
                  {
                    title: "Team",
                    content: ["UI & UX Designer", "Mobile Developers"],
                  },
                  {
                    title: "Duration",
                    content: ["March - Jun 2025"],
                  },
                  {
                    title: "Tools",
                    content: ["Figma", "Visual Studio", "Git", "Miro"],
                  },
                ].map((col, colIdx) => (
                  <div key={colIdx} className="relative px-4 py-4">
                    {/* 垂直分隔線 */}

                    <h6 className="font-semibold mb-4 text-lg">{col.title}</h6>
                    {Array.isArray(col.content) ? (
                      col.content.map((item, idx) => (
                        <p key={idx} className="mt-1 text-[#444444] text-lg">
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="mt-1 text-[#444444]">{col.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border-2 p-5 border-gray-200 rounded-md">
                  <p className="text-2xl font-semibold text-[#444444]">UX research</p>
                  <p className="mt-4 text-base md:text-lg  text-[#444444]">
                    - Conducted think-aloud and task-based usability testing
                    with first-time users
                  </p>
                  <p className="mt-2 text-base md:text-lg  text-[#444444]">
                    - Identified onboarding hesitation points and setup
                    confusion
                  </p>
                  <p className="mt-2 text-base md:text-lg  text-[#444444]">
                    - Mapped onboarding journeys and activation flow using Miro
                    workshops
                  </p>
                </div>
                <div className="border-2 p-5 border-gray-200 rounded-md">
                  <p className="text-2xl font-semibold text-[#444444] ">Outcome</p>
                  <p className="mt-4 text-base md:text-lg text-[#444444]">
                    - Improved clarity around onboarding steps and product value
                  </p>
                  <p className="mt-2 text-base md:text-lg  text-[#444444]">
                    - Reduced hesitation during social account connection
                  </p>
                  <p className="mt-2 text-base md:text-lg text-[#444444]">
                    - Helped users better understand plan differences and
                    platform capabilities
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                02. Qualitative Feedback
              </h5>

              <div className=" ">
                <p className="font-bold text-2xl text-[#444444] mb-4 mt-10 mx-5 p-5 md:p-5 lg:p-0">
                  What We Did
                </p>
                <div className="m-5 bg-[#d9f9d9]  rounded-lg flex p-5 md:p-10">
                  <NotepadIcon
                    size={30}
                    color="#027C2A"
                    className="mr-2 shrink-0"
                  />
                  <p className="text-base md:text-lg mx-0 md:mx-5  text-[#027C2A] ">
                    To better understand onboarding behaviour and setup
                    friction, we conducted think-aloud usability testing,
                    task-based testing, and user interviews with first-time
                    users after sign up.
                  </p>
                </div>
                <div className="m-5 bg-[#d9f9d9] p-5 md:p-10 rounded-lg flex">
                  <NotepadIcon
                    size={30}
                    color="#027C2A"
                    className="mr-2 shrink-0"
                  />
                  <p className="text-base md:text-lg mx-0 md:mx-5 text-[#027C2A]">
                    Participants were asked to complete onboarding tasks such as
                    creating a child profile, connecting social accounts, and
                    exploring available plans while verbalising their thoughts
                    and decision-making process throughout the setup flow.
                  </p>
                </div>

                <div className="m-5 bg-[#d9f9d9] p-5 md:p-10 rounded-lg flex">
                  <NotepadIcon
                    size={30}
                    color="#027C2A"
                    className="mr-2 shrink-0"
                  />
                  <p className="text-base md:text-lg mx-5 md:mx-0 text-[#027C2A]">
                    We also observed moments of hesitation, navigation
                    confusion, skipped steps, and uncertainty during onboarding
                    progression.
                  </p>
                </div>
              </div>

              {/* User Quotes */}
              <p className="font-bold text-2xl text-[#444444] mb-4 mt-10 mx-5 p-5 md:p-5 lg:p-0">
                User Quotes
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="m-5 bg-[#F1FEED] p-10 rounded-lg flex border-2 border-[#027C2A]">
                  <ChatTeardropDotsIcon
                    size={32}
                    color="#027C2A"
                    className="mr-2"
                  />
                  <p className="text-xl text-[#027C2A]">
                    “What does this app actually do?”
                  </p>
                </div>
                <div className="m-5 bg-[#F1FEED] p-10 rounded-lg flex border-2 border-[#027C2A]">
                  <ChatTeardropDotsIcon
                    size={32}
                    color="#027C2A"
                    className="mr-2"
                  />
                  <p className="text-xl text-[#027C2A]">
                    “How do I need to add my child first?”
                  </p>
                </div>
                <div className="m-5 bg-[#F1FEED] p-10 rounded-lg flex border-2 border-[#027C2A]">
                  <ChatTeardropDotsIcon
                    size={32}
                    color="#027C2A"
                    className="mr-2"
                  />
                  <p className="text-xl text-[#027C2A]">
                    “I’m not sure what I’m supposed to do next.”
                  </p>
                </div>
                <div className="m-5 bg-[#F1FEED] p-10 rounded-lg flex border-2 border-[#027C2A]">
                  <ChatTeardropDotsIcon
                    size={32}
                    color="#027C2A"
                    className="mr-2"
                  />
                  <p className="text-xl text-[#027C2A]">
                    “How do I setup my child social account?”
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-2xl text-[#444444] mb-4 mt-10 mx-5 p-5 md:p-5 lg:p-0">
                User Insights
              </p>

              <p className="mx-5  p-5 md:p-5 lg:p-0 text-[#444444] text-base md:text-lg ">
                To better understand how first-time users navigated the app
                after sign up, we conducted think-aloud testing, task-based
                usability testing, and user interviews to observe how users
                interacted with the homepage and attempted to begin setup for
                the first time.
              </p>

              <div className="mt-10 p-5 md:p-5 lg:p-5">
                <p className="text-[#027C2A] font-semibold text-2xl mb-4">
                  Key Research
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-[#F4FBF4] border border-[#CDEECD] rounded-2xl p-6 ">
                    <Lightbulb
                      size={22}
                      color="#027C2A"
                      className="shrink-0 mt-1"
                    />

                    <p className="text-xl text-[#027C2A]">
                      Users needed clearer onboarding guidance between account
                      creation and first-time activation.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-[#F4FBF4] border border-[#CDEECD] rounded-2xl p-6 ">
                    <ShieldCheck
                      size={22}
                      color="#027C2A"
                      className="shrink-0 mt-1"
                    />

                    <p className="text-xl text-[#027C2A]">
                      Users needed clearer guidance during social account
                      connection.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-[#F4FBF4] border border-[#CDEECD] rounded-2xl p-6 ">
                    <CreditCard
                      size={22}
                      color="#027C2A"
                      className="shrink-0 mt-1"
                    />

                    <p className="text-xl text-[#027C2A]">
                      Users needed clearer upgrade guidance when reaching
                      account connection limitations.
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-[#444444] font-semibold text-xl mb-3">
                      Supporting Observations
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Asterisk
                          size={24}
                          color="#080808"
                          className="shrink-0 mt-1"
                        />

                        <p className="text-xl text-[#444444] font-medium">
                          5 out of 7 participants paused after reaching the
                          homepage and were unsure how to begin setup.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 ">
                        <Asterisk
                          size={24}
                          color="#080808"
                          className="shrink-0 mt-1"
                        />

                        <p className="text-xl text-[#444444] font-medium">
                          Several participants hesitated during social account
                          connection and reread privacy-related information
                          before continuing setup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={CHatstat_affinity}
              alt="Affinity Mapping"
              className="w-full object-fit rounded-xl mt-0 md:mt-4 p-5 md:p-15"
              loading="lazy"
              tabIndex={0}
            />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                03. Problem Definition
              </h5>
              <p className="text-[#444444] text-lg md:text-xl  mt-10 p-5 md:p-5 lg:p-0">
                Although users were able to successfully create accounts, many
                first-time users struggled to understand how to begin setup and
                start using Chatstat APP after entering the homepage.
              </p>
              <p className="text-lg md:text-xl text-[#444444] mt-5 p-5 md:p-5 lg:p-0">
                Without clear setup guidance, users often became uncertain about
                what to do next, how to add their child, or how to confidently
                connect social accounts.
              </p>
            </div>
            <div className="space-y-4 p-5 mt-10 md:p-5 lg:p-0">
              <div className="bg-[#FFF6F6] border border-[#F2CACA] rounded-2xl p-6">
                <p className="text-[#C53030] font-semibold text-xl mb-2">
                  Unclear First-Time Activation
                </p>

                <p className="text-lg text-[#111111]">
                  Users lacked clear guidance after sign up and were unsure how
                  to begin setting up Chatstat from the homepage.
                </p>
              </div>

              <div className="bg-[#FFF6F6] border border-[#F2CACA] rounded-2xl p-6">
                <p className="text-[#C53030] font-semibold text-xl mb-2">
                  Confusing Social Account Setup
                </p>

                <p className="text-lg text-[#111111]">
                  Users were unsure how to correctly connect their child’s
                  social accounts during setup, especially when entering
                  usernames and understanding public account requirements.
                </p>
              </div>

              <div className="bg-[#FFF6F6] border border-[#F2CACA] rounded-2xl p-6">
                <p className="text-[#C53030] font-semibold text-xl mb-2">
                  Confusing Account & Plan Limitations
                </p>

                <p className="text-lg text-[#111111]">
                  Users struggled to understand account limitations and plan
                  differences when attempting to connect additional accounts.
                </p>
              </div>

              <div>
                <p className="text-lg text-[#666666] mt-8 mb-2">
                  Existing onboarding journey and friction points identified
                  during usability testing.
                </p>
              </div>
              <img
                src={CHatstat_userflow}
                alt="Userflow"
                className="w-full object-contain rounded-xl mt-0 md:mt-4"
                loading="lazy"
                tabIndex={0}
              />
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                04. Hypothesis / Project Goals
              </h5>
              <p className="text-lg md:text-xl text-[#444444]  mt-10 p-5 md:p-5 lg:p-0">
                Based on the research findings and onboarding friction observed
                during testing, we explored how a more guided setup experience
                could help first-time users better understand Chatstat and
                complete onboarding more confidently.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-5 md:p-5 lg:p-0">
              <div className="rounded-2xl p-6 bg-[#FAFAFA] border border-[#EEEEEE]">
                <div className="flex items-center gap-3 mb-2 ">
                  <Target size={22} color="#027C2A" />

                  <p className="text-[#027C2A] font-semibold text-xl">
                    Improve First-Time Activation
                  </p>
                </div>

                <p className="text-lg text-[#111111]">
                  Help users understand how to begin setup immediately after
                  sign up.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-[#FAFAFA] border border-[#EEEEEE]">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={22} color="#027C2A" />
                  <p className="text-[#027C2A] font-semibold text-xl mb-2">
                    Reduce Setup Hesitation
                  </p>
                </div>
                <p className="text-lg text-[#111111]">
                  Build trust and confidence during social account connection.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-[#FAFAFA] border border-[#EEEEEE]">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={22} color="#027C2A" />
                  <p className="text-[#027C2A] font-semibold text-xl mb-2">
                    Simplify Account Expansion
                  </p>
                </div>
                <p className="text-lg text-[#111111]">
                  Make account limitations and upgrade paths easier to
                  understand.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-[#FAFAFA] border border-[#EEEEEE]">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={22} color="#027C2A" />
                  <p className="text-[#027C2A] font-semibold text-xl mb-2">
                    Create a More Guided Experience
                  </p>
                </div>
                <p className="text-lg text-[#111111]">
                  Introduce onboarding progressively to reduce confusion and
                  cognitive overload.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                05. Design Solutions
              </h5>

              <p className="text-lg md:text-xl text-[#444444] mt-6 md:mt-10  p-5 md:p-5 lg:p-0">
                Based on the research findings, we redesigned the onboarding
                experience to guide users progressively through setup while
                reducing confusion during account creation, social account
                connection, and plan selection.
              </p>
            </div>

            <div className="space-y-32 mt-12 p-5 md:p-5 lg:p-0">
              {[
                {
                  number: "01",
                  title: "Guided Setup Flow",
                  problem:
                    "Users were unsure how to begin setup after sign up.",
                  solution:
                    "We introduced a step-by-step onboarding setup flow to guide users progressively instead of directing them straight to the homepage.",
                  improvements: [
                    "Guided users from account creation to setup",
                    "Reduced confusion after sign up",
                    "Made the next action clearer",
                  ],
                  image: Chatstat_1,
                  delay: 3000,
                },

                {
                  number: "02",
                  title: "Goal Selection",
                  problem:
                    "Users struggled to understand what Chatstat could help with during early setup.",
                  solution:
                    "We introduced personalised onboarding goals to help users understand platform capabilities while tailoring the setup experience to their needs.",
                  improvements: [
                    "Explained Chatstat features through user goals",
                    "Reduced cognitive overload",
                    "Helped users connect features to real concerns",
                    "Helped identify which wellbeing and safety concerns users cared about most for future product improvements",
                  ],
                  image: Chatstat_2,
                  delay: 4000,
                },

                {
                  number: "03",
                  title: "Social Account Setup Guidance",
                  problem:
                    "Users struggled to understand how to successfully connect social accounts during onboarding.",
                  solution:
                    "We added clearer setup guidance, including public account reminders and username support, to reduce setup confusion during social account connection.",
                  improvements: [
                    "Explained public account requirements",
                    "Added username helper guidance",
                    "Reduced setup confusion",
                    "Made account connection easier to complete",
                  ],
                  image: Chatstat_3,
                  delay: 4000,
                },

                {
                  number: "04",
                  title: "Plan Visibility During Onboarding",
                  problem:
                    "Users struggled to find plan information from the homepage and only discovered upgrade options after attempting to add more social accounts.",
                  solution:
                    "We added a dedicated plan comparison step into the onboarding setup, allowing users to understand available plans before connecting social accounts to their child profile.",
                  improvements: [
                    "Made plan information easier to access during onboarding",
                    "Helped users understand account limits before adding social accounts",
                    "Reduced the need to search for plan details from the homepage or settings",
                    "Introduced upgrade options earlier without interrupting the setup flow",
                  ],
                  image: Chatstat_4,
                  delay: 6000,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* LEFT CONTENT */}
                  <div>
                    <p className="text-[#027C2A] font-semibold text-xl mb-2">
                      {item.number}
                    </p>

                    <h6 className="text-3xl font-semibold text-[#111111] mb-6">
                      {item.title}
                    </h6>

                    {/* Problem
        <div className="mb-6">
          <p className="text-[#C53030] font-semibold text-xl mb-2">
            Problem
          </p>

          <p className="text-xl text-[#111111] leading-relaxed">
            {item.problem}
          </p>
        </div> */}

                    {/* Solution */}
                    <div className="mb-6">
                      <p className="text-[#027C2A] font-semibold text-xl mb-2">
                        Solution
                      </p>

                      <p className="text-xl text-[#444444] font-medium leading-relaxed">
                        {item.solution}
                      </p>
                    </div>

                    {/* Key Improvements */}
                    <div>
                      <p className="text-[#242726] font-semibold text-xl mb-4">
                        Key Improvements
                      </p>

                      <div className="space-y-3">
                        {item.improvements.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Asterisk
                              size={20}
                              color="#027C2A"
                              className="shrink-0 mt-1"
                            />

                            <p className="text-lg text-[#444444] font-medium">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT VISUAL */}
                  <div className="rounded-2xl overflow-hidden flex justify-center p-8 ">
                    <DelayedLoopLottie
                      animationData={item.image}
                      delay={item.delay}
                      width="100%"
                      height="100%"
                      className="shadow-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <div className="mt-10 bg-[#242726] text-white rounded-3xl p-6 sm:p-8 md:p-12 m-5 md:m-5">
    <h5 className="text-white/60  text-4xl md:text-5xl text-center font-semibold">
      06. Reflection
    </h5>

    <div className="mt-10 ">
      <blockquote className="text-xl text-white/60  font-medium leading-relaxed pt-5 md:pt-5 lg:pt-0 px-5 md:px-5 lg:px-0">
        This project showed how important onboarding is in helping users
        confidently understand and activate a product for the first time.
      </blockquote>

      <blockquote className="text-xl text-white/60  font-medium leading-relaxed pt-5 mt-2 md:pt-5 lg:pt-0 px-5 md:px-5 lg:px-0">
        Through usability testing and affinity mapping, I learned that reducing
        setup uncertainty and guiding users progressively can significantly
        improve the onboarding experience.
      </blockquote>

      <blockquote className="text-xl text-white/60  font-medium leading-relaxed pt-5 mt-2 md:pt-5 lg:pt-0 px-5 md:px-5 lg:px-0">
        In future iterations, I would further explore more personalised
        onboarding experiences based on different parent needs and behaviours.
      </blockquote>
    </div>
  </div>
</motion.section>
        </motion.div>

        <button
  onClick={() => navigate("/")}
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111111] text-white px-5 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
>
  <House size={20} weight="fill" />

  <span className="text-base font-medium">
    Back Home
  </span>
</button>
      </div>
    </div>
  );
};

export default ProjectDetail_Chatstat_mobile;
