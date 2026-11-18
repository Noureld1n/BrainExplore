"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

interface BrainModelProps {
  selectedRegion?: string | null;
  onRegionSelect?: (regionId: string) => void;
}

function BrainModelContent({ selectedRegion, onRegionSelect }: BrainModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const mouseRef = useRef(new THREE.Vector2());
  const { raycaster, camera, gl } = useThree();
  
  // Load the 3D brain model
  const gltf = useGLTF("/models/brain.glb");

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  // Determine brain region based on position
  const getRegionFromPosition = (point: THREE.Vector3): string => {
    const y = point.y;
    const z = point.z;
    const x = point.x;

    // Cerebellum - bottom (y < -0.3)
    if (y < -0.3) return "cerebellum";
    
    // Temporal Lobe - sides (|x| > 0.35, covers wider area)
    if (Math.abs(x) > 0.35) return "temporal-lobe";
    
    // Occipital Lobe - back (z > 0.2, more generous)
    if (z > 0.2) return "occipital-lobe";
    
    // Frontal Lobe - front (z < -0.2, more generous)
    if (z < -0.2) return "frontal-lobe";
    
    // Parietal Lobe - everything else in the middle (default)
    return "parietal-lobe";
  };

  const handlePointerDown = (event: THREE.Event) => {
    raycaster.setFromCamera(mouseRef.current, camera);

    if (modelRef.current) {
      const meshes: THREE.Mesh[] = [];
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          meshes.push(child);
        }
      });

      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const intersection = intersects[0];
        const point = intersection.point;
        
        const localPoint = new THREE.Vector3();
        localPoint.copy(point);
        modelRef.current.worldToLocal(localPoint);

        const region = getRegionFromPosition(localPoint);
        onRegionSelect?.(region);
      }
    }
  };

  const handlePointerMove = (event: PointerEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouseRef.current, camera);

    if (modelRef.current) {
      const meshes: THREE.Mesh[] = [];
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          meshes.push(child);
        }
      });

      const intersects = raycaster.intersectObjects(meshes);
      document.body.style.cursor = intersects.length > 0 ? "pointer" : "auto";
    }
  };

  return (
    <group
      ref={modelRef}
      position={[0, 0, 0]}
      onPointerDown={handlePointerDown as any}
      onPointerMove={handlePointerMove}
    >
      {/* Load the 3D brain model */}
      {gltf && gltf.scene && (
        <primitive object={gltf.scene.clone()} scale={[1, 1, 1]} position={[0, 0, 0]} />
      )}

      {/* Highlight overlays for each region */}
      {/* Frontal Lobe Highlight */}
      {selectedRegion === "frontal-lobe" && (
        <mesh position={[0.0, 0.2, -0.4]} scale={[0.35, 0.35, 0.3]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color="#2563EB"
            emissive="#60a5fa"
            emissiveIntensity={0.8}
            shininess={100}
            transparent={true}
            opacity={0.25}
            wireframe={false}
          />
        </mesh>
      )}

      {/* Parietal Lobe Highlight */}
      {selectedRegion === "parietal-lobe" && (
        <mesh position={[0.0, 0.3, 0.0]} scale={[0.35, 0.375, 0.35]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color="#7C3AED"
            emissive="#a78bfa"
            emissiveIntensity={0.8}
            shininess={100}
            transparent={true}
            opacity={0.25}
          />
        </mesh>
      )}

      {/* Temporal Lobe Highlight */}
      {selectedRegion === "temporal-lobe" && (
        <mesh position={[-0.6, 0.1, 0.0]} scale={[0.3, 0.35, 0.3]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color="#DB2777"
            emissive="#f472b6"
            emissiveIntensity={0.8}
            shininess={100}
            transparent={true}
            opacity={0.25}
          />
        </mesh>
      )}

      {/* Occipital Lobe Highlight */}
      {selectedRegion === "occipital-lobe" && (
        <mesh position={[0.0, 0.15, 0.35]} scale={[0.4, 0.35, 0.3]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color="#06B6D4"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
            shininess={100}
            transparent={true}
            opacity={0.25}
          />
        </mesh>
      )}

      {/* Cerebellum Highlight */}
      {selectedRegion === "cerebellum" && (
        <mesh position={[0.0, -0.5, 0.1]} scale={[0.35, 0.3, 0.35]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color="#059669"
            emissive="#10b981"
            emissiveIntensity={0.8}
            shininess={100}
            transparent={true}
            opacity={0.25}
          />
        </mesh>
      )}

      {/* Glow effect lights when region is selected */}
      {selectedRegion && (
        <>
          <pointLight
            position={[0, 0.4, 0.3]}
            intensity={2}
            color="#60a5fa"
            distance={8}
            decay={1.5}
          />
          <pointLight
            position={[0, -0.5, -0.4]}
            intensity={1.5}
            color="#a78bfa"
            distance={6}
            decay={2}
          />
        </>
      )}
    </group>
  );
}

export function BrainModel({ selectedRegion, onRegionSelect }: BrainModelProps) {
  return (
    <Suspense fallback={null}>
      <BrainModelContent
        selectedRegion={selectedRegion}
        onRegionSelect={onRegionSelect}
      />
    </Suspense>
  );
}
