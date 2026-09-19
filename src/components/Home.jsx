import { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/IMG_20241209_003339.jpg';

const stats = [
  { value: '2+',   label: 'Years Exp.' },
  { value: '5+',   label: 'Companies' },
  { value: '10+',  label: 'Projects' },
  { value: '100+', label: 'DSA Solved' },
];

const ROLES = ['UI/UX Designer', 'Full Stack Developer', 'Data Analyst'];
const TYPE_SPEED   = 80;   // ms per character typed
const DELETE_SPEED = 40;   // ms per character deleted
const PAUSE_AFTER  = 1800; // ms to show full word before deleting

// ── Typing hook ──────────────────────────────────────────────
const useTypingEffect = (words) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx,   setWordIdx]   = useState(0);
  const [phase,     setPhase]     = useState('typing'); // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const word = words[wordIdx];

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        // Word fully typed → pause
        const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        // Bar is empty → switch to next word and start typing
        setWordIdx((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }
  }, [displayed, phase, wordIdx, words]);

  return displayed;
};

const Home = () => {
  const canvasRef  = useRef(null);
  const typedText  = useTypingEffect(ROLES);

  useEffect(() => {
    const initThree = () => {
      if (!window.THREE) return;
      const THREE = window.THREE;
      const container = canvasRef.current;
      if (!container) return;

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(renderer.domElement);

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
      const mesh     = new THREE.Points(geometry, material);
      scene.add(mesh);
      camera.position.z = 1000;

      const onResize = () => {
        if (!container) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
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

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      };
    };

    let cleanup;
    if (window.THREE) {
      cleanup = initThree();
    } else {
      const interval = setInterval(() => {
        if (window.THREE) { clearInterval(interval); cleanup = initThree(); }
      }, 100);
      return () => clearInterval(interval);
    }
    return () => cleanup && cleanup();
  }, []);

  return (
    <section className="home" id="home">
      {/* Three.js canvas */}
      <div ref={canvasRef} className="home-canvas" />

      {/* ── Left: text content ── */}
      <div className="home-content">

        <h1 className="home-title">
          Hi, I&apos;m <br />
          <span>Md Sahid Ansari</span>
        </h1>

        <h3 className="text-animation">
          I&apos;m a <span className="typed-text">{typedText}</span><span className="typed-cursor">|</span>
        </h3>

        <p className="home-desc">
          Full-stack MERN developer with production experience building HR dashboards,
          admin portals, and AI-integrated tools. I own features end-to-end — from
          responsive UI to REST APIs and backend logic.
        </p>

        {/* social row */}
        <div className="home-social-row">
          <a href="https://www.linkedin.com/in/mdsahidansari" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/mohammadsahid" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/ms_shah179/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <div className="home-social-divider"></div>
          <a href="mailto:mohammadsahid9486@gmail.com" className="home-email-link" aria-label="Email">
            mohammadsahid9486@gmail.com
          </a>
        </div>

        {/* CTA buttons */}
        <div className="home-cta">
          <a href="#contact" className="btn btn2">Contact Me</a>
        </div>

        {/* quick stats */}
        <div className="home-stats">
          {stats.map(({ value, label }) => (
            <div className="home-stat" key={label}>
              <span className="home-stat-value">{value}</span>
              <span className="home-stat-label">{label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Right: image ── */}
      <div className="home-img-col">
        <div className="home-img-frame">
          {/* glow blob behind image */}
          <div className="home-img-glow"></div>
          <img src={profileImg} alt="Mohammad Sahid" className="home-photo" />
        </div>
      </div>

    </section>
  );
};

export default Home;
