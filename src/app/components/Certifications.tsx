"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Database, Lock, Code2, ExternalLink, ChevronDown } from "lucide-react";

type Certification = {
  id: string;
  title: string;
  provider: string;
  date: string;
  description: string;
  skills: string[];
  icon: any;
  link?: string;
  color: string;
};

const certificationsData: Certification[] = [
  {
    id: "ibm-cybfun",
    title: "IBM Cybfun 1.0 Cybersecurity Basics",
    provider: "edX / IBM",
    date: "2023",
    description: "Foundational knowledge in cybersecurity principles, threat landscapes, and defensive strategies.",
    skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
    icon: ShieldCheck,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "dbms-nptel",
    title: "Database Management System",
    provider: "NPTEL",
    date: "2023",
    description: "In-depth understanding of database architecture, relational models, SQL, and transaction management.",
    skills: ["SQL", "Relational Databases", "Data Modeling"],
    icon: Database,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "privacy-nptel",
    title: "Privacy and Security in Online Social Media",
    provider: "NPTEL",
    date: "2024",
    description: "Explored privacy risks, data protection techniques, and security mechanisms within social network platforms.",
    skills: ["Privacy", "Social Media Security", "Data Protection"],
    icon: Lock,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "python-fullstack",
    title: "Python Full Stack",
    provider: "Inmakes Infotech",
    date: "2022",
    description: "Comprehensive training in full-stack web development using Python, including frontend integration and backend APIs.",
    skills: ["Python", "Web Development", "APIs"],
    icon: Code2,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Certifications() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-200 dark:border-zinc-900 bg-slate-50 dark:bg-[#030014] transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 uppercase tracking-wider">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications &amp; Credentials
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificationsData.map((cert, index) => {
            const Icon = cert.icon;
            const isExpanded = expandedId === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                <div className="p-6 md:p-8 flex flex-col h-full cursor-pointer" onClick={() => setExpandedId(isExpanded ? null : cert.id)}>
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${cert.color} shadow-lg text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white leading-tight mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                        <span className="font-medium">{cert.provider}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                    <button className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-zinc-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/5 space-y-5">
                          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                            {cert.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-white/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          {cert.link && (
                            <div className="pt-2">
                              <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-gradient-to-r ${cert.color} hover:opacity-90 transition-opacity shadow-md`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                View Credential
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
