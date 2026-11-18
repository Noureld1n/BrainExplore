"use client";

import { BRAIN_REGIONS, BrainRegion } from "@/lib/brain-data";
import { useEffect, useState } from "react";

interface InfoPanelProps {
  selectedRegionId: string | null;
}

export function InfoPanel({ selectedRegionId }: InfoPanelProps) {
  const [selectedRegion, setSelectedRegion] = useState<BrainRegion | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const region = BRAIN_REGIONS.find((r) => r.id === selectedRegionId);
    setSelectedRegion(region || null);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedRegionId]);

  const getRegionEmoji = (regionId: string) => {
    const emojiMap: Record<string, string> = {
      "frontal-lobe": "🧠",
      "parietal-lobe": "📍",
      "temporal-lobe": "👂",
      "occipital-lobe": "👁️",
      "cerebellum": "⚖️",
    };
    return emojiMap[regionId] || "🧠";
  };

  return (
    <div className={`glass-panel p-8 h-full flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
      isAnimating ? "opacity-80 scale-98" : "opacity-100 scale-100"
    }`}>
      {selectedRegion ? (
        <div className="space-y-6 fade-in-up">
          {/* Region Header */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{getRegionEmoji(selectedRegion.id)}</span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {selectedRegion.name}
              </h2>
            </div>
            <div
              className="h-1 w-16 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${selectedRegion.color}, transparent)`,
              }}
            ></div>
          </div>

          {/* Main Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {selectedRegion.description}
            </p>
          </div>

          {/* Function Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Primary Functions
            </h3>
            <div className="space-y-2">
              {selectedRegion.function.split(", ").map((func, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: selectedRegion.color }}
                  ></div>
                  <span className="text-gray-300">{func}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color Indicator */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="flex-1">
              <p className="text-xs text-gray-400 mb-2">Region Color</p>
              <div
                className="h-8 rounded-lg glow-neon"
                style={{
                  backgroundColor: selectedRegion.color,
                  boxShadow: `0 0 20px ${selectedRegion.color}80`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-5xl opacity-50">🧠</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              Select a Brain Region
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Click on any region in the 3D brain model to view detailed information
              about its structure and functions.
            </p>
          </div>
          <div className="pt-4 space-y-2">
            <p className="text-xs text-gray-500 font-semibold uppercase">
              Available Regions:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {BRAIN_REGIONS.map((region) => (
                <div
                  key={region.id}
                  className="text-xs text-gray-400 flex items-center gap-1"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: region.color }}
                  ></div>
                  {region.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
