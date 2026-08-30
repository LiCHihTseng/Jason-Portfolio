import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "@phosphor-icons/react";
import Mojo_banner from "../assets/img/MP4/Mojo.mp4";
import Mojo_background from "../assets/img/mojo_banner.avif";
import Mojo_Solution1 from "../assets/img/Mojo_solution1.avif";
import Mojo_Solution3 from "../assets/img/Mojo_Sol3.avif";
import Mojo_Service from "../assets/img/MP4/Mojo_Service.mp4";
import Mojo_backgroundSol from "../assets/img/Mojo_backgroundSol.avif";
import Mojo_Sol4_video from "../assets/img/MP4/Mojo_Sol4.mp4";
import Mojo_Sol4_background from "../assets/img/Mojo_Sol4.avif";
import Mojo_Sol5 from "../assets/img/Mojo_Sol5.avif";
import Mojo_Sol5_2 from "../assets/img/Mojo_Sol5_2.avif";
import ProjectHero from "../components/ProjectHero";
import { heroImageFor } from "../components/Project";

/*
  這一頁是「兩分鐘看完」的版本:圖為主,字只當圖說。
  真實截圖補上的方式:把圖 import 進來、填進下面對應欄位即可,版面不用動。
  留空時會顯示帶說明的佔位框(寫著那一格該放什麼畫面)。

  例:
    import MojoSol2 from "../assets/img/Mojo_solution2.avif";
    const shots = { solution2: MojoSol2, ... };
*/
const shots = {
  solution1: Mojo_Solution1,
  solution3: Mojo_Solution3,
};

/*
  字級系統。與 Chatstat 案例頁同一套,刻意寫成完整的 class 字串常數,
  Tailwind 的掃描器才抓得到。
*/
const type = {
  display:
    "text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium",
  chapter:
    "text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] leading-[1.15] font-medium",
  section:
    "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-[1.1] font-medium",
  insight:
    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] font-medium",
  feature:
    "text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[1.2] font-medium",
  lead: "text-[17px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.65]",
  body: "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7]",
  supporting: "text-[14px] md:text-[15px] leading-[1.6]",
  label: "text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-medium",
};

/*
  重點色沿用 MoJo King 自己的品牌橘。專案裡刻意留了同色相的兩個明度,
  因為同一個橘不可能在白底和 #1c1b17 上同時過 AA。這一頁是白底,
  所以文字用 brandInk,只有色票本身才用 brand。
*/
const brand = "#E95F26";
const brandInk = "#C45020";

// 章節標頭。只留編號、名稱、一句主張 —— 這一版不再放導讀問句。
function SectionHeader({ index, name, title }) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#767676]">
          {index}
        </span>

        <h2 className={`${type.chapter} text-[#242726]`}>{name}</h2>
      </div>

      {title ? (
        <h3 className={`${type.section} mt-6 max-w-4xl text-[#242726]`}>
          {title}
        </h3>
      ) : null}
    </div>
  );
}

// 影片播完到重播中間的停頓。
const REPLAY_DELAY = 5000;

// 影片捲到可視範圍附近才掛上 src,打開頁面時完全不會去抓這支檔案。
function LazyVideo({ src, ...rest }) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setLoad(true);
        io.disconnect();
      },
      { rootMargin: "200px" }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // autoPlay 要過瀏覽器的擋自動播放,muted + playsInline 兩個都不能少。
  // loop 拿掉了:原生的 loop 是播完立刻接回去,沒有地方插入停頓。
  // 改成聽 ended、隔 REPLAY_DELAY 再 play(),play() 遇到已結束的影片會自己倒回 0。
  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      preload="none"
      autoPlay
      muted
      playsInline
      onEnded={(event) => {
        const video = event.currentTarget;
        setTimeout(() => video.play().catch(() => {}), REPLAY_DELAY);
      }}
      {...rest}
    />
  );
}

// 流程箭頭。用畫的 SVG,不拿 unicode 字元充當圖示。
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

// 背景圖打底,影片疊在中間。Banner 和 Solution 02 共用。
function VideoFrame({ src, background, label }) {
  return (
    <div
      className="rounded-sm overflow-hidden bg-cover bg-center px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <LazyVideo
        src={src}
        className="pointer-events-none mx-auto w-full max-w-4xl aspect-video rounded-sm object-cover shadow-2xl"
        aria-label={label}
      />
    </div>
  );
}

// 還沒有真實截圖時的佔位框,直接寫明這一格要放什麼。
function Shot({ src, alt, label, ratio = "aspect-[16/9]" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-2xl bg-[#F9F8F6] object-cover"
      />
    );
  }

  return (
    <div
      className={`${ratio} flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[#D6D3CE] bg-[#F9F8F6] px-6 text-center`}
    >
      <ImageIcon size={28} color={brandInk} weight="light" aria-hidden="true" />

      <p className={`${type.supporting} max-w-sm text-[#56534B]`}>{label}</p>
    </div>
  );
}

// 首頁的實際區塊順序,也是這個案子最核心的一個決定。
const homepageSequence = [
  "Hero",
  "About",
  "Service",
  "Testimonials",
  "Process",
  "Contact",
];

const challenges = [
  {
    index: "01",
    title: "Twenty years of judgement, none of it online",
    note: "It reached clients through referrals, meetings, and proposal decks.",
  },
  {
    index: "02",
    title: "Proof that cannot name the client",
    note: "HR work is confidential, so a logo wall was never an option.",
  },
  {
    index: "03",
    title: "One person builds it and keeps it running",
    note: "One person, three months, Vue 3 and GSAP. Any motion I could not maintain alone was not worth shipping.",
  },
];

const findings = [
  {
    index: "Finding 01",
    title: "She explains the person before the service.",
    implication:
      "Credibility first: portrait hero, then a three-chapter story.",
  },
  {
    index: "Finding 02",
    title: "Clients want the situation, not the client name.",
    implication: "Anonymous cases: industry, the problem, what changed.",
  },
  {
    index: "Finding 03",
    title: "The link gets forwarded to someone who was not in the meeting.",
    implication:
      "Each service becomes its own page, deep enough to be read cold.",
  },
];

const solutions = [
  {
    index: "01",
    title: "Credibility before the catalogue",
    note: "A sticky portrait hero that the About story scrolls up over: three chapters hold one screen while the image and copy change.",
    meta: "340vh wrapper · sticky 100svh stage · scale-in image stack",
    shot: "solution1",
    shotLabel:
      "Screenshot: the About scroll story on desktop, image left and chapter copy right.",
  },
  {
    index: "02",
    title: "Three services that read as one practice",
    note: "Three cards made fractional CHRO, HR system design, and training read as three separate products. Now one image expands into the first full-screen scene, and each scene keeps its own CTA.",
    meta: "人資顧問 · 共享人資長 · 客製化課程設計",
    shot: "solution2",
    video: Mojo_Service,
    background: Mojo_backgroundSol,
    shotLabel:
      "One full-screen service scene from the homepage narrative, with its CTA.",
  },
  {
    index: "03",
    title: "Proof without a single client name",
    note: "An anonymous carousel: industry, the situation at the time, and what changed, with the outcome as the largest text on the panel.",
    meta: "No logos · no portraits · outcome leads",
    shot: "solution3",
    shotLabel:
      "Screenshot: the anonymous case highlight panel on the homepage.",
  },
  {
    index: "04",
    title: "Two answers to “what happens next”",
    note: "The homepage answers what working together feels like. A service page answers how the engagement is actually run.",
    meta: "4-step engagement flow · 5D method on service pages",
    shot: "solution4",
    video: Mojo_Sol4_video,
    background: Mojo_Sol4_background,
    shotLabel:
      "The homepage engagement timeline, or the 5D method on a service page.",
  },
  {
    index: "05",
    title: "Motion that is safe to switch off",
    note: "One tested module decides the motion plan and which scenes stay interactive, so hidden content is never reachable by keyboard.",
    meta: "Needs viewport + hover + fine pointer · reduced motion falls back to document flow",
    shot: "solution5",
    images: [Mojo_Sol5, Mojo_Sol5_2],
    shotLabel:
      "Screenshot: the same section side by side, animated on desktop and in plain flow on mobile.",
  },
];

const shipped = [
  {
    title: "About before Service",
    note: "Six homepage sections, and the founder's story runs before the service list.",
  },
  {
    title: "Three shareable service URLs",
    note: "Each with its own metadata.",
  },
  {
    title: "Usable without motion",
    note: "Full content in plain document flow.",
  },
  {
    title: "Route-level measurement",
    note: "GA4 sends each route as itself.",
  },
];

const ProjectDetail_MoJoKing = () => {
  const project = {
    title: "MoJo King HR Consulting Website",
    platform: ["Website", "UX Strategy", "Front-end Development"],
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-5 sm:px-6 lg:px-8 text-[#111111]">
      <ProjectHero
        src={heroImageFor("/project/mojoking")}
        alt={project.title}
        className="-mt-24 -mx-5 sm:-mx-6 lg:-mx-8 mb-16 md:mb-24"
      />

      <div className="max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16 md:space-y-24"
        >
          {/* Title */}
          <header>
            <p className={`${type.label} text-[#737373] mb-4`}>
              慕玖 MoJo King
            </p>

            <h1 className={`${type.display} max-w-6xl text-[#242726]`}>
              An HR consulting practice, designed and built from 0 to 1
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {project.platform.map((item) => (
                <span
                  key={item}
                  className={`${type.supporting} text-[#555555]`}
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          {/* Banner */}
          <section>
            <VideoFrame
              src={Mojo_banner}
              background={Mojo_background}
              label="MoJo King homepage first viewport demo"
            />
          </section>

          {/* Meta */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8  pt-8">
            {[
              { label: "Role", value: "UI/UX Designer & Front-end Developer" },
              { label: "Timeline", value: "2026.06 - 2026.08" },
              {
                label: "Stack",
                value: "Vue 3 · TypeScript · Tailwind v4 · GSAP",
              },
              { label: "Live", value: "mojo-king.com" },
            ].map((item) => (
              <div key={item.label}>
                <p className={`${type.label} text-[#737373] mb-2`}>
                  {item.label}
                </p>

                <p className="text-base md:text-lg font-medium text-[#242726]">
                  {item.value}
                </p>
              </div>
            ))}
          </section>

          {/* 01 Overview */}
          <section>
            <SectionHeader
              index="01"
              name="Overview"
              title="A referral-driven consulting practice with no digital front door."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
              <p className={`${type.lead} lg:col-span-7 text-[#555555]`}>
                MoJo King is a Taiwan-based HR consulting firm providing
                fractional CHRO services, HR system design, and customized
                management training for mid-size and listed companies. The
                founder has more than 20 years of HR leadership experience
                across semiconductor, technology, manufacturing, and
                traditional industries.
              </p>

              <p className={`${type.lead} lg:col-span-7 text-[#555555]`}>
                All of that credibility lived in referrals, client meetings,
                and proposal decks. There was nowhere online for a potential
                client to understand the founder’s expertise, evaluate the
                services, or take a next step before making contact.
              </p>

              <p className={`${type.lead} lg:col-span-7 text-[#242726]`}>
                So the problem was never a missing website. Trust that had only
                ever travelled in person had to become a judgement a stranger
                could reach alone.
              </p>
            </div>

          </section>

          {/* 02 Challenge */}
          <section>
            <SectionHeader
              index="02"
              name="Challenge"
              title="The credibility was real. None of it was in a form a stranger could check."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
              {challenges.map((item) => (
                <div key={item.index} className=" pt-4">
                  <p
                    className={`${type.label} mb-2`}
                    style={{ color: brandInk }}
                  >
                    {item.index}
                  </p>

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

          {/* 03 Discovery */}
          <section>
            <SectionHeader
              index="03"
              name="Discovery"
              title="I started from how the founder already explains her value in a meeting."
            />

            <div className="space-y-8">
              {findings.map((finding) => (
                <div
                  key={finding.index}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-2  pt-5"
                >
                  <p
                    className={`${type.label} lg:col-span-2`}
                    style={{ color: brandInk }}
                  >
                    {finding.index}
                  </p>

                  <h4 className="lg:col-span-5 text-lg md:text-xl font-medium text-[#242726]">
                    {finding.title}
                  </h4>

                  <p
                    className={`${type.supporting} lg:col-span-5 text-[#555555]`}
                  >
                    {finding.implication}
                  </p>
                </div>
              ))}
            </div>

            {/* 三個發現最後決定的就是這條順序。它是這一頁唯一一張「解法本身」的圖,
                所以做成橫幅,不是段末的一排小 chip。About 上色,因為整個案子就卡在
                它排在 Service 前面這個決定。*/}
            <div className="mt-14 rounded-2xl bg-[#F9F8F6] px-5 py-8 sm:px-8 md:px-10 md:py-12">
              <p className={`${type.label} text-[#767676]`}>Homepage order</p>

              <div className="mt-6 overflow-x-auto pb-2">
                <ol className="flex min-w-max items-center gap-3 md:gap-4">
                  {homepageSequence.map((name, index) => (
                    <li key={name} className="flex items-center gap-3 md:gap-4">
                      {index > 0 ? <FlowArrow /> : null}

                      <span
                        className="rounded-xl bg-white px-5 py-4 md:px-6 md:py-5 text-base md:text-lg lg:text-xl font-medium"
                        style={
                          name === "About"
                            ? {
                                color: brandInk,
                                boxShadow: `inset 0 0 0 1.5px ${brand}`,
                              }
                            : { color: "#242726" }
                        }
                      >
                        {name}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className={`${type.body} mt-6 max-w-2xl text-[#555555]`}>
                About runs before Service. Every other decision on this page
                follows from that one.
              </p>
            </div>
          </section>

          {/* 04 Solution —— 圖先出現,文字只當圖說 */}
          <section className="space-y-14 md:space-y-20">
            <SectionHeader
              index="04"
              name="Solution"
              title="The website was the deliverable. The information architecture was the design work."
            />

            {solutions.map((item) => (
              <figure key={item.index}>
                <figcaption className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-3">
                  <div className="lg:col-span-5">
                    <p
                      className={`${type.label} mb-2`}
                      style={{ color: brandInk }}
                    >
                      {item.index}
                    </p>

                    <h4 className={`${type.feature} text-[#242726]`}>
                      {item.title}
                    </h4>
                  </div>

                  <div className="lg:col-span-7">
                    <p className={`${type.body} text-[#555555]`}>{item.note}</p>

                    <p className={`${type.supporting} mt-3 text-[#767676] mb-4`}>
                      {item.meta}
                    </p>
                  </div>
                </figcaption>
                {item.video ? (
                  <VideoFrame
                    src={item.video}
                    background={item.background}
                    label={item.shotLabel}
                  />
                ) : item.images ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {item.images.map((image, position) => (
                      <div
                        key={image}
                        className="aspect-[4/3] overflow-hidden rounded-sm bg-[#F9F8F6]"
                      >
                        <img
                          src={image}
                          alt={`${item.title} ${position + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Shot
                    src={shots[item.shot]}
                    alt={item.title}
                    label={item.shotLabel}
                  />
                )}
              </figure>
            ))}
          </section>

          {/* 05 Impact */}
          <section>
            <SectionHeader
              index="05"
              name="Impact"
              title="A practice that lived in proposal decks now has somewhere to send people."
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {shipped.map((item) => (
                <div key={item.title} className=" pt-4">
                  <h4 className="text-base md:text-lg font-medium text-[#242726]">
                    {item.title}
                  </h4>

                  <p className={`${type.supporting} mt-2 text-[#555555]`}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <p className={`${type.body} mt-12 max-w-2xl text-[#555555]`}>
              The site is too new to claim a conversion number, so I shipped
              the measurement instead. One limitation is still open: link
              previews fall back to the homepage card, because per-route
              metadata needs prerendering rather than another meta tag.
            </p>
          </section>

          {/* Reflection */}
          <section className="border-t border-[#e4e4e4] pt-10">
            <p className={`${type.label} text-[#737373] mb-5`}>Reflection</p>

            <p className={`${type.insight} max-w-4xl text-[#242726]`}>
              The hardest call was not the animation. It was pushing the
              service list, the thing a consulting site is supposed to lead
              with, down below the founder’s story, and trusting that a
              stranger needs to believe the person before the catalogue means
              anything.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail_MoJoKing;
