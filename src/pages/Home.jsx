import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Projects from "../components/Project";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scrollTo");
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // optional delay for animations to settle
    }
  }, [location]);

  return (
    <main>
      <Banner />
      <Projects />
    </main>
  );
}

export default Home;
