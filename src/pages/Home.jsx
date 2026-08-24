import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Projects from "../components/Project";
import WhatICanDo from "../components/WhatICanDo";
import WhatIBring from "../components/WhatIBring";
import ScrollPanel, { PANELS } from "../components/ScrollPanel";
import DeferUntilNear from "../components/DeferUntilNear";
function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scrollTo");
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // optional delay for animations to settle
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // 或 auto
    });
  }, []);

  return (
    <main className="flex flex-col gap-10 sm:gap-14 md:gap-20 lg:gap-28">
      <Banner />
      <WhatIBring />
      <Projects />
      {/* 這兩段都在首屏以下,但掛載時會建立 ScrollTrigger、量尺寸,
          擠在啟動時會拉高 TBT —— 延到接近視窗再掛。 */}
      <DeferUntilNear minHeight="200vh">
        <section className="">
          {PANELS.map((panel) => (
            <ScrollPanel key={panel.number} panel={panel} />
          ))}
        </section>
      </DeferUntilNear>

      <DeferUntilNear minHeight="120vh">
        <WhatICanDo />
      </DeferUntilNear>
    </main>
  );
}

export default Home;
