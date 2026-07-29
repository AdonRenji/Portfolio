"use client";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Premium Responsive Navbar with Scroll Spy */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Animated Hero Section */}
        <Hero />

        {/* Experience & Education Timeline */}
        <Experience />

        {/* Technical Skills Showcase */}
        <TechSkills />

        {/* Projects Showcase */}
        <Projects />

        {/* Contact Me Form */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-zinc-900/60 py-8 bg-slate-50 dark:bg-[#02000c] text-center text-xs text-slate-500 dark:text-zinc-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Adon Renji. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-700 dark:hover:text-zinc-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-700 dark:hover:text-zinc-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Floating Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}
