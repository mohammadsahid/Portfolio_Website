const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/mdsahidansari" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/mohammadsahid" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/ms_shah179/" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
      </div>

      <ul className="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p className="copyright">@ Mohammad Sahid | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
