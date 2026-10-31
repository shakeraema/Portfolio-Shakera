"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";

const RESEARCH_INTERESTS = [
  "Human-Computer Interaction",
  "Mixed-Methods User Research",
  "Trustworthy AI",
  "Large Language Models",
  "Natural Language Processing",
  "Speech & Language Technology",
  "Explainable AI",
  "Agentic AI",
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
                    <span>3.69 / 4.00 </span>
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
                Academic Background & Research Interests
              </h3>

              <div className="space-y-4 text-muted-text text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Software Engineering graduate of Shahjalal University of Science and Technology (SUST).
                  My research sits between human–computer interaction and language technology: how people,
                  especially Bangla speakers, experience the systems built for them, and where those systems fail.
                </p>
                <p>
                  For my undergraduate thesis, I ran a mixed-methods usability study of university web services,
                  combining a student survey (n = 94) with think-aloud sessions and follow-up interviews, and used
                  thematic analysis to identify 27 usability problems across nine themes. As an R&amp;D intern at
                  ShellBeeHaken, I built a speech-to-text pipeline for noisy Bangla–English code-mixed speech.
                  My recent work examines the reliability of AI systems: a systematic review of 57 papers on
                  hallucination and unlearning in large language models, and BanLegit-Cite, a benchmark for legal
                  citation reliability in Bangladeshi law.
                </p>
                <p>
                  I want to keep working on research that pairs careful study of people with honest evaluation
                  of AI, and in the long term to pursue graduate study in HCI and human-centered AI.
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
