"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Code2, Palette, Zap, Users } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const floatingIcons = [
  { IconComponent: Code2, x: "8%", y: "18%", delay: 0 },
  { IconComponent: Palette, x: "88%", y: "12%", delay: 0.5 },
  { IconComponent: Zap, x: "12%", y: "75%", delay: 1 },
  { IconComponent: Users, x: "85%", y: "78%", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[180px]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden xl:flex items-center justify-center w-14 h-14 glass-card rounded-xl"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.IconComponent className="w-7 h-7 text-purple-400" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Profile Image - Left Side */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ padding: "4px" }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </motion.div>

              {/* Profile Placeholder */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900/60 to-pink-900/60 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border border-purple-500/20">
                    <span className="text-4xl md:text-5xl font-bold text-gradient">VK</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg shadow-purple-500/50"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Status Badge */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-full whitespace-nowrap"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-purple-300">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2 px-6 py-3 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={personalInfo.downloadResume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 px-6 py-3 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary flex items-center gap-2 px-6 py-3 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-3 bg-purple-500 rounded-full mt-2"
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}