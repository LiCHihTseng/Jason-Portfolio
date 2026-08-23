import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./css/Banner.css";
import banner_phone from "../assets/img/avatar.avif";
import AnimatedText from "./icons/AnimatedText";
import { At, ArrowDownIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import Wheel from "../assets/img/wheel.svg?react";

function Banner() {
  // 標題全部播完才顯示 Scroll Down,不用手動算延遲時間
  const [introDone, setIntroDone] = useState(false);
  const wheelRef = useRef(null);
  const lottieRef = useRef();

  useEffect(() => {
    const anim = gsap.to(wheelRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });

    return () => anim.kill();
  }, []);

  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex
      items-center
      px-6 sm:px-8 md:px-10 lg:px-16
    "
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 lg:gap-10 items-center">
          <div className="order-1 md:order-2 md:col-span-2 flex min-w-0">
            <div
              className="relative z-20 w-full cursor-pointer min-w-0"
              onClick={() => lottieRef.current?.play()}
            ></div>
          </div>

          {/* 文字內容 - 小螢幕在下，桌機在左 */}
          <div className="order-2 md:order-1 md:col-span-4">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {/* 第一行 */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
                <AnimatedText
                  text="Hi, I'm Jason"
                  highlightWords={["Jason"]}
                  className="
        text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium text-[#242736] leading-[1.15] font-['Inter']"
                />

                <motion.img
                  src={banner_phone}
                  alt="Jason Tseng"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: -5,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -6,
                    rotate: 2,
                    boxShadow: "0 25px 60px rgba(236,92,41,0.15)",
                  }}
                  className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 object-cover rounded-lg hover:border-[#EC5C29] shadow-lg cursor-pointer transition-all duration-300"
                />
              </div>

              {/* 第二行 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <AnimatedText
                  text="Product Designer bridging design, technology, and user needs."
                  delay={0.45}
                  trailingElement={
                    <div
                      ref={wheelRef}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline-block"
                      style={{ color: "#EC5C29" }}
                    >
                      <Wheel className="w-full h-full" />
                    </div>
                  }
                  className=" text-xl sm:text-2xl  md:text-4xl lg:text-5xl font-medium text-[#242736] leading-[1.3] font-['Inter']"
                />
              </div>
            </div>

            <div className="mb-6 md:mb-10 mt-3 md:mt-4">
              <h2>
                <AnimatedText
                  text="Bringing digital concepts to life in ways people love to use"
                  highlightWords={["love", "to", "use"]}
                  delay={1}
                  onComplete={() => setIntroDone(true)}
                  className="
    text-xl
    sm:text-lg
    md:text-2xl
    lg:text-4xl
    font-normal
    text-[#808080]
    font-['Inter']
  "
                />
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 mt-3 md:mt-4 lg:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.9,
                  duration: 0.6,
                }}
                className="inline-flex whitespace-nowrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    (window.location.href = "mailto:zxcjason234@gmail.com")
                  }
                  className="bg-[#EC5C29] text-[#ffffff] rounded-full px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-lg md:text-xl font-semibold flex items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <At weight="bold" className="w-6 h-6 sm:w-5 sm:h-5 mr-2" />
                  Contact me
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
    absolute
    bottom-6 sm:bottom-8 md:bottom-10
    left-1/2
    -translate-x-1/2

    flex
    flex-col
    items-center
    gap-2

    text-[#808080]
  "
      >
        <span
          className="
      text-sm
      sm:text-base
      uppercase
      tracking-[0.2em]
      sm:tracking-[0.3em]
      font-medium
      font-['Inter']
    "
        >
          Scroll Down
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDownIcon size={24} weight="light" className="sm:w-7 sm:h-7" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Banner;
