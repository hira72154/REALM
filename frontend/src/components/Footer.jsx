
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            THE REALM<span>.</span>
          </Link>

          <p>
            Empowering ideas through technology,
            artificial intelligence and innovation.
            Let's grow together.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/support">24/7 Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div>
          <h4>Connect</h4>

          <Link to="/contact">Contact Us</Link>

          <a href="mailto:therealm.international@gmail.com">
            <Mail size={15} />
            Email Us
          </a>
        </div>

        <div>
          <h4>Our Vision</h4>

          <p>
            Creating meaningful digital experiences
            and building a smarter future.
          </p>

          <Link
            to="/contact"
            className="footer-contact"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {CURRENT_YEAR} THE REALM. All rights reserved.
        </span>

        <span>Designed to Grow Together.</span>
      </div>
    </footer>
  );
}
