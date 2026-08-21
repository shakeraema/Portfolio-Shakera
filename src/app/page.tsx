import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Page() {
  // Structured Data (JSON-LD) for SEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shakera Jannat Ema",
    "url": "https://shakeraema.com", // Placeholder domain or production URL
    "image": "https://shakeraema.com/profile.jpg",
    "jobTitle": "Early-Career AI/ML Researcher",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Shahjalal University of Science and Technology",
      "alternateName": "SUST"
    },
    "sameAs": [
      "https://linkedin.com/in/shakera-jannat-ema-994932238",
      "https://github.com/shakeraema"
    ],
    "knowsAbout": [
      "Trustworthy AI",
      "Large Language Models",
      "Agentic AI",
      "Natural Language Processing",
      "Speech & Language Technology",
      "Multimodal AI",
      "Explainable AI",
      "AI Safety",
      "Human-AI Interaction",
      "Privacy-Preserving Machine Learning"
    ]
  };

  return (
    <>
      {/* Insert JSON-LD script for SEO spiders */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 px-6 bg-background border-t border-border text-center text-xs text-muted-text">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Shakera Jannat Ema. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
