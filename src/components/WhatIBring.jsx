import { lazy, Suspense } from "react";
import DeferUntilNear from "./DeferUntilNear";

// ThreeFlipCard 會拉進 lottie-react(約 310KB,光求值就要 ~540ms),
// 不需要跟首屏搶主執行緒。
const ScrollStory = lazy(() => import("./ThreeFlipCard"));

export default function WhatIBring() {
  return (
    <DeferUntilNear>
      <Suspense fallback={null}>
        <ScrollStory />
      </Suspense>
    </DeferUntilNear>
  );
}
