import { useLocation, Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

// 使用 motion 對 ArrowOutwardIcon 進行動畫包裝
const MotionArrowOutwardIcon = motion(ArrowOutwardIcon);
// 使用 motion 對 Link 進行動畫包裝
const MotionLink = motion(Link);

function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  // 定義動畫變體，使用 fill 屬性控制 SVG 顏色
  const arrowVariants = {
    initial: { rotate: 0, fill: "#111111" }, // 初始黑色
    hover: {
      rotate: 45,
      fill: "#828282", // 懸停時與文字相同的顏色
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // 定義文字的動畫變體，控制文字顏色
  const textVariants = {
    initial: { color: "#111111" }, // 初始黑色
    hover: {
      color: "#828282", // 懸停時變為灰色
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger child elements by 0.2 seconds
      },
    },
  };

  return (
    <motion.footer
      className={`border-t border-white/10 ${isAboutPage ? "pt-16" : "py-16"}`}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.01 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {/* Hello and Introduction Section */}
          {!isAboutPage && (
            <>
              <div className="flex flex-wrap">
                <div className="w-full md:basis-1/3">
                  <h3 className="text-4xl font-bold mb-4 text-[#111111]">
                    Hello.
                  </h3>
                </div>
                <div className="w-full md:basis-2/3">
                  <p className="text-[#111111] text-2xl font-medium">
                    Hi, I’m Jason Tseng — a designer from Taiwan with a
                    background in coding. I craft intuitive, engaging
                    experiences by blending creativity with technical know-how.
                    This site was fully designed and coded with love ❤️.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full md:basis-1/3">
                  <h4 className="text-2xl font-semibold mb-4 text-[#111111]">
                    How I Can Help
                  </h4>
                </div>
                <div className="w-full md:basis-2/3">
                  <p className="text-[#111111] text-xl">
                    With a coding background, I design with implementation in
                    mind — helping teams create practical, beautiful solutions
                    and easily collaborate with developers.
                  </p>
                </div>
              </div>
            </>
          )}
          {isAboutPage && (
            <div className="flex flex-wrap">
              <div className="w-full md:basis-1/3">
                <h3 className="text-4xl font-bold mb-4 text-[#111111]">
                  Get In Touch?
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Let's Connect Section */}
        <div className="flex flex-wrap justify-between items-center mt-12 border-t border-b border-white/10 py-4">
          <h4 className="text-2xl font-semibold text-[#111111] w-full md:basis-1/3">
            Let's Connect
          </h4>
          <ul className="space-y-4 w-full md:basis-2/3">
            <li>
              <motion.div
                className="flex items-center w-full cursor-pointer"
                whileHover="hover"
                initial="initial"
                onClick={() =>
                  (window.location.href = "mailto:zxcjason234@gmail.com")
                }
              >
                <MotionLink
                  to="mailto:zxcjason234@gmail.com"
                  className="text-xl font-medium"
                  variants={textVariants}
                >
                  Email
                </MotionLink>
                <motion.div
                  className="ml-auto"
                  style={{ transformOrigin: "center" }}
                >
                  <MotionArrowOutwardIcon
                    className="ml-2"
                    variants={arrowVariants}
                  />
                </motion.div>
              </motion.div>
            </li>
            <li className="border-t border-[#5656564d]"></li>
            <li>
              <motion.div
                className="flex items-center w-full cursor-pointer"
                whileHover="hover"
                initial="initial"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/li-chih-tseng-jason-22933319a/")
                }
              >
                <MotionLink
                  to="https://www.linkedin.com/in/li-chih-tseng-jason-22933319a/"
                  className="text-xl font-medium"
                  variants={textVariants}
                >
                  LinkedIn
                </MotionLink>
                <motion.div
                  className="ml-auto"
                  style={{ transformOrigin: "center" }}
                >
                  <MotionArrowOutwardIcon
                    className="ml-2"
                    variants={arrowVariants}
                  />
                </motion.div>
              </motion.div>
            </li>
            <li className="border-t border-[#5656564d]"></li>
            <li>
              <motion.div
                className="flex items-center w-full cursor-pointer"
                whileHover="hover"
                initial="initial"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/11Y2cjn01OTxNDOlTFmH17iGv6rflAWp8/view?usp=sharing")
                }
              >
                <MotionLink
                  to="https://drive.google.com/file/d/11Y2cjn01OTxNDOlTFmH17iGv6rflAWp8/view?usp=sharing"
                  className="text-xl font-medium"
                  variants={textVariants}
                >
                  CV
                </MotionLink>
                <motion.div
                  className="ml-auto"
                  style={{ transformOrigin: "center" }}
                >
                  <MotionArrowOutwardIcon
                    className="ml-2 text-xl"
                    variants={arrowVariants}
                  />
                </motion.div>
              </motion.div>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-[#111111]/50 text-sm">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
