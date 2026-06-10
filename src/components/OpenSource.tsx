"use client";

import { motion } from "framer-motion";
import { Github as GithubIcon, GitFork, Star, ExternalLink } from "./Icons";

const githubStats = {
  contributions: "1,000+",
  repos: 15,
  stars: 50,
  followers: 100,
};

const topRepos = [
  {
    name: "react-components",
    description: "A collection of reusable React components with TypeScript",
    stars: 25,
    forks: 10,
    language: "TypeScript",
  },
  {
    name: "weather-app",
    description: "Beautiful weather dashboard with real-time updates",
    stars: 18,
    forks: 5,
    language: "JavaScript",
  },
  {
    name: "task-manager",
    description: "Full-stack task management application",
    stars: 12,
    forks: 8,
    language: "Next.js",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Open Source
          </span>
          <h2 className="section-title mt-2">GitHub Activity</h2>
          <p className="section-subtitle">
            My open source contributions and repository highlights
          </p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold text-gradient mb-2">
              {githubStats.contributions}
            </div>
            <p className="text-sm text-gray-400">Contributions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold text-gradient mb-2">
              {githubStats.repos}
            </div>
            <p className="text-sm text-gray-400">Repositories</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold text-gradient mb-2">
              {githubStats.stars}
            </div>
            <p className="text-sm text-gray-400">Stars Earned</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold text-gradient mb-2">
              {githubStats.followers}
            </div>
            <p className="text-sm text-gray-400">Followers</p>
          </motion.div>
        </div>

        {/* Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Contribution Graph</h3>
          <div className="grid grid-cols-52 gap-1 overflow-hidden">
            {[...Array(52)].map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {[...Array(7)].map((_, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (weekIndex * 7 + dayIndex) * 0.005,
                    }}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.3
                        ? "bg-purple-500"
                        : Math.random() > 0.5
                        ? "bg-purple-400"
                        : "bg-purple-900/50"
                    }`}
                    style={{
                      opacity: 0.3 + Math.random() * 0.7,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-6 text-xs text-gray-400">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-purple-900/50" />
              <div className="w-3 h-3 rounded-sm bg-purple-700/50" />
              <div className="w-3 h-3 rounded-sm bg-purple-500" />
              <div className="w-3 h-3 rounded-sm bg-purple-400" />
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Top Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5 text-purple-400" />
                  <h4 className="font-semibold group-hover:text-purple-300 transition-colors">
                    {repo.name}
                  </h4>
                </div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mb-4">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {repo.forks}
                </span>
                <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {repo.language}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/vaishnavikhatri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon className="w-5 h-5" />
            Visit My GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}