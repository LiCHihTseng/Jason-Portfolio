import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectDetail_Chatstat from "./pages/ProjectDetail_Chatstat";
import ProjectDetail_Chatstat_mobile from "./pages/ProjectDetail_Chatstat_mobile";
import XR from "./pages/XR";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { LenisProvider } from "./components/LenisContext"; // 新增

function AppShell() {
  const location = useLocation();
  useEffect(() => {
    const isProjectPage = location.pathname.startsWith("/project/");
    document.body.classList.toggle("project-page", isProjectPage);
    return () => document.body.classList.remove("project-page");
  }, [location.pathname]);

  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project/chatstat" element={<ProjectDetail_Chatstat />} />
        <Route path="/project/chatstat_mobile" element={<ProjectDetail_Chatstat_mobile />} />
        <Route path="/project/XR" element={<XR />} />
        <Route path="/about" element={<About />} />
      </Routes>
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