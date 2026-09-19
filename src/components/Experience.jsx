import { useState } from 'react';

const experienceData = [
  {
    id: 'exp1',
    period: 'Aug 2024 – Present',
    type: 'Full-time',
    icon: 'bx-bulb',
    color: '#f39c12',
    role: 'Coordinator',
    company: 'AKGEC IDEA Lab',
    location: 'Ghaziabad, India · On-site',
    points: [
      'Contributing to the IDEA Lab as a full-time coordinator, supporting innovation and entrepreneurship activities.',
      'Facilitating workshops, ideation sessions, and mentoring students on early-stage product development.',
    ],
    tags: ['Leadership', 'Innovation', 'Mentoring'],
  },
  {
    id: 'exp2',
    period: 'Jan 2026 – Aug 2026',
    type: 'Full-time · 8 mos',
    icon: 'bx-code-block',
    color: '#00ffee',
    role: 'Lead Web Developer',
    company: 'NoCapCode',
    location: 'Ghaziabad, India · On-site',
    points: [
      'Contributed to a 10-member engineering team building and maintaining the NoCapCode website using the MERN stack.',
      'Built Contact Us and Careers pages including responsive frontend UI and backend logic.',
      'Implemented an automated email system (Node.js/Express) for new contact-form submissions.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    id: 'exp3',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship · 1 mo',
    icon: 'bx-layout',
    color: '#9b59b6',
    role: 'Frontend Developer',
    company: 'Humanity Founders',
    location: 'Ghaziabad, India · Remote',
    points: [
      'Built the frontend for Humanity One Portal, the company\'s internal HR management platform.',
      'Developed a complete HR dashboard with KPI cards, connecting backend APIs to the frontend for real-time data.',
      'Collaborated with design and marketing teams to maintain brand consistency across digital assets.',
    ],
    tags: ['React.js', 'REST APIs', 'UI/UX'],
  },
  {
    id: 'exp4',
    period: 'Oct 2024 – Apr 2025',
    type: 'Full-time · 7 mos',
    icon: 'bx-microphone',
    color: '#e74c3c',
    role: 'Event Coordinator',
    company: 'TEDxAKGEC',
    location: 'Ghaziabad, India · On-site',
    points: [
      'Managed event planning, coordination, and execution end-to-end.',
      'Worked with cross-functional teams to deliver a smooth and impactful event experience.',
    ],
    tags: ['Advertising', 'Event Planning', 'Team Management'],
  },
  {
    id: 'exp5',
    period: 'Oct 2024 – Dec 2024',
    type: 'Internship · 3 mos',
    icon: 'bx-code-alt',
    color: '#3498db',
    role: 'Website Developer',
    company: 'PureWashr',
    location: 'Ghaziabad, India · On-site',
    points: [
      'First internship — worked on a ground-level project with a team in an on-site environment.',
      'Boosted confidence and sharpened real-world development skills through hands-on experience.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="experience" id="experience">
      <h2 className="heading">Experience</h2>

      <div className="exp-timeline-wrapper">

        {/* ── Horizontal track ── */}
        <div className="exp-track">
          <div className="exp-track-line"></div>
          {experienceData.map(({ id, period, company, role, icon, color }, idx) => (
            <button
              key={id}
              className={`exp-node ${active === idx ? 'exp-node-active' : ''}`}
              style={{ '--node-color': color }}
              onClick={() => setActive(idx)}
            >
              <div className="exp-node-dot">
                <i className={`bx ${icon}`}></i>
              </div>
              <div className="exp-node-label">
                <span className="exp-node-company">{company}</span>
                <span className="exp-node-period">{period}</span>
              </div>
            </button>
          ))}
        </div>

        {/* ── Detail card ── */}
        {(() => {
          const { id, period, type, icon, color, role, company, location, points, tags } =
            experienceData[active];
          return (
            <div className="exp-detail-card" key={id} style={{ '--node-color': color }}>
              <div className="exp-detail-left">
                <div className="exp-detail-icon">
                  <i className={`bx ${icon}`}></i>
                </div>
                <div className="exp-detail-meta">
                  <span className="exp-detail-type">{type}</span>
                  <span className="exp-detail-period">
                    <i className="bx bx-calendar"></i> {period}
                  </span>
                  <span className="exp-detail-loc">
                    <i className="bx bx-map"></i> {location}
                  </span>
                </div>
              </div>

              <div className="exp-detail-right">
                <h3 className="exp-detail-role">{role}</h3>
                <h4 className="exp-detail-company">{company}</h4>
                <ul className="exp-detail-points">
                  {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
                <div className="exp-detail-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default Experience;
