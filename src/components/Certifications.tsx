"use client";

import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle, Clock, ExternalLink } from "./Icons";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="section-title mt-2">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 text-center group cursor-default relative overflow-hidden transition-all ${
                cert.status === "pending" ? "opacity-70" : ""
              }`}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />

              {/* Logo Placeholder */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-500/20">
                  {cert.status === "completed" ? (
                    <Award className="w-10 h-10 text-purple-400" />
                  ) : (
                    <Clock className="w-10 h-10 text-gray-500" />
                  )}
                </div>
                {cert.status === "completed" && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0f]">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
                {cert.status === "pending" && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500/80 rounded-full flex items-center justify-center border-2 border-[#0a0a0f]">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                {cert.title}
              </h4>
              <p className="text-sm text-purple-400 mb-3">{cert.issuer}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{cert.date}</span>
              </div>

              {cert.status === "pending" && (
                <div className="mt-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}