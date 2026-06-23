"use client";
import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto w-full" id="problem">
      <motion.div
        className="sentinel-glass-panel p-8 md:p-16 rounded-xl flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex-1">
          <h2
            className="text-2xl md:text-[32px] font-bold text-[#e2e1eb] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-geist)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
          >
            The Infrastructure Bottleneck
          </h2>
          <p
            className="text-base text-[#c1c6d7] mb-6 leading-relaxed"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Manual traffic enforcement is failing to scale. Urban centers are experiencing a 40% year-over-year increase in moving violations, while human oversight capacity remains stagnant.
          </p>
          <ul className="flex flex-col gap-4 text-sm font-medium text-[#929090]" style={{ fontFamily: "var(--font-geist)" }}>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffb4ab]">close</span>
              High latency in manual review processes.
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffb4ab]">close</span>
              Inconsistent penalty enforcement.
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffb4ab]">close</span>
              Resource-intensive data archiving.
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full h-[400px] relative rounded bg-[#1a1b22] border border-white/5 overflow-hidden">
          {/* Decorative visualization placeholder */}
          <div className="w-full h-full relative">
            {/* Animated grid lines */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "linear-gradient(rgba(239,68,68,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }} />
            {/* Glowing dots to simulate traffic hotspots */}
            <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_5px_rgba(239,68,68,0.5)] animate-pulse" />
            <div className="absolute top-[45%] left-[55%] w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_20px_5px_rgba(249,115,22,0.5)] animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-[65%] left-[25%] w-2 h-2 rounded-full bg-red-400 shadow-[0_0_12px_4px_rgba(239,68,68,0.4)] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[35%] right-[20%] w-3 h-3 rounded-full bg-red-600 shadow-[0_0_18px_5px_rgba(220,38,38,0.5)] animate-pulse" style={{ animationDelay: "0.7s" }} />
            <div className="absolute bottom-[30%] right-[35%] w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_3px_rgba(251,146,60,0.4)] animate-pulse" style={{ animationDelay: "1.2s" }} />
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="30" y1="20" x2="55" y2="45" stroke="#ef4444" strokeWidth="0.3" />
              <line x1="55" y1="45" x2="25" y2="65" stroke="#f97316" strokeWidth="0.3" />
              <line x1="25" y1="65" x2="80" y2="35" stroke="#ef4444" strokeWidth="0.3" />
              <line x1="80" y1="35" x2="65" y2="70" stroke="#f97316" strokeWidth="0.3" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#12131a] to-transparent" />
          <div
            className="absolute bottom-4 left-4 text-sm font-medium text-[#ffdad6] bg-[#93000a]/20 px-2 py-1 rounded border border-[#93000a]/30"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            ERR_MANUAL_OVERLOAD
          </div>
        </div>
      </motion.div>
    </section>
  );
}
