import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  Target, 
  Cpu, 
  MapPin, 
  Send,
  FileCheck,
  Folder,
  Eye
} from "lucide-react";
import { 
  personalInfo, 
  educationalQualifications, 
  workExperience, 
  technicalSkills, 
  innovationExperience, 
  certificatesList 
} from "../data/portfolioData";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeCertCategory, setActiveCertCategory] = useState("all");

  const filteredCertificates = activeCertCategory === "all"
    ? certificatesList
    : certificatesList.filter((c) => c.category === activeCertCategory);

  return (
    <div className="page-wrapper about-page" id="about-page-root">
      {/* Background Lighting */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-3"></div>

      {/* Page Header */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-badge">
            <GraduationCap size={14} className="text-accent" />
            <span>Academic &amp; Professional Profile</span>
          </div>
          <h1 className="page-hero-title">
            About <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <p className="page-hero-lead">
            {personalInfo.profession} • Christ College of Engineering (Autonomous), Irinjalakuda
          </p>
        </div>
      </section>

      {/* 1. Personal Introduction */}
      <section className="section about-intro-section" id="personal-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <div className="section-eyebrow">
                <span>Personal Introduction</span>
              </div>
              <h2 className="section-heading">
                B.Tech Computer Science &amp; <br />
                <span className="text-gradient">Engineering Student</span>
              </h2>

              <p className="about-intro-p">
                {personalInfo.personalIntroduction}
              </p>

              <div className="about-actions-row">
                <Link to="/contact" className="btn btn-primary">
                  <Send size={16} /> Contact Me
                </Link>
                <a 
                  href={personalInfo.socials.linkedin.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                >
                  <Award size={16} /> LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="about-intro-visual">
              <div className="profile-about-card">
                <div className="profile-about-img-wrap">
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name} 
                    className="profile-about-img"
                  />
                  <div className="profile-verified-badge">
                    <span>Roll No: {personalInfo.rollNo}</span>
                  </div>
                </div>
                <div className="profile-about-meta">
                  <h3 className="profile-about-name">{personalInfo.name}</h3>
                  <p className="profile-about-role">{personalInfo.profession}</p>
                  <p className="profile-about-college">
                    <MapPin size={14} /> {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Educational Qualification */}
      <section className="section education-section" id="educational-qualifications">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <GraduationCap size={14} /> Academic Profile
            </span>
            <h2 className="section-heading">
              Educational <span className="text-gradient">Qualifications</span>
            </h2>
            <p className="section-subtitle">
              Formal academic qualifications and engineering curriculum background.
            </p>
          </div>

          <div className="simple-cards-container">
            {educationalQualifications.map((item, idx) => (
              <div key={idx} className="qualification-card">
                <div className="qualification-badge-row">
                  <GraduationCap size={20} className="text-accent" />
                  <span className="qualification-timeline">{item.timeline}</span>
                </div>
                <h3 className="qualification-title">{item.degree}</h3>
                <h4 className="qualification-institution">{item.institution}</h4>
                {item.specialization && (
                  <p className="qualification-desc" style={{ marginBottom: "0.4rem", fontWeight: "600", color: "var(--text-primary)" }}>
                    {item.specialization}
                  </p>
                )}
                {item.details && (
                  <p className="qualification-desc">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technical Skills */}
      <section className="section detailed-skills-section" id="technical-skills">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Cpu size={14} /> Capabilities
            </span>
            <h2 className="section-heading">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle">
              Verified skills provided across programming, web, mobile UI, hardware, and core competencies.
            </p>
          </div>

          <div className="technical-skills-grid">
            {technicalSkills.map((cat, idx) => (
              <div key={idx} className="skill-group-card">
                <div className="skill-group-header">
                  <h3 className="skill-group-title">{cat.category}</h3>
                  <span className="skill-group-count">{cat.skills.length} skills</span>
                </div>
                <div className="skill-tags-list">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-item-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Work Experience & Industry Exposure */}
      <section className="section experience-section" id="work-experience">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Briefcase size={14} /> Practical Training
            </span>
            <h2 className="section-heading">
              Work Experience &amp; <span className="text-gradient">Industry Exposure</span>
            </h2>
            <p className="section-subtitle">
              Internship exposure, industrial visits to corporate IT parks, and cross-disciplinary engineering workshops.
            </p>
          </div>

          <div className="simple-cards-container">
            {workExperience.map((item, idx) => (
              <div key={idx} className="experience-card">
                <div className="qualification-badge-row">
                  <Briefcase size={20} className="text-cyan" />
                  <span className="qualification-institution">{item.organization}</span>
                </div>
                <h3 className="qualification-title">{item.title}</h3>
                <p className="qualification-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certificates & Achievements Folder View */}
      <section className="section cert-section" id="certifications">
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
            {/* Folder Category Navigation */}
            <div className="folder-tabs-nav" role="tablist" aria-label="Certificate Categories">
              <button
                type="button"
                className={`folder-tab ${activeCertCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCertCategory("all")}
              >
                <Folder size={16} />
                <span>All Documents ({certificatesList.length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-achievements ${activeCertCategory === "Achievements" ? "active" : ""}`}
                onClick={() => setActiveCertCategory("Achievements")}
              >
                <Trophy size={16} />
                <span>Achievements ({certificatesList.filter(c => c.category === "Achievements").length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-internships ${activeCertCategory === "Internships & Industry" ? "active" : ""}`}
                onClick={() => setActiveCertCategory("Internships & Industry")}
              >
                <Briefcase size={16} />
                <span>Internships &amp; Industry ({certificatesList.filter(c => c.category === "Internships & Industry").length})</span>
              </button>

              <button
                type="button"
                className={`folder-tab folder-tab-workshops ${activeCertCategory === "Workshops & Training" ? "active" : ""}`}
                onClick={() => setActiveCertCategory("Workshops & Training")}
              >
                <Cpu size={16} />
                <span>Workshops &amp; Training ({certificatesList.filter(c => c.category === "Workshops & Training").length})</span>
              </button>
            </div>

            <div className="folder-header-info">
              <span className="folder-current-tag">
                <FileCheck size={14} /> Folder: {activeCertCategory === "all" ? "All Credentials" : activeCertCategory} ({filteredCertificates.length})
              </span>
              <span className="folder-hint-text">
                <Eye size={14} /> Click any card or button to inspect certificate
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

      {/* 6. Achievements / Innovation & Hackathon Experience */}
      <section className="section achievements-section" id="achievements">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <Trophy size={14} /> Hackathons &amp; Innovation
            </span>
            <h2 className="section-heading">
              Innovation &amp; <span className="text-gradient">Hackathon Experience</span>
            </h2>
            <p className="section-subtitle">
              Competitive innovation, state programmes, and residential entrepreneurship bootcamps.
            </p>
          </div>

          <div className="achievements-grid">
            {innovationExperience.map((item, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-icon-wrapper">
                  <Trophy size={24} className="text-amber" />
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{item.title}</h4>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Career Interests & Goals */}
      <section className="section career-goals-section" id="career-goals">
        <div className="container">
          <div className="career-goals-card">
            <div className="section-eyebrow">
              <Target size={14} /> Future Vision
            </div>
            <h2 className="section-heading">
              Career Interests &amp; <span className="text-gradient">Goals</span>
            </h2>

            <div className="career-statement-box">
              <p className="career-statement-text">
                {personalInfo.careerGoals}
              </p>
            </div>

            <div className="career-cta-footer">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <Send size={18} /> Contact Aiswarya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
