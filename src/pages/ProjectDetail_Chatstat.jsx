import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import ProjectHero from "../components/ProjectHero";
import { heroImageFor } from "../components/Project";
import chatstat_banner from "../assets/img/Chatstat_Banner.png";
import Chatstat_CTA from "../assets/img/GIF/CTA.json?url";
import Chatstat_Feature from "../assets/img/Chatstat_Feature.svg";
import Chatstat_avatar1 from "../assets/img/Chatstat_avatar1.svg";
import Chatstat_FAQ from "../assets/img/Chatstat_FAQ.svg";

/*
  字級系統。刻意寫成完整的 class 字串常數,Tailwind 的掃描器才抓得到,
  又不必新增 CSS 檔或依賴 v4 的 @apply。要整站統一時再抽成共用模組。
*/
const type = {
  display:
    "text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium",

  // 章節標題 —— 這一層是快速捲動時的定位錨點
  chapter:
    "text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] leading-[1.15] font-medium",

  // 章節底下那句安靜的提問
  chapterContext:
    "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5]",

  // 章節真正的敘事主張
  section:
    "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-[1.1] font-medium",

  // 引言與 Reflection —— 不會與 chapter 相鄰,36 不會撞層級
  insight:
    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] font-medium",

  // Solution 內的設計洞察。取 spec 區間(30–34)的下緣,
  // 與 chapter 的 34 之間才留得住級距,符合 §07「不要跟 Chapter 搶」
  feature:
    "text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.2] font-medium",

  lead: "text-[17px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.65]",
  body: "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7]",
  supporting: "text-[14px] md:text-[15px] leading-[1.6]",
  label: "text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-medium",
};

/*
  每一段固定的導覽錨點:編號 + 名稱 + 這一段回答的問題。
  光看這三行就能掌握整個 case study 的脈絡,不必讀內文。
*/
function SectionHeader({ index, name, question, title }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        {/* 編號保持安靜,#767676 是能過 4.5:1 的最接近灰階 */}
        <span className="text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#767676]">
          {index}
        </span>

        <h2 className={`${type.chapter} text-[#242726]`}>{name}</h2>
      </div>

      <p className={`${type.chapterContext} mt-3 text-[#737373]`}>{question}</p>

      {title ? (
        <h3 className={`${type.section} mt-8 max-w-4xl text-[#242726]`}>
          {title}
        </h3>
      ) : null}
    </div>
  );
}

// 流程用的箭頭。用畫的 SVG,不用 unicode 字元充當圖示。
function FlowArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 text-[#b4b4b4] ${className}`}
    >
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const problems = [
  { title: "CTA Clarity", note: "Inconsistent actions" },
  { title: "Feature Hierarchy", note: "Hard to scan" },
  { title: "Trust", note: "Limited social proof" },
  { title: "Consistency", note: "Fragmented experience" },
];

const decisions = [
  {
    request: "Merge the features",
    reasoning: "Checked how comparable products organize related functionality",
    decision: "Restructured features into clearer groups",
  },
  {
    request: "Move alerts higher",
    reasoning: "Identified both hierarchy and presentation issues",
    decision: "Refined the section before increasing its visibility",
  },
  {
    request: "Change the CTA",
    reasoning: "Validated wording with parents",
    decision: "Selected clearer trial-focused messaging",
  },
];

const outcomes = [
  {
    title: "Clearer Messaging",
    note: "One trial-focused action replaced competing calls.",
  },
  {
    title: "Stronger Trust Signals",
    note: "Parent voices carry the credibility the brand cannot claim itself.",
  },
  {
    title: "Shared Design Direction",
    note: "UX and marketing worked from the same reference.",
  },
];

const ProjectDetail_Chatstat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [faqHovered, setFaqHovered] = useState(false);

  const project = {
    title: "Chatstat Homepage Experience Redesign",
    platform: ["Website", "UX Design", "Product Design"],
    img: chatstat_banner,
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-5 sm:px-6 lg:px-8 text-[#111111]">
      <ProjectHero
        src={heroImageFor("/project/chatstat")}
        alt={project.title}
        className="-mt-24 -mx-5 sm:-mx-6 lg:-mx-8 mb-16 md:mb-24"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-20 md:space-y-28 lg:space-y-36"
        >
          {/* 01 Title */}
          <header>
            <p className={`${type.label} text-[#737373] mb-4`}>Chatstat</p>

            <h1 className={`${type.display} max-w-4xl text-[#242726]`}>
              {project.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {project.platform.map((item) => (
                <span key={item} className={`${type.supporting} text-[#555555]`}>
                  {item}
                </span>
              ))}
            </div>
          </header>

          {/* Banner */}
          <section>
            <div className="overflow-hidden rounded-2xl bg-[#f6f5f5]">
              <img
                src={project.img}
                alt="Chatstat homepage redesign preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Meta */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-t border-[#e4e4e4] pt-10">
            {[
              { label: "Role", value: ["UI/UX Designer"] },
              { label: "Platform", value: ["Website"] },
              { label: "Team", value: ["UI/UX", "Software Engineer", "Marketing"] },
              { label: "Tools", value: ["Figma", "WordPress"] },
            ].map((item) => (
              <div key={item.label}>
                <p className={`${type.label} text-[#737373] mb-3`}>{item.label}</p>

                {item.value.map((v) => (
                  <p key={v} className="text-base md:text-lg font-medium text-[#242726]">
                    {v}
                  </p>
                ))}
              </div>
            ))}
          </section>

          {/* 01 Overview */}
          <section>
            <SectionHeader
              index="01"
              name="Overview"
              question="What is this project?"
              title="Improving homepage clarity and trust"
            />

            <p className={`${type.lead} max-w-2xl text-[#555555]`}>
              I translated stakeholder feedback into UX decisions that made
              Chatstat’s value clearer and more trustworthy for first-time
              visitors.
            </p>
          </section>

          {/* 02 Problem */}
          <section>
            <SectionHeader
              index="02"
              name="Challenge"
              question="What needed to change?"
              title="The homepage had strong content, but its value wasn’t immediately clear."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {problems.map((item) => (
                <div key={item.title} className="border-t border-[#242726] pt-5">
                  <h4 className="text-lg md:text-xl font-medium text-[#242726]">
                    {item.title}
                  </h4>

                  <p className={`${type.supporting} mt-2 text-[#555555]`}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 04 From Feedback to Decisions */}
          <section>
            <SectionHeader
              index="03"
              name="Discovery"
              question="How did I decide what to change?"
            />

            <h3 className={`${type.section} max-w-4xl text-[#242726]`}>
              I treated stakeholder requests as hypotheses, not specifications.
            </h3>

            <div className="mt-14 space-y-10 md:space-y-0">
              {/* 欄標題只在桌機出現一次 */}
              <div className="hidden md:grid md:grid-cols-12 md:gap-8 border-b border-[#e4e4e4] pb-3">
                <p className={`${type.label} md:col-span-3 text-[#737373]`}>
                  Stakeholder request
                </p>
                <p className={`${type.label} md:col-span-4 text-[#737373]`}>
                  UX reasoning
                </p>
                <p className={`${type.label} md:col-span-5 text-[#737373]`}>
                  Design decision
                </p>
              </div>

              {decisions.map((item) => (
                <div
                  key={item.request}
                  className="grid grid-cols-1 md:grid-cols-12 md:gap-8 md:items-baseline md:border-b md:border-[#e4e4e4] md:py-7"
                >
                  <p className="md:col-span-3 text-lg md:text-xl font-medium text-[#242726]">
                    {item.request}
                  </p>

                  <div className="md:col-span-4 mt-3 md:mt-0 flex items-start gap-3">
                    <FlowArrow className="mt-1 rotate-90 md:rotate-0 md:-ml-6" />
                    <p className={`${type.supporting} text-[#555555]`}>
                      {item.reasoning}
                    </p>
                  </div>

                  <div className="md:col-span-5 mt-3 md:mt-0 flex items-start gap-3">
                    <FlowArrow className="mt-1 rotate-90 md:rotate-0 md:-ml-6" />
                    <p className={`${type.supporting} text-[#242726]`}>
                      {item.decision}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Design Improvements */}
          <section className="space-y-20 md:space-y-32">
            <SectionHeader
              index="04"
              name="Solution"
              question="What did I design?"
            />

            {/* 01 CTA Clarity */}
            <div>
              <p className={`${type.label} text-[#a0a0a0] mb-3`}>01 — CTA Clarity</p>

              <h4 className={`${type.feature} max-w-3xl text-[#242726]`}>
                One clear action instead of competing messages.
              </h4>

              <div className="mt-10 md:mt-14">
                <Lottie
                  path={Chatstat_CTA}
                  autoplay
                  loop={false}
                  className="w-full"
                  rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className={`${type.label} text-[#a0a0a0]`}>Before</span>

                {["Get Started", "Sign Up"].map((label) => (
                  <span
                    key={label}
                    className={`${type.supporting} text-[#8a8a8a] line-through`}
                  >
                    {label}
                  </span>
                ))}

                <FlowArrow />

                <span className={`${type.label} text-[#737373]`}>After</span>

                <span className="text-base md:text-lg font-medium text-[#242726]">
                  Start Your Free Trial
                </span>
              </div>

              <p className={`${type.supporting} mt-4 text-[#737373]`}>
                Validated with parents before finalizing the direction.
              </p>
            </div>

            {/* 02 Feature Hierarchy */}
            <div>
              <p className={`${type.label} text-[#a0a0a0] mb-3`}>
                02 — Feature Hierarchy
              </p>

              <h4 className={`${type.feature} max-w-3xl text-[#242726]`}>
                Make the core value easier to scan.
              </h4>

              <div
                className="relative mt-10 md:mt-14 overflow-hidden rounded-2xl bg-[#fafafa]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={Chatstat_Feature}
                  alt="Chatstat feature communication improvement"
                  className="w-full h-auto object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 80 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 max-w-[280px] rounded-2xl bg-[#242726]/95 p-4 backdrop-blur-md"
                >
                  <p className={`${type.label} text-white/60 mb-2`}>Annotation</p>

                  <p className={`${type.supporting} text-white/90`}>
                    Safety-related content moved higher, with related features
                    grouped into scannable sections.
                  </p>
                </motion.div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                {[
                  "Grouped related features",
                  "Improved scanability",
                  "Moved safety-related content higher",
                ].map((note) => (
                  <li key={note} className={`${type.supporting} text-[#737373]`}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* 03 Building Trust */}
            <div>
              <p className={`${type.label} text-[#a0a0a0] mb-3`}>
                03 — Building Trust
              </p>

              <h4 className={`${type.feature} max-w-3xl text-[#242726]`}>
                Real parent voices made an unfamiliar product feel more
                credible.
              </h4>

              <p className={`${type.supporting} mt-4 max-w-2xl text-[#737373]`}>
                Interview insights were turned into testimonials with the
                marketing team.
              </p>

              <figure className="mt-10 md:mt-14 border-t border-[#242726] pt-8">
                <blockquote className={`${type.insight} max-w-4xl text-[#242726]`}>
                  “Chatstat has been a game-changer for my family’s online
                  safety. Its AI flags risks, helping me talk openly with my
                  kids and feel confident they’re protected.”
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={Chatstat_avatar1}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-base font-medium text-[#242726]">Oliver</p>
                    <p className={`${type.supporting} text-[#737373]`}>
                      Father of two
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* 04 Familiar Patterns */}
            <div>
              <p className={`${type.label} text-[#a0a0a0] mb-3`}>
                04 — Familiar Patterns
              </p>

              <h4 className={`${type.feature} max-w-3xl text-[#242726]`}>
                A conventional Q&amp;A structure made answers easier to find.
              </h4>

              <div
                className="relative mt-10 md:mt-14 overflow-hidden rounded-2xl bg-[#fafafa]"
                onMouseEnter={() => setFaqHovered(true)}
                onMouseLeave={() => setFaqHovered(false)}
              >
                <motion.img
                  src={Chatstat_FAQ}
                  alt="Chatstat FAQ layout improvement"
                  animate={{ scale: faqHovered ? 1.02 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-auto object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: faqHovered ? 1 : 0, x: faqHovered ? 0 : -80 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 md:bottom-6 md:left-6 max-w-[280px] rounded-2xl bg-[#242726]/95 p-4 backdrop-blur-md"
                >
                  <p className={`${type.label} text-white/60 mb-2`}>UX Pattern</p>

                  <p className={`${type.supporting} text-white/90`}>
                    Familiar question-and-answer structure, consistent with the
                    homepage system.
                  </p>
                </motion.div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span className={`${type.label} text-[#a0a0a0]`}>Before</span>

                <span className={`${type.supporting} text-[#8a8a8a]`}>
                  Less familiar information structure
                </span>

                <FlowArrow />

                <span className={`${type.label} text-[#737373]`}>After</span>

                <span className={`${type.supporting} text-[#242726]`}>
                  Clear question-and-answer pattern
                </span>
              </div>
            </div>
          </section>

          {/* 06 Validation */}
          <section>
            <SectionHeader
              index="05"
              name="Validation & Impact"
              question="How did I validate the direction, and what did the project achieve?"
            />

            <h3 className={`${type.section} max-w-4xl text-[#242726]`}>
              Parents responded more positively to the clearer, trial-focused
              CTA.
            </h3>

            <ol className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-6">
              {[
                { step: "Existing CTA", detail: "“Get Started”" },
                { step: "Parent interviews + surveys", detail: "Both versions shown" },
                { step: "Revised CTA", detail: "“Start Your Free Trial”" },
                { step: "Stronger preference", detail: "Clearer intent to act" },
              ].map((item, index) => (
                <li key={item.step} className="flex items-start gap-3 md:block">
                  <FlowArrow
                    className={`mt-1 rotate-90 md:mb-4 md:rotate-0 ${
                      index === 0 ? "md:invisible" : ""
                    }`}
                  />

                  <div className="md:border-t md:border-[#242726] md:pt-4">
                    <p className="text-base md:text-lg font-medium text-[#242726]">
                      {item.step}
                    </p>

                    <p className={`${type.supporting} mt-1 text-[#737373]`}>
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className={`${type.supporting} mt-12 text-[#737373]`}>
              Directional validation — not a controlled A/B test.
            </p>

            {/* 同一段的下半:專案實際帶來什麼 */}
            <h3 className={`${type.section} mt-20 md:mt-28 max-w-4xl text-[#242726]`}>
              One shared direction for UX and marketing.
            </h3>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {outcomes.map((item) => (
                <div key={item.title} className="border-t border-[#242726] pt-5">
                  <h4 className="text-lg md:text-xl font-medium text-[#242726]">
                    {item.title}
                  </h4>

                  <p className={`${type.supporting} mt-2 text-[#555555]`}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <p className={`${type.body} mt-12 max-w-2xl text-[#555555]`}>
              The project helped UX and marketing align around a clearer
              homepage communication strategy. The direction was not fully
              deployed within the project timeline.
            </p>
          </section>

          {/* 08 Reflection */}
          <section className="border-t border-[#e4e4e4] pt-12">
            <p className={`${type.label} text-[#737373] mb-6`}>Reflection</p>

            <p className={`${type.insight} max-w-4xl text-[#242726]`}>
              Improving a homepage isn’t only about visual design — small
              decisions in hierarchy, messaging, and trust shape whether users
              feel confident enough to continue.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail_Chatstat;
