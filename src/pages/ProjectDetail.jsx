"use client";

import React, { useEffect, useState, useRef, use } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Roles } from "../components/Role";
import Lottie from "lottie-react";
import projectsData from "./ProjectData.js"; // 匯入 projectsData
import ChairIcon from "@mui/icons-material/Chair";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Animation from "../assets/img/GIF/Animation.json";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ExtensionIcon from "@mui/icons-material/Extension";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import TurnedInIcon from "@mui/icons-material/TurnedIn";
function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const myRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const iconList = [
    <LightbulbIcon fontSize="large" />,
    <PsychologyIcon fontSize="large" />,
    <GroupIcon fontSize="large" />,
    <EmojiObjectsIcon fontSize="large" />,
  ];

  const principleIcons = [
    <AutoAwesomeIcon fontSize="large" />,
    <DesignServicesIcon fontSize="large" />,
    <InsightsIcon fontSize="large" />,
    <EngineeringIcon fontSize="large" />,
    <TipsAndUpdatesIcon fontSize="large" />,
    <ExtensionIcon fontSize="large" />,
  ];

  // Get project from location state or fallback to finding it in the data
  const project = projectsData.find((p) => p.id === Number.parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("ID:", id);
    console.log("Project from Data:", project);
  }, [id, project]);

  // Handle section navigation
  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle next project navigation
  const handleNextProject = () => {
    const currentId = Number.parseInt(id);
    const nextId = currentId < projectsData.length ? currentId + 1 : 1;
    navigate(`/project/${nextId}`); // 直接導航，不傳 state
  };

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-[#111111]">
        <div className="text-center">
          <h1 className="text-3xl font-neue-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black hover:bg-purple-500 hover:text-white transition-colors rounded-full px-6 py-3 text-sm font-medium"
            tabIndex={0}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-[#111111]">
        <div className="text-center">
          <h1 className="text-3xl font-neue-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black hover:bg-purple-500 hover:text-white transition-colors rounded-full px-6 py-3 text-sm font-medium"
            tabIndex={0}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Animation variants for sections
  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger child elements by 0.2 seconds
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const emojis = ["🧭", "🔍", "🧠", "📝", "🎨", "🚀"];

  const [isExpanded, setIsExpanded] = useState(false);
  const iconColors = [
    "text-red-300",
    "text-purple-300",
    "text-green-300",
    "text-blue-300",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 text-[#111111] bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-[100px]"
        >
          {/* Project Header */}
          <div>
            <p className="font-neue-medium text-[#111111]  mb-2 text-center">
              {project.client || "Personal Project"}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text[#111111]">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.platform.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-2 text-lg font-medium bg-[#e9ecf1] rounded-full"
                  tabIndex={0}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 01. Overview */}
          <motion.section
            id="overview"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-des text-center font-bold">
                01. Overview
              </h5>
              <p className="font-regular text-base md:text-xl text-[#111111] mb-8 text-center mt-5 mx-5 md:mx-30">
                {project.details.overview.description}
              </p>
            </div>
            {project.img && (
              <div className="bg-[#e9ecf1] rounded-xl overflow-hidden mb-8 border-2">
                {project.img && (
                  <div>
                    {console.log("Animation Data:", project.img)}
                    <Lottie
                      animationData={project.img}
                      loop
                      className="w-full h-auto object-cover"
                      tabIndex={0}
                    />
                  </div>
                )}
              </div>
            )}
          </motion.section>

          {/* 02. Role */}
          <motion.section
            id="role"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                  <h3 className="font-semibold text-des text-[#666666]">
                    02. Role
                  </h3>
                  {project.details.role.description.subheading && (
                    <h4 className="text-4xl md:text-6xl font-bold mt-4 ">
                      {project.details.role.description.subheading}
                    </h4>
                  )}
                  <p className="text-[#111111] text-base md:text-lg leading-[1.5] mt-8 pr-5 md:pr-20">
                    {project.details.role.description.main}
                  </p>
                </div>

                {project.details.role.img && (
                  <img
                    src={project.details.role.img}
                    alt="Role in Project"
                    className="w-full object-fit rounded-xl mt-0 md:mt-4 bg-[#e9ecf1] p-5 md:p-15"
                    tabIndex={0}
                  />
                )}
              </div>
            </div>
          </motion.section>

          {/* 03. Key Challenges */}
          <motion.section
            id="key-challenges"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-semibold text-des text-[#666666] text-center">
              03. Key Challenges
            </h3>
            <div className="flex flex-col gap-20 mt-5">
              {project.details.key_challenges?.challenges?.map(
                (challenge, index) => (
                  <div key={index} className="space-y-[56px]">
                    <h4 className="text-4xl md:text-6xl font-bold text-center">
                      {challenge.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-xl font-semibold mt-5">
                          Challenge
                        </h5>
                        <p className="text-[#111111] mt-4">
                          {challenge.challenge}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold mt-5">Solution</h5>
                        {typeof challenge.solution === "string" ? (
                          <p className="text-[#111111] mt-4">
                            {challenge.solution}
                          </p>
                        ) : (
                          <p className="text-[#111111] mt-4">
                            {challenge.solution.main}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* 將 h6 和 ul li 移出 grid 並居中 */}
                    {challenge.solution &&
                      typeof challenge.solution !== "string" && (
                        <div className="text-center mt-10 bg-[#e9ecf1] p-2 md:p-12 rounded-lg">
                          {challenge.solution.subheading && (
                            <h6 className="text-xl font-medium mt-4">
                              {challenge.solution.subheading}
                            </h6>
                          )}
                          {challenge.solution.principles && (
                            <ul className="mt-4 text-[#111111] pl-0 flex flex-wrap justify-center mt-5">
                              {challenge.solution.principles.map(
                                (principle, idx) => {
                                  // 定義一組不同的圖標（這裡使用 Unicode 表情符號作為範例）
                                  const icons = [
                                    "🌟",
                                    "🚀",
                                    "💡",
                                    "🔧",
                                    "📋",
                                    "🎯",
                                  ];
                                  const icon = icons[idx % icons.length]; // 循環使用圖標
                                  return (
                                    <li
                                      key={idx}
                                      className={`flex items-start mt-2 ${
                                        index === 1
                                          ? "list-none w-full sm:w-1/2 lg:w-1/3"
                                          : "list-disc pl-5 w-full"
                                      } px-2 box-border`}
                                    >
                                      {index === 1 && (
                                        <span className="mr-2 text-[#111111] text-lg">
                                          {icon}
                                        </span>
                                      )}
                                      <span className="text-left">
                                        {principle}
                                      </span>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          )}
                        </div>
                      )}
                    {index === 0 && challenge.img && (
                      <div className="flex bg-[#e9ecf1] justify-center items-center rounded-xl">
                        <img
                          src={challenge.img}
                          alt={challenge.title}
                          className="w-2/3 md:w-1/2 object-fit rounded-xl mt-4 p-5 md:p-15"
                          tabIndex={0}
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.section>
          {/* 04. Process */}
          <motion.section
            id="process"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="">
              <h3 className="font-semibold text-des text-[#666666] text-center">
                04. Process
              </h3>
              <div>
                {project.details.process.description.subheading && (
                  <h4 className="text-4xl md:text-6xl font-bold text-center m-5">
                    {project.details.process.description.subheading}
                  </h4>
                )}
                <p className="text-[#111111] text-center text-lg ">
                  {project.details.process.description.main}
                </p>
              </div>
            </div>
            {project.details.process.challenges && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                  <h5 className="text-2xl font-bold">Challenges</h5>
                  {project.details.process.challenges.map(
                    (challenge, index) => (
                      <div key={index} className="mb-4 pr-5 md:pt-0 pt-5">
                        <h6 className="text-xl font-bold">{challenge.title}</h6>
                        <p className="text-[#111111] mt-3">
                          {challenge.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {project.details.process.solution && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                  <h5 className="text-2xl font-bold">Solution</h5>
                  <div className="col-span-2">
                    <p className="text-[#111111] md:pt-0 pt-5">
                      {project.details.process.solution.main}
                    </p>
                    {project.details.process.solution.subheading && (
                      <h6 className="text-lg font-neue-medium mt-4">
                        {project.details.process.solution.subheading}
                      </h6>
                    )}
                    {project.details.process.solution.features && (
                      <ul className="list-disc pl-5 mt-4 text-[#111111]">
                        {project.details.process.solution.features.map(
                          (feature, idx) => (
                            <li key={idx} className="mb-2">
                              {feature}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                {project.details.process.solution.img && (
                  <img
                    src={project.details.process.solution.img}
                    alt="Process Solution"
                    className="w-full object-fit rounded-lg mt-4"
                    tabIndex={0}
                  />
                )}
              </div>
            )}
          </motion.section>

          {/* 05. Design Discovery */}
          <motion.section
            id="design-discovery"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="">
              <h3 className="font-semibold text-des text-[#666666] text-center">
                05. Design Discovery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                <div>
                  {project.details.design_discovery.description.subheading && (
                    <h4 className="text-4xl md:text-6xl font-bold text-center md:text-left m-5">
                      {project.details.design_discovery.description.subheading}
                    </h4>
                  )}
                </div>

                <h2 className="text-[#111111] mt-2 md:mt-8 text-lg md:text-xl font-base md:font-base">
                  {project.details.design_discovery.description.main}
                </h2>
              </div>
            </div>
            {project.details.design_discovery.outcomes && (
              <div className="space-y-4 mt-5">
                <div className="">
                  <h5 className="text-2xl font-semibold text-center">
                    UX Outcomes
                  </h5>
                  <div className="space-y-4 mt-6 mx-5 md:mx-20">
                    {project.details.design_discovery.outcomes.map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-[#f3f5f7] p-10 rounded-2xl shadow-sm"
                        >
                          {/* 左邊 emoji 圓圈（小尺寸置中） */}
                          <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 bg-white text-xl">
                            {emojis[idx % emojis.length]}
                          </div>

                          {/* 右邊文字（小尺寸置中，md 時靠左） */}
                          <div className="text-left ">
                            <h6 className="text-base md:text-lg font-semibold">
                              {item.title}
                            </h6>
                            <p className="text-sm md:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            {project.details.design_discovery.insights && (
              <div className="space-y-4">
                <div className="">
                  <div>
                    <h5 className="text-2xl font-semibold text-center">
                      Key Insights
                    </h5>
                  </div>
                  <div className="mt-5 mb-5 pt-4 pb-8 mx-5 md:mx-20 bg-[#F2F4F5] rounded-lg">
                    {project.details.design_discovery.insights.map(
                      (insight, idx) => (
                        <div
                          key={idx}
                          className="relative bg-white  p-8 rounded-lg shadow-lg transition-all duration-300 my-2 mx-5 md:mx-10 gap-5 mt-5"
                        >
                          {/* Icon 放在右上角 */}
                          <div className="absolute -top-1 right-2">
                            <TurnedInIcon
                              className={`${
                                iconColors[idx % iconColors.length]
                              } text-xl`}
                              fontSize="large"
                            />
                          </div>

                          <h6 className="text-base md:text-lg font-medium md:font-semibold pt-2 pb-2 px-5">
                            {insight.title}
                          </h6>

                          {/* 展開動畫區域 */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.ul
                                className=" text-[#111111] pl-5 pr-5 pb-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                {insight.points.map((point, pIdx) => (
                                  <li key={pIdx} className="mb-2">
                                    {point}
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    )}

                    {/* Toggle 按鈕區 */}
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:scale-105 transition-transform"
                        aria-label="Toggle Details"
                      >
                        {isExpanded ? (
                          <KeyboardArrowUpIcon fontSize="medium" />
                        ) : (
                          <KeyboardArrowDownIcon fontSize="medium" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {project.details.design_discovery.hypotheses && (
              <div className="space-y-4">
                <div className="">
                  <div>
                    <h5 className="text-2xl font-semibold text-center">
                      Hypotheses
                    </h5>
                  </div>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 m-5">
                    {project.details.design_discovery.hypotheses.map(
                      (hypothesis, idx) => (
                        <div key={idx} className="mb-4 p-3">
                          <h6 className="text-lg font-semibold">
                            {hypothesis.title}
                          </h6>
                          <p className="text-[#111111]">
                            {hypothesis.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            {project.details.design_discovery.ux_strategy && (
              <div className="space-y-4">
                <div className="">
                  <div>
                    <h5 className="text-2xl font-semibold text-center">
                      UX Strategy
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-5 m-5">
                    {project.details.design_discovery.ux_strategy.map(
                      (strategy, idx) => (
                        <div key={idx} className="mb-4">
                          <h6 className="text-lg font-semibold">
                            {strategy.title}
                          </h6>
                          <p className="text-[#111111]">
                            {strategy.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            {project.details.design_discovery.design_concepts && (
              <div className="space-y-4 mt-20">
                <h5 className="text-4xl md:text-6xl font-bold text-center m-5">
                  Design Concepts
                </h5>
                {project.details.design_discovery.design_concepts.map(
                  (concept, idx) => (
                    <div key={idx} className="mb-4 ">
                      <h6 className="text-xl font-semibold">{concept.title}</h6>
                      <p className="text-[#111111] text-lg">
                        {concept.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            )}
            {(project.details.design_discovery.imgs ||
              project.details.design_discovery.img) && (
              <div className="flex flex-col gap-4 mt-4">
                {project.details.design_discovery.imgs ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.details.design_discovery.imgs.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Design Discovery ${idx + 1}`}
                        className={`w-full object-fit rounded-lg ${
                          project.id === 3 ? "border-4 border-[#4BB0FF]" : ""
                        }`}
                        tabIndex={0}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={project.details.design_discovery.img}
                    alt="Design Discovery"
                    className={`w-full object-cover rounded-lg ${
                      project.id === 3 ? "border-4 border-[#4BB0FF]" : ""
                    }`}
                    tabIndex={0}
                  />
                )}
              </div>
            )}

            {project.details.design_discovery.recommendation && (
              <div className="space-y-4 mt-10">
                <h5 className="text-3xl font-bold text-center">
                  The Recommendation
                </h5>
                <p className="text-[#111111] mx-2 md:mx-15 text-center text-lg">
                  {project.details.design_discovery.recommendation}
                </p>
              </div>
            )}
          </motion.section>

          {/* 06. Design Enhancement */}
          <motion.section
            id="design-enhancement"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="">
              <motion.h3 className="font-semibold text-des text-[#666666] text-center">
                06. Design Enhancement
              </motion.h3>
              <div>
                {project.details.design_enhancement.description.subheading && (
                  <h4 className="text-4xl md:text-6xl font-bold text-center m-5">
                    {project.details.design_enhancement.description.subheading}
                  </h4>
                )}
                <p className="text-[#111111] mx-2 md:mx-15 text-center text-lg">
                  {project.details.design_enhancement.description.main}
                </p>
              </div>
            </div>

            {project.details.design_enhancement.outcomes && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-2xl font-semibold">UX Outcomes</h5>
                  </div>
                  <div className="col-span-2">
                    <ul className="list-disc pl-5 mt-4 text-[#111111]">
                      {project.details.design_enhancement.outcomes.map(
                        (outcome, idx) => (
                          <li key={idx} className="mb-2 font-semibold text-lg">
                            {outcome}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {project.details.design_enhancement.ux_psychology && (
              <div className="space-y-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-2xl font-semibold">
                      UX Psychology Toolkit
                    </h5>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-3  gap-2">
                    {project.details.design_enhancement.ux_psychology.map(
                      (psych, idx) => (
                        <div
                          key={idx}
                          className="mb-4 bg-[#F2F4F7] p-4 rounded-lg"
                        >
                          {iconList[idx % iconList.length]}{" "}
                          {/* Cycles icons if more than icons available */}
                          <h6 className="text-lg font-neue-medium mt-3">
                            {psych.title}
                          </h6>
                          <p className="text-[#111111]">{psych.description}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {project.details.design_enhancement.design_principles && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-2xl font-semibold">
                      Design Principles
                    </h5>
                  </div>
                  <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                    {project.details.design_enhancement.design_principles.map(
                      (principle, idx) => (
                        <div
                          key={idx}
                          className="mb-4 bg-[#C7DFED] p-4 rounded-lg"
                        >
                          {principleIcons[idx % principleIcons.length]}
                          <h6 className="text-lg font-neue-medium mt-3">
                            {principle.title}
                          </h6>
                          <p className="text-[#111111]">
                            {principle.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {project.details.design_enhancement.content_framework && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-2xl font-semibold">
                      {
                        project.details.design_enhancement.content_framework
                          .subheading
                      }
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[#111111]">
                      {
                        project.details.design_enhancement.content_framework
                          .main
                      }
                    </p>
                    {project.details.design_enhancement.content_framework.examples?.map(
                      (exampleGroup, idx) => (
                        <div key={idx} className="mb-4 space-y-4">
                          {exampleGroup.map(([key, value], subIdx) => (
                            <p key={subIdx} className="text-[#111111] mt-4">
                              <strong className="text-lg">
                                {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                                {/* 格式化鍵名，例如 "situation" 變為 "Situation" */}
                              </strong>{" "}
                              {value}
                            </p>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Dynamically render subsections */}
            {project.details.design_enhancement.subsections && (
              <div className="space-y-8 mt-20">
                {project.details.design_enhancement.subsections.map(
                  (subsection, idx) => (
                    <div key={idx} className="space-y-12">
                      <h5 className="text-3xl md:text-5xl font-bold text-center">
                        {subsection.title}
                      </h5>

                      {Object.entries(subsection.content).map(
                        ([key, section]) => (
                          <div
                            key={key}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
                          >
                            {/* Image on the left */}
                            {subsection.images[key] && (
                              <div className="order-1 md:order-1">
                                <img
                                  src={subsection.images[key]}
                                  alt={key
                                    .replace("_", " ")
                                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                                  className="w-2/3 object-fit rounded-lg"
                                  tabIndex={0}
                                />
                              </div>
                            )}

                            {/* Content on the right */}
                            <div
                              className={`space-y-4 ${
                                subsection.images[key]
                                  ? "order-2 md:order-2"
                                  : "order-1 md:col-span-2 mx-0 md:mx-10"
                              }`}
                            >
                              {section.main && (
                                <>
                                  <h6 className="text-2xl  font-medium ">
                                    {key
                                      .replace("_", " ")
                                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                                  </h6>
                                  <div>
                                    <p className="text-[#111111]">
                                      {section.main}
                                    </p>
                                  </div>
                                </>
                              )}

                              {section.features && (
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                  {/* Lottie 動畫區塊 */}
                                  {!subsection.images[key] && (
                                    <div className="order-1 md:order-2 w-1/3 md:w-1/4">
                                      <Lottie
                                        animationData={Animation}
                                        loop={true}
                                      />
                                    </div>
                                  )}

                                  {/* 文字列表區塊 */}
                                  <ul className="order-2 md:order-1 list-disc pl-5 mt-4 text-[#111111] w-full">
                                    {section.features.map((feature, fIdx) => (
                                      <li key={fIdx} className="mb-2">
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              <div className="grid grid-cols-1 md:grid-cols-2">
                                {section.anti_patterns && (
                                  <>
                                    {section.anti_patterns.map(
                                      (anti_pattern, apIdx) => (
                                        <div
                                          key={apIdx}
                                          className="mb-4  mr-3 mt-5"
                                        >
                                          <div className="">
                                            <h6 className="text-lg font-medium">
                                              {anti_pattern.title}
                                            </h6>
                                            <p className="text-[#111111] mt-2">
                                              {anti_pattern.description}
                                            </p>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </>
                                )}
                              </div>

                              {section.ux_psychology && (
                                <>
                                  <div>
                                    <h6 className="text-2xl font-medium">
                                      UX Psychology Applied
                                    </h6>
                                    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                                      {section.ux_psychology.map(
                                        (psych, pIdx) => (
                                          <div
                                            key={pIdx}
                                            className="mb-4  mr-3 mt-5"
                                          >
                                            <h6 className="text-lg font-neue-medium">
                                              {psych.title}
                                            </h6>
                                            <p className="text-[#111111] mt-3">
                                              {psych.description}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )
                )}
              </div>
            )}

            {project.details.design_enhancement.business_opportunities && (
              <div className="space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-3 mt-20">
                  <h5 className="text-3xl md:text-6xl font-semibold ">
                    New Business Potential Unlocked
                  </h5>
                  <div className="col-span-2 mt-5">
                    {project.details.design_enhancement.business_opportunities.map(
                      (opportunity, idx) => (
                        <div key={idx} className="mb-4">
                          <h6 className="text-xl font-semibold">
                            {opportunity.title}
                          </h6>
                          <p className="text-[#111111] text-lg md:text-xl mt-5">
                            {opportunity.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* {project.details.design_enhancement.img && (
              <img
                src={project.details.design_enhancement.img}
                alt="Design Enhancement"
                className="w-full h-64 object-cover rounded-lg mt-4"
                tabIndex={0}
              />
            )} */}
          </motion.section>

          {/* 07. Closing */}
          <motion.section
            id="closing"
            className="flex flex-col gap-6 py-8 border-y border-white/10 bg-[#282828] rounded-4xl"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="">
              <h3 className="font-semibold text-des text-[#FFFFFF99] text-center">
                07. Closing
              </h3>
              <div>
                <p className="text-white mx-5 mt-5 md:mx-20 text-xl text-center">
                  {project.details.closing.description.main}
                </p>
                {project.details.closing.description.subheading && (
                  <h4 className="text-2xl font-semibold mt-4 text-center text-white">
                    {project.details.closing.description.subheading}
                  </h4>
                )}
              </div>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 m-5">
              {project.details.closing.winning_moments && (
                <div className="space-y-4 m-5">
                  <div>
                    <h5 className="text-xl font-neue-medium text-white">
                      Winning Moments
                    </h5>
                    <ul className="list-disc pl-5 mt-4 text-white">
                      {project.details.closing.winning_moments.map(
                        (moment, idx) => (
                          <li key={idx} className="mb-2 text-lg">
                            {moment}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {project.details.closing.lessons_learned && (
                <div className="space-y-4 m-5">
                  <h5 className="text-xl font-medium text-white">
                    Lessons Learned
                  </h5>
                  <ul className="list-disc pl-5 mt-4 text-white">
                    {project.details.closing.lessons_learned.map(
                      (lesson, idx) => (
                        <li key={idx} className="mb-2 text-lg">
                          {lesson}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* {project.details.closing.img && (
              <img
                src={project.details.closing.img}
                alt="Closing"
                className="w-full h-64 object-cover rounded-lg mt-4"
                tabIndex={0}
              />
            )} */}
          </motion.section>

          {/* Contact and Next Project */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.button
              onClick={() =>
                (window.location.href = `mailto:zxcjason234@gmail.com?subject=Inquiry about ${project.title}`)
              }
              className="bg-[#e9ecf1]  text-black rounded-full px-6 py-3 text-sm font-medium flex items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
            >
              Contact me about this project
            </motion.button>
            <motion.button
              onClick={handleNextProject}
              className="bg-[#e9ecf1] text-black rounded-full px-6 py-3 text-sm font-medium flex items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
            >
              Next Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetail;
