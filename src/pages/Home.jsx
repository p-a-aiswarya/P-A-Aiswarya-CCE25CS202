import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Send, 
  Code2, 
  ChevronDown,
  Award,
  Layers,
  GraduationCap,
  Sparkles,
  Folder,
  Trophy,
  Briefcase,
  Cpu,
  FileCheck,
  Eye
} from "lucide-react";
import { 
  personalInfo, 
  technicalSkills, 
  featuredProjects,
  certificatesList
} from "../data/portfolioData";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  WhatsAppIcon 
} from "../components/SocialIcons";
import ProjectCard from "../components/ProjectCard";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [certCategory, setCertCategory] = useState("all");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = certCategory === "all"
    ? certificatesList
    : certificatesList.filter((c) => c.category === certCategory);

  const scrollToProjects = () => {
    const el = document.getElementById("featured-projects-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCertificates = () => {
    const el = document.getElementById("certificates-folder-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects = selectedCategory === "all"
    ? featuredProjects
    : featuredProjects.filter((p) => {
        if (selectedCategory === "web") return p.category === "Web Development";
        if (selectedCategory === "mobile") return p.category === "Mobile Application";
        if (selectedCategory === "hardware") return p.category.includes("Hardware");
        return true;
      });

  return (
    <div className="page-wrapper home-page" id="home-page-root">
      {/* Background Decorative Ambient Lighting */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-badge">
              <GraduationCap size={14} className="text-accent" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Hi, I am <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            {/* Profession / Role */}
            <h2 className="hero-subtitle">
              {personalInfo.profession}
            </h2>

            {/* Short Introduction (Professional Summary) */}
            <p className="hero-description">
              {personalInfo.professionalSummary}
            </p>

            {/* Colorful Qualification & Focus Tags */}
            <div className="hero-focus-tags">
              <span className="focus-pill focus-pill-primary">
                <GraduationCap size={14} /> B.Tech CSE (2nd Year)
              </span>
              <span className="focus-pill focus-pill-cyan">
                <Code2 size={14} /> Data Science &amp; ML
              </span>
              <span className="focus-pill focus-pill-emerald">
                <Sparkles size={14} /> Mathematics &amp; AI Tools
              </span>
              <span className="focus-pill focus-pill-amber">
                <Award size={14} /> 3D Printing &amp; Hackathons
              </span>
            </div>

            {/* Action Buttons: View My Work, Certificates & Contact Me */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                onClick={scrollToProjects} 
                className="btn btn-primary btn-lg"
                id="view-my-work-btn"
              >
                <span>View Projects</span>
                <ChevronDown size={18} />
              </button>

              <button 
                type="button" 
                onClick={scrollToCertificates} 
                className="btn btn-secondary btn-lg"
                id="view-certs-btn"
              >
                <Folder size={18} />
                <span>Certificates &amp; Achievements</span>
              </button>

              <Link 
                to="/contact" 
                className="btn btn-ghost btn-lg"
                id="contact-me-btn"
              >
                <span>Contact Me</span>
                <Send size={18} />
              </Link>
            </div>

            {/* Social Quick Bar with Working Links */}
            <div className="hero-social-bar">
              <span className="social-bar-label">Connect:</span>
              <a 
                href={personalInfo.socials.github.url} 
                target="_blank" 
                rel="noreferrer"
                className="hero-social-link" 
                title="GitHub: p-a-aiswarya"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={personalInfo.socials.linkedin.url} 
                target="_blank" 
                rel="noreferrer"
                className="hero-social-link" 
                title="LinkedIn: p-a-aiswarya-21382a37b"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={personalInfo.socials.instagram.url} 
                target="_blank" 
                rel="noreferrer"
                className="hero-social-link" 
                title="Instagram: @_aiiishwaryaa"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href={personalInfo.socials.whatsapp.url} 
                target="_blank" 
                rel="noreferrer"
                className="hero-social-link" 
                title="WhatsApp: +91 6282415966"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="hero-social-link" 
                title="Email: aiswaryaajay2008@gmail.com"
              >
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Profile Photo Display with Multi-Color Aurora Glow */}
          <div className="hero-visual">
            <div className="profile-card-wrapper">
              <div className="profile-image-frame">
                <img 
                  src={personalInfo.profileImage} 
                  alt={`Portrait of ${personalInfo.name}`} 
                  className="profile-hero-img"
                  id="home-profile-photo"
                />
                <div className="profile-glow-ring"></div>
              </div>

              {/* Profile Qualification & Focus Badges */}
              <div className="floating-card floating-card-top">
                <div className="floating-icon-wrap bg-cyan-glow">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <strong className="floating-title">B.Tech in CSE</strong>
                  <span className="floating-sub">Christ College of Eng.</span>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <div className="floating-icon-wrap bg-violet-glow">
                  <Code2 size={18} />
                </div>
                <div>
                  <strong className="floating-title">Full-Stack &amp; IoT</strong>
                  <span className="floating-sub">Hardware &amp; Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section skills-section" id="technical-skills" aria-label="Technical Skills">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Code2 size={14} /> Technical Skills
            </span>
            <h2 className="section-heading">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle">
              Core competencies spanning programming, full-stack web, mobile UI, and embedded systems.
            </p>
          </div>

          <div className="technical-skills-grid">
            {technicalSkills.map((group, idx) => (
              <div key={idx} className="skill-group-card">
                <div className="skill-group-header">
                  <h3 className="skill-group-title">{group.category}</h3>
                  <span className="skill-group-count">{group.skills.length} skills</span>
                </div>
                <div className="skill-tags-list">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-item-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/about" className="btn btn-outline">
              <span>View Full Educational &amp; Professional Background in About</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects or Work Samples Section */}
      <section className="section projects-section" id="featured-projects-section" aria-label="Featured Projects">
        <div className="container">
          <div className="section-header">
            <div className="section-header-left">
              <span className="section-eyebrow">
                <Layers size={14} /> Work Samples
              </span>
              <h2 className="section-heading">
                Featured <span className="text-gradient">Projects &amp; Work Samples</span>
              </h2>
              <p className="section-subtitle">
                Functional applications, system architectures, and hardware prototypes developed across workshops, hackathons, and web platforms.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="project-filter-tabs">
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All ({featuredProjects.length})
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "web" ? "active" : ""}`}
                onClick={() => setSelectedCategory("web")}
              >
                Web Development
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "mobile" ? "active" : ""}`}
                onClick={() => setSelectedCategory("mobile")}
              >
                Mobile Apps
              </button>
              <button
                type="button"
                className={`filter-pill ${selectedCategory === "hardware" ? "active" : ""}`}
                onClick={() => setSelectedCategory("hardware")}
              >
                Hardware &amp; IoT
              </button>
            </div>
          </div>

          {/* Clean, Elegant Project Cards with no AI pictures */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Achievements Folder Section */}
      <section className="section cert-section" id="certificates-folder-section" aria-label="Certificates and Achievements Folder">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Folder size={14} /> Credentials Folder
            </span>
            <h2 className="section-heading">
              Certificates &amp; <span className="text-gradient">Achievements</span>
            </h2>
            <p className="section-subtitle">
              Browse authentic verified credentials, hackathon honors, and workshop certificates. Select a folder category and click to inspect any certificate.
            </p>
          </div>

          <div className="folder-container-wrap">
            {/* Category / Folder Tabs */}
            <div className="folder-tabs-nav" role="tablist" aria-label="Certificate Categories">
              <button
                type="button"
                className={`folder-tab ${certCategory === "all" ? "active" : ""}`}
                onClick={() => setCertCategory("all")}
              >
                <Folder size={16} />
                <span>All Documents ({certificatesList.length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-achievements ${certCategory === "Achievements" ? "active" : ""}`}
                onClick={() => setCertCategory("Achievements")}
              >
                <Trophy size={16} />
                <span>Achievements ({certificatesList.filter(c => c.category === "Achievements").length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-internships ${certCategory === "Internships & Industry" ? "active" : ""}`}
                onClick={() => setCertCategory("Internships & Industry")}
              >
                <Briefcase size={16} />
                <span>Internships &amp; Industry ({certificatesList.filter(c => c.category === "Internships & Industry").length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-workshops ${certCategory === "Workshops & Training" ? "active" : ""}`}
                onClick={() => setCertCategory("Workshops & Training")}
              >
                <Cpu size={16} />
                <span>Workshops &amp; Training ({certificatesList.filter(c => c.category === "Workshops & Training").length})</span>
              </button>
            </div>

            <div className="folder-header-info">
              <span className="folder-current-tag">
                <FileCheck size={14} /> Folder: {certCategory === "all" ? "All Credentials" : certCategory} ({filteredCertificates.length})
              </span>
              <span className="folder-hint-text">
                <Eye size={14} /> Click to inspect certificate in high resolution
              </span>
            </div>

            <div className="certificates-grid">
              {filteredCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onPreview={(c) => setSelectedCertificate(c)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}

      {/* Contact CTA Strip */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-content">
              <h3 className="cta-title">
                Get in Touch with {personalInfo.preferredName}
              </h3>
              <p className="cta-desc">
                Feel free to connect for software development, hardware prototyping, or hackathons.
              </p>
              <div className="cta-btn-group">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <Send size={18} />
                  <span>Send an Enquiry</span>
                </Link>
                <a
                  href={personalInfo.socials.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp ({personalInfo.phone})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
