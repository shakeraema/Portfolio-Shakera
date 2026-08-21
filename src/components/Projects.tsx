"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Compass, Activity, Brain } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: "AI/ML" | "NLP/Speech" | "Fullstack/HCI" | "XAI";
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "RoadGuardian AI",
    description:
      "A multi-agent AI platform designed for emergency response coordination and multilingual assistance. Optimizes rescue pipelines under severe workloads.",
    technologies: ["LangGraph", "FastAPI", "RAG", "ChromaDB"],
    demo: "https://road-gaurdian-ai-v2.vercel.app/",
    category: "AI/ML",
  },
  {
    title: "NovaMind XR",
    description:
      "AI-powered adaptive learning platform integrating immersive XR (Extended Reality) experiences and personalized virtual tutoring engines.",
    technologies: ["React", "Three.js", "Node.js", "MongoDB"],
    github: "https://github.com/shakeraema/NovaMindXR.git",
    demo: "https://novamind-xr-inv2.vercel.app",
    category: "Fullstack/HCI",
  },
  {
    title: "Bangla STT Pipeline",
    description:
      "End-to-end speech-to-text recognition pipeline calibrated for Bengali dialect variations. Includes benchmarking modules evaluating WER and CER.",
    technologies: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/ema-shakera/STT-TTS-Bangla.git",
    category: "NLP/Speech",
  },
  {
    title: "Dengue Prediction Model Enhancement using Explainable AI",
    description:
      "Enhanced disease prediction using explainable machine learning. Employs model-agnostic explanation techniques (SHAP/LIME) to justify risk factors.",
    technologies: ["Python", "XAI", "Machine Learning"],
    github: "https://github.com/shakeraema/Dengue-Detection.git",
    category: "XAI",
  },
  {
    title: "Parkinson Disease Prediction",
    description:
      "Machine learning classifier to detect early-onset Parkinson's Disease based on vocal acoustic attributes, achieving high classification confidence.",
    technologies: ["Python", "SVM"],
    github: "https://github.com/shakeraema/ML-Project.git",
    category: "AI/ML",
  },
  {
    title: "Pathik",
    description:
      "Bangladesh travel companion providing automated itinerary planning, safety routing, and location-aware recommendations.",
    technologies: ["React.js", "Node.js", "Firebase", "PWA"],
    demo: "https://pathik-db6ee.web.app/",
    category: "Fullstack/HCI",
  },
  {
    title: "Multi-role AI School Assistant (GLM 5.2)",
    description:
      "A multi-role AI school assistant featuring server-side role authorization, predictive ML attendance analytics, a real-time voice loop, and prompt injection guardrails.",
    technologies: ["GLM 5.2", "Python", "Predictive ML", "Security Guardrails"],
    github: "https://github.com/shakeraema/XYZ-AI.git",
    category: "AI/ML",
  },
  {
    title: "Secure Assignment & Submission System",
    description:
      "A secure, role-based Assignment & Submission Management System featuring robust authorization checks, secure httpOnly cookie authentication, CSRF protections, local file upload validation, and full business logic coverage for Admins, Teachers, and Students.",
    technologies: ["ASP.NET Core 8", "EF Core", "PostgreSQL", "React (Vite)"],
    github: "https://github.com/shakeraema/Assignment-Submission-Management-System.git",
    category: "Fullstack/HCI",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML":
        return <Brain size={16} className="text-blue-500" />;
      case "NLP/Speech":
        return <Code size={16} className="text-emerald-500" />;
      case "XAI":
        return <Activity size={16} className="text-purple-500" />;
      default:
        return <Compass size={16} className="text-pink-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background/50 border-b border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            Selected Projects
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col justify-between p-6 rounded-lg border border-border bg-card-bg shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-200"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-border/40 text-[10px] font-semibold tracking-wider text-muted-text uppercase">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-foreground mb-2 leading-tight group-hover:text-accent-hover transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-text mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded border border-border bg-background text-[10px] font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-text hover:text-foreground transition-colors"
                    >
                      <Github size={14} />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline transition-colors ml-auto"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
