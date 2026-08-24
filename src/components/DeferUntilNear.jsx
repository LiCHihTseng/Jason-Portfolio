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
  idleTimeout = 10000,
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

    /*
      保險:IntersectionObserver 萬一沒觸發,內容也不能永遠不出現。
      用 requestIdleCallback 而不是固定倒數 —— 固定倒數會在啟動最忙的時候
      硬插進來(Lighthouse 不捲動,倒數一到就全部載入,正好計入 TBT)。
      改成等主執行緒真的空下來才做,idleTimeout 是最後的硬底線。
    */
    const idle = window.requestIdleCallback;
    const cancelIdle = window.cancelIdleCallback;
    const fire = () => setReady(true);

    const handle = idle
      ? idle(fire, { timeout: idleTimeout })
      : setTimeout(fire, idleTimeout);

    return () => {
      observer.disconnect();
      if (idle && cancelIdle) cancelIdle(handle);
      else clearTimeout(handle);
    };
  }, [rootMargin, idleTimeout]);

  return (
    <div ref={holderRef} style={ready ? undefined : { minHeight }}>
      {ready ? children : null}
    </div>
  );
}
