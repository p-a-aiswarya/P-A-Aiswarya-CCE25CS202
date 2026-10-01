import React from "react";

export default function SkillBadge({ name, level, badge, desc }) {
  // Determine badge color theme
  const getBadgeColor = (badgeType) => {
    switch (badgeType) {
      case "Expert":
        return "badge-expert";
      case "Advanced":
        return "badge-advanced";
      case "Proficient":
        return "badge-proficient";
      default:
        return "badge-intermediate";
    }
  };

  return (
    <div className="skill-badge-card">
      <div className="skill-card-top">
        <div className="skill-name-wrap">
          <span className="skill-indicator-dot"></span>
          <h4 className="skill-name">{name}</h4>
        </div>
        <span className={`skill-level-pill ${getBadgeColor(badge)}`}>
          {badge}
        </span>
      </div>

      {desc && <p className="skill-desc">{desc}</p>}

      <div className="skill-progress-wrap">
        <div className="skill-progress-bar">
          <div 
            className="skill-progress-fill" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="skill-percent-text">{level}%</span>
      </div>
    </div>
  );
}
