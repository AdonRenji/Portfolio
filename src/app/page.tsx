"use client";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Premium Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-[#030014]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            AR.
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors">Home</a>
            <a 
              href="#experience" 
              onClick={(e) => handleScroll(e, "experience")} 
              className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleScroll(e, "skills")} 
              className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")} 
              className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")} 
              className="text-sm font-medium text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <div>
            <a
              href="/resume.pdf"
              download="Adon_Renji_Resume.pdf"
              className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg text-white bg-indigo-600/90 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-500/60 shadow-lg hover:shadow-indigo-500/20 transition-all active:scale-[0.98]"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

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
