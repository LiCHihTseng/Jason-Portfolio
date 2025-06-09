"use client";

import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SegmentIcon from "@mui/icons-material/Segment";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState({ right: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({
          right: window.innerWidth - rect.right,
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/?scrollTo=home", icon: <HomeIcon /> },
    { label: "About", to: "/about", icon: <InfoIcon /> },
    { label: "Contact", to: "/?scrollTo=contact", icon: <ContactMailIcon /> },
    { label: "Projects", to: "/?scrollTo=projects", icon: <WorkIcon /> },
  ].sort((a, b) => a.label.length - b.label.length);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <RouterLink to="/" className="text-[#111111] font-bold text-xl">
            JASON
          </RouterLink>

          <motion.button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#111111] rounded-full p-2 transition-colors bg-[#F8F8F8]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" fontSize="medium" />
            ) : (
              <SegmentIcon className="w-6 h-6" fontSize="medium" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 bg-transparent overflow-hidden"
            style={{ right: `${buttonPosition.right}px` }}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
                hidden: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="space-y-2 flex flex-col items-end"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{ width: "fit-content" }}
                >
                  <RouterLink
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center bg-[#F8F8F8] hover:bg-[#D5D1E0] rounded-full px-4 py-2 transition-colors text-[#111111] font-medium whitespace-nowrap"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </RouterLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
