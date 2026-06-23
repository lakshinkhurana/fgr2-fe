"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TelemetrySection() {
  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full" id="outcome">
      <h2
        className="text-2xl md:text-[32px] font-bold text-[#e2e1eb] mb-8 tracking-tight"
        style={{ fontFamily: "var(--font-geist)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
      >
        System Telemetry
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Large Stat Card — Detection Accuracy */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 md:row-span-2 sentinel-glass-panel rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group bg-white/[0.03] backdrop-blur-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <div
              className="text-xs font-semibold uppercase tracking-[0.05em] text-[#c1c6d7] mb-2"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Detection Accuracy
            </div>
            <div
              className="text-[60px] md:text-[80px] leading-none text-red-500 font-bold tracking-tighter"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              98.4%
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <p className="text-base text-[#c1c6d7] leading-relaxed" style={{ fontFamily: "var(--font-geist)" }}>
              Maintained across varying weather conditions, low-light environments, and speeds up to 120mph.
            </p>
          </div>
          {/* Reticle decorations */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-red-500/30" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-red-500/30" />
        </motion.div>

        {/* Processing Speed */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 md:row-span-1 sentinel-glass-panel rounded-xl p-6 flex flex-col justify-center bg-white/[0.03] backdrop-blur-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-[0.05em] text-[#c1c6d7] mb-1"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Processing Latency
          </div>
          <div className="flex items-baseline gap-2 text-[#fd8b00]">
            <span className="text-[36px] md:text-[48px] font-bold leading-none" style={{ fontFamily: "var(--font-geist)" }}>
              &lt;200
            </span>
            <span className="text-sm font-medium" style={{ fontFamily: "var(--font-geist)" }}>ms</span>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-1 md:row-span-1 sentinel-glass-panel rounded-xl p-6 flex flex-col justify-center bg-white/[0.03] backdrop-blur-2xl border-l-2 border-l-red-500"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)", borderRight: "1px solid rgba(255,255,255,0.2)", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-[0.05em] text-[#c1c6d7] mb-1"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Availability
          </div>
          <div
            className="text-2xl md:text-[32px] font-bold text-[#e2e1eb] tracking-tight"
            style={{ fontFamily: "var(--font-geist)", lineHeight: "1.2" }}
          >
            24/7
          </div>
          <div className="text-sm font-medium text-[#929090] mt-1" style={{ fontFamily: "var(--font-geist)" }}>
            Automated
          </div>
        </motion.div>

        {/* False Positive Rate */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-1 md:row-span-1 sentinel-glass-panel rounded-xl p-6 flex flex-col justify-center bg-white/[0.03] backdrop-blur-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-[0.05em] text-[#c1c6d7] mb-1"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            False Positives
          </div>
          <div
            className="text-2xl md:text-[32px] font-bold text-[#e2e1eb] tracking-tight"
            style={{ fontFamily: "var(--font-geist)", lineHeight: "1.2" }}
          >
            0.02%
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
