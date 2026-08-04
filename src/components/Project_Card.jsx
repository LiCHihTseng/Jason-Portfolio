// components/ProjectCard.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import AnimatedArrowButton from "./AnimatedArrowButton";

// 判斷 img 是 Lottie 的 JSON 資料(物件),還是一般圖片路徑(字串)
const isLottieData = (src) =>
  src && typeof src === "object" && ("v" in src || "layers" in src);

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadAnimatedMedia, setShouldLoadAnimatedMedia] = useState(false);

  const useLottie = isLottieData(project.img);
  const useVideo = project.mediaType === "video";
  const usesAnimatedMedia = useVideo || useLottie;

  useEffect(() => {
    if (!usesAnimatedMedia || project.disabled) return;

    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldLoadAnimatedMedia(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [project.disabled, usesAnimatedMedia]);

  const CardContent = (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative ${
        index === 0
          ? "md:aspect-[4/3] aspect-[14/10] bg-white/10"
          : "md:aspect-[4/3] aspect-[14/10] bg-white/5"
      } overflow-hidden rounded-2xl flex items-center justify-center`}
    >
      {/* Coming Soon Overlay */}
      {project.disabled && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <span className="text-white text-lg font-semibold tracking-wide">
            Coming Soon
          </span>
        </div>
      )}

      {/* 左下角箭頭 */}
      {!project.disabled && (
        <div className="absolute bottom-4 right-4 z-10 hidden md:block">
          <AnimatedArrowButton isHovered={isHovered} />
        </div>
      )}

      {/* 主圖:依照 project.img 的資料型態,決定要渲染 Lottie 還是 <img> */}
      {useVideo && shouldLoadAnimatedMedia ? (
        <video
          src={project.img}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`w-full h-full md:object-contain object-cover object-bottom rounded-lg transition-transform duration-500 ${
            isHovered && !project.disabled ? "scale-105" : ""
          }`}
        />
      ) : useLottie && shouldLoadAnimatedMedia ? (
        <Lottie
          animationData={project.img}
          loop
          autoplay
          className={`w-full md:object-contain object-cover object-bottom rounded-lg transition-transform duration-500 ${
            isHovered && !project.disabled ? "scale-105" : ""
          }`}
        />
      ) : !usesAnimatedMedia ? (
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className={`w-full md:object-contain object-cover object-bottom rounded-lg transition-transform duration-500 ${
            isHovered && !project.disabled ? "scale-105" : ""
          }`}
        />
      ) : (
        <div
          className="h-full w-full animate-pulse bg-gray-100"
          aria-hidden="true"
        />
      )}
    </div>
  );

  return project.disabled ? (
    <div className="block rounded-xl overflow-hidden cursor-not-allowed opacity-80">
      {CardContent}

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-0">{project.client}</p>
        <h3 className="text-xl font-medium text-[#0E1217]">{project.title}</h3>
      </div>
    </div>
  ) : (
    <Link
      to={project.route}
      state={project}
      className="block rounded-xl overflow-hidden transition-colors"
    >
      {CardContent}

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-0">{project.client}</p>
        <h3 className="text-xl font-medium text-[#0E1217]">{project.title}</h3>
      </div>
    </Link>
  );
}
