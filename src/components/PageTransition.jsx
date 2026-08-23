"use client";

import { useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SLIDE_DURATION = 0.7;

/*
  換頁時新的頁面整塊從畫面底部往上滑進來。

  transform 只在動畫進行中存在,結束立刻清掉 —— 這點很重要:
  頁面裡有 position: fixed 的東西(Home 的 hover 預覽、專案頁右下角的
  「Back Home」按鈕),只要祖先留著 transform,它們的定位基準就會從視窗
  變成那個祖先,結果就是不會固定、跟著內容一起捲走。
  clearProps 之後這些元素恢復正常。

  滑動中會暫時給 wrapper relative + z-index,讓它蓋在 Footer 之上,
  結束後連同 transform 一起清掉 —— 不留常駐的 z-index 是刻意的:
  那會形成堆疊環境,把 Home 的 hover 預覽(z-50)困在 Navbar(z-50)底下。
*/
export default function PageTransition({ children }) {
  const location = useLocation();
  const wrapperRef = useRef(null);
  // 記住上一次的路徑,而不是用「是不是第一次 render」來判斷。
  // StrictMode 在開發模式會把 effect 跑兩次,用旗標的話第二次就會誤播動畫。
  const prevPath = useRef(location.pathname);

  useGSAP(
    () => {
      // 路徑沒變(初次載入,或 StrictMode 重跑)就不播
      if (prevPath.current === location.pathname) return;
      prevPath.current = location.pathname;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // 只在動畫期間墊高,蓋住下方的 Footer
      gsap.set(wrapperRef.current, { position: "relative", zIndex: 10 });

      gsap.fromTo(
        wrapperRef.current,
        { y: () => window.innerHeight },
        {
          y: 0,
          duration: SLIDE_DURATION,
          ease: "power3.out",
          onComplete: () => {
            // 全部清掉:transform 會弄壞底下的 position: fixed,
            // 常駐的 z-index 則會形成堆疊環境壓到 hover 預覽
            gsap.set(wrapperRef.current, {
              clearProps: "transform,position,zIndex",
            });
            // 版面整個換過,依官方建議重算 ScrollTrigger 位置
            ScrollTrigger.refresh();
          },
        }
      );
    },
    { dependencies: [location.pathname] }
  );

  return (
    <div ref={wrapperRef} className="bg-white">
      {children}
    </div>
  );
}
