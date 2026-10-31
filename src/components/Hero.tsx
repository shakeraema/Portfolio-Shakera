"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64;
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center py-16 px-6 bg-background relative overflow-hidden border-b border-border"
    >
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center z-10">
        
        {/* Profile Image (Top on mobile, right on desktop) */}
        <div className="md:col-span-5 md:order-2 flex justify-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1 bg-border shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-card-bg">
                <Image
                  src="/profile.jpg"
                  alt="Shakera Jannat Ema"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 256px, (max-w-1024px) 288px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 md:order-1 flex flex-col justify-center text-center md:text-left"
        >
          {/* Subheading Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="h-px w-6 bg-accent hidden md:block" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Early-Career Researcher
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground mb-4 leading-none"
          >
            Shakera Jannat Ema
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-md sm:text-lg font-medium text-muted-text space-y-1 mb-6 leading-relaxed"
          >
            <p>Software Engineering Graduate — SUST</p>
            <p>HCI &amp; Trustworthy AI Researcher</p>
            <p>Human-Computer Interaction, Trustworthy AI, NLP &amp; Speech Processing</p>
          </motion.div>

          {/* Research Statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-foreground max-w-xl italic border-l-2 md:border-l-4 border-accent pl-4 py-1 mb-8 text-left leading-relaxed text-muted-text"
          >
            &ldquo;I study how people experience technology and where AI systems fail them, combining user research with careful evaluation of language and AI systems.&rdquo;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 w-full"
          >
            <a
              href="https://drive.google.com/file/d/1Als3ZXbOY7Euwh8gPO18fEdTeu67U1SI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 h-12 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto justify-center shadow-sm cursor-pointer"
            >
              <FileText size={16} />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => handleScroll("research")}
              className="flex items-center gap-2 px-6 h-12 border border-border font-medium rounded-md hover:bg-border/30 transition-colors w-full sm:w-auto justify-center cursor-pointer text-foreground"
            >
              <span>View Research</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 px-6 h-12 border border-transparent font-medium rounded-md text-accent hover:underline transition-all w-full sm:w-auto justify-center cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-6"
          >
            <a
              href="https://linkedin.com/in/shakera-jannat-ema-994932238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/shakeraema"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-text hover:text-foreground transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:shakerajannatema@gmail.com"
              className="text-muted-text hover:text-foreground transition-colors p-1"
              aria-label="Email Shakera"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
