<div align="center">

# 🧠 Brain Explorer

### Explore the human brain in 3D. Spin it, zoom in, and click any region to learn what it does.

An interactive, medical-style web app built with **Next.js** and **React Three Fiber**, made for students, educators, and anyone curious about how the brain is organized.

<br>

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=threedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)


<!-- <img src="docs/screenshot.png" alt="Brain Explorer screenshot" width="85%"> -->


<br>

## 🗺️ Quick Navigation

| | | |
|:---:|:---:|:---:|
| 🧭 [Overview](#-overview) | ✨ [Features](#-features) | 🧰 [Tech Stack](#-tech-stack) |
| 🚀 [Getting Started](#-getting-started) | 🎮 [Usage](#-usage) | 🧬 [Brain Regions](#-brain-regions) |
| 📁 [Project Structure](#-project-structure) | 🎨 [Customization](#-customization) | 🔧 [Configuration](#-configuration) |
| ⚡ [Performance](#-performance) | 🌐 [Browser Support](#-browser-support) | ☁️ [Deployment](#-deployment) |
| 📦 [Scripts](#-available-scripts) | ⚠️ [Disclaimer](#-disclaimer) | 📚 [Resources](#-resources) |

</div>

---

## 🧭 Overview

Learning brain anatomy from flat diagrams is hard. **Brain Explorer** lets you look at the brain from any angle and click a region to see what it is and what it does, so you can see how the parts fit together.

- 🔄 **Look around:** rotate, zoom, and pan a 3D brain with your mouse or fingers.
- 👆 **Click to learn:** select a region to highlight it and open its details in a side panel.
- 🧩 **Easy to extend:** every region's name, description, functions, and color live in one data file.
- 🛟 **Works out of the box:** no 3D model needed. A built-in procedural brain is used unless you add your own.

> [!TIP]
> Great for classrooms, self-study, presentations, and demos, or as a starting point for your own interactive 3D project.

---

## ✨ Features

### 🎯 Interaction
- 🖱️ **3D navigation:** rotate, zoom, and pan with the mouse or touch
- 👆 **Region selection:** click a region to highlight it and view its details
- 📋 **Information panel:** name, description, primary functions, and a color key
- 🎥 **Camera controls:** reset the view, and toggle auto-rotation
- ✨ **Hover feedback:** regions react visually as you move over them

### 🧬 Anatomy
- 5 major regions: **Frontal, Parietal, Temporal, and Occipital lobes, and the Cerebellum**
- Data-driven content, so adding or editing a region doesn't require touching the components

### 🎨 Look and feel
- 🌌 Dark medical theme with blue and purple gradients
- 🪟 Glassmorphism panels (translucent surfaces with backdrop blur)
- 💫 Smooth transitions between regions and a neon glow on the selected one
- 💡 Ambient and directional lighting with Three.js environment presets
- ⏳ Loading spinner and React Suspense boundaries while the model loads
- 📱 Responsive layout for desktop, tablet, and mobile

---

## 🧰 Tech Stack

| Area | Technology |
|:-----|:-----------|
| 🧱 Framework | Next.js 16 (App Router) |
| ⚛️ UI library | React 19 |
| 🧊 3D rendering | Three.js, React Three Fiber, Drei |
| 🎨 Styling | Tailwind CSS 4 |
| 🟦 Language | TypeScript 5 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later, with npm (or yarn / pnpm / bun)
- A modern browser with WebGL support

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### Run it

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** and start exploring. The page reloads automatically as you edit files.

---

## 🎮 Usage

### Navigating the model

| Action | Mouse | Touch |
|:-------|:------|:------|
| 🔄 Rotate | Click and drag | One-finger drag |
| 🔍 Zoom | Scroll wheel | Pinch |
| ✋ Pan | Right-click and drag | Two-finger drag |

### Exploring regions

1. 👆 Click a colored region on the brain.
2. 📋 The side panel updates with its name, description, and primary functions.

### Control panel

- 🎯 **Reset Camera** returns the view to its default position.
- ⏯️ **Pause / Rotate** toggles automatic rotation.

---

## 🧬 Brain Regions

| | Region | Primary functions | Color |
|:-:|:-------|:------------------|:------|
| 🧠 | **Frontal lobe** | Executive function, motor control, personality | ![#3B82F6](https://img.shields.io/badge/-3B82F6-3B82F6?style=flat-square) |
| 📍 | **Parietal lobe** | Sensory processing, spatial awareness, coordination | ![#8B5CF6](https://img.shields.io/badge/-8B5CF6-8B5CF6?style=flat-square) |
| 👂 | **Temporal lobe** | Auditory processing, memory formation, emotion | ![#EC4899](https://img.shields.io/badge/-EC4899-EC4899?style=flat-square) |
| 👁️ | **Occipital lobe** | Visual perception and processing | ![#06B6D4](https://img.shields.io/badge/-06B6D4-06B6D4?style=flat-square) |
| ⚖️ | **Cerebellum** | Motor coordination, balance, proprioception | ![#10B981](https://img.shields.io/badge/-10B981-10B981?style=flat-square) |

---

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── BrainViewer.tsx     # 3D canvas, camera, and controls
│   ├── BrainModel.tsx      # Brain model and selectable regions
│   ├── InfoPanel.tsx       # Region information panel
│   └── index.ts            # Component exports
├── lib/
│   └── brain-data.ts       # Region data and constants
├── public/
│   └── models/
│       └── brain.glb       # Optional custom 3D model
├── next.config.ts          # Next.js configuration (.glb / .gltf loading)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration (@/* path alias)
└── package.json
```

> [!NOTE]
> **How it fits together:** `page.tsx` holds the selected-region state. `BrainViewer` renders the Three.js canvas and camera controls, `BrainModel` draws the brain and reports clicks and hovers, and `InfoPanel` shows the selected region using the data from `lib/brain-data.ts`.

---

## 🎨 Customization

### ➕ Edit or add regions

All region content lives in the `BRAIN_REGIONS` array in `lib/brain-data.ts`:

```typescript
{
  id: "frontal-lobe",
  name: "Frontal Lobe",
  description: "Description shown in the information panel.",
  color: "#3B82F6",
  function: "Executive function, motor control, personality",
}
```

To add a region, append a new entry with a unique `id`, then make sure `BrainModel.tsx` has geometry or a mesh for it.

### 🧊 Use your own 3D model

Place a `.glb` or `.gltf` file at `public/models/brain.glb`. If the file is missing, the app uses the built-in procedural brain.

> [!IMPORTANT]
> Name the meshes in your model to match your region `id` values so that selection works.

### 💅 Change the look

- `app/globals.css` controls animations and utility classes.
- Tailwind classes in the component files control layout and theme colors.

---

## 🔧 Configuration

| File | What it does |
|:-----|:-------------|
| `next.config.ts` | Webpack rules for loading `.glb` and `.gltf` files |
| Tailwind config | Dark mode on by default, plus custom glass and glow utilities |
| `tsconfig.json` | The `@/*` alias maps to the project root |

---

## ⚡ Performance

- 📦 Components are code-split with `next/dynamic`
- 🚚 Models are preloaded with `useGLTF.preload()`
- 🧹 Three.js resources are disposed of properly
- 🖼️ Device pixel ratio (`dpr`) is capped to keep rendering efficient
- 🪶 State is plain React hooks, and animations use CSS where possible

---

## 🌐 Browser Support

| 🟢 Chrome / Edge | 🟠 Firefox | 🔵 Safari | 📱 Mobile |
|:----------------:|:----------:|:---------:|:---------:|
| 90+ | 88+ | 14+ | WebGL required |

---

## ☁️ Deployment

### ▲ Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### 🖥️ Any Node.js host

```bash
npm run build
npm run start
```

---

## 📦 Available Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint the codebase |

---

## ⚠️ Disclaimer

> Brain Explorer is an **educational tool**. The model is a simplified representation, and the descriptions are general overviews. It is not intended for diagnosis, clinical decision-making, or medical advice.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei](https://github.com/pmndrs/drei)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<div align="center">

<br>

**Made with ❤️ for neuroscience education and medical visualization**

</div>