import { useEffect, useRef, useState } from "react";

/*
  把首屏以下的區塊延到快要看到時才掛載。

  這些區塊在掛載當下會做不少同步的重活 —— 建立 ScrollTrigger、量元素尺寸、
  切字。全部擠在啟動時就會拉高 Total Blocking Time,而使用者當下根本還看不到它們。

  rootMargin 預設 400px:在進入視窗之前就先掛好,捲到時已經準備完成。
  minHeight 用來佔位,晚一點掛載才不會讓版面跳動。
*/
export default function DeferUntilNear({
  children,
  minHeight = "100vh",
  rootMargin = "400px 0px",
  fallbackDelay = 2500,
}) {
  const holderRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(holder);

    // 保險:IntersectionObserver 萬一沒觸發,內容也不能永遠不出現。
    // 這個延遲仍然避開了首屏的關鍵路徑。
    const failsafe = setTimeout(() => setReady(true), fallbackDelay);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [rootMargin, fallbackDelay]);

  return (
    <div ref={holderRef} style={ready ? undefined : { minHeight }}>
      {ready ? children : null}
    </div>
  );
}
