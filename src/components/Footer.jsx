const Footer = () => {
  return (
    <footer id="contacts" className="footer-custom py-4 m-0">
      <div className="container d-flex flex-column align-items-center text-center">
        <div className="d-flex justify-content-center gap-4">
          <a href="https://linkedin.com/in/nikol-ditsova-14a4b234b" className="social-media-link">
            <img src="/images/LinkedIn_logo.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/nikol-ditsova" className="social-media-link">
            <img src="/images/GitHub_logo.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/nikol_kaloyanova/" className="social-media-link">
            <img src="/images/Instagram_logo.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
        <div className="text-center mb-3 mb-md-0">
          <p>© 2025 - Personal Portfolio</p>
          <p>Designed by Nikol Ditsova</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
