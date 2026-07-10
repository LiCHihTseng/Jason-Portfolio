import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import userflow from "../assets/img/vrFurniture.png";
import miro from "../assets/img/vrFurniture.png";
import prototype1 from "../assets/img/vrFurniture.png";
import prototype2 from "../assets/img/vrFurniture.png";
import prototype3 from "../assets/img/vrFurniture.png";

const XR = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-6 pt-24 pb-16 text-[#111111]">
      <div className="mx-auto max-w-7xl">
        {/* ================= OVERVIEW ================= */}
        <section className="py-20">
          <h1 className="text-5xl font-bold">IFurniture: A</h1>
          <p className="mt-4 text-xl text-slate-600">
            Designing an Immersive Furniture Planning Experience
          </p>

          <div className="mt-10 ">
            <div>
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="mt-4 leading-8 text-slate-600 text-lg">
                IFurniture XR is a virtual reality furniture planning experience
                developed using Unity XR and Meta Quest. Users can place,
                resize, customise and preview furniture inside a virtual
                apartment before making purchasing decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Meta Quest",
                  "Unity XR",
                  "C#",
                  "XR Design",
                  "User Testing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <iframe
              className="mt-10 aspect-video w-full rounded-3xl"
              src="https://www.youtube.com/embed/aZOYscrcusE?autoplay=1&mute=1&loop=1&playlist=aZOYscrcusE&controls=1"
              title="IFurniture XR Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="py-20">
          <h2 className="mb-8 text-4xl font-bold">Problem & Opportunity</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-red-50 p-8">
              <h3 className="text-2xl font-bold">Problem</h3>
              <p className="mt-4 leading-8 text-slate-600">
                Traditional online furniture shopping makes it difficult for
                users to understand furniture dimensions, placement and room
                compatibility.
              </p>
            </div>

            <div className="rounded-3xl bg-green-50 p-8">
              <h3 className="text-2xl font-bold">Opportunity</h3>
              <p className="mt-4 leading-8 text-slate-600">
                Can XR help users visualise furniture in realistic environments
                before purchasing?
              </p>
            </div>
          </div>
        </section>

        {/* ================= DEVELOPMENT PROCESS ================= */}
        <section className="py-20">
          <h2 className="mb-8 text-4xl font-bold">Development Process</h2>

          <div className="grid gap-10 lg:grid-cols-2">
            <img
              src={userflow}
              alt="User Flow"
              className="rounded-3xl shadow-lg"
            />

            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-100 p-5">
                Prototype 1 → Interaction Validation
              </div>
              <div className="rounded-2xl bg-slate-100 p-5">
                Prototype 2 → Feature Expansion
              </div>
              <div className="rounded-2xl bg-slate-100 p-5">
                Prototype 3 → Usability Refinement
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECT MANAGEMENT ================= */}
        <section className="py-20">
          <h2 className="mb-8 text-4xl font-bold">Project Management</h2>

          <div className="grid gap-10 lg:grid-cols-2">
            <img src={miro} alt="Miro" className="rounded-3xl shadow-lg" />

            <div className="space-y-4 leading-8 text-slate-600">
              <p>• Weekly planning using Figma</p>
              <p>• Managed 3 major design iterations</p>
              <p>• Tracked testing results and user feedback</p>
              <p>• Prioritised features based on user insights</p>
            </div>
          </div>
        </section>

        {/* ================= FEEDBACK ================= */}
        <section className="py-20">
          <h2 className="mb-12 text-4xl font-bold">User Feedback Overview</h2>

          <div className="space-y-12">
            {/* Prototype 1 */}
            <div className="grid gap-8 lg:grid-cols-[250px_1fr_1fr]">
              <div className="flex items-start">
                <div className="rounded-2xl border-2 border-slate-300 px-6 py-4">
                  <h3 className="text-3xl font-bold">Prototype 1</h3>

                  <p className="mt-2 text-lg text-slate-600">
                    Low-Fidelity Prototype
                  </p>
                </div>
              </div>

              {/* User Insights */}
              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  User Insights
                </h4>

                <ul className="space-y-4 text-lg">
                  <li>
                    • Users preferred the <b>VR Hand Method</b> over the Garage
                    Method.
                  </li>

                  <li>
                    • Direct furniture manipulation felt faster and more
                    intuitive.
                  </li>

                  <li>
                    • The garage interaction disrupted task flow and increased
                    completion time.
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  Key Implemented Features
                </h4>

                <div className="space-y-3 text-lg">
                  <p>✅ VR Hand Interaction</p>
                  <p>✅ Furniture Placement</p>

                  <p className="pt-4">❌ Garage Method</p>
                  <p>❌ Complex Navigation Flow</p>
                </div>
              </div>
            </div>

            {/* Prototype 2 */}
            <div className="grid gap-8 lg:grid-cols-[250px_1fr_1fr]">
              <div>
                <div className="rounded-2xl border-2 border-slate-300 px-6 py-4">
                  <h3 className="text-3xl font-bold">Prototype 2</h3>

                  <p className="mt-2 text-lg text-slate-600">VR Prototype</p>
                </div>
              </div>

              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  User Insights
                </h4>

                <ul className="space-y-4 text-lg">
                  <li>• Users wanted icons in the radial menu.</li>

                  <li>• Users requested onboarding guidance.</li>

                  <li>• Distance grab was highly requested.</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  Key Implemented Features
                </h4>

                <div className="space-y-3 text-lg">
                  <p>✅ Radial Menu</p>
                  <p>✅ One-Hand Grab</p>
                  <p>✅ Two-Hand Resizing</p>

                  <p className="pt-4">⚠️ Missing Furniture Icons</p>
                  <p>⚠️ No Onboarding Tutorial</p>

                  <p className="pt-4">❌ Distance Grab</p>
                </div>
              </div>
            </div>

            {/* Prototype 3 */}
            <div className="grid gap-8 lg:grid-cols-[250px_1fr_1fr]">
              <div>
                <div className="rounded-2xl border-2 border-slate-300 px-6 py-4">
                  <h3 className="text-3xl font-bold">Prototype 3</h3>

                  <p className="mt-2 text-lg text-slate-600">
                    Final VR Prototype
                  </p>
                </div>
              </div>

              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  User Insights
                </h4>

                <ul className="space-y-4 text-lg">
                  <li>
                    • Startup guidelines improved onboarding significantly.
                  </li>

                  <li>• Users wanted multiple rooms for exploration.</li>

                  <li>• Budget overview should include furniture images.</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 inline-block rounded-xl border-2 border-slate-300 px-6 py-2 text-2xl font-bold">
                  Key Implemented Features
                </h4>

                <div className="space-y-3 text-lg">
                  <p>✅ Furniture Icons</p>
                  <p>✅ Startup Guidelines</p>
                  <p>✅ Price Overview System</p>
                  <p>✅ Dynamic Furniture Resizing</p>

                  <p className="pt-4">⚠️ Total Budget Improvements</p>

                  <p>❌ Room Switching</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROTOTYPES ================= */}
        {[
          {
            title: "Prototype 1 & User Testing 1",
            img: prototype1,
            goal: "Validate furniture placement interactions.",
            points: [
              "✓ Users preferred VR Hand Method",
              "✓ Faster task completion",
              "✓ Higher satisfaction score",
              "→ Garage Method was removed from future iterations.",
            ],
          },
          {
            title: "Prototype 2 & User Testing 2",
            img: prototype2,
            goal: "Introduce radial menu and furniture resizing.",
            points: [
              "✓ Resizing interaction worked well",
              "• Missing furniture icons",
              "• Need onboarding tutorial",
              "• Users requested distance grab",
            ],
          },
          {
            title: "Prototype 3 & User Testing 3",
            img: prototype3,
            goal: "Improve onboarding, usability and budgeting experience.",
            points: [
              "✓ Users completed tasks independently",
              "✓ Price overview was useful",
              "✓ Furniture icons improved usability",
              "• Users wanted room switching",
            ],
          },
        ].map((item) => (
          <section key={item.title} className="py-20">
            <h2 className="mb-8 text-4xl font-bold">{item.title}</h2>

            <div className="grid gap-10 lg:grid-cols-2">
              <img src={item.img} alt={item.title} className="rounded-3xl" />

              <div>
                <p className="font-bold">Goal</p>
                <p className="mt-2 leading-8 text-slate-600">{item.goal}</p>

                <ul className="mt-6 space-y-2 text-slate-600">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* ================= OUTCOME ================= */}
        <section className="py-20">
          <h2 className="mb-8 text-4xl font-bold">Outcome</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Validated immersive furniture planning experience",
              "Users preferred direct VR interactions",
              "Improved onboarding reduced confusion",
              "Budget overview supported purchasing decisions",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-slate-100 p-6">
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= FUTURE ================= */}
        <section className="py-20">
          <h2 className="mb-8 text-4xl font-bold">Development In Progress</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Room Switching",
              "Distance Grab",
              "Furniture Preview Images",
              "Total Budget Improvements",
              "Save Room Layouts",
              "Real IKEA Product Integration",
            ].map((item) => (
              <div key={item} className="rounded-2xl border p-5">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default XR;
