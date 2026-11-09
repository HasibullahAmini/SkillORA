import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2>
              Skill<span>ora.</span>
            </h2>

            <p>
              Learn practical skills, develop your knowledge, and build a better
              future with Skillora.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ◎
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/courses">Courses</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h3>Categories</h3>
            <a href="/courses">Web Development</a>
            <a href="/courses">UI/UX Design</a>
            <a href="/courses">Data Science</a>
            <a href="/courses">Digital Marketing</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p>
              <Mail size={17} />
              Nfleader.asdf52@gmail.com
            </p>

            <p>
              <Phone size={17} />
              +93 766 889 488
            </p>

            <p>
              <MapPin size={17} />
              Kabul, Afghanistan
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <div>
            <h3>Stay Updated</h3>
            <p>Get updates about new courses and learning opportunities.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2026 Skillora. All rights reserved.</p>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
