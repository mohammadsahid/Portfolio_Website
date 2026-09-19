import aboutImg from '../assets/img4.jpg';

const achievements = [
  {
    icon: 'bxs-trophy',
    color: 'gold',
    title: 'IIT Delhi UI/UX',
    desc: 'Top 5% among 100+ teams',
  },
  {
    icon: 'bxl-hackerrank',
    color: '#00ea64',
    title: 'HackerRank 4-Star',
    desc: '100+ DSA problems solved',
  },
  {
    icon: 'bx-microphone',
    color: '#e74c3c',
    title: 'TEDxAKGEC',
    desc: 'Event Coordinator & Speaker Manager',
  },
  {
    icon: 'bx-rocket',
    color: '#9b59b6',
    title: 'E-Cell & Startup Cell',
    desc: 'Startup ideation & product dev',
  },
];

const floatingChips = ['React.js', 'Node.js', 'MongoDB', 'UI/UX'];

const About = () => {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="heading">About <span>Me</span></h2>

      <div className="about-wrapper">

        {/* ── Left column ── */}
        <div className="about-img-col">
          <div className="about-img-wrap">
            <img src={aboutImg} alt="Mohammad Sahid" />
            <div className="about-ring"></div>
            <div className="about-ring about-ring-2"></div>

            {/* floating skill chips */}
            {floatingChips.map((chip, i) => (
              <span key={chip} className={`about-chip chip-${i}`}>{chip}</span>
            ))}

            <span className="about-badge">
              <i className="bx bx-check-shield"></i> Available for Work
            </span>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="about-content-col">

          <div className="about-intro">
            <h3 className="about-tagline">
              I&apos;m <span>Md Sahid Ansari</span>
            </h3>
            <p className="about-desc">
              I build production-grade web apps and design intuitive interfaces.
              Beyond the code editor, I compete at IIT Delhi, coordinate TEDx events,
              and contribute to startup ecosystems — thriving where technology meets
              leadership.
            </p>
          </div>

          {/* Achievements grid */}
          <p className="about-ach-label">
            <i className="bx bxs-star"></i> Highlights &amp; Achievements
          </p>
          <div className="about-achievements">
            {achievements.map(({ icon, color, title, desc }) => (
              <div
                className="achievement-card"
                key={title}
                style={{ '--ach-color': color }}
              >
                <div className="achievement-icon">
                  <i className={`bx ${icon}`}></i>
                </div>
                <div className="achievement-text">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#experience" className="btn btn2">View Work</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
