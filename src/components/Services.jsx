const servicesData = [
  {
    id: 'service1',
    title: 'Frontend Development',
    description:
      'I build responsive, interactive, and user-friendly interfaces using React.js, Redux Toolkit, HTML5, and CSS3. My focus is on clean component architecture, smooth user experiences, and seamless API integration.',
  },
  {
    id: 'service2',
    title: 'Backend Development',
    description:
      'I develop robust server-side logic and REST APIs using Node.js and Express.js. From automated email systems to real-time data pipelines, I build reliable backend solutions that power production applications.',
  },
  {
    id: 'service3',
    title: 'UI/UX Design',
    description:
      'I design intuitive and modern interfaces that balance aesthetics with usability. Ranked in the Top 5% at the IIT Delhi UI/UX competition, I craft digital experiences that are simple, accessible, and impactful.',
  },
  {
    id: 'service4',
    title: 'Full-Stack MERN Apps',
    description:
      'I build end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) — from HR dashboards and admin portals to AI-integrated tools — owning the full development lifecycle.',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        {servicesData.map(({ id, title, description }) => (
          <div key={id} className={`service-box ${id}`}>
            <div className="service-info">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
