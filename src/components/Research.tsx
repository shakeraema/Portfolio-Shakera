"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building, Network, Activity, BookOpen, Award } from "lucide-react";

interface TimelineItem {
  role: string;
  org: string;
  supervisor?: string;
  duration: string;
  highlights: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    role: "Researcher — Independent Research",
    org: "Self-directed",
    supervisor: "BanLegit-Cite",
    duration: "May 2026 – Aug 2026",
    highlights: [
      "Developed a benchmark for evaluating legal citation reliability and fabrication in Bangladeshi law using verified case law, statutory sources, and human annotation.",
    ],
  },
  {
    role: "Researcher — Independent Research",
    org: "Self-directed",
    supervisor: "From Forgetting to Factuality",
    duration: "Apr 2026 – May 2026",
    highlights: [
      "Proposed the UHIF framework and HalUnlearn-Bench through a systematic review of 57 papers on LLM unlearning and hallucination.",
    ],
  },
  {
    role: "R&D Research Intern — Bangla Speech Processing",
    org: "ShellBeeHaken Ltd., Dhaka",
    supervisor: "Agentic Call Center STT/TTS Pipeline",
    duration: "Dec 2025 – May 2026",
    highlights: [
      "Built a modular Bangla STT pipeline for noisy, code-mixed speech and benchmarked 15+ preprocessing and ASR configurations.",
      "Developed text normalization and token-level language identification techniques for Bangla-English mixed speech.",
      "Implemented post-processing methods and evaluated system performance using WER, CER, and EN-WER metrics.",
    ],
  },
  {
    role: "Undergraduate Thesis Researcher",
    org: "Shahjalal University of Science and Technology (SUST)",
    supervisor: "Ms. Sayma Sultana Chowdhury (Assistant Professor, IICT, SUST)",
    duration: "Jun 2025 – Nov 2025",
    highlights: [
      "Conducted mixed-methods usability evaluation (n=92; survey, think-aloud, interviews) using SUS and NASA-TLX to assess university web-system usability.",
      "Performed thematic analysis (Braun & Clarke), identifying 7 usability themes and proposing the Fragmentation–Frustration Cycle.",
      "Designed a high-fidelity Figma prototype addressing identified usability issues and improving navigation efficiency.",
    ],
  },
];

interface Node {
  id: string;
  label: string;
  description: string;
  x: number; // Percent width of container
  y: number; // Percent height of container
  color: string;
}

const NODES: Node[] = [
  { id: "aiml", label: "AI/ML", description: "Foundational Artificial Intelligence and Deep Learning architectures.", x: 50, y: 50, color: "var(--color-accent)" },
  { id: "nlp", label: "NLP", description: "Natural Language Processing and Bangla Language Technologies.", x: 20, y: 30, color: "#f59e0b" },
  { id: "speech", label: "Speech Processing", description: "Acoustic Modeling, ASR, and Speech Synthesis systems.", x: 15, y: 65, color: "#10b981" },
  { id: "hci", label: "HCI & Usability", description: "Human-Computer Interaction, user workloads, and interface accessibility.", x: 45, y: 15, color: "#ec4899" },
  { id: "xai", label: "Explainable AI (XAI)", description: "Interpretability, model explanation methods, and trustworthy AI.", x: 80, y: 30, color: "#8b5cf6" },
  { id: "fed", label: "Federated Learning", description: "Privacy-preserving distributed machine learning systems.", x: 85, y: 65, color: "#3b82f6" },
  { id: "iot", label: "IoT Security", description: "Decentralized intrusion detection and sensor network verification.", x: 55, y: 85, color: "#ef4444" },
];

const EDGES = [
  { source: "aiml", target: "nlp" },
  { source: "aiml", target: "speech" },
  { source: "aiml", target: "xai" },
  { source: "aiml", target: "fed" },
  { source: "aiml", target: "iot" },
  { source: "nlp", target: "speech" },
  { source: "nlp", target: "hci" },
  { source: "speech", target: "hci" },
  { source: "hci", target: "xai" },
  { source: "xai", target: "fed" },
  { source: "xai", target: "iot" },
  { source: "fed", target: "iot" },
];

export default function Research() {
  const [activeNode, setActiveNode] = useState<Node | null>(NODES[0]);

  // Find connected nodes for highlight
  const getConnectedNodeIds = (nodeId: string) => {
    const connected = new Set<string>([nodeId]);
    EDGES.forEach((edge) => {
      if (edge.source === nodeId) connected.add(edge.target);
      if (edge.target === nodeId) connected.add(edge.source);
    });
    return connected;
  };

  const highlightedNodeIds = activeNode ? getConnectedNodeIds(activeNode.id) : new Set<string>();

  return (
    <section id="research" className="py-20 px-6 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            Research Experience & Focus
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Academic Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2 mb-6">
              <Activity size={18} className="text-accent" />
              <span>Timeline of Appointments</span>
            </h3>

            <div className="relative border-l border-border pl-6 space-y-8 ml-2">
              {TIMELINE_DATA.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-accent" />
                  
                  <div className="p-5 rounded-lg border border-border bg-card-bg shadow-sm hover:border-accent/40 transition-colors">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                      {item.duration}
                    </span>
                    
                    <h4 className="font-serif font-semibold text-lg text-foreground mb-1 leading-snug">
                      {item.role}
                    </h4>

                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-text mb-4 font-medium">
                      <div className="flex items-center gap-1">
                        <Building size={12} />
                        <span>{item.org}</span>
                      </div>
                      {item.supervisor && (
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>Advisor: {item.supervisor}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-muted-text list-disc pl-4 leading-relaxed">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research Focus Relationship Graph */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2 mb-2">
                <Network size={18} className="text-accent" />
                <span>Interdisciplinary Focus Graph</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Click or hover over any node below to discover how my research domains bridge machine learning capabilities with human accessibility and system security.
              </p>
            </div>

            {/* Relationship Map */}
            <div className="relative h-[340px] sm:h-[400px] border border-border bg-card-bg rounded-lg overflow-hidden flex items-center justify-center p-4">
              
              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {EDGES.map((edge, idx) => {
                  const sourceNode = NODES.find((n) => n.id === edge.source);
                  const targetNode = NODES.find((n) => n.id === edge.target);
                  if (!sourceNode || !targetNode) return null;

                  const isHighlighted =
                    activeNode &&
                    highlightedNodeIds.has(sourceNode.id) &&
                    highlightedNodeIds.has(targetNode.id);

                  return (
                    <line
                      key={idx}
                      x1={`${sourceNode.x}%`}
                      y1={`${sourceNode.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke={isHighlighted ? "var(--color-accent)" : "var(--color-border)"}
                      strokeWidth={isHighlighted ? 2.5 : 1}
                      strokeOpacity={isHighlighted ? 0.8 : 0.3}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Node Badges */}
              {NODES.map((node) => {
                const isActive = activeNode?.id === node.id;
                const isHighlighted = highlightedNodeIds.has(node.id);

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    onMouseEnter={() => setActiveNode(node)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.08 : isHighlighted ? 1.02 : 0.95,
                        borderColor: isActive
                          ? "var(--color-accent)"
                          : isHighlighted
                          ? "var(--color-accent)"
                          : "var(--color-border)",
                      }}
                      transition={{ duration: 0.2 }}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-[10px] sm:text-xs font-semibold shadow-sm backdrop-blur-sm transition-colors duration-200 ${
                        isActive
                          ? "bg-foreground text-background"
                          : isHighlighted
                          ? "bg-accent/10 text-foreground"
                          : "bg-card-bg/60 text-muted-text"
                      }`}
                    >
                      {node.label}
                    </motion.div>
                  </button>
                );
              })}
            </div>

            {/* Info details box */}
            <div className="h-32 p-5 rounded-lg border border-border bg-card-bg/50 shadow-inner flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeNode ? (
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-sm font-bold text-accent mb-1 uppercase tracking-wider">
                      {activeNode.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                      {activeNode.description}
                    </p>
                  </motion.div>
                ) : (
                  <p className="text-xs sm:text-sm text-muted-text italic">
                    Hover/click a node to inspect relationships...
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Publications & Manuscripts Section */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="flex flex-col items-center md:items-start mb-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
              <BookOpen size={20} className="text-accent" />
              <span>Publications & Manuscripts</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-text max-w-2xl">
              Academic research papers and peer-reviewed conference submissions.
            </p>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS_DATA.map((pub, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-lg border border-border bg-card-bg/50 hover:bg-card-bg hover:border-accent/25 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full border border-border bg-background text-[10px] font-semibold text-muted-text uppercase tracking-wider">
                        {pub.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${
                        pub.status.includes("Accepted") 
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                          : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
                      }`}>
                        {pub.status}
                      </span>
                      {pub.award && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                          <Award size={10} className="shrink-0" />
                          <span>{pub.award}</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg text-foreground leading-snug mb-1">
                      {pub.title}
                    </h4>

                    {/* Authors highlighting Shakera Jannat */}
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-1">
                      {pub.authors.includes("Shakera Jannat") ? (
                        <>
                          {pub.authors.split("Shakera Jannat").map((part, pIdx, arr) => (
                            <React.Fragment key={pIdx}>
                              {part}
                              {pIdx < arr.length - 1 && (
                                <span className="font-bold text-foreground underline decoration-accent/40 decoration-2">
                                  Shakera Jannat
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </>
                      ) : (
                        pub.authors
                      )}
                    </p>

                    <p className="text-xs text-muted-text italic">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: string;
  award?: string;
  year: string;
}

const PUBLICATIONS_DATA: Publication[] = [
  {
    title: "From Forgetting to Factuality: Formalizing the Unlearning–Hallucination Interaction in Large Language Models",
    authors: "Hasan, M. M. Z., Shakera Jannat, et al.",
    venue: "LURS 3rd Student Research Conference 2026, Leading University Research Society (LURS)",
    status: "Accepted for Oral Presentation",
    award: "Best Paper Award (ML & AI)",
    year: "2026",
  },
  {
    title: "BanLegit-Cite: A Benchmark for Legal Citation Reliability in Bangladeshi Law",
    authors: "Shakera Jannat, et al.",
    venue: "Submitted to ICCIT 2026",
    status: "Submitted to a Conference",
    year: "2026",
  },
  {
    title: "Undergraduate Thesis Manuscript: Usability Evaluation of University Web Systems",
    authors: "Shakera Jannat, Sayma Sultana Chowdhury",
    venue: "SUST Undergraduate Thesis",
    status: "Manuscript finalized and submitted to a conference; under review",
    year: "2026",
  },
];
