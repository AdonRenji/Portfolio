"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Database, Cpu } from "lucide-react";

export default function TechSkills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code2,
      skills: ["Python", "Java", "PHP"],
      color: "from-blue-500 to-cyan-500",
      borderHover: "hover:border-blue-400 dark:hover:border-blue-500/50",
      glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    },
    {
      id: "tools",
      title: "Databases & Tools",
      icon: Database,
      skills: ["SQL", "MySQL", "Bootstrap", "jQuery", "ReactJS", "NodeJS"],
      color: "from-indigo-500 to-purple-500",
      borderHover: "hover:border-purple-400 dark:hover:border-purple-500/50",
      glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    },
    {
      id: "concepts",
      title: "Core Concepts",
      icon: Cpu,
      skills: ["Data Structures", "Algorithms"],
      color: "from-emerald-500 to-teal-500",
      borderHover: "hover:border-teal-400 dark:hover:border-teal-500/50",
      glow: "hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-200 dark:border-zinc-900 bg-white dark:bg-[#060419] transition-colors duration-300">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/25 uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mt-2" />
          <p className="text-slate-500 dark:text-zinc-400 max-w-lg font-light pt-2">
            A comprehensive toolkit of languages, frameworks, and core concepts I use to build robust software solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className={`group relative flex flex-col p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 ${category.borderHover} ${category.glow}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} opacity-90 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2.5 mt-auto"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-zinc-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-white cursor-default transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative bg gradient inside card */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[60px] opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
