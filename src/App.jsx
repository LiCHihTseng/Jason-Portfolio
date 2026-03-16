import { HashRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectDetail_Chatstat from "./pages/ProjectDetail_Chatstat";
import About from "./pages/About"; // 導入 about.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";


function AppShell() {
  const location = useLocation();
  useEffect(() => {
    const isProjectPage = location.pathname.startsWith("/project/");
    document.body.classList.toggle("project-page", isProjectPage);
    return () => document.body.classList.remove("project-page");
  }, [location.pathname]);

  return (
    // ⚠️ 建議拿掉這裡的 text-white，不然會覆蓋 body 的 color
    <div className="min-h-screen max-w-6xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project/chatstat" element={<ProjectDetail_Chatstat />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
