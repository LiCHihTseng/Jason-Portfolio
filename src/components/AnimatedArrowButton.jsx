import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

/*
  這是純裝飾的箭頭:沒有 onClick,而且被放在 <Link> 裡面。
  用 <button> 的話會變成「互動元素巢狀在互動元素內」(無效 HTML),
  而且螢幕閱讀器會唸出一個沒有名字的按鈕。
  改成非互動元素並 aria-hidden —— 外層的 Link 已經說明了目的地。
*/
const AnimatedArrowButton = ({ isHovered = false }) => {
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        backgroundColor: isHovered ? "#ffffff" : "#ffffff",
        width: isHovered ? 48 : 24, // 48px = w-12, 24px = w-6
      }}
      transition={{ duration: 0.3 }}
      className="h-10 md:h-12 rounded-full flex items-center justify-center shadow-md overflow-hidden rotate-20"
    >
      <motion.span
        animate={{
          rotate: isHovered ? 70 : 0,
          color: isHovered ? "#000000" : "#000000",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowUpRight className="w-5 h-5 -rotate-45" />
      </motion.span>
    </motion.div>
  );
};

export default AnimatedArrowButton;
