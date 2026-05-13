import React from "react";
import { motion } from "framer-motion";
import chatstat_banner from "../assets/img/chatstat_Banner.png";

const ProjectDetail_Chatstat = () => {
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
              { label: "Team", value: "Product & Marketing" },
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
              <p className="text-sm text-[#777777] mb-2">Overview</p>
              <h2 className="text-2xl md:text-3xl font-medium text-[#242726]">
                Improving homepage clarity and trust
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-base md:text-lg leading-8 text-[#444444]">
                At Chatstat, I worked on improving the homepage experience by
                refining content hierarchy, CTA clarity, trust-building
                sections, and visual consistency across the website. The goal
                was to help first-time visitors understand the product value
                more quickly and create a clearer path toward onboarding.
              </p>
            </div>
          </section>

          {/* Problem */}
          <section className="bg-[#f8f8f8] rounded-3xl p-6 sm:p-8 md:p-10">
            <p className="text-sm text-[#777777] mb-2">Problem</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#242726]">
              The homepage had useful information, but the user journey lacked
              clarity.
            </h2>

            <p className="text-base md:text-lg leading-8 text-[#444444] mb-6">
              Although the homepage contained detailed product information,
              several UX and communication issues made it difficult for users to
              quickly understand the product value and navigate the experience
              confidently.
            </p>

            <ul className="space-y-3 text-base md:text-lg text-[#444444]">
              <li>• Inconsistent CTA messaging within the hero section</li>
              <li>
                • Fragmented feature communication across multiple sections
              </li>
              <li>• Low visibility of important product features</li>
              <li>• Weak trust-building through testimonials</li>
              <li>• Inconsistent layout patterns across supporting pages</li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-sm text-[#777777] mb-2">Challenges</p>
              <h2 className="text-2xl md:text-3xl font-medium text-[#242726]">
                Balancing UX improvements with business and content needs
              </h2>
            </div>

            <div className="md:col-span-2 space-y-5 text-base md:text-lg leading-8 text-[#444444]">
              <p>
                One of the main challenges was improving the homepage experience
                without completely redesigning the existing website structure.
              </p>

              <p>
                The project required balancing stakeholder expectations,
                existing brand direction, marketing communication goals, and UX
                best practices. Since the platform targeted both parents and
                educational audiences, trust and communication tone also needed
                careful consideration.
              </p>
            </div>
          </section>

          {/* Design Improvements */}
          <section>
            <div className="mb-10">
              <p className="text-sm text-[#777777] mb-2">Design Improvements</p>
              <h2 className="text-2xl md:text-3xl font-medium text-[#242726]">
                Key areas I improved
              </h2>
            </div>

            <div className=" gap-5">
              {improvements.map((item, index) => (
                <div
                  key={index}
                  className=" grid grid-cols-1 md:grid-cols-2 m-5 rounded-3xl p-6 sm:p-8 bg-white border border-[#eeeeee] shadow-sm"
                >
                  <div>
                  <div className="w-10 h-10 rounded-full bg-[#f6f5f5] flex items-center justify-center mb-5 text-sm font-medium">
                    {index + 1}
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#242726]">
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg leading-8 text-[#444444]">
                    {item.description}
                  </p>
                  </div>
                 

                  <div className="mt-8 overflow-hidden rounded-2xl border border-[#eeeeee]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover transition duration-300 hover:scale-[1.01]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial Example */}
          <section className="bg-[#242726] text-white rounded-3xl p-6 sm:p-8 md:p-12 ">
            <p className="text-sm text-white/60 mb-4">Trust Building Example</p>

            <blockquote className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium mb-6">
              “Chatstat has been a game-changer for my family’s online safety.
              Its AI flags risks, helping me talk openly with my kids and feel
              confident they’re protected.”
            </blockquote>

            <p className="text-white/70">— Jessica, mother of two</p>
          </section>

          {/* Outcome */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-sm text-[#777777] mb-2">Outcome</p>
              <h2 className="text-2xl md:text-3xl font-medium text-[#242726]">
                A clearer direction for future homepage iterations
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-base md:text-lg leading-8 text-[#444444] mb-6">
                The proposed redesign direction helped align stakeholders around
                a clearer homepage communication strategy and established a
                stronger foundation for future UX iterations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "CTA clarity",
                  "Information hierarchy",
                  "Content scanability",
                  "Trust-building communication",
                  "Cross-page consistency",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f8f8f8] rounded-2xl px-5 py-4 text-[#242726]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg leading-8 text-[#444444] mt-6">
                While the final version was not fully deployed at the time, the
                project helped shape future UX discussions and provided a more
                user-centered direction for the homepage experience.
              </p>
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
