"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, X, ExternalLink, ChevronRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  summary: string;
  description: string[];
  tech: string[];
  tags: string[];
  link?: string;
  github?: string;
};

const projectsData: Project[] = [
  {
    id: "kudumbashree",
    title: "Kudumbashree Unit Automation",
    summary: "Automated management system for Kudumbashree units with dynamic reporting.",
    description: [
      "Designed and developed a comprehensive automation system for Kudumbashree units to streamline their daily operations and record keeping.",
      "Implemented a robust backend with PHP and SQL to handle complex data relationships and transactions securely.",
      "Built an intuitive frontend using HTML, CSS, and Bootstrap to ensure accessibility and ease of use for unit members.",
      "Integrated dynamic report generation features to track financial metrics and member activities.",
    ],
    tech: ["PHP", "SQL", "HTML", "CSS", "Bootstrap"],
    tags: ["Web/PHP", "Database"],
    github: "https://github.com",
  },
  {
    id: "cinemascape",
    title: "Cinemascape Film Equipment Rental",
    summary: "Cross-platform mobile application for seamless film equipment rentals.",
    description: [
      "Developed a cross-platform mobile application using Flutter to serve as a marketplace for film equipment rentals.",
      "Architected a scalable NoSQL backend using MongoDB to handle inventory management, user profiles, and booking histories.",
      "Designed a sleek, user-friendly mobile interface tailored for filmmakers and rental houses.",
      "Implemented real-time availability checking and secure booking workflows.",
    ],
    tech: ["Flutter", "MongoDB", "Dart", "Firebase"],
    tags: ["Mobile/Flutter", "Database"],
    github: "https://github.com",
  },
  {
    id: "library-management",
    title: "Library Management System",
    summary: "Efficient database solution for tracking books, members, and issuing records.",
    description: [
      "Engineered a comprehensive relational database schema using SQL to manage complex library operations.",
      "Developed modules for tracking book inventory, member registrations, and fine calculations.",
      "Optimized query performance for rapid search and retrieval of book availability status.",
      "Created automated triggers for tracking due dates and managing return workflows.",
    ],
    tech: ["Database", "SQL", "Relational Design"],
    tags: ["Database"],
    github: "https://github.com",
  },
];

const allTags = ["All", "Web/PHP", "Mobile/Flutter", "Database"];

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-200 dark:border-zinc-900 bg-slate-50 dark:bg-[#040114] transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/25 uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  : "bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10 border border-slate-300 dark:border-white/5"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 p-6 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(99,102,241,0.05)] hover:-translate-y-2 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <FolderGit2 className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <span className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <GitHubIcon />
                      </span>
                    )}
                    {project.link && (
                      <span className="text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed flex-grow">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expandable Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-indigo-500/20 shadow-2xl p-6 md:p-10 bg-white dark:bg-[#0a0a0a]/95 backdrop-blur-xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4 mb-6 pr-12">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                  <FolderGit2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-white/10" />

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-zinc-200">Key Features &amp; Highlights</h4>
                  <ul className="space-y-3">
                    {selectedProject.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-zinc-300 font-light leading-relaxed">
                        <ChevronRight className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(selectedProject.github || selectedProject.link) && (
                  <div className="flex items-center gap-4 pt-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-medium transition-colors"
                      >
                        <GitHubIcon />
                        View Code
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-500/20"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
