"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
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

  {
    /* --- 1) 把文字與圖片配對成 cards --- */
  }
  const concepts = project.details.design_discovery.design_concepts || [];
  const imgs = project.details.design_discovery.imgs || [];
  const cards = concepts.map((c, i) => ({
    ...c,
    img: c.img || imgs[i] || null, // 支援：concept 自帶 img 或用 imgs 對位
    alt: c.alt || `Design Concept ${i + 1}`,
  }));

  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      // 設定速度
      lottieRef.current.setSpeed(1.2);
    }
  }, []);

  const getGradientColor = (id, isLeft) => {
    switch (id) {
      case 1:
        return isLeft
          ? "linear-gradient(to right, #ff4d4d, #ff7070)" // 紅色系 - 左
          : "linear-gradient(to right, #ff8080, #ffb3b3)"; // 紅色系 - 右
      case 2:
        return isLeft
          ? "linear-gradient(to right, #4d79ff, #70a1ff)" // 藍色系 - 左
          : "linear-gradient(to right, #809fff, #b3c6ff)"; // 藍色系 - 右
      case 3:
        return isLeft
          ? "linear-gradient(to right, #a17000, #c78c04)" // 綠色系 - 左
          : "linear-gradient(to right, #c78c04, #ebc671)"; // 綠色系 - 右
      default:
        return isLeft
          ? "linear-gradient(to right, #ff4d4d, #ff7070)" // 預設紅色系 - 左
          : "linear-gradient(to right, #ff8080, #ffb3b3)"; // 預設紅色系 - 右
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 text-[#111111] ">
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
              {project.client || "Personal Project"}
            </p>
            <h1 className="text-3xl md:text-4xl font-medium mb-6 text-center text-[#242726]">
              {project.title}
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

          {/* 01. Overview */}
          <motion.section
            id="overview"
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mt-10">
              <h5 className="text-[#666666] text-4xl md:text-5xl text-center font-semibold">
                01. Overview
              </h5>
              <p className="font-regular text-base md:text-xl text-[#111111] mb-8 text-center mt-5 mx-5 md:mx-30">
                {project.details.overview.description}
              </p>
            </div>
            <div className="relative rounded-lg mb-8">
              {/* 左半邊線條（往左延伸並斜向下） */}
              <motion.div
                initial={{ x: "0%", width: "0px" }}
                whileInView={{ x: `calc(-45vw - 200px)`, width: "50vw" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2"
                style={{
                  height: "8px",
                  background: getGradientColor(project.id, true),
                  transform: "rotate(-10deg)",
                  transformOrigin: "right center",
                  rotate: -10,
                }}
              />

              {/* 右半邊線條（往右延伸並斜向上） */}
              <motion.div
                initial={{ x: "0%", width: "0px" }}
                whileInView={{ x: `calc(2vw)`, width: "50vw" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2"
                style={{
                  height: "8px",
                  background: getGradientColor(project.id, false),
                  transform: "rotate(10deg)",
                  transformOrigin: "left center",
                  rotate: -10,
                }}
              />

              {/* Lottie 容器（動態調整邊框） */}
              <div className="relative z-30 overflow-hidden rounded-lg border-2  flex items-center justify-center">
                {project.img && (
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={project.img}
                    loop={false}
                    onComplete={() => {
                      setTimeout(() => {
                        lottieRef.current?.goToAndPlay(0, true);
                      }, 1000);
                    }}
                    style={{ width: "100%", height: "100%" }} // 撐滿父層          
                    rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }} // 關鍵2：像 object-cover
                  />
                )}
              </div>
            </div>
            {project.details.overview.roles && (
              <div className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: project.details.overview.roles.role,
                      content: project.details.overview.roles.role_content,
                    },
                    {
                      title: project.details.overview.roles.team,
                      content: project.details.overview.roles.team_content,
                    },
                    {
                      title: project.details.overview.roles.year,
                      content:
                        project.details.overview.roles.year_content.join(", "),
                    },
                    {
                      title: project.details.overview.roles.title,
                      content: project.details.overview.roles.content,
                    },
                  ].map((col, colIdx) => (
                    <div key={colIdx} className="relative px-4 py-4">
                      {/* 垂直分隔線 */}

                      <h6 className="font-semibold mb-4 text-lg">{col.title}</h6>
                      {Array.isArray(col.content) ? (
                        col.content.map((item, idx) => (
                          <p key={idx} className="mt-1 text-[#6B6B76] text-lg">
                            {item}
                          </p>
                        ))
                      ) : (
                        <p className="mt-1 text-[#6B6B76]">{col.content}</p>
                      )}
                    </div>
                  ))}
                </div>
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
                  <h3 className="font-semibold text-4xl md:text-5xl text-[#666666]">
                    02. Role
                  </h3>
                  {project.details.role.description.subheading && (
                    <h4 className="text-4xl md:text-6xl/16 font-semibold mt-4 ">
                      {project.details.role.description.subheading}
                    </h4>
                  )}
                  <p className="text-[#222231] text-base md:text-lg leading-[1.5] mt-8 pr-5 md:pr-20">
                    {project.details.role.description.main}
                  </p>
                </div>

                {project.details.role.img && (
                  <img
                    src={project.details.role.img}
                    alt="Role in Project"
                    className="w-full object-fit rounded-xl mt-0 md:mt-4 bg-[#e9ecf1] p-5 md:p-15"
                    loading="lazy"
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
            <h3 className="font-semibold text-4xl md:text-5xl text-[#666666] text-center">
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
                        <p className="text-[#222231] mt-4">
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
                          <p className="text-[#222231] mt-4">
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
                            <h6 className="text-xl font-semibold mt-4">
                              {challenge.solution.subheading}
                            </h6>
                          )}
                          {challenge.solution.principles && (
                            <ul className="text-[#111111] pl-0 flex flex-wrap justify-center mt-5 md:gap-0 gap-2">
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
                                          ? "list-none w-full sm:w-1/1 lg:w-1/2"
                                          : "list-disc pl-5 w-full"
                                      } px-2 box-border`}
                                    >
                                      {index === 1 && (
                                        <span className="mr-2 text-[#111111] text-2xl">
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
                          loading="lazy"
                          tabIndex={0}
                        />
                      </div>
                    )}
                  </div>
                )
              )}
              {/* Add key_question section below, styled like the image container */}
              {project.details.key_challenges.key_question && (
                <section className="mt-10">
                  <div className="mx-auto max-w-5xl">
                    <div className="space-y-4 text-center">
                      {project.details.key_challenges.key_question.map(
                        (q, i) => (
                          <p
                            key={i}
                            className="
                            text-xl md:text-2xl lg:text-4xl leading-snug md:leading-tight tracking-tight font-light text-transparent bg-clip-text bg-gradient-to-r from-[#422FFF] to-[#B3CFFF] italic"
                          >
                            {q}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </section>
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
            <section id="process" className="px-4">
              <div className="mx-auto max-w-[72ch] text-center space-y-3 md:space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl text-[#666]">
                  04. Process
                </h3>

                {project.details.process.description.subheading && (
                  <h2
                    className="font-bold leading-tight tracking-tight
                   text-[clamp(2rem,6vw,3.75rem)]"
                  >
                    {project.details.process.description.subheading}
                  </h2>
                )}

                <p className="text-[#111] text-2xl leading-relaxed ">
                  {project.details.process.description.main}
                </p>
              </div>
            </section>
            {project.details.process.challenges && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 mt-5 gap-8 items-start">
                  <h5 className="text-2xl font-bold md:col-span-3">Problems</h5>
                  {project.details.process.challenges.map(
                    (challenge, index) => (
                      <div
                        key={index}
                        className="mb-4 pr-5 md:col-span-4 space-y-6"
                      >
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
              <div className="space-y-8 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* 左欄：Section 標題 */}
                  <h5 className="text-2xl font-bold md:col-span-3">
                    How to address this
                  </h5>

                  {/* 右欄：內容 */}
                  <div className="md:col-span-9 space-y-6">
                    {/* 主標題（Subheading） */}
                    {project.details.process.solution.subheading && (
                      <h6 className="text-xl md:text-2xl font-semibold">
                        {project.details.process.solution.subheading}
                      </h6>
                    )}

                    {/* 主描述 */}
                    <p className="text-[#111] text-lg leading-relaxed">
                      {project.details.process.solution.main}
                    </p>

                    {/* Features 列表 */}
                    <h2 className="text-2xl font-semibold">Key features</h2>
                    {project.details.process.solution.features && (
                      <ul className="list-disc pl-6 space-y-3 text-[#111] text-lg">
                        {project.details.process.solution.features.map(
                          (feature, idx) => (
                            <li key={idx}>{feature}</li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                {/* 圖片 */}
                {project.details.process.solution.img && (
                  <img
                    src={project.details.process.solution.img}
                    alt="Process Solution"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                )}
              </div>
            )}
          </motion.section>

          {/* 05. Design Discovery */}
          <motion.section
            id="design-discovery"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
          >
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mx-auto max-w-[72ch] text-center space-y-3 md:space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl text-[#666]">
                  05. Design Discovery
                </h3>

                {project.details.design_discovery.description.subheading && (
                  <h2
                    className="font-bold leading-tight tracking-tight
                     text-[clamp(2rem,6vw,3.75rem)] [text-wrap:balance]"
                  >
                    {project.details.design_discovery.description.subheading}
                  </h2>
                )}

                <p className="text-[#111] text-2xl leading-relaxed">
                  {project.details.design_discovery.description.main}
                </p>
              </div>
            </motion.div>

            {project.details.design_discovery.outcomes && (
              <motion.div
                className="space-y-4 mt-5"
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="">
                  <h5 className="text-2xl font-semibold text-center">
                    UX Outcomes
                  </h5>
                  <div className="space-y-4 mt-6 mx-5 md:mx-20">
                    {project.details.design_discovery.outcomes.map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-[#ffffff] p-10 rounded-2xl shadow-sm"
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
              </motion.div>
            )}
            {project.details.design_discovery.insights && (
              <motion.div
                className="space-y-4"
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="">
                  <div>
                    <h5 className="text-2xl font-semibold text-center">
                      Key Insights
                    </h5>
                  </div>
                  <div className="mt-5 mb-5 pt-4 pb-8 mx-5 md:mx-20 rounded-lg">
                    {project.details.design_discovery.insights.map(
                      (insight, idx) => (
                        <div
                          key={idx}
                          className="relative bg-white  p-8 rounded-lg shadow-lg transition-all duration-300 my-4 mx-2 md:mx-2 gap-5 mt-5"
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

                          <h6 className="text-base md:text-lg font-medium md:font-semibold pt-2 pb-2 px-1 md:px-5">
                            {insight.title}
                          </h6>

                          {/* 展開動畫區域 */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.ul
                                className=" text-[#111111] pl-1 pr-1 md:pl-5 md:pr-5 pb-2"
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
              </motion.div>
            )}
            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* {project.details.design_discovery.hypotheses && (
                <div className="space-y-4">
                  <div className="">
                    <div>
                      <h5 className="text-2xl font-semibold text-center">
                        Hypotheses
                      </h5>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 mx-3 mb-5">
                      {project.details.design_discovery.hypotheses.map(
                        (hypothesis, idx) => (
                          <div key={idx} className="mb-4 p-1 md:p-3">
                            <h6 className="text-lg font-semibold text-center">
                              {hypothesis.title}
                            </h6>
                            <p className="text-[#111111] text-center">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 m-5">
                      {project.details.design_discovery.ux_strategy.map(
                        (strategy, idx) => (
                          <div key={idx} className="mb-4">
                            <h6 className="text-lg font-semibold text-center">
                              {strategy.title}
                            </h6>
                            <p className="text-[#111111] text-center">
                              {strategy.description}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )} */}
            </motion.div>
            <motion.section
              id="design-concepts"
              aria-labelledby="dc-heading"
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="py-16 md:py-20"
            >
              {cards.length > 0 && (
                <div className="mx-auto max-w-7xl px-4">
                  <h5
                    id="dc-heading"
                    className="text-4xl md:text-6xl font-bold text-center mb-15"
                  >
                    Design Concepts
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {cards.map((card, idx) => (
                      <article
                        key={idx}
                        className="flex flex-col h-full min-w-0"
                      >
                        <div>
                          <h6 className="text-xl font-semibold">
                            {card.title}
                          </h6>
                          <p className="text-[#111] text-lg mt-3 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                        {card.img && (
                          <div className="mt-auto pt-6">
                            <div className="aspect-[4/2] md:aspect-auto w-full rounded-lg">
                              <img
                                src={card.img}
                                alt={card.alt}
                                className="w-full h-full md:h-auto object-contain block"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {project.details.design_discovery.recommendation && (
                <div className="mx-auto max-w-3xl px-4 mt-16 text-center space-y-4">
                  <h5 className="text-3xl font-bold">The Recommendation</h5>
                  <p className="text-[#111] text-lg leading-relaxed">
                    {project.details.design_discovery.recommendation}
                  </p>
                </div>
              )}
            </motion.section>
          </motion.section>

          {/* 06. Design Enhancement */}
          <motion.section
            id="design-enhancement"
            className="flex flex-col gap-6 py-8 border-y border-white/10"
          >
            <motion.div
              className=""
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.01 }}
            >
              <div className="mx-auto max-w-[72ch] text-center space-y-3 md:space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl text-[#666]">
                  06. Design Enhancement
                </h3>

                {project.details.design_enhancement.description.subheading && (
                  <h2
                    className="font-bold leading-tight tracking-tight
                 text-[clamp(2rem,6vw,3.75rem)] [text-wrap:balance]"
                  >
                    {project.details.design_enhancement.description.subheading}
                  </h2>
                )}

                <p className="text-[#111] text-2xl leading-relaxed">
                  {project.details.design_enhancement.description.main}
                </p>
              </div>
              {project.details.design_enhancement.outcomes && (
                <div className="space-y-4 mt-20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="text-2xl font-semibold">UX Outcomes</h5>
                    </div>
                    <div className="col-span-2">
                      <ul className="list-disc pl-5 mt-4 text-[#111111]">
                        {project.details.design_enhancement.outcomes.map(
                          (outcome, idx) => (
                            <li
                              key={idx}
                              className="mb-2 font-semibold text-lg"
                            >
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
                            <p className="text-[#111111]">
                              {psych.description}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.01 }}
            >
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
            </motion.div>

            {/* Dynamically render subsections */}
            {project.details.design_enhancement.at_a_glance && (
              <motion.div
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                className="p-6 mb-10 "
              >
                <h5 className="text-3xl md:text-4xl font-bold text-gray-900 text-left mb-6">
                  At a Glance
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {project.details.design_enhancement.at_a_glance.main}
                    </p>
                    <div>
                      <h6 className="text-xl font-semibold text-gray-900">
                        Key Features
                      </h6>
                      <ul className="mt-2 space-y-2">
                        {project.details.design_enhancement.at_a_glance.features.map(
                          (feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-2 inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                              <span className="text-gray-900">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  {/* Placeholder for potential image; replace with actual image if available */}
                  <div className="hidden md:flex justify-end">
                    {project.details.design_enhancement.images?.at_a_glance ? (
                      <img
                        src={
                          project.details.design_enhancement.images.at_a_glance
                        }
                        alt="At a Glance Visual"
                        className="w-full rounded-lg object-cover hover:scale-[1.02] transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-28 md:w-50 shrink-0">
                        <Lottie animationData={Animation} loop />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            {project.details.design_enhancement.subsections && (
              <div className="space-y-10 mt-20">
                {project.details.design_enhancement.subsections.map(
                  (subsection, idx) => (
                    <div key={idx} className="space-y-10">
                      {/* 區塊主標題：漸層字＋置中 */}
                      <motion.h5
                        className="text-3xl md:text-5xl font-bold text-center 
                     bg-gradient-to-r from-[#111] via-[#666] to-[#111] 
                     bg-clip-text text-transparent"
                        variants={sectionVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {subsection.title}
                      </motion.h5>

                      <div className="space-y-30">
                        {Object.entries(subsection.content).map(
                          ([key, section]) => (
                            <motion.div
                              key={key}
                              variants={sectionVariants}
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: true, amount: 0.12 }}
                              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-b border-gray-300 pb-8"
                            >
                              {/* 左：圖片（有就顯示） */}
                              {subsection.images[key] && (
                                <div className="order-1 md:order-1 pr-0 md:pr-6">
                                  <img
                                    src={subsection.images[key]}
                                    alt={key
                                      .replace("_", " ")
                                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                                    className="w-full md:w-5/6 rounded-xl object-cover
                              hover:scale-[1.02] transition-transform"
                                    loading="lazy"
                                    tabIndex={0}
                                  />
                                </div>
                              )}

                              {/* 右：文字 */}
                              <div
                                className={`space-y-5 ${
                                  subsection.images[key]
                                    ? "order-2 md:order-2"
                                    : "order-1 md:col-span-2 mx-0 md:mx-6"
                                }`}
                              >
                                {/* 小節標題 */}
                                {section.main && (
                                  <>
                                    <h6 className="text-xl md:text-4xl font-semibold text-[#111] pl-3">
                                      {key
                                        .replace("_", " ")
                                        .replace(/\b\w/g, (c) =>
                                          c.toUpperCase()
                                        )}
                                    </h6>
                                    <p className="text-[#111]/85 md:text-xl pl-3 mb-0">
                                      {section.main}
                                    </p>
                                  </>
                                )}

                                {/* Features：自訂圓點列（取代 list-disc） */}
                                {section.features && (
                                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                    {/* 沒圖時顯示 Lottie（保留你的行為） */}
                                    {!subsection.images[key] && (
                                      <div className="order-1 md:order-2 w-28 md:w-32 shrink-0">
                                        <Lottie
                                          animationData={Animation}
                                          loop
                                        />
                                      </div>
                                    )}

                                    <ul className="order-2 md:order-1 w-full space-y-2.5">
                                      {section.features.map((feature, fIdx) => (
                                        <li
                                          key={fIdx}
                                          className="flex items-start gap-3"
                                        >
                                          <span className="mt-2 inline-block w-2.5 h-2.5 rounded-full bg-[#4BB0FF]"></span>
                                          <span className="text-[#111]">
                                            {feature}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Anti-patterns：卡片內左右兩欄 */}
                                {section.anti_patterns && (
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {section.anti_patterns.map((ap, apIdx) => (
                                      <div
                                        key={apIdx}
                                        className="rounded-xl p-4"
                                      >
                                        <h6 className="text-lg md:text-xl font-semibold ">
                                          {ap.title}
                                        </h6>
                                        <p className="text-[#111]/80">
                                          {ap.description}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* UX Psychology：標題 + 兩欄條列 */}
                                {section.ux_psychology && (
                                  <div className="space-y-3">
                                    <h6 className="text-xl md:text-2xl font-semibold pl-3 mt-5 mb-0">
                                      UX Psychology Applied
                                    </h6>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {section.ux_psychology.map(
                                        (psych, pIdx) => (
                                          <div
                                            key={pIdx}
                                            className="rounded-xl p-4"
                                          >
                                            <h6 className="text-lg md:text-xl font-semibold">
                                              {psych.title}
                                            </h6>
                                            <p className="text-[#111]/80 mt-2">
                                              {psych.description}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {project.details.design_enhancement.business_opportunities && (
              <motion.div
                className="space-y-16"
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mt-16">
                  {/* 左：大標題 */}
                  <h5
                    className="
          md:col-span-4 min-w-0
          font-bold leading-tight tracking-tight
          text-3xl md:text-[clamp(2rem,5vw,3.25rem)]
          [text-wrap:balance]
        "
                  >
                    New Business Potential Unlocked
                  </h5>

                  {/* 右：內容清單 */}
                  <div className="md:col-span-8 min-w-0 space-y-8">
                    {project.details.design_enhancement.business_opportunities.map(
                      (opportunity, idx) => (
                        <div key={idx} className="min-w-0">
                          <h6 className="text-2xl font-semibold">
                            {opportunity.title}
                          </h6>
                          <p
                            className="text-[#111] text-lg md:text-xl mt-3 leading-relaxed
                             max-w-[72ch] break-words [hyphens:auto]"
                          >
                            {opportunity.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
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
              <h3 className="font-semibold text-4xl md:text-5xl text-[#FFFFFF99] text-center">
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
