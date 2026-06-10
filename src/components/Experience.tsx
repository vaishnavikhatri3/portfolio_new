"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Users, Code2, Building2, Award } from "./Icons";
import { experience } from "@/data/portfolio";

const typeIcons: Record<string, React.ElementType> = {
  leadership: Users,
  opensource: Code2,
  work: Building2,
};

const typeColors: Record<string, string> = {
  leadership: "from-blue-500 to-cyan-500",
  opensource: "from-green-500 to-emerald-500",
  work: "from-purple-500 to-pink-500",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="section-title mt-2">Experience</h2>
          <p className="section-subtitle">
            A timeline of my professional journey, leadership roles, and open source contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 hidden md:block" />

          {experience.map((exp, index) => {
            const TypeIcon = typeIcons[exp.type] || Briefcase;
            const colorClass = typeColors[exp.type] || "from-purple-500 to-pink-500";
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${
                  isLeft ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} p-[3px] shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                      <TypeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Mobile Node */}
                <div className={`md:hidden flex items-center gap-4 mb-4 ${isLeft ? "flex-row-reverse" : ""}`}>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} p-[3px] shadow-lg flex-shrink-0`}>
                    <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                      <TypeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-purple-500/30" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-6 md:p-8 rounded-2xl group ml-0 md:ml-6 ${
                    isLeft ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  {/* Type Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${colorClass} text-xs font-medium text-white mb-4`}>
                    <TypeIcon className="w-3.5 h-3.5" />
                    {exp.type === "leadership" ? "Leadership" : exp.type === "opensource" ? "Open Source" : "Work"}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-purple-400 font-medium mb-2">{exp.organization}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 w-8 h-8 ${
                    isLeft ? "-right-4 md:-right-4" : "-left-4 md:-left-4"
                  }`}>
                    <div className={`absolute top-0 w-4 h-4 rotate-45 bg-gradient-to-br ${colorClass} opacity-50`} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}