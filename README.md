# 🧠 Brain Explorer - Interactive 3D Medical Visualization

A modern, professional medical-style Next.js application featuring an interactive 3D brain model with detailed anatomical regions. Perfect for educational, medical, and presentation purposes.

## ✨ Features

### Core Functionality
- ✅ **Interactive 3D Brain Model** - Rotate, zoom, and pan using mouse controls
- ✅ **Anatomical Regions** - Frontal, Parietal, Temporal, Occipital lobes, and Cerebellum
- ✅ **Region Selection** - Click any brain region to view detailed information
- ✅ **Side Information Panel** - Dynamic content with region descriptions and functions
- ✅ **Camera Controls** - Reset camera button and auto-rotation toggle
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

### Visual Polish
- ✨ **Dark Medical Theme** - Professional blue and purple gradients
- ✨ **Glassmorphism UI** - Modern transparent panels with backdrop blur
- ✨ **Smooth Animations** - Fade-in effects, region transitions, and hover states
- ✨ **Ambient & Directional Lighting** - Realistic 3D lighting effects
- ✨ **Glow Effects** - Neon-style highlights for selected regions
- ✨ **Loading Spinner** - Animated spinner during model loading
- ✨ **Procedural Brain** - Built-in fallback 3D brain model

### Advanced Features
- 🎯 **Hover Effects** - Visual feedback when hovering over regions
- 🎯 **Smooth Region Transitions** - CSS animations when switching regions
- 🎯 **Environment Lighting** - Three.js environment presets
- 🎯 **Performance Optimized** - Efficient rendering with proper disposal
- 🎯 **Suspense Boundaries** - React Suspense integration for smooth loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (with npm or yarn)
- Modern web browser with WebGL support

### Installation

```bash
# Navigate to the project directory
cd get-brain

# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
get-brain/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── BrainViewer.tsx     # 3D canvas with controls
│   ├── BrainModel.tsx      # 3D brain model with regions
│   ├── InfoPanel.tsx       # Region information panel
│   └── index.ts            # Component exports
├── lib/
│   └── brain-data.ts       # Brain regions data and constants
├── public/
│   ├── models/
│   │   └── brain.glb       # (optional) 3D brain model file
│   └── README.md           # Model documentation
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## 🎮 Usage

### Viewing the Brain

1. **Rotate**: Click and drag to rotate the brain in all directions
2. **Zoom**: Scroll wheel to zoom in/out
3. **Pan**: Right-click and drag to pan the view
4. **Reset**: Use the "🎯 Reset Camera" button to return to default view

### Selecting Regions

1. Click on any colored region in the brain
2. The side panel updates with:
   - Region name and emoji
   - Detailed description
   - Primary functions
   - Color indicator

### Controls Panel

- **🎯 Reset Camera** - Return camera to initial position
- **⏸️ Pause / ▶️ Rotate** - Toggle auto-rotation on/off

## 🧬 Brain Regions

The application includes detailed information about 5 major brain regions:

### Frontal Lobe 🧠
- **Function**: Executive function, motor control, personality
- **Color**: Blue (#3B82F6)

### Parietal Lobe 📍
- **Function**: Sensory processing, spatial awareness, coordination
- **Color**: Purple (#8B5CF6)

### Temporal Lobe 👂
- **Function**: Auditory processing, memory formation, emotion
- **Color**: Pink (#EC4899)

### Occipital Lobe 👁️
- **Function**: Visual perception and processing
- **Color**: Cyan (#06B6D4)

### Cerebellum ⚖️
- **Function**: Motor coordination, balance, proprioception
- **Color**: Green (#10B981)

## 🛠️ Technology Stack

- **Framework**: Next.js 16.2.1 with App Router
- **3D Rendering**: React Three Fiber, Three.js, Drei
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript 5
- **Components**: React 19.2.4

### Key Libraries

```json
{
  "dependencies": {
    "three": "latest",
    "@react-three/fiber": "latest",
    "@react-three/drei": "latest",
    "next": "16.2.1",
    "react": "19.2.4",
    "tailwindcss": "^4"
  }
}
```

## 🎨 Customization

### Changing Colors

Edit `lib/brain-data.ts` to modify region colors:

```typescript
{
  id: "frontal-lobe",
  color: "#3B82F6",  // Change this value
  // ...
}
```

### Adding More Regions

Add entries to the `BRAIN_REGIONS` array in `lib/brain-data.ts`:

```typescript
{
  id: "new-region",
  name: "Region Name",
  description: "Description here",
  color: "#HEXCOLOR",
  function: "Functions here",
}
```

### Using a Custom Brain Model

Place your 3D brain model (`.glb` or `.gltf`) in `public/models/brain.glb`. See `public/models/README.md` for detailed instructions.

### Styling Changes

- Modify `app/globals.css` for animations and utility classes
- Update Tailwind classes in component files
- Adjust theme colors in Tailwind configuration

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
Includes webpack configuration for loading `.glb` and `.gltf` models.

### Tailwind Config
Dark mode enabled by default with custom utilities for glassmorphism and glow effects.

### TypeScript Config
Path alias `@/*` configured to import from root directory.

## 📊 Performance Optimizations

- ✅ Component code-splitting with `next/dynamic`
- ✅ Model preloading with `useGLTF.preload()`
- ✅ Proper Three.js resource disposal
- ✅ Optimized rendering with `dpr` setting
- ✅ Efficient state management with React hooks
- ✅ CSS animations instead of JS where possible

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with WebGL support

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Documentation](https://github.com/pmndrs/drei)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

```bash
npm run build
npm run start
```

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

**Made with ❤️ for neuroscience education and medical visualization**
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
