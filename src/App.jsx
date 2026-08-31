import {
  lazy,
  Suspense,
  useEffect,
  useState,
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
import PageTransition from "./components/PageTransition";
import LoadingScreen from "./components/LoadingScreen";
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
const ProjectDetailMoJoKing = lazy(
  () => import("./pages/ProjectDetail_MoJoKing")
);
const ProjectDetailAcrossports = lazy(
  () => import("./pages/ProjectDetail_Acrossports")
);
const XR = lazy(() => import("./pages/XR"));
const About = lazy(() => import("./pages/About"));

function PageLoading() {
  // 首次載入由 LoadingScreen 蓋住,換頁時的 chunk 等待不需要再閃一次文字
  return <main className="min-h-screen" aria-busy="true" aria-live="polite" />;
}

function AppShell() {
  const location = useLocation();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const isProjectPage = location.pathname.startsWith("/project/");
    document.body.classList.toggle("project-page", isProjectPage);

    return () => {
      document.body.classList.remove("project-page");
    };
  }, [location.pathname]);

  return (
    <div>
      {booting ? <LoadingScreen onFinish={() => setBooting(false)} /> : null}

      <ScrollToTop />
      <Navbar />

      <PageTransition>
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
          <Route
            path="/project/mojoking"
            element={<ProjectDetailMoJoKing />}
          />
          <Route
            path="/project/acrossports"
            element={<ProjectDetailAcrossports />}
          />
          <Route path="/project/XR" element={<XR />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </PageTransition>

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