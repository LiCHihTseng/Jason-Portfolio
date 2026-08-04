import {
  lazy,
  Suspense,
  useEffect,
} from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { LenisProvider } from "./components/LenisContext";

// 每個頁面只在使用者進入時下載
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ProjectDetailChatstat = lazy(
  () => import("./pages/ProjectDetail_Chatstat")
);
const ProjectDetailChatstatMobile = lazy(
  () => import("./pages/ProjectDetail_Chatstat_mobile")
);
const XR = lazy(() => import("./pages/XR"));
const About = lazy(() => import("./pages/About"));

function PageLoading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="text-gray-500">Loading...</p>
    </main>
  );
}

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const isProjectPage = location.pathname.startsWith("/project/");
    document.body.classList.toggle("project-page", isProjectPage);

    return () => {
      document.body.classList.remove("project-page");
    };
  }, [location.pathname]);

  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/project/chatstat"
            element={<ProjectDetailChatstat />}
          />
          <Route
            path="/project/chatstat_mobile"
            element={<ProjectDetailChatstatMobile />}
          />
          <Route path="/project/XR" element={<XR />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LenisProvider>
        <AppShell />
      </LenisProvider>
    </Router>
  );
}