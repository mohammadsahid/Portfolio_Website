const timelineData = [
  {
    id: 'education1',
    year: '2019 – 2021',
    icon: 'bxs-school',
    tag: 'School',
    title: 'D.A.V. Public School',
    subtitle: 'Class 10th — Secondary Education',
    location: 'Dhanbad, Jharkhand',
    grade: '83.6%',
    description:
      'Completed Class 10th with 83.6%, building core fundamentals in mathematics, science, and logical reasoning that sparked my early interest in technology.',
  },
  {
    id: 'education2',
    year: '2021 – 2023',
    icon: 'bxs-graduation',
    tag: 'School',
    title: 'D.A.V. Public School',
    subtitle: 'Class 12th — Science',
    location: 'Dhanbad, Jharkhand',
    grade: '87%',
    description:
      'Built a strong foundation in science and mathematics. Developed an early interest in technology, programming, and design that set the direction for my career.',
  },
  {
    id: 'education3',
    year: '2023 – Expected 2027',
    icon: 'bxs-book-open',
    tag: 'University',
    title: 'Ajay Kumar Garg Engineering College',
    subtitle: 'B.Tech — Computer Science & Information Technology',
    location: 'Ghaziabad, Uttar Pradesh',
    grade: '75.2%',
    description:
      'Gaining hands-on exposure to full-stack development, data structures & algorithms, UI/UX design, and software engineering principles.',
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>

      <div className="edu-timeline">
        {timelineData.map(({ id, year, icon, tag, title, subtitle, location, grade, description }, idx) => (
          <div key={id} className={`edu-card ${id} ${idx % 2 === 0 ? 'edu-left' : 'edu-right'}`}>
            {/* connector dot */}
            <div className="edu-connector">
              <div className="edu-dot">
                <i className={`bx ${icon}`}></i>
              </div>
            </div>

            <div className="edu-card-body">
              <div className="edu-card-header">
                <span className="edu-tag">{tag}</span>
                <span className="edu-year">
                  <i className="bx bx-calendar"></i> {year}
                </span>
              </div>
              <h3 className="edu-title">{title}</h3>
              <p className="edu-subtitle">{subtitle}</p>
              <div className="edu-meta">
                <span><i className="bx bx-map"></i> {location}</span>
                <span className="edu-grade"><i className="bx bxs-star"></i> {grade}</span>
              </div>
              <p className="edu-desc">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
