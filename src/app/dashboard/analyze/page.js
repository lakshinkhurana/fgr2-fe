"use client";
import DetectionApp from "@/components/DetectionApp";

export default function AnalyzeView() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 className="h2-title" style={{ fontSize: "2rem" }}>Live AI Scan</h1>
        <p style={{ color: "var(--color-lane-dim)", marginTop: "0.5rem" }}>Manually process CCTV frames through the YOLOv8 pipeline.</p>
      </header>
      
      {/* We reuse the DetectionApp component but override some of its container padding via CSS if needed */}
      <div style={{ background: "transparent", padding: 0 }}>
        <DetectionApp />
      </div>
    </div>
  );
}
