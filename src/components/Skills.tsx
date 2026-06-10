"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Palette } from "lucide-react";
import { skills } from "@/data/portfolio";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Design: Palette,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills.categories[0].name);

  return (
    <section id="skills" className="relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            What I know
          </span>
          <h2 className="section-title mt-2">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.categories.map((category) => {
            const Icon = categoryIcons[category.name] || Code2;
            return (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "glass-card text-gray-300 hover:text-white hover:bg-purple-500/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories
            .find((cat) => cat.name === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 rounded-xl group cursor-default"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-purple-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* All Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.categories.flatMap((cat) => cat.skills).map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-5 py-2 rounded-full glass-card text-sm cursor-default hover:bg-purple-500/30 transition-all"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}