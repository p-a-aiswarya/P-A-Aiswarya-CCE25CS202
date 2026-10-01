import React, { useEffect } from "react";
import { X, CheckCircle2, Cpu, Award } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header Media */}
        <div className="modal-media-header">
          <img 
            src={project.image} 
            alt={project.title} 
            className="modal-header-img"
          />
          <div className="modal-header-overlay">
            <span className="modal-badge">{project.tag}</span>
            <span className="modal-category">{project.category}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-content">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-long-desc">{project.longDescription || project.description}</p>

          {/* Key Metrics / Highlights */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Award size={18} className="text-accent" /> Key Project Highlights & Metrics
              </h4>
              <div className="modal-metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={18} className="text-accent" /> Technologies & Architecture
            </h4>
            <div className="modal-tech-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="modal-actions">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <GithubIcon size={18} /> View on GitHub
            </a>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn btn-secondary"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
