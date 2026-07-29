"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function Experience() {
  const timelineData = [
    {
      id: 1,
      type: "internship",
      title: "ERP Development Intern",
      organization: "Oxive Solutions Private Ltd.",
      date: "2024",
      description: "Contributed to the development and optimization of enterprise resource planning modules, improving business workflows and data management efficiency.",
      icon: Briefcase,
    },
    {
      id: 2,
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "MA College of Engineering",
      date: "2025 – 2027",
      description: "Advanced studies in computer science, focusing on software engineering, cloud architecture, and modern application development.",
      icon: GraduationCap,
    },
    {
      id: 3,
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Nirmala College",
      date: "2022 – 2025",
      description: "Core computer science curriculum covering programming, database management, and web development fundamentals.",
      icon: GraduationCap,
    },
    {
      id: 4,
      type: "education",
      title: "Higher Secondary",
      organization: "Placeholder Higher Secondary School",
      date: "2020 – 2022",
      description: "Focus on Mathematics and Computer Science.",
      icon: Award,
    },
    {
      id: 5,
      type: "education",
      title: "High School",
      organization: "Placeholder High School",
      date: "2019 – 2020",
      description: "General academic excellence.",
      icon: Award,
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Effective Communication",
    "Time Management",
    "Critical Thinking",
    "Leadership",
    "Continuous Learning",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-zinc-900 bg-[#040114]">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 uppercase tracking-wider">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2" />
        </div>

        {/* Timeline Container */}
        <motion.div
          className="relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/50 before:via-purple-500/20 before:to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {timelineData.map((item) => {
            const Icon = item.icon;
            const isInternship = item.type === "internship";
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0`}
              >
                {/* Timeline Dot/Icon */}
                <div
                  className={`absolute left-0 md:left-1/2 flex h-10 w-10 -translate-x-0 md:-translate-x-1/2 items-center justify-center rounded-full border-4 border-[#040114] shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-colors duration-300 ${
                    isInternship 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white" 
                      : "bg-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-indigo-500/80"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                {/* Timeline Card Container */}
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
                  <div 
                    className={`relative p-6 rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1 ${
                      isInternship
                        ? "border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:border-indigo-500/60"
                        : "border border-white/5 hover:border-white/20"
                    }`}
                  >
                    {/* Glowing arrow for the card */}
                    <div 
                      className={`absolute top-5 h-4 w-4 rotate-45 border-b border-l bg-[#0a0a0a]/80 backdrop-blur-xl ${
                        isInternship ? "border-indigo-500/30" : "border-white/5 group-hover:border-white/20"
                      } -left-2 md:group-odd:-left-2 md:group-even:-right-2 md:group-even:border-l-0 md:group-even:border-r md:group-even:border-b-0 md:group-even:border-t hidden md:block`}
                    />
                    
                    {/* Card Content */}
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                        <h3 className={`text-lg md:text-xl font-bold ${isInternship ? "text-white" : "text-zinc-200"}`}>
                          {item.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md w-fit">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                      </div>
                      
                      <h4 className={`text-sm font-medium ${isInternship ? "text-indigo-400" : "text-zinc-400"}`}>
                        {item.organization}
                      </h4>
                      
                      {item.description && (
                        <p className="text-sm text-zinc-500 font-light leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h3 variants={itemVariants} className="text-xl font-bold tracking-tight text-white mb-8">
            Core Competencies & Soft Skills
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl glass-panel border border-white/5 text-sm font-medium text-zinc-300 hover:text-white hover:border-indigo-500/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all cursor-default flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
