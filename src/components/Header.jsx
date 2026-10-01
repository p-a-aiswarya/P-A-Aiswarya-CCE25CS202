import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { 
  Code2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Send, 
  GraduationCap
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Brand / Logo */}
        <Link to="/" className="brand-logo" id="header-brand-logo">
          <div className="logo-icon-wrapper">
            <Code2 className="logo-icon" size={22} />
          </div>
          <div className="brand-info">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-badge">
              <GraduationCap size={12} /> B.Tech CSE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "nav-link-active" : ""}`
                  }
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            id="theme-toggle-btn"
          >
            {theme === "dark" ? (
              <Sun size={18} className="theme-icon sun-icon" />
            ) : (
              <Moon size={18} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Quick Contact CTA */}
          <Link
            to="/contact"
            className="header-cta-btn"
            id="header-cta-btn"
          >
            <span>Contact</span>
            <Send size={14} />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? "drawer-open" : ""}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <Link
              to="/contact"
              className="btn btn-primary btn-block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Send size={16} /> Send Enquiry
            </Link>
            <div className="mobile-contact-snippet">
              <small>Call or WhatsApp:</small>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
