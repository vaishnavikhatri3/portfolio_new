"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10">
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
            A timeline of my professional journey and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 -translate-x-1/2 transform md:-translate-x-1/2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[3px]">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse-glow blur-md opacity-50" />
              </div>

              {/* Content Card */}
              <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl group cursor-default"
                >
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 font-medium">{exp.role}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {exp.organization}
                  </h3>

                  <div className={`flex flex-wrap gap-4 text-sm text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Decorative Element */}
                  <div className={`absolute top-6 w-3 h-3 rotate-45 bg-purple-500/20 border border-purple-500/30 ${
                    index % 2 === 0 ? "-right-2 hidden md:block" : "-left-2 hidden md:block"
                  }`} />
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}