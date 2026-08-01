import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "./LenisContext";

export default function ScrollToTop() {
  const location = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.key, lenis]);

  return null;
}