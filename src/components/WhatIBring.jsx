import { lazy, Suspense, useEffect, useRef, useState } from "react";

/*
  ThreeFlipCard 會拉進 lottie-react(約 310KB,光是求值就要 ~540ms)。
  它是首頁第二段,不需要跟首屏搶主執行緒 —— 等捲到附近再載。
  rootMargin 400px:在進入視窗之前就開始載,使用者不會看到空白。
*/
const ScrollStory = lazy(() => import("./ThreeFlipCard"));

export default function WhatIBring() {
  const holderRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(holder);

    // 保險:IntersectionObserver 萬一沒觸發,也不能讓整段內容永遠不出現。
    // 2.5 秒仍然避開了首屏的關鍵路徑。
    const failsafe = setTimeout(() => setShouldLoad(true), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  // 佔位高度對齊 ThreeFlipCard 的 min-h-screen,避免它掛載時版面跳動
  return (
    <div ref={holderRef} className="min-h-screen">
      {shouldLoad ? (
        <Suspense fallback={null}>
          <ScrollStory />
        </Suspense>
      ) : null}
    </div>
  );
}
