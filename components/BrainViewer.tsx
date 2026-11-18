"use client";

import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { BrainModel } from "./BrainModel";

interface BrainViewerProps {
  selectedRegion: string | null;
  onRegionSelect?: (regionId: string) => void;
  autoRotate?: boolean;
}

export function BrainViewer({
  selectedRegion,
  onRegionSelect,
  autoRotate = true,
}: BrainViewerProps) {
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const controlsRef = useRef(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      const controls = controlsRef.current as any;
      controls.reset();
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
        camera={{
          position: [0, 0, 4],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        {/* Clear color */}
        <color attach="background" args={["#1a1a2e"]} />
        
        {/* Lighting */}
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[0, 0, 10]} intensity={1} color="white" />
        
        {/* Brain Model */}
        <BrainModel
          selectedRegion={selectedRegion}
          onRegionSelect={onRegionSelect}
        />

        {/* Camera Controls */}
        <OrbitControls
          ref={controlsRef}
          autoRotate={isAutoRotating}
          autoRotateSpeed={2}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={20}
        />
      </Canvas>

      {/* Control Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          display: "flex",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <button
          onClick={resetCamera}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.2s",
            pointerEvents: "auto",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)");
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)");
          }}
          title="Reset camera to default position"
        >
          🎯 Reset
        </button>
        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          style={{
            background: isAutoRotating
              ? "rgba(59, 130, 246, 0.2)"
              : "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: isAutoRotating
              ? "1px solid rgba(59, 130, 246, 0.5)"
              : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.2s",
            pointerEvents: "auto",
          }}
          onMouseEnter={(e) => {
            if (!isAutoRotating) {
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)");
            }
          }}
          onMouseLeave={(e) => {
            if (!isAutoRotating) {
              (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)");
            }
          }}
          title="Toggle auto-rotation"
        >
          {isAutoRotating ? "⏸️" : "▶️"}
        </button>
      </div>
    </div>
  );
}
