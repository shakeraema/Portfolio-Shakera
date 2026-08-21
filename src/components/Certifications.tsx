"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "EDGE Python & Data Science",
    issuer: "EDGE Project, ICT Division",
    year: "2025",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    year: "2025",
  },
  {
    name: "IBM Quantum Algo Queen",
    issuer: "IBM Quantum / Algo Queen",
    year: "2023",
  },
  {
    name: "ICPC Regional Championship Participant",
    issuer: "ICPC Asia Regionals",
    year: "2023",
  },
  {
    name: "NASA Space Apps Challenge Global Finalist",
    issuer: "NASA Space Apps Challenge",
    year: "2025",
  },
  {
    name: "Best Paper Award (ML & AI)",
    issuer: "Leading University Research Society (LURS)",
    year: "2026",
  },
  {
    name: "Pre-Finalist — ICSC",
    issuer: "Indian Computing Olympiad / ICSC",
    year: "2026",
  },
  {
    name: "Finalist — International AI in Healthcare Hackathon",
    issuer: "Tashkent, Uzbekistan",
    year: "2026",
  },
  {
    name: "Top-30 Finalist (24th) — THE INFINITY AI BUILDFEST",
    issuer: "The Infinity AI Buildfest",
    year: "2026",
  },
];

const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/17qgfBS1S8QtYqHLZaTP8du4Db-l56e9s?usp=sharing";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-background/50 border-b border-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            Certifications & Training
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        {/* Info callout */}
        <div className="mb-10 p-5 rounded-lg border border-border bg-card-bg/60 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <h3 className="font-serif font-semibold text-lg text-foreground flex items-center gap-2">
              <ShieldCheck size={18} className="text-accent" />
              <span>Verified Academic Credentials</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text max-w-xl">
              All credentials, including training certificates, hackathon participant certificates, and competitive programming details, are verified and hosted in the repository archives.
            </p>
          </div>
          
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded border border-border hover:bg-border/30 text-xs font-semibold tracking-wide uppercase transition-colors shrink-0 cursor-pointer text-foreground"
          >
            <span>Access Drive Folder</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 rounded-lg border border-border bg-card-bg flex flex-col justify-between hover:border-accent/25 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="p-2 rounded bg-accent/5 text-accent w-fit">
                  <Award size={18} />
                </div>
                
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-foreground leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-text mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex justify-between items-center text-xs">
                <span className="font-semibold text-muted-text">Completed {cert.year}</span>
                
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-semibold text-accent hover:underline cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
