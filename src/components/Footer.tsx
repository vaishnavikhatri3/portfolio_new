"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, Code2 } from "./Icons";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/10">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-gradient mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              {"<VK />"}
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate full-stack developer crafting beautiful and functional web experiences.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resume</h4>
            <motion.a
              href={personalInfo.resume}
              className="inline-flex items-center gap-2 btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-4 h-4" />
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}