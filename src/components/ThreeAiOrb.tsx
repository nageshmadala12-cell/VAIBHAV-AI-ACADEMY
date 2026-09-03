import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeAiOrbProps {
  className?: string;
}

export const ThreeAiOrb: React.FC<ThreeAiOrbProps> = ({ className = "w-full h-full" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // 1. Inner Glowing Sphere (Core)
    const coreGeometry = new THREE.SphereGeometry(1.25, 32, 32);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366F1, // Royal Purple / Indigo
      emissive: 0x4338CA,
      specular: 0x38BDF8, // Sky Blue
      shininess: 90,
      transparent: true,
      opacity: 0.85,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(coreSphere);

    // 2. Outer Wireframe Geodesic Shell (Neural Grid)
    const shellGeometry = new THREE.IcosahedronGeometry(1.65, 2);
    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0x38BDF8, // Sky blue
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const shellMesh = new THREE.Mesh(shellGeometry, shellMaterial);
    orbGroup.add(shellMesh);

    // 3. Orbiting Data Ring 1
    const ring1Geometry = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x818CF8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    orbGroup.add(ring1);

    // 4. Orbiting Data Ring 2 (Tilted)
    const ring2Geometry = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    orbGroup.add(ring2);

    // 5. Floating AI Particle Swarm
    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPurple = new THREE.Color(0x8B5CF6);
    const colorCyan = new THREE.Color(0x38BDF8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = colorPurple.clone().lerp(colorCyan, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    orbGroup.add(particleField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38BDF8, 3, 50);
    pointLight1.position.set(4, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7C3AED, 2.5, 50);
    pointLight2.position.set(-4, -3, -2);
    scene.add(pointLight2);

    // Mouse interaction with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = (x / rect.width - 0.5) * 0.8;
      targetY = (y / rect.height - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize observer
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      orbGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.8;
      orbGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 + mouseY * 0.8;

      shellMesh.rotation.y = -elapsedTime * 0.15;
      shellMesh.rotation.x = elapsedTime * 0.1;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.25;

      particleField.rotation.y = elapsedTime * 0.08;

      // Gentle floating pulse
      const pulse = Math.sin(elapsedTime * 1.5) * 0.03 + 1;
      coreSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={mountRef} id="three-ai-orb-container">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 pointer-events-none radial-glow rounded-full -z-10 opacity-70" />
    </div>
  );
};
