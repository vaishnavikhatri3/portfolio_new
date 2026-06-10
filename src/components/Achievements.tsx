"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Users, Code2, Heart, Award, ExternalLink, GitFork, Hash } from "./Icons";
import { achievements, personalInfo } from "@/data/portfolio";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Recognition
          </span>
          <h2 className="section-title mt-2">Achievements</h2>
          <p className="section-subtitle">
            Milestones, accomplishments, and open source contributions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group cursor-default hover:bg-purple-500/15 transition-all"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-3 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Source Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Open Source Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.opensource.map((os, index) => (
              <motion.div
                key={os.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl group cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <GitFork className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                      {os.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 group-hover:text-green-300 transition-colors">
                    {os.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">{os.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Holopin & GSSoC Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.a
              href={personalInfo.holopin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl text-sm hover:bg-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Hash className="w-4 h-4 text-purple-400" />
              View Holopin Badges
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              href={personalInfo.gssoc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl text-sm hover:bg-purple-500/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-4 h-4 text-purple-400" />
              GSSoC Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                className="glass-card p-6 rounded-2xl flex gap-4 group cursor-default"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-7 h-7 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-purple-400 mb-2">{highlight.organization}</p>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}