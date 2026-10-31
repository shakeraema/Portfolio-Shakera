"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Compass, Sparkles, CheckSquare } from "lucide-react";

interface Achievement {
  title: string;
  context: string;
  badge: string;
  badgeType: "featured" | "winner" | "finalist" | "selected";
  year: string;
  details?: string;
}

const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "Global Finalist — NASA Space Apps Challenge",
    context: "Ranked among top global solutions in the world's largest hackathon.",
    badge: "Global Finalist",
    badgeType: "featured",
    year: "2025",
    details: "Recognized for developing space-data driven solution responding to critical earth challenges.",
  },
  {
    title: "Finalist — International AI in Healthcare Hackathon",
    context: "Built a VR support system for children with ADHD; gathered needs from therapists and children at a school in Mirpur, Dhaka, with consent from the school, therapists and guardians.",
    badge: "Finalist",
    badgeType: "finalist",
    year: "2026",
  },
  {
    title: "Top-30 Finalist (24th) — THE INFINITY AI BUILDFEST",
    context: "Premier AI product building competition.",
    badge: "Top-30 Finalist",
    badgeType: "finalist",
    year: "2026",
  },
  {
    title: "Selected — Harvard Health Hackathon (Nepal)",
    context: "Selected participant to hack clinical workflow solutions.",
    badge: "Selected",
    badgeType: "selected",
    year: "2026",
  },
  {
    title: "Finalist — DIU AI Project Competition",
    context: "National level AI project showcase.",
    badge: "Finalist",
    badgeType: "finalist",
    year: "2026",
  },
  {
    title: "1st Place — Ideathon",
    context: "Metropolitan University IDEATION challenge.",
    badge: "1st Place Winner",
    badgeType: "winner",
    year: "2024",
  },
  {
    title: "2nd Place — UIHP Cohort-2, SUST (\"Kotha\")",
    context: "SUST incubation cohort. \"Kotha\", a Bangla browsing assistant, was awarded BDT 50,000.",
    badge: "2nd Place Winner",
    badgeType: "winner",
    year: "2025",
  },
  {
    title: "Finalist — ICPC Algo Queen",
    context: "Competed in the regional finals (Ranked 92 out of 121 finalist teams).",
    badge: "Finalist",
    badgeType: "finalist",
    year: "2023",
  },
  {
    title: "Pre-Finalist — ICSC",
    context: "Recognized as a pre-finalist in the ICSC competition.",
    badge: "Pre-Finalist",
    badgeType: "finalist",
    year: "2026",
  },
  {
    title: "Qualified for Round 2 (Patiala, India) — Far Away",
    context: "Successfully qualified for the second round of Far Away 2026.",
    badge: "Qualified",
    badgeType: "selected",
    year: "2026",
  },
  {
    title: "Best Paper (ML & AI) — LURS Student Research Conference",
    context: "Awarded Best Paper in the ML & AI track at the LURS 3rd Student Research Conference.",
    badge: "Best Paper",
    badgeType: "winner",
    year: "2026",
  },
  {
    title: "Participant — 3MT & SciBlitz 2.0",
    context: "3-Minute Thesis (3MT) Competition, SciBlitz 2.0 (IEEE CUET Student Branch).",
    badge: "Participant",
    badgeType: "selected",
    year: "2026",
  },
  {
    title: "Organizer — SUST SWE Technovent",
    context: "Organized the SUST Software Engineering tech event.",
    badge: "Organizer",
    badgeType: "selected",
    year: "2023",
  },
];

export default function Achievements() {
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

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "featured":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "winner":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "finalist":
        return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "featured":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "winner":
        return <Trophy className="w-5 h-5 text-emerald-500" />;
      case "finalist":
        return <Award className="w-5 h-5 text-indigo-500" />;
      default:
        return <CheckSquare className="w-5 h-5 text-slate-500" />;
    }
  };

  const featured = ACHIEVEMENTS_DATA.find((a) => a.badgeType === "featured");
  const others = ACHIEVEMENTS_DATA.filter((a) => a.badgeType !== "featured");

  return (
    <section id="achievements" className="py-20 px-6 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            Achievements & Awards
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        {/* Featured Achievement: NASA Space Apps (Prominent Highlight) */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-6 sm:p-8 rounded-lg border-2 border-amber-500/30 bg-card-bg relative overflow-hidden shadow-sm"
          >
            {/* Background pattern light flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
              <div className="p-4 rounded-full bg-amber-500/10 w-fit flex items-center justify-center self-start">
                <Compass className="w-8 h-8 text-amber-500 animate-pulse" />
              </div>
              
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(featured.badgeType)}`}>
                    {featured.badge}
                  </span>
                  <span className="text-xs text-muted-text font-semibold">{featured.year}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                  {featured.title}
                </h3>
                
                <p className="text-sm text-foreground/80 leading-relaxed max-w-2xl font-medium">
                  {featured.context}
                </p>
                {featured.details && (
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl">
                    {featured.details}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Other Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {others.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 rounded-lg border border-border bg-card-bg/60 hover:bg-card-bg hover:border-accent/25 transition-all duration-200 flex gap-4 items-start"
            >
              <div className="p-2 rounded bg-background border border-border/80 w-fit mt-0.5">
                {getIcon(item.badgeType)}
              </div>
              
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-start gap-2">
                  <span className={`px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider ${getBadgeStyle(item.badgeType)}`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-muted-text font-bold">{item.year}</span>
                </div>
                
                <h4 className="font-serif font-bold text-sm sm:text-base text-foreground leading-snug">
                  {item.title}
                </h4>
                
                <p className="text-xs text-muted-text leading-relaxed">
                  {item.context}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
