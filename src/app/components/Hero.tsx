"use client";

import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Typewriter from "./Typewriter";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const profileVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 hero-bg transition-colors duration-300">
      {/* Background Tech Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 dark:opacity-20 pointer-events-none" />

      {/* Radiant Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[130px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-pink-500/10 blur-[150px] animate-float-reverse pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-purple-500/5 blur-[120px] animate-float-slow pointer-events-none" />

      {/* Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8">

            {/* Main Header */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-sm md:text-base font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400/90 font-mono">
                Hi, my name is
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                Adon Renji
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-zinc-300 mt-2 h-[40px] flex items-center justify-center lg:justify-start">
                <span className="text-slate-500 dark:text-zinc-400 mr-2 font-light">I am a</span>
                <Typewriter 
                  words={["Software Developer", "MCA Graduate", "Full-Stack Engineer", "Problem Solver"]} 
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetweenWords={2500}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-500 dark:text-zinc-400 max-w-xl leading-relaxed font-light"
            >
              Passionate about designing and building high-performance, sleek, and user-centric web applications. 
              Combining technical MCA foundations with modern development frameworks to turn complex problems into elegant software solutions.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
            >
              {/* View Work */}
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="group relative flex items-center justify-center gap-2 h-13 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_4px_20px_rgba(99,102,241,0.3)] transition-all duration-300 hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] active:scale-[0.98] w-full sm:w-auto"
              >
                View Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="flex items-center justify-center gap-2 h-13 px-8 rounded-xl font-semibold text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 active:scale-[0.98] w-full sm:w-auto"
              >
                Contact Me
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download="Adon_Renji_Resume.pdf"
                className="flex items-center justify-center gap-2 h-13 px-6 rounded-xl font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all duration-300 border border-indigo-300 dark:border-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/40 active:scale-[0.98] w-full sm:w-auto"
                title="Download Resume"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-zinc-800/40 w-full justify-center lg:justify-start"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:adonrenji@gmail.com"
                className="text-slate-400 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200"
                aria-label="Email Address"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              className="relative group cursor-pointer"
              variants={profileVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-xl group-hover:opacity-60 group-hover:blur-2xl transition duration-500" />
              
              {/* Corner tech indicators */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-indigo-400 z-20 opacity-60 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-indigo-400 z-20 opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-indigo-400 z-20 opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-indigo-400 z-20 opacity-60 pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[340px] md:h-[410px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent p-2.5 z-10 shadow-xl dark:shadow-none backdrop-blur-xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-zinc-900">
                  <Image
                    src="/profile.png"
                    alt="Adon Renji Profile Picture"
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    priority
                    className="object-cover transition-all duration-700 group-hover:scale-105 filter saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl -z-10 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
