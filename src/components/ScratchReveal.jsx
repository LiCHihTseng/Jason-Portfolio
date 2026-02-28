import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import banner from "../assets/img/GIF/Banner.json";
import banner_phone from "../assets/img/avatar_phone.svg";
import OverlayImg from "../assets/img/Overlay.svg";
import * as Icon from "@phosphor-icons/react";

const ScratchReveal = forwardRef(function ScratchReveal(
  { className = "" },   // 👈 這裡把 className 從 props 拿出來
  ref
) {
  const overlayImage = OverlayImg;
  const brushRadius = 36;
  const minPointGap = 8;

  const lottieRef = useRef(null);
  const refContainer = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [points, setPoints] = useState([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  // ✅ 判斷螢幕大小（手機或平板）
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ 容器大小偵測
  useEffect(() => {
    const el = refContainer.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // --- 工具函式 ---
  const toLocal = (clientX, clientY) => {
    const box = refContainer.current?.getBoundingClientRect();
    if (!box) return { x: 0, y: 0 };
    const x = clientX - box.left;
    const y = clientY - box.top;
    return {
      x: Math.max(0, Math.min(x, size.w)),
      y: Math.max(0, Math.min(y, size.h)),
    };
  };

  const addPoint = (pt) => {
    setPoints((prev) => {
      const last = prev[prev.length - 1];
      if (!last) return [pt];
      const dx = pt.x - last.x;
      const dy = pt.y - last.y;
      if (dx * dx + dy * dy > minPointGap * minPointGap) return [...prev, pt];
      return prev;
    });
  };

  // --- 刮除互動 ---
  const onPointerDown = (e) => {
    if (isMobile) return;
    e.preventDefault();
    const { x, y } = toLocal(
      e.clientX ?? e.touches?.[0]?.clientX,
      e.clientY ?? e.touches?.[0]?.clientY
    );
    setIsScratching(true);
    addPoint({ x, y });
    setCursor({ x, y, visible: true });
  };

  const onPointerMove = (e) => {
    if (isMobile) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;
    if (clientX == null || clientY == null) return;
    const { x, y } = toLocal(clientX, clientY);
    setCursor((c) => ({ ...c, x, y, visible: true }));
    if (isScratching) addPoint({ x, y });
  };

  const onPointerUp = () => setIsScratching(false);
  const onPointerLeave = () => setCursor((c) => ({ ...c, visible: false }));

  // --- 外部可呼叫的方法 ---
  useImperativeHandle(ref, () => ({
    play: () => lottieRef.current?.play(),
    stop: () => lottieRef.current?.stop(),
    reset: () => {
      setPoints([]);
      lottieRef.current?.stop();
    },
  }));

  const handleReset = () => {
    setPoints([]);
    setCursor((c) => ({ ...c, visible: false }));
    lottieRef.current?.stop();
  };

  // --- 自動播放控制 ---
  const revealedPercent = useMemo(() => {
    if (!size.w || !size.h) return 0;
    if (points.length === 0) return 0;
    const step = brushRadius * 2;
    let visibleCells = 0;
    let totalCells = 0;
    for (let y = brushRadius; y < size.h; y += step) {
      for (let x = brushRadius; x < size.w; x += step) {
        totalCells++;
        const any = points.some((p) => {
          const dx = x - p.x;
          const dy = y - p.y;
          return dx * dx + dy * dy <= brushRadius * brushRadius;
        });
        if (any) visibleCells++;
      }
    }
    return Math.round((visibleCells / totalCells) * 100);
  }, [points, size.w, size.h, brushRadius]);

  useEffect(() => {
    if (!isMobile && revealedPercent >= 80 && lottieRef.current) {
      lottieRef.current.play();
    }
  }, [isMobile, revealedPercent]);

  // --- JSX ---
  return (
    <div className={className}>
      {/* 這一層會被外面的 width/height/aspect 控制 */}
      <div
        ref={refContainer}
        className="relative w-full h-full overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerLeave}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="revealMask">
              <rect x="0" y="0" width={size.w} height={size.h} fill="white" />
              {!isMobile &&
                points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={brushRadius}
                    fill="black"
                  />
                ))}
            </mask>
          </defs>

          {isMobile ? (
            // 📱 手機顯示靜態圖
            <image
              href={banner_phone}
              x={-40}
              y={0}
              width={size.w}
              height={size.h}
              preserveAspectRatio="xMidYMid slice"
            />
          ) : (
            <>
              {/* 💻 桌機：底圖 */}
              <image
                href={banner_phone}
                x={0}
                y={0}
                width={size.w}
                height={size.h}
                preserveAspectRatio="xMidYMid slice"
              />

              {/* 💻 桌機：可被刮除的 overlay */}
              <image
                href={overlayImage}
                x={0}
                y={0}
                width={size.w}
                height={size.h}
                preserveAspectRatio="none"
                mask="url(#revealMask)"
              />
            </>
          )}
        </svg>

        {/* 💻 桌機才顯示游標 */}
        {!isMobile && (
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border-2 border-white/70 shadow-[0_0_0_2px_rgba(0,0,0,0.2)]"
            animate={{
              left: cursor.x,
              top: cursor.y,
              width: brushRadius * 2,
              height: brushRadius * 2,
              opacity: cursor.visible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </div>

      {/* 💻 桌機才顯示 reset 按鈕 */}
      {!isMobile && (
        <div className="flex items-center justify-end mb-3 text-sm text-gray-700">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl hover:opacity-90 transition"
          >
            <Icon.ArrowsCounterClockwise size={32} />
          </button>
        </div>
      )}
    </div>
  );
});

export default ScratchReveal;
