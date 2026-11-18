"use client";

import { useState } from "react";
import { BrainViewer } from "@/components/BrainViewer";
import { InfoPanel } from "@/components/InfoPanel";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#0a0a0f",
      margin: 0,
      padding: 0
    }}>
      {/* Header */}
      <header style={{
        background: "rgba(26, 26, 46, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "1rem 2rem",
        color: "#fff"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h1 style={{ margin: "0 0 0.5rem 0", fontSize: "1.875rem", fontWeight: "bold" }}>
            🧠 Brain Explorer
          </h1>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#9ca3af" }}>
            Interactive 3D medical visualization of the human brain
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        overflow: "hidden"
      }}>
        {/* Canvas Area */}
        <div style={{
          flex: 1,
          borderRadius: "0.5rem",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative"
        }}>
          <BrainViewer
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
            autoRotate={true}
          />
        </div>

        {/* Right Panel */}
        <div style={{
          width: "320px",
          overflow: "auto",
          borderRadius: "0.5rem",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <InfoPanel selectedRegionId={selectedRegion} />
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: "rgba(26, 26, 46, 0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "1rem 2rem",
        color: "#9ca3af",
        fontSize: "0.875rem",
        textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>
          💉 Medical Education Platform • © 2026 • Explore brain anatomy interactively
        </p>
      </footer>
    </div>
  );
}
