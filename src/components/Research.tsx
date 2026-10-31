"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building, Network, Activity, BookOpen, Award } from "lucide-react";

interface TimelineItem {
  role: string;
  org: string;
  supervisor?: string;
  supervisorLabel?: string;
  duration: string;
  highlights: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    role: "Researcher — Independent Research",
    org: "Self-directed",
    supervisor: "Monsoon SAR2Opt: SAR-Consistent Reconstruction of Cloudy Sentinel-2 Imagery for Floods",
    supervisorLabel: "Project",
    duration: "2026 – Present",
    highlights: [
      "Showed that over Sylhet in 2022 no Sentinel-2 acquisition in May–June had under 20% cloud, and that filling gaps with the last clear image hid 99.1% of 364.5 km² of new flood water detected by SAR.",
      "Built change-aware conditional GANs (PyTorch) and SAR water-consistency metrics that flag generated images that hide floods or invent water. Preliminary results show these metrics expose a failure that MAE and PSNR barely register.",
    ],
  },
  {
    role: "Researcher — Independent Research",
    org: "Self-directed",
    supervisor: "BanLegit-Cite: A Benchmark for Legal Citation Reliability in Bangladeshi Law",
    supervisorLabel: "Project",
    duration: "May 2026 – Aug 2026",
    highlights: [
      "Developed a benchmark for evaluating legal citation reliability and fabrication in Bangladeshi law, using verified case law and statutory sources.",
      "Labels were produced by two human annotators and verified by a lawyer.",
    ],
  },
  {
    role: "Researcher — Independent Research",
    org: "Self-directed",
    supervisor: "UHIF Framework and HalUnlearn-Bench",
    supervisorLabel: "Project",
    duration: "Apr 2026 – Jun 2026",
    highlights: [
      "Proposed the UHIF framework and HalUnlearn-Bench through a systematic review of 57 papers on LLM unlearning and hallucination (From Forgetting to Factuality). Best Paper (ML & AI), LURS Student Research Conference 2026.",
      "Implemented HalUnlearn-Bench as a controlled study of five unlearning methods (GA, GD, ME, NPO, KL+GA) against a no-unlearning control on Qwen2.5-1.5B-Instruct and TOFU: 18 runs, 19,800 responses, an LLM judge, a rule-based degeneration detector, and two-rater human validation (κ = 0.756).",
      "Found that for four of the five methods, the lower hallucination rate after unlearning came with degenerate output rather than learned abstention. Journal paper under review.",
    ],
  },
  {
    role: "R&D Research Intern — Bangla Speech Processing",
    org: "ShellBeeHaken Ltd., Dhaka",
    supervisor: "Agentic Call Center STT/TTS Pipeline",
    supervisorLabel: "Project",
    duration: "Dec 2025 – May 2026",
    highlights: [
      "Built a modular Bangla speech-to-text pipeline for noisy, Bangla–English code-mixed speech and benchmarked 15+ preprocessing and ASR configurations.",
      "Developed text normalization and token-level language identification for Bangla–English mixed speech.",
      "Implemented post-processing methods and evaluated system performance with WER, CER and EN-WER.",
    ],
  },
  {
    role: "Undergraduate Thesis Researcher",
    org: "Shahjalal University of Science and Technology (SUST)",
    supervisor: "Ms. Sayma Sultana Chowdhury (Assistant Professor, IICT, SUST)",
    supervisorLabel: "Supervisor",
    duration: "Jun 2025 – Nov 2025",
    highlights: [
      "Conducted a mixed-methods usability study of university web services: a student survey (n = 94), followed by think-aloud sessions and follow-up interviews with 4 participants; measured perceived usability and workload with SUS and NASA-TLX.",
      "Performed thematic analysis (Braun & Clarke), identifying 27 usability problems across 9 themes, and proposed the Fragmentation–Peer Coping Cycle.",
      "Designed a high-fidelity Figma prototype of a unified student portal addressing the identified problems and reviewed it with returning participants. The university's centralised student portal, released after the study, includes several similar features.",
    ],
  },
  {
    role: "Research Assistant — Data Collector",
    org: "Bengal AI",
    supervisor: "Thesis Data Collection",
    supervisorLabel: "Project",
    duration: "2024",
    highlights: [
      "Collected data for a research thesis at Bengal AI.",
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
  { id: "aiml", label: "AI/ML & Multimodal", description: "Foundational Artificial Intelligence, Deep Learning, and Multimodal architectures.", x: 50, y: 50, color: "var(--color-accent)" },
  { id: "nlp", label: "NLP & LLMs", description: "Natural Language Processing, Large Language Models, and Bangla language technologies.", x: 20, y: 30, color: "#f59e0b" },
  { id: "speech", label: "Speech & Language", description: "Acoustic Modeling, ASR, and Speech Synthesis systems.", x: 15, y: 65, color: "#10b981" },
  { id: "hci", label: "Human-AI Interaction (HCI)", description: "Mixed-methods user research: surveys, think-aloud studies, interviews, SUS/NASA-TLX and thematic analysis.", x: 45, y: 15, color: "#ec4899" },
  { id: "xai", label: "Explainable AI (XAI)", description: "Interpretability, model explanation methods, and trustworthy AI.", x: 80, y: 30, color: "#8b5cf6" },
  { id: "eval", label: "AI Reliability & Evaluation", description: "Benchmarks and human validation for detecting when AI output is plausible but wrong.", x: 70, y: 75, color: "#ef4444" },
  { id: "agentic", label: "Agentic AI", description: "Multi-agent workflows, autonomous reasoning, and server-side role-based coordination.", x: 25, y: 85, color: "#14b8a6" },
];

const EDGES = [
  { source: "aiml", target: "nlp" },
  { source: "aiml", target: "speech" },
  { source: "aiml", target: "xai" },
  { source: "aiml", target: "agentic" },
  { source: "nlp", target: "speech" },
  { source: "nlp", target: "hci" },
  { source: "nlp", target: "agentic" },
  { source: "speech", target: "hci" },
  { source: "speech", target: "agentic" },
  { source: "hci", target: "xai" },
  { source: "aiml", target: "eval" },
  { source: "nlp", target: "eval" },
  { source: "hci", target: "eval" },
  { source: "xai", target: "eval" },
  { source: "agentic", target: "eval" },
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
                          <span>{item.supervisorLabel || "Advisor"}: {item.supervisor}</span>
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
                Click or hover over any node below to discover how my research domains connect how people experience technology with how AI systems are evaluated.
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
    venue: "Conference submission",
    status: "Under review",
    year: "2026",
  },
  {
    title: "Undergraduate Thesis Manuscript: Usability Evaluation of University Web Systems",
    authors: "Shakera Jannat, Sayma Sultana Chowdhury",
    venue: "SUST Undergraduate Thesis",
    status: "Under review",
    year: "2026",
  },
  {
    title: "Journal paper on HalUnlearn-Bench: unlearning methods, hallucination and degenerate output in LLMs",
    authors: "Shakera Jannat, et al.",
    venue: "Journal submission",
    status: "Under review",
    year: "2026",
  },
];
