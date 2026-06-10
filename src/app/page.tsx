"use client";

import {
  GlassCrackEffect,
  MouseGlowTrail,
  FloatingParticles,
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Achievements,
  OpenSource,
  Certifications,
  Testimonials,
  Contact,
  Footer,
  PageLoader,
  ScrollProgress,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Page Loader */}
      <PageLoader />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Special Effects */}
      <FloatingParticles />
      <MouseGlowTrail />
      <GlassCrackEffect />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <OpenSource />
      <Certifications />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
