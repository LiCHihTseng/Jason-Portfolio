import { useState, useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 導入 useNavigate
import "./css/Banner.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import * as Icon from "@phosphor-icons/react";

export const ArrowRight = ArrowRightIcon;
import ScratchReveal from "./ScratchReveal";
import Lottie from "lottie-react";
import banner_phone from "../assets/img/avatar_phone.svg";

function Banner() {
  const scratchRef = useRef(null);
  const lottieRef = useRef();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

  const [size, setSize] = useState({ w: 0, h: 0 });
  const toRotate = [
    "Product Designer",
    "UI/UX Designer",
    "Web & Mobile Developer",
  ];
  const period = 1000;
  const navigate = useNavigate(); // 使用 useNavigate

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section id="home" className="relative w-full py-32 px-6">
      <div className="max-w-6xl mx-auto max-h-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
        >
          {/* ScratchReveal - 小螢幕在上，桌機在右 */}
          <div className="order-1 md:order-2 md:col-span-2 flex min-w-0">
            <div
              className="relative z-20 w-full cursor-pointer min-w-0"
              onClick={() => lottieRef.current?.play()}
            >
              {/* <ScratchReveal
                ref={scratchRef}
                className=" w-full max-w-[440px] md: aspect-[21/21] aspect-[21/10] mx-auto"
              /> */}

<img
  src={banner_phone}
  alt="Banner phone"
  className="w-full max-w-[440px] mx-auto"
/>
            </div>
          </div>

          {/* 文字內容 - 小螢幕在下，桌機在左 */}
          <div className="order-2 md:order-1 md:col-span-3">
            <h1 className="text-2xl md:text-3xl font-medium text-[#242736] leading-[1.15] font-[Rushford_Printer]">
              Hello, I'm
            </h1>

            <h1 className="text-7xl md:text-[100px] font-medium text-[#242736] leading-[1.15] font-[Rushford_Printer]">
              Jason Tseng
            </h1>
            <span className="text-4xl md:text-[60px] font-medium text-[#808080] leading-[1.15] font-[Rushford_Printer]">
              UI/UX & Product Designer
            </span>

            <div className="h-12 mb-10 mt-0">
              <h2 className="text-xl md:text-2xl font-normal font-[Inter]">
                <span className="text-[#808080]">
                  Bringing digital concepts to life in ways people{" "}
                  <span className="text-[#EC5C29]">love to use</span>
                </span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 mt-4">
              <motion.div className="inline-flex whitespace-nowrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    (window.location.href = "mailto:zxcjason234@gmail.com")
                  }
                  className="bg-[#EC5C29] text-[#ffffff] rounded-xl px-4 md:px-6 py-3 text-lg font-semibold flex items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <Icon.At size={30} weight="bold" className="mr-2" />
                  Contact me
                </motion.button>
              </motion.div>
              <div className="flex items-end text-[#616161] leading-tight mx-2 md:mx-10 mt-0 ">
                <span
                  className="mr-2 custom-underline cursor-pointer hover:text-[#FF540A] transition-colors font-semibold text-lg"
                  onClick={() => navigate("/about")}
                >
                  About me
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;
