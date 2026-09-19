import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark/light mode
  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', '#080808');
      root.style.setProperty('--main-color', '#0056b3');
      root.style.setProperty('--second-bg-color', 'rgb(231, 231, 231)');
    } else {
      root.style.setProperty('--bg-color', '#080808');
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--main-color', '#00ffee');
      root.style.setProperty('--second-bg-color', '#131313');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'aboutme', 'education', 'experience', 'skills', 'contact'];
  const navLabels = {
    home: 'Home',
    aboutme: 'About Me',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Sahid&apos;s <span>Portfolio</span>
      </a>

      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`a ${activeSection === id ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {navLabels[id]}
          </a>
        ))}
      </nav>

      <div>
        {isDarkMode ? (
          <i className="bx bx-sun" id="day-mode" onClick={toggleTheme}></i>
        ) : (
          <i className="bx bx-moon" id="night-mode" onClick={toggleTheme}></i>
        )}
      </div>
    </header>
  );
};

export default Header;
