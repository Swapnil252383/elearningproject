import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Teacher Academy</h2>

        <p className="footer-text">
          Empowering Students Through Quality Education,
          Free Notes, Practical Learning, and Career Growth.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/notes">Notes</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📺</a>
          <a href="#">💼</a>
        </div>

        <p className="copyright">
          © 2026 Teacher Academy. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;