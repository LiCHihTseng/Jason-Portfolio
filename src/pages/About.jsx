import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { motion, AnimatePresence } from "framer-motion"; // 導入 AnimatePresence
import Lottie from "lottie-react";
import Tennis from "../assets/img/GIF/Tennis.json";

function About() {
  // 定義各區塊的內容和初始狀態
  const sections = [
    {
      title: "Background",
      content:
        "Ever since I was young, I’ve been curious about how people interact with technology and the world around them. This curiosity led me to explore design—not just how things look, but how they work. With a background in coding and a Master of Interaction Design from the University of Queensland, I’ve built a foundation that bridges creative design and functional development. I enjoy creating experiences that are both meaningful and technically thoughtful.",
    },
    {
      title: "Design Philosophy",
      content:
        "My design philosophy is shaped by a deep respect for simplicity and usability. In a world where people interact with countless digital products every day, I aim to reduce cognitive load and create experiences that feel welcoming and intuitive.\n\nWith a background in coding, I don't just focus on making things look good or improving the user experience — I also ensure that my designs are technically feasible. I understand how challenging it can be for engineers to implement overly complex or impractical UI. That's why I strive to design interfaces that balance visual appeal with development efficiency, making collaboration with software engineers smoother and more effective.\n\nI’m passionate about the small things — thoughtful micro-interactions, the perfect spring animation, or a playful motion that brings a smile. These subtle details can have a huge impact, shaping how people feel while using a product.\n\nAt the heart of everything I do is empathy. I never forget that there's a real person on the other side of the screen, and I design with the goal of making their experience not only functional, but meaningful and fulfilling.",
    },
    {
      title: "Things I Love",
      content:
        "I love traveling solo and exploring different places — every journey teaches me something new. One of my dreams is to watch every major tennis tournament around the world. When I'm not designing, you’ll probably find me out riding my bike or playing tennis 🎾 on the court, enjoying the rhythm of movement and the challenges it brings me.",
    },
  ];

  // 狀態管理
  const [openSections, setOpenSections] = useState(sections.map(() => false));

  // 切換區塊展開狀態
  const toggleSection = (index) => {
    const updatedSections = [...openSections];
    updatedSections[index] = !updatedSections[index];
    setOpenSections(updatedSections);
  };
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

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 text-[#111111] bg-white">
      <motion.div
        className="max-w-6xl mx-auto mb-100"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
<div className="grid grid-cols-1 md:grid-cols-3 ">
  {/* h1 */}
  <div className="order-1 md:col-span-2">
    <h1 className="text-3xl font-bold mb-8">Li-Chih (Jason) Tseng</h1>
  </div>

  {/* Lottie 動畫 */}
  <div className="order-2 md:order-3 flex justify-start md:justify-end">
    <Lottie animationData={Tennis} loop={true} className="w-1/3 md:w-1/2 mt-0 md:-mt-20" />
  </div>

  {/* p 段落 */}
  <div className="order-3 md:order-2 md:col-span-2">
    <p className="text-gray-600 mb-8 text-lg leading-loose">
      I'm a designer with a coding background, passionate about creating
      intuitive and engaging user experiences across web, mobile, and
      interactive hardware. This page shares more about who I am and how
      I approach design.
    </p>
  </div>
</div>


        {sections.map((section, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer gap-10"
            onClick={() => toggleSection(index)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation(); // 防止觸發父層的 onClick
                  toggleSection(index);
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: openSections[index] ? 45 : 0 }} // 展開時旋轉 45 度
                transition={{ duration: 0.3, ease: "easeInOut" }} // 按鈕旋轉動畫
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <AddIcon fontSize="medium" />
              </motion.button>
            </div>
            <AnimatePresence>
              {openSections[index] && (
                <motion.div
                  layout // 啟用 layout 動畫，確保高度過渡平滑
                  initial={{ opacity: 0, height: 0 }} // 初始狀態：隱藏
                  animate={{ opacity: 1, height: "auto" }} // 展開時：顯示
                  exit={{ opacity: 0, height: 0 }} // 收起時：隱藏
                  transition={{
                    duration: 0.5, // 延長持續時間
                    ease: "circInOut", // 平滑緩動
                    type: "tween", // 使用 tween 確保平滑收縮
                  }}
                  className="mt-4 text-gray-600 text-lg overflow-hidden"
                >
                  {section.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-6 leading-loose">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
