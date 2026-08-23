import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";

const DelayedLoopLottie = ({
  path,
  delay = 5000,
  width = "30%",
  height = "40%",
}) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleComplete = () => {
    timeoutRef.current = setTimeout(() => {
      ref.current?.goToAndPlay(0, true);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-fit rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <Lottie
      lottieRef={ref}
      path={path}
      autoplay={true}
      loop={false}
      onComplete={handleComplete}
      style={{ width, height }}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid meet",
      }}
    />
    </div>

  );
};

export default DelayedLoopLottie;