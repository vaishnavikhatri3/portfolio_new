"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Users, Palette, Heart, Sparkles } from "lucide-react";
import { aboutMe } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  "code-2": Code2,
  monitor: Code2,
  palette: Palette,
};

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Get to know me
          </span>
          <h2 className="section-title mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                Hello there! 👋
              </h3>
              <p className="text-gray-300 leading-relaxed">{aboutMe.intro}</p>
            </div>

            {/* Education */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {aboutMe.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-purple-500/50 pl-4"
                  >
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                    <p className="text-xs text-purple-400">{edu.year}</p>
                    {edu.details && (
                      <p className="text-xs text-green-400 mt-1">{edu.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutMe.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aboutMe.cards.map((card, index) => {
              const IconComponent = iconMap[card.icon] || Sparkles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-400">{card.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}