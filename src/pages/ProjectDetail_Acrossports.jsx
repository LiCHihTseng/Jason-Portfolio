import { motion } from "framer-motion";
import Acrossports_1 from "../assets/img/Accrossport_1.avif";
import Acrossports_2 from "../assets/img/Accrossport_2.avif";
import ProjectHero from "../components/ProjectHero";
import { heroImageFor } from "../components/Project";

// 字級系統沿用 MoJo King / Chatstat 那一套,寫成完整字串常數,Tailwind 掃得到。
const type = {
  display:
    "text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.05] font-medium",
  chapter:
    "text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] leading-[1.15] font-medium",
  section:
    "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-[1.1] font-medium",
  insight:
    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] font-medium",
  lead: "text-[17px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.65]",
  body: "text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7]",
  supporting: "text-[14px] md:text-[15px] leading-[1.6]",
  label: "text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-medium",
};

const brandInk = "#1A4F8B";

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

const focusAreas = [
  {
    index: "01",
    title: "Sales trends",
    note: "How performance moves over time, not just where it stands today.",
  },
  {
    index: "02",
    title: "Platform performance",
    note: "Which channel carries the volume, and where the gap between them is widening.",
  },
  {
    index: "03",
    title: "Product performance",
    note: "Which products actually drive the numbers behind the totals.",
  },
  {
    index: "04",
    title: "Order activity",
    note: "The detail layer the team drops into once a number looks wrong.",
  },
];

const designShots = [
  {
    src: Acrossports_1,
    alt: "Acrossports dashboard overview screen",
  },
  {
    src: Acrossports_2,
    alt: "Acrossports dashboard detail screen",
  },
];

const ProjectDetail_Acrossports = () => {
  const project = {
    title: "Acrossports Internal Sales Dashboard",
    platform: ["Dashboard", "UI/UX Design", "Front-end Development"],
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-5 sm:px-6 lg:px-8 text-[#111111]">
      <ProjectHero
        src={heroImageFor("/project/acrossports")}
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
            <p className={`${type.label} text-[#737373] mb-4`}>Acrossports</p>

            <h1 className={`${type.display} max-w-6xl text-[#242726]`}>
              Turning a fixed sales dataset into a dashboard the team actually
              reads
            </h1>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {project.platform.map((item) => (
                <span key={item} className={`${type.supporting} text-[#555555]`}>
                  {item}
                </span>
              ))}
            </div>
          </header>

          {/* Meta */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 pt-8">
            {[
              { label: "Role", value: "UI/UX Designer & Front-end Developer" },
              { label: "Client", value: "Acrossports (footwear e-commerce)" },
              {
                label: "Stack",
                value: "React · Tailwind CSS · Node.js / Express · REST APIs",
              },
              { label: "Product", value: "Internal sales dashboard" },
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
              title="An internal dashboard for a business selling footwear across multiple online platforms."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
              <p className={`${type.lead} lg:col-span-12 text-[#555555]`}>
                Acrossports is an e-commerce business that sells footwear across
                multiple online platforms. In this project, I worked on the
                design and development of an internal dashboard that helped the
                team better understand sales performance across different
                channels.
              </p>

              <p className={`${type.lead} lg:col-span-12 text-[#242726]`}>
                My role covered both UI/UX design and front-end development,
                including dashboard structure, data presentation, responsive
                layouts, and implementation using React, Tailwind CSS, Node.js /
                Express, and REST APIs.
              </p>
            </div>
          </section>

          {/* 02 Challenge */}
          <section>
            <SectionHeader
              index="02"
              name="Challenge"
              title="The constraint was not too much data. It was a limited and fixed dataset."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
              <p className={`${type.lead} lg:col-span-12 text-[#555555]`}>
                The available data mainly focused on sales, products, orders,
                and platform performance. Because the dataset itself could not
                be expanded freely, I needed to think carefully about how the
                same information could be organized and visualized to provide
                more value to internal users.
              </p>
            </div>

            <div className="mt-12 px-5 py-8 sm:px-8 md:px-10 md:py-12 ">
              <p className={`${type.label} text-[#767676]`}>Key question</p>

              <p className={`${type.insight} mt-5 max-w-6xl text-[#8B0000]`}>
                How can we turn limited sales data into a dashboard that helps
                the team quickly understand what is happening and where they
                should focus their attention?
              </p>
            </div>

            <p className={`${type.body} mt-12 max-w-3xl text-[#555555]`}>
              Instead of adding unnecessary charts, I focused on identifying the
              most meaningful relationships within the existing data.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {focusAreas.map((item) => (
                <div key={item.index} className="pt-4">
                  <p className={`${type.label} mb-2`} style={{ color: brandInk }}>
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

          {/* 03 Design */}
          <section>
            <SectionHeader index="03" name="Design" />

            <div className="space-y-6 md:space-y-10">
              {designShots.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl bg-[#F7F8FA] object-cover"
                />
              ))}
            </div>
          </section>

          {/* 04 Outcome */}
          <section>
            <SectionHeader
              index="04"
              name="Outcome"
              title="Existing sales data, rebuilt into a structured and readable internal tool."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
              <p className={`${type.lead} lg:col-span-12 text-[#555555]`}>
                Rather than simply displaying numbers, the interface helped
                users understand overall performance, sales trends, platform
                differences, and detailed product or order information within a
                consistent dashboard structure.
              </p>
            </div>
          </section>

          {/* Reflection */}
          <section className="border-t border-[#e4e4e4] pt-10">
            <p className={`${type.label} text-[#737373] mb-5`}>Reflection</p>

            <p className={`${type.insight} max-w-6xl text-[#242726]`}>
              This project strengthened my ability to work with real data
              constraints and make design decisions based on both business needs
              and technical feasibility, while also taking the product from
              interface design into front-end implementation.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail_Acrossports;
