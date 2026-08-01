// context/LenisContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // 關鍵①:lenis 滾動時,主動叫 ScrollTrigger 更新進度
    lenisInstance.on("scroll", ScrollTrigger.update);

    // 關鍵②:讓 GSAP 的 ticker 來驅動 lenis,而不是自己另開一條 rAF
    const update = (time) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // 關鍵③:關掉 GSAP 的 lag smoothing,不然長任務後的「跳幀追趕」
    // 會跟 lenis 的平滑滾動互相打架,造成頓挫感
    gsap.ticker.lagSmoothing(0);

    setLenis(lenisInstance);

    return () => {
      gsap.ticker.remove(update);
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}