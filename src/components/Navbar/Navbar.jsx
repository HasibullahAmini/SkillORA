import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";

const navigation = [
  {
    title: "Home",
    links: [
      { name: "Home One", path: "/" },
      { name: "Home Two", path: "/home-two" },
      { name: "Home Three", path: "/home-three" },
    ],
  },
  {
    title: "Courses",
    links: [
      { name: "All Courses", path: "/courses" },
      { name: "Course One", path: "/courses/one" },
      { name: "Course Two", path: "/courses/two" },
      { name: "Course Three", path: "/courses/three" },
    ],
  },
  {
    title: "Pages",
    links: [
      { name: "About", path: "/about" },
      { name: "FAQ", path: "/faq" },
      { name: "Pricing", path: "/pricing" },
      { name: "Career", path: "/career" },
      { name: "Events", path: "/events" },
      { name: "Team", path: "/team" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "Blog One", path: "/blog" },
      { name: "Blog Two", path: "/blog-two" },
      { name: "Blog Three", path: "/blog-three" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact One", path: "/contact" },
      { name: "Contact Two", path: "/contact-two" },
    ],
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">S</span>
          killora
        </Link>

        {/* Navigation */}
        <nav className={`nav-menu ${mobileOpen ? "active" : ""}`}>
          {navigation.map((item) => (
            <div className="nav-item" key={item.title}>
              <button className="nav-link">
                {item.title}
                <ChevronDown size={16} />
              </button>

              <div className="dropdown-menu">
                {item.links.map((link) => (
                  <Link
                    to={link.path}
                    key={link.path}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingBag size={23} />
            <span>0</span>
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <span className="nav-divider"></span>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
