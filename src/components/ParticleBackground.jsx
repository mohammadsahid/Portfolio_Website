import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for THREE to be available from CDN
    const initThree = () => {
      if (!window.THREE) return;

      const THREE = window.THREE;
      const container = containerRef.current;
      if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Particle geometry
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      for (let i = 0; i < 10000; i++) {
        vertices.push(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      const material = new THREE.PointsMaterial({ color: 0x00ffee, size: 2 });
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh);
      camera.position.z = 1000;

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      let animId;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.002;
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    // Poll until THREE is ready (loaded via CDN script tag)
    if (window.THREE) {
      const cleanup = initThree();
      return cleanup;
    } else {
      const interval = setInterval(() => {
        if (window.THREE) {
          clearInterval(interval);
          initThree();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return <div id="canvas-container" ref={containerRef}></div>;
};

export default ParticleBackground;
