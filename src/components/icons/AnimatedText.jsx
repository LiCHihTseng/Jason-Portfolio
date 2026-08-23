import { motion } from "framer-motion";

function AnimatedText({
  text,
  className = "",
  highlightWords = [],
  delay = 0,
  trailingElement = null, // 新增:插在最後一個詞後面的額外元素(例如圖示)
  onComplete, // 整段文字(含所有子項)播完後觸發
}) {
  const words = text.split(" ");

  // 共用的 variants,讓 trailingElement 也能套用跟文字一樣的進場動畫節奏,
  // 不用另外寫一套動畫邏輯,直接沿用現有的 hidden/visible 定義
  // 只動 opacity 與 y(transform),兩者都能交給合成器,不會觸發重排/重繪。
  // 原本還animate了 filter: blur(),但 filter 沒辦法合成,每一幀都要重繪
  // 整段文字 —— 那才是這段動畫會卡的主因。
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.06,
          },
        },
      }}
      onAnimationComplete={onComplete}
      className={className}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWords.includes(word.replace(",", ""));

        return (
          <motion.span
            key={index}
            variants={wordVariants}
            whileHover={
              isHighlight
                ? {
                    scale: 1.05,
                    y: -2,
                    color: "#EC5C29",
                    rotate: -2,
                  }
                : {}
            }
            className={`
              inline-block
              mr-3
              ${isHighlight ? "cursor-pointer origin-center" : ""}
            `}
          >
            {word}
          </motion.span>
        );
      })}

      {/* trailingElement 是 stagger 序列裡的「最後一個 child」,
          因為它跟前面每個詞共用同一個 motion.h1 父層的 staggerChildren 機制,
          會自動排在最後一個詞播完之後的下一個時間點觸發,不需要手動計算延遲時間 */}
      {trailingElement && (
        <motion.span
          variants={wordVariants}
          className="inline-block align-middle"
        >
          {trailingElement}
        </motion.span>
      )}
    </motion.h1>
  );
}

export default AnimatedText;