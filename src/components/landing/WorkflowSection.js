"use client";
import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "CCTV Detection",
    description: "Ingesting continuous video streams to identify and track vehicle silhouettes using YOLOv8 object detection algorithms.",
    icon: "videocam",
    phaseColor: "text-red-400",
    borderHoverColor: "group-hover:border-red-500",
    iconColor: "text-red-500",
  },
  {
    phase: "Phase 2",
    title: "OCR Recognition",
    description: "Isolating license plates and running high-speed Optical Character Recognition to extract alphanumeric sequences under 50ms.",
    icon: "document_scanner",
    phaseColor: "text-[#ffb77d]",
    borderHoverColor: "group-hover:border-[#fd8b00]",
    iconColor: "text-[#fd8b00]",
  },
  {
    phase: "Phase 3",
    title: "Audit & Ticketing",
    description: "Cross-referencing plate data with DMV databases, generating cryptographic audit logs, and dispatching automated violation notices.",
    icon: "gavel",
    phaseColor: "text-[#ffb4ab]",
    borderHoverColor: "group-hover:border-[#ffb4ab]",
    iconColor: "text-[#ffb4ab]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function WorkflowSection() {
  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full" id="workflow">
      <div className="text-center mb-16">
        <h2
          className="text-2xl md:text-[32px] font-bold text-[#e2e1eb] mb-2 tracking-tight"
          style={{ fontFamily: "var(--font-geist)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
        >
          Automated Enforcement Protocol
        </h2>
        <p className="text-sm text-[#c1c6d7]" style={{ fontFamily: "var(--font-geist)" }}>
          Three-phase execution pipeline for real-time violation processing.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            variants={itemVariants}
            className="sentinel-glass-panel p-8 rounded-xl flex flex-col relative group"
          >
            {/* Connector line (desktop only, except last card) */}
            {index < phases.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-white/5 z-0" />
            )}

            <div className={`w-16 h-16 rounded-full bg-[#12131a] border border-white/10 flex items-center justify-center mb-6 relative z-10 ${phase.borderHoverColor} transition-colors`}>
              <span className={`material-symbols-outlined ${phase.iconColor} text-3xl`}>{phase.icon}</span>
            </div>

            <div className={`text-xs font-semibold uppercase tracking-[0.05em] ${phase.phaseColor} mb-2`} style={{ fontFamily: "var(--font-geist)" }}>
              {phase.phase}
            </div>

            <h3
              className="text-xl font-semibold text-[#e2e1eb] mb-4"
              style={{ fontFamily: "var(--font-geist)", lineHeight: "1.4", letterSpacing: "-0.01em" }}
            >
              {phase.title}
            </h3>

            <p className="text-sm text-[#c1c6d7] flex-grow leading-relaxed" style={{ fontFamily: "var(--font-geist)" }}>
              {phase.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
