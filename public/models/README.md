# 3D Brain Models

This directory contains 3D models for the Brain Explorer application.

## Current Status

The application includes a **procedural 3D brain model** that is generated dynamically. This works perfectly for the interactive visualization and doesn't require any external model files.

## Optional: Using a Custom Brain Model

If you'd like to use a custom 3D brain model (GLTF/GLB format), follow these steps:

### 1. Obtain a Brain Model

You can find 3D brain models from several sources:

- **Sketchfab** (https://sketchfab.com) - Search for "brain model"
- **TurboSquid** (https://www.turbosquid.com) - Professional 3D models
- **Free3D** (https://free3d.com) - Free 3D models
- **Cgtrader** (https://www.cgtrader.com) - 3D marketplace
- Generate one using: **Blender** with appropriate medical textures

### 2. Export as GLTF/GLB

Make sure your model is exported in one of these formats:
- `.glb` (binary GLTF - recommended, smaller file size)
- `.gltf` (text GLTF with associated texture files)

### 3. Place Your Model

1. Save your brain model as `brain.glb` in this directory
2. If using `.gltf` format with textures, ensure all texture files are in this directory too

### 4. Model Requirements

For best results, your model should:
- Be centered at the origin (0, 0, 0)
- Have a reasonable scale (approximately 2-4 units in size)
- Include realistic materials and textures
- Be optimized for web (ideally under 10MB)

### 5. Verify It Works

The application will automatically:
1. Try to load `/models/brain.glb`
2. If successful, use your custom model
3. If not found, use the built-in procedural brain model

### Recommended Tools for Optimization

- **Blender** (free) - Model editing and export
- **glTF Validator** (https://github.khronos.org/glTF-Validator/) - Validate GLTF files
- **Draco Compression** - Reduce file size for GLB models

## Integration Notes

The `BrainModel.tsx` component:
- Automatically loads `brain.glb` from the public folder
- Falls back to procedural brain if model not found
- Supports region selection and highlighting
- Works with OrbitControls for camera manipulation

No additional code changes needed - just place your model in this directory!
