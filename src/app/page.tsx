"use client";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import { Mail } from "lucide-react";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Premium Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
            AR.
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Home</a>
            <a 
              href="#experience" 
              onClick={(e) => handleScroll(e, "experience")} 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleScroll(e, "skills")} 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, "projects")} 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")} 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <div>
            <a
              href="/resume.pdf"
              download="Adon_Renji_Resume.pdf"
              className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-lg text-white bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-500/20 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 transition-all active:scale-[0.98]"
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

        {/* Contact Me Placeholder Section */}
        <section id="contact" className="py-24 relative overflow-hidden border-t border-zinc-900 bg-[#030014]">
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
            <div className="flex flex-col items-center space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/25 uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Let&apos;s Build Something Together
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-2" />
            </div>

            <p className="text-zinc-400 max-w-lg mx-auto font-light leading-relaxed">
              I am currently open to new opportunities, collaborations, or just chatting about interesting tech. Feel free to reach out directly.
            </p>

            <div className="inline-flex">
              <a
                href="mailto:contact@example.com"
                className="group flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                <Mail className="h-5 w-5" />
                Say Hello
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900/60 py-8 bg-[#02000c] text-center text-xs text-zinc-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Adon Renji. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
