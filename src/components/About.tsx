"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";

const RESEARCH_INTERESTS = [
  "Trustworthy AI",
  "Large Language Models",
  "Agentic AI",
  "Natural Language Processing",
  "Speech & Language Technology",
  "Multimodal AI",
  "Explainable AI",
  "AI Safety",
  "Human-AI Interaction",
  "Privacy-Preserving Machine Learning",
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };



  const tagVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="about" className="py-20 px-6 bg-background/50 border-b border-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            About Me
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Education */}
          <div className="md:col-span-5 flex flex-col items-center gap-8">
            {/* Circle Crop Photo (requested for About section as well) */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden p-1 bg-border shadow-sm">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-card-bg">
                <Image
                  src="/profile.jpg"
                  alt="Shakera Jannat Ema"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full p-6 rounded-lg border border-border bg-card-bg shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-accent/5 text-accent">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base">
                    B.Sc. in Software Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-text">
                    Shahjalal University of Science and Technology (SUST)
                  </p>
                  <p className="text-xs text-muted-text mt-1">
                    Graduation: 2026
                  </p>
                </div>
                
                <div className="pt-3 border-t border-border flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-muted-text">Cumulative GPA</span>
                  <div className="flex items-center gap-1.5 bg-accent/5 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    <Award size={12} />
                    <span>3.70 / 4.00 (Through 7th Sem)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Research Interests */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">
                Academic Background & Aspirations
              </h3>
              
              <div className="space-y-4 text-muted-text text-sm sm:text-base leading-relaxed">
                <p>
                  As a Software Engineering graduate from Shahjalal University of Science and Technology, 
                  I have built a strong analytical foundation focused on designing systems that are 
                  both technically robust and human-centered.
                </p>
                <p>
                  My research path lies at the intersection of language technologies, usability, and secure 
                  decentralized systems. Through my undergraduate work and corporate R&D experience, I have developed 
                  pipelines for Bangla Speech-to-Text, conducted usability audits, and explored 
                  Explainable AI (XAI) and Federated Learning for secure IoT systems.
                </p>
                <p>
                  I am actively seeking opportunities to contribute to research labs, academic departments, 
                  and postgraduate research (M.Sc./Ph.D.) under international funding frameworks. My ultimate goal 
                  is to build trustworthy, ethical AI systems that lower barriers to technology access globally.
                </p>
              </div>
            </motion.div>

            {/* Research Interests Tags */}
            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-lg text-foreground flex items-center gap-2">
                <BookOpen size={18} className="text-accent" />
                <span>Research Interests</span>
              </h4>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {RESEARCH_INTERESTS.map((interest) => (
                  <motion.span
                    key={interest}
                    variants={tagVariants}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card-bg text-xs sm:text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
                  >
                    <CheckCircle size={12} className="text-accent/80" />
                    {interest}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
