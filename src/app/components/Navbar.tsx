"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Certifications", href: "certifications" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(href);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as const },
    },
  };

  const linkStagger = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.3, ease: "easeOut" as const },
    }),
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 dark:border-white/5 shadow-sm dark:shadow-lg bg-white/90 dark:bg-[#030014]/90 backdrop-blur-xl"
            : "border-b border-transparent bg-white/60 dark:bg-[#030014]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text select-none"
          >
            AR.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href;
              return (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right side: Download CV + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Adon_Renji_Resume.pdf"
              className="hidden sm:inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/30 shadow-md hover:shadow-indigo-500/20 transition-all active:scale-[0.98]"
            >
              Download CV
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-72 z-50 md:hidden bg-white dark:bg-[#0a0a0a] border-l border-slate-200 dark:border-white/5 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 dark:border-white/5">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  AR.
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 dark:text-zinc-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map(({ label, href }, i) => {
                  const isActive = activeSection === href;
                  return (
                    <motion.a
                      key={href}
                      href={`#${href}`}
                      onClick={(e) => handleNavClick(e, href)}
                      custom={i}
                      variants={linkStagger}
                      initial="hidden"
                      animate="visible"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                          : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {/* Active dot */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          isActive ? "bg-indigo-500" : "bg-slate-300 dark:bg-zinc-700"
                        }`}
                      />
                      {label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer Footer: Download CV */}
              <div className="p-4 border-t border-slate-100 dark:border-white/5">
                <a
                  href="/resume.pdf"
                  download="Adon_Renji_Resume.pdf"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full h-11 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg transition-all"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
