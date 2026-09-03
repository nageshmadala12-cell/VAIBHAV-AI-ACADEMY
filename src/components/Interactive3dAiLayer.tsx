import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Interactive3dAiLayer
 * 
 * A futuristic, high-performance 3D AI background animation layer using Three.js.
 * Features:
 * - Glowing AI neural network nodes with dynamic synaptic connection lines
 * - Floating 3D holographic geometric AI structures (Icosahedrons, Octahedron, Torus data rings)
 * - Flowing digital AI data particle stream with dual-tone (#00C2FF Neon Blue & #7C3AED Violet)
 * - Smooth scroll-driven depth, rotation, and vertical parallax
 * - Gentle mouse tilt interaction with smooth damping
 * - Automatically responsive, performance-optimized, and respects prefers-reduced-motion
 * - Non-blocking overlay with pointer-events: none
 */
export const Interactive3dAiLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    // WebGL Renderer with transparency & performance optimization
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0); // Completely transparent
    container.appendChild(renderer.domElement);

    // Master Group for Mouse & Scroll Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Colors matching brand
    const cyanColor = new THREE.Color(0x00c2ff);
    const purpleColor = new THREE.Color(0x7c3aed);
    const skyColor = new THREE.Color(0x38bdf8);

    // =========================================================================
    // 1. NEURAL NETWORK NODES & SYNAPTIC CONNECTIONS
    // =========================================================================
    const nodeCount = isMobile ? 24 : 50;
    const maxDistance = isMobile ? 6.5 : 5.8;
    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];

    // Spread nodes across 3D space
    const bounds = {
      x: isMobile ? 12 : 24,
      y: isMobile ? 16 : 22,
      z: 14,
    };

    const nodesGroup = new THREE.Group();
    masterGroup.add(nodesGroup);

    // Node spheres
    const nodeGeometry = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMaterialCyan = new THREE.MeshBasicMaterial({
      color: cyanColor,
      transparent: true,
      opacity: 0.85,
    });
    const nodeMaterialPurple = new THREE.MeshBasicMaterial({
      color: purpleColor,
      transparent: true,
      opacity: 0.85,
    });

    const nodeMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * bounds.x * 2,
        (Math.random() - 0.5) * bounds.y * 2,
        (Math.random() - 0.5) * bounds.z * 2
      );
      nodePositions.push(pos);

      // Random gentle drift velocities
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.006
        )
      );

      const isCyan = i % 2 === 0;
      const mesh = new THREE.Mesh(nodeGeometry, isCyan ? nodeMaterialCyan : nodeMaterialPurple);
      mesh.position.copy(pos);
      nodesGroup.add(mesh);
      nodeMeshes.push(mesh);
    }

    // Dynamic Synaptic Connection Lines
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    nodesGroup.add(lineSegments);

    // =========================================================================
    // 2. FLOATING HOLOGRAPHIC 3D AI GEOMETRIC STRUCTURES
    // =========================================================================
    const shapesGroup = new THREE.Group();
    masterGroup.add(shapesGroup);

    // 2a. Floating Icosahedron Neural Core (Top Right)
    const icoGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const icoWireMaterial = new THREE.MeshStandardMaterial({
      color: 0x00c2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.9,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoWireMaterial);
    icoMesh.position.set(isMobile ? 7 : 13, 5, -2);
    shapesGroup.add(icoMesh);

    // Inner glowing sphere for Icosahedron
    const icoInnerGeom = new THREE.SphereGeometry(0.7, 16, 16);
    const icoInnerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.6,
    });
    const icoInner = new THREE.Mesh(icoInnerGeom, icoInnerMat);
    icoMesh.add(icoInner);

    // 2b. Floating Octahedron AI Prism (Mid Left)
    const octaGeom = new THREE.OctahedronGeometry(1.3, 0);
    const octaWireMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      metalness: 0.8,
    });
    const octaMesh = new THREE.Mesh(octaGeom, octaWireMaterial);
    octaMesh.position.set(isMobile ? -6 : -14, -3, 1);
    shapesGroup.add(octaMesh);

    // Inner glowing core for Octahedron
    const octaInnerGeom = new THREE.OctahedronGeometry(0.6, 0);
    const octaInnerMat = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      transparent: true,
      opacity: 0.5,
    });
    const octaInner = new THREE.Mesh(octaInnerGeom, octaInnerMat);
    octaMesh.add(octaInner);

    // 2c. Floating Torus Data Ring (Lower Right)
    const torusGeom = new THREE.TorusGeometry(1.8, 0.035, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh = new THREE.Mesh(torusGeom, torusMat);
    torusMesh.position.set(isMobile ? 6 : 12, -11, -4);
    torusMesh.rotation.x = Math.PI / 3;
    shapesGroup.add(torusMesh);

    // Orbiting bead along Torus
    const beadGeom = new THREE.SphereGeometry(0.16, 12, 12);
    const beadMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const beadMesh = new THREE.Mesh(beadGeom, beadMat);
    shapesGroup.add(beadMesh);

    // 2d. Deep Quantum Dodecahedron (Bottom Left Journey)
    const dodecaGeom = new THREE.DodecahedronGeometry(1.4, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeom, dodecaMat);
    dodecaMesh.position.set(isMobile ? -5 : -11, -18, -3);
    shapesGroup.add(dodecaMesh);

    // =========================================================================
    // 3. DIGITAL DATA STREAMS / FLOATING AI PARTICLES
    // =========================================================================
    const particleCount = isMobile ? 70 : 160;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * (bounds.x * 2.2);
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * (bounds.y * 2.2);
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * (bounds.z * 1.8);

      const mixed = cyanColor.clone().lerp(purpleColor, Math.random());
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;

      particleSpeeds.push(0.005 + Math.random() * 0.01);
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeom, particleMat);
    masterGroup.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00c2ff, 2.2, 50);
    pointLightCyan.position.set(10, 10, 10);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0x7c3aed, 2.5, 50);
    pointLightPurple.position.set(-10, -10, 5);
    scene.add(pointLightPurple);

    // =========================================================================
    // 4. SCROLL & MOUSE INTERACTION STATE
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 768 ? 1.5 : 2));
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // =========================================================================
    // 5. ANIMATION LOOP
    // =========================================================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Pause/throttle when document is not visible
      if (document.hidden) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth interpolation for scroll
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      if (!prefersReducedMotion) {
        // Master Group responds gently to mouse tilt
        masterGroup.rotation.y = mouseX * 0.15;
        masterGroup.rotation.x = -mouseY * 0.1;

        // Master Group moves vertically and shifts depth based on scroll
        // As user scrolls, the 3D layer smoothly floats upward & changes perspective
        masterGroup.position.y = scrollProgress * 12;
        masterGroup.position.z = Math.sin(scrollProgress * Math.PI) * 2.5;

        // 1. Update Neural Network Nodes & Connecting Lines
        let lineIdx = 0;
        const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
        const colAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
        const linePosArray = posAttr.array as Float32Array;
        const lineColArray = colAttr.array as Float32Array;

        for (let i = 0; i < nodeCount; i++) {
          const pos = nodePositions[i];
          const vel = nodeVelocities[i];

          // Move nodes gently
          pos.add(vel);

          // Bounce back from boundaries
          if (pos.x < -bounds.x || pos.x > bounds.x) vel.x = -vel.x;
          if (pos.y < -bounds.y || pos.y > bounds.y) vel.y = -vel.y;
          if (pos.z < -bounds.z || pos.z > bounds.z) vel.z = -vel.z;

          nodeMeshes[i].position.copy(pos);

          // Connect with nearby nodes
          for (let j = i + 1; j < nodeCount; j++) {
            const posB = nodePositions[j];
            const dist = pos.distanceTo(posB);

            if (dist < maxDistance) {
              const alpha = 1.0 - dist / maxDistance;

              linePosArray[lineIdx * 6] = pos.x;
              linePosArray[lineIdx * 6 + 1] = pos.y;
              linePosArray[lineIdx * 6 + 2] = pos.z;

              linePosArray[lineIdx * 6 + 3] = posB.x;
              linePosArray[lineIdx * 6 + 4] = posB.y;
              linePosArray[lineIdx * 6 + 5] = posB.z;

              const cA = i % 2 === 0 ? cyanColor : purpleColor;
              const cB = j % 2 === 0 ? cyanColor : purpleColor;

              lineColArray[lineIdx * 6] = cA.r * alpha;
              lineColArray[lineIdx * 6 + 1] = cA.g * alpha;
              lineColArray[lineIdx * 6 + 2] = cA.b * alpha;

              lineColArray[lineIdx * 6 + 3] = cB.r * alpha;
              lineColArray[lineIdx * 6 + 4] = cB.g * alpha;
              lineColArray[lineIdx * 6 + 5] = cB.b * alpha;

              lineIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineIdx * 2);
        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        // 2. Rotate & Float 3D Geometric AI Shapes
        icoMesh.rotation.x = elapsedTime * 0.2 + scrollProgress * 2;
        icoMesh.rotation.y = elapsedTime * 0.25;
        icoMesh.position.y = 5 + Math.sin(elapsedTime * 1.2) * 0.4 - scrollProgress * 8;

        const icoPulse = 1 + Math.sin(elapsedTime * 2) * 0.08;
        icoInner.scale.set(icoPulse, icoPulse, icoPulse);

        octaMesh.rotation.x = -elapsedTime * 0.25;
        octaMesh.rotation.z = elapsedTime * 0.3 + scrollProgress * 2.5;
        octaMesh.position.y = -3 + Math.cos(elapsedTime * 1.1) * 0.5 - scrollProgress * 10;

        torusMesh.rotation.z = elapsedTime * 0.15;
        torusMesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;
        torusMesh.position.y = -11 + Math.sin(elapsedTime * 0.8) * 0.4 - scrollProgress * 8;

        // Move bead along Torus path
        const beadAngle = elapsedTime * 0.8;
        beadMesh.position.set(
          torusMesh.position.x + Math.cos(beadAngle) * 1.8,
          torusMesh.position.y + Math.sin(beadAngle) * 1.8 * Math.cos(Math.PI / 3),
          torusMesh.position.z + Math.sin(beadAngle) * 1.8 * Math.sin(Math.PI / 3)
        );

        dodecaMesh.rotation.y = elapsedTime * 0.18;
        dodecaMesh.rotation.x = elapsedTime * 0.12 + scrollProgress * 1.5;
        dodecaMesh.position.y = -18 + Math.sin(elapsedTime * 0.9) * 0.3 - scrollProgress * 6;

        // 3. Drift Particle Stream
        const particlePosArray = (particleGeom.attributes.position as THREE.BufferAttribute).array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          particlePosArray[i * 3 + 1] += Math.sin(elapsedTime + i) * 0.005;
          particlePosArray[i * 3] += Math.cos(elapsedTime * 0.5 + i) * 0.004;

          // Parallax drift with scroll
          particlePosArray[i * 3 + 2] += Math.sin(scrollProgress * 4 + i) * 0.01;
        }
        (particleGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // CLEANUP
    // =========================================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose all geometries and materials
      nodeGeometry.dispose();
      nodeMaterialCyan.dispose();
      nodeMaterialPurple.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      icoGeom.dispose();
      icoWireMaterial.dispose();
      icoInnerGeom.dispose();
      icoInnerMat.dispose();
      octaGeom.dispose();
      octaWireMaterial.dispose();
      octaInnerGeom.dispose();
      octaInnerMat.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      beadGeom.dispose();
      beadMat.dispose();
      dodecaGeom.dispose();
      dodecaMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="interactive-3d-ai-layer"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[4] overflow-hidden opacity-90 transition-opacity duration-1000"
      style={{
        willChange: 'transform',
      }}
    />
  );
};
