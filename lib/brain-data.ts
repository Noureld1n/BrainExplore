export interface BrainRegion {
  id: string;
  name: string;
  description: string;
  color: string;
  function: string;
}

export const BRAIN_REGIONS: BrainRegion[] = [
  {
    id: "frontal-lobe",
    name: "Frontal Lobe",
    description: "Controls voluntary movements, speech, reasoning, and decision-making",
    color: "#3B82F6",
    function: "Executive function, motor control, personality",
  },
  {
    id: "parietal-lobe",
    name: "Parietal Lobe",
    description: "Processes sensory information like touch, temperature, and pain",
    color: "#8B5CF6",
    function: "Sensory processing, spatial awareness, coordination",
  },
  {
    id: "temporal-lobe",
    name: "Temporal Lobe",
    description: "Handles hearing, memory, and emotional processing",
    color: "#EC4899",
    function: "Auditory processing, memory formation, emotion",
  },
  {
    id: "occipital-lobe",
    name: "Occipital Lobe",
    description: "The visual processing center of the brain",
    color: "#06B6D4",
    function: "Visual perception and processing",
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    description: "Coordinates muscle movements and maintains balance",
    color: "#10B981",
    function: "Motor coordination, balance, proprioception",
  },
];

export const BRAIN_INFO = {
  title: "Interactive Brain Explorer",
  subtitle: "Explore the structure and function of the human brain",
  instructions: "Click on brain regions to learn more about their functions",
};
