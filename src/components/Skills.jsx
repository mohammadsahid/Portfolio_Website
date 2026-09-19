import { useState } from 'react';

const skillsData = [
  // Languages
  { name: 'JavaScript', icon: 'bxl-javascript', category: 'Languages' },
  { name: 'Python', icon: 'bxl-python', category: 'Languages' },
  { name: 'Java', icon: 'bxl-java', category: 'Languages' },
  { name: 'C / C++', icon: 'bx-code-alt', category: 'Languages' },
  { name: 'HTML5', icon: 'bxl-html5', category: 'Languages' },
  { name: 'CSS3', icon: 'bxl-css3', category: 'Languages' },

  // Frontend
  { name: 'React.js', icon: 'bxl-react', category: 'Frontend' },
  { name: 'Redux Toolkit', icon: 'bx-git-branch', category: 'Frontend' },
  { name: 'Responsive Design', icon: 'bx-devices', category: 'Frontend' },
  { name: 'UI/UX Design', icon: 'bx-palette', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: 'bxl-nodejs', category: 'Backend' },
  { name: 'Express.js', icon: 'bx-server', category: 'Backend' },
  { name: 'REST APIs', icon: 'bx-transfer', category: 'Backend' },

  // Database
  { name: 'MongoDB', icon: 'bx-data', category: 'Database' },
  { name: 'SQL', icon: 'bx-table', category: 'Database' },

  // Tools
  { name: 'Git', icon: 'bxl-git', category: 'Tools' },
  { name: 'GitHub', icon: 'bxl-github', category: 'Tools' },
  { name: 'Postman', icon: 'bx-send', category: 'Tools' },
  { name: 'VS Code', icon: 'bx-code-block', category: 'Tools' },
];

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills = () => {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered =
    active === 'All' ? skillsData : skillsData.filter((s) => s.category === active);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Tools &amp; <span>Technologies</span>
      </h2>

      {/* Category filter tabs */}
      <div className="skills-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'filter-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill cards */}
      <div className="skills-grid">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <i className={`bx ${skill.icon} skill-icon`}></i>
            <span className="skill-name">{skill.name}</span>
            <span className={`skill-category-tag ${hovered === skill.name ? 'tag-visible' : ''}`}>
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
