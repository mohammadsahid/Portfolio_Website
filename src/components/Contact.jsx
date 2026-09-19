import { useState } from 'react';

const contactInfo = [
  {
    icon: 'bx-envelope',
    label: 'Email',
    value: 'mohammadsahid9486@gmail.com',
    href: 'mailto:mohammadsahid9486@gmail.com',
  },
  {
    icon: 'bx-phone',
    label: 'Phone',
    value: '+91-6200995766',
    href: 'tel:+916200995766',
  },
  {
    icon: 'bx-map',
    label: 'Location',
    value: 'Ghaziabad, Uttar Pradesh, India',
    href: '#',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <div className="contact-wrapper">
        {/* Left — info panel */}
        <div className="contact-info-panel">
          <h3>Let&apos;s work together</h3>
          <p>
            Open to full-time roles, freelance projects, and collaborations.
            Feel free to reach out — I usually respond within 24 hours.
          </p>

          <div className="contact-info-list">
            {contactInfo.map(({ icon, label, value, href }) => (
              <a key={label} href={href} className="contact-info-item">
                <div className="contact-info-icon">
                  <i className={`bx ${icon}`}></i>
                </div>
                <div>
                  <span className="contact-info-label">{label}</span>
                  <span className="contact-info-value">{value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/mdsahidansari" target="_blank" rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/mohammadsahid" target="_blank" rel="noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.instagram.com/ms_shah179/" target="_blank" rel="noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label>Full Name</label>
              <div className="input-wrap">
                <i className="bx bx-user"></i>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Mohammad Sahid"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label>Email</label>
              <div className="input-wrap">
                <i className="bx bx-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Phone</label>
              <div className="input-wrap">
                <i className="bx bx-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-field">
              <label>Subject</label>
              <div className="input-wrap">
                <i className="bx bx-edit"></i>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-field">
            <label>Message</label>
            <div className="input-wrap textarea-wrap">
              <i className="bx bx-message-detail"></i>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn contact-submit-btn">
            {sent ? (
              <><i className="bx bx-check-circle"></i> Message Sent!</>
            ) : (
              <><i className="bx bx-send"></i> Send Message</>
            )}
          </button>

          {sent && (
            <p className="contact-success">
              ✅ Thanks! I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
