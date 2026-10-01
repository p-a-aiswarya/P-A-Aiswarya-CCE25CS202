import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsAppIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer-gradient-bar"></div>
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Short Description */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <span className="footer-logo-text">{personalInfo.name}</span>
              <span className="footer-badge">CSE Portfolio</span>
            </div>
            <p className="footer-desc">
              {personalInfo.professionalSummary}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  <ArrowUpRight size={14} /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <ArrowUpRight size={14} /> About Aiswarya
                </Link>
              </li>
              <li>
                <Link to="/about#skills" className="footer-link">
                  <ArrowUpRight size={14} /> Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/about#certifications" className="footer-link">
                  <ArrowUpRight size={14} /> Certifications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <ArrowUpRight size={14} /> Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-title">Direct Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`tel:${personalInfo.phone}`} className="footer-contact-item">
                  <Phone size={16} className="contact-icon" />
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-val">{personalInfo.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${personalInfo.phoneRaw}?text=Hi%20Aiswarya,%20I%20saw%20your%20portfolio`}
                  target="_blank" 
                  rel="noreferrer"
                  className="footer-contact-item"
                >
                  <MessageCircle size={16} className="contact-icon wa-icon" />
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-val">{personalInfo.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="footer-contact-item">
                  <Mail size={16} className="contact-icon" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-val">{personalInfo.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="footer-contact-item">
                  <MapPin size={16} className="contact-icon" />
                  <div>
                    <span className="contact-label">Campus</span>
                    <span className="contact-val">Christ College of Engineering, Irinjalakuda</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Professional Links */}
          <div className="footer-col">
            <h4 className="footer-title">Connect & Social</h4>
            <p className="footer-social-note">
              Feel free to connect or inspect my code repositories and professional journey:
            </p>
            <div className="footer-social-grid">
              <a
                href={personalInfo.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github-btn"
                title="GitHub: p-a-aiswarya"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin-btn"
                title="LinkedIn: p-a-aiswarya-21382a37b"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram-btn"
                title="Instagram: @_aiiishwaryaa"
              >
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>
              <a
                href={personalInfo.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp-btn"
                title="WhatsApp Direct Chat"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Information */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} <strong>{personalInfo.name}</strong> ({personalInfo.rollNo}). All rights reserved.
          </div>
          <div className="footer-tech-stack" title="Technology stack used to build this application">
            <span>ReactJS</span>
            <span className="tech-divider">•</span>
            <span>JavaScript</span>
            <span className="tech-divider">•</span>
            <span>HTML5</span>
            <span className="tech-divider">•</span>
            <span>JSX</span>
            <span className="tech-divider">•</span>
            <span>CSS3</span>
            <span className="tech-divider">•</span>
            <span>React Router</span>
            <span className="tech-divider">•</span>
            <span>NodeJS</span>
            <span className="tech-divider">•</span>
            <span>npm</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
