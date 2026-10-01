import React from "react";
import { Trophy, Award, Lightbulb, Rocket, Code, GraduationCap, Star } from "lucide-react";

export default function AchievementCard({ achievement }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy size={24} className="achievement-icon text-amber" />;
      case "Lightbulb":
        return <Lightbulb size={24} className="achievement-icon text-yellow" />;
      case "Rocket":
        return <Rocket size={24} className="achievement-icon text-indigo" />;
      case "Code":
        return <Code size={24} className="achievement-icon text-cyan" />;
      case "GraduationCap":
        return <GraduationCap size={24} className="achievement-icon text-violet" />;
      case "Star":
        return <Star size={24} className="achievement-icon text-pink" />;
      default:
        return <Award size={24} className="achievement-icon text-emerald" />;
    }
  };

  return (
    <div className="achievement-card">
      <div className="achievement-icon-wrapper">
        {getIcon(achievement.icon)}
      </div>

      <div className="achievement-content">
        <span className="achievement-level-pill">{achievement.level}</span>
        <h4 className="achievement-title">{achievement.title}</h4>
        <p className="achievement-desc">{achievement.description}</p>
        {achievement.details && (
          <div className="achievement-details-box">
            <small>{achievement.details}</small>
          </div>
        )}
      </div>
    </div>
  );
}
