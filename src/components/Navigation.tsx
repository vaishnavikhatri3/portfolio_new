"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Menu, X, Instagram } from "./Icons";
import { personalInfo, navLinks } from "@/data/portfolio";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-3 mx-4 mt-4 rounded-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold text-gradient tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              {"<VK />"}
            </motion.a>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                    {isActive && (
                      <motion.span 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400"
                        layoutId="activeDot"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Right Side - Social Icons + Resume */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-purple-500/10"
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-purple-500/10"
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-purple-500/10"
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  <MailIcon className="w-5 h-5" />
                </motion.a>
              </div>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-purple-500/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              className="absolute right-0 top-0 h-full w-80 glass p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-xl text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-purple-500/20 space-y-4">
                  <div className="flex gap-4">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                    <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-3 text-gray-400 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                    View Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}