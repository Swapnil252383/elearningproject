import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-box">
          <img src={logo} alt="Logo" />
        </div>
        <h2>Teacher Academy</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <button className="join-btn">Join Now</button>
    </nav>
  );
}

export default Navbar;