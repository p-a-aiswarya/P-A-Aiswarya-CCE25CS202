import React from "react";
import { Smartphone, Globe, Cpu, FileCode, Lightbulb } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function ProjectCard({ project }) {
  const getIcon = (type) => {
    switch (type) {
      case "mobile":
        return <Smartphone size={28} className="project-type-icon text-cyan" />;
      case "web":
        return <Globe size={28} className="project-type-icon text-indigo" />;
      case "hardware":
        return <Cpu size={28} className="project-type-icon text-amber" />;
      case "system":
        return <FileCode size={28} className="project-type-icon text-violet" />;
      default:
        return <Lightbulb size={28} className="project-type-icon text-emerald" />;
    }
  };

  return (
    <div className="project-card no-ai-img">
      <div className="project-card-header">
        <div className="project-icon-badge">
          {getIcon(project.type)}
        </div>
        <span className="project-category-tag">{project.category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.skillsUsed && (
          <div className="project-tech-tags">
            {project.skillsUsed.map((skill, idx) => (
              <span key={idx} className="tech-pill">
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-footer">
          <a
            href={personalInfo.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
            title="Inspect on GitHub"
          >
            <GithubIcon size={16} />
            <span>GitHub ({personalInfo.socials.github.username})</span>
          </a>
        </div>
      </div>
    </div>
  );
}
