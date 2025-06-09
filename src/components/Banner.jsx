import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 導入 useNavigate
import "./css/Banner.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const ArrowRight = ArrowRightIcon;

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
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
    <section id="home" className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-[#111111] rounded-full mr-2"></div>
            <span className="inline-block py-2 text-base font-medium text-[#111111] rounded-full">
              Welcome to my Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-[#111111]">
            Designing with <span className="text-black-500">Empathy</span>.
            <br />
            <span className="text-gray-600">
              Turning user insights into meaningful experiences.
            </span>
          </h1>

          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-medium">
              <span className="text-green-600">
                <span className="border-r-2 border-green-600 pr-1">{text}</span>
              </span>
            </h2>
          </div>

          <div className="flex justify-between">
            <motion.div className="inline-flex whitespace-nowrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href = "mailto:zxcjason234@gmail.com")
                }
                className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                Contact me! <ArrowRightIcon className="ml-2" />
              </motion.button>
            </motion.div>
            <div className="flex items-end text-[#616161] leading-tight">
              <span
                className="mr-2 custom-underline cursor-pointer hover:text-black transition-colors"
                onClick={() => navigate("/about")}
              >
                More about me <ArrowRightAltIcon fontSize="small" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;