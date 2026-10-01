import React from "react";
import { Calendar, MapPin, Award, CheckCircle, GraduationCap, Briefcase } from "lucide-react";

export default function TimelineCard({ item, type = "education" }) {
  const isEducation = type === "education";

  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <div className="timeline-icon-bubble">
          {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
        </div>
        <div className="timeline-line"></div>
      </div>

      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <div className="timeline-badges">
              {item.badge && (
                <span className="badge-highlight">{item.badge}</span>
              )}
              {item.status && (
                <span className="badge-status">{item.status}</span>
              )}
              {item.duration && (
                <span className="badge-status">{item.duration}</span>
              )}
            </div>

            <h3 className="timeline-title">
              {isEducation ? item.degree : item.role}
            </h3>

            <h4 className="timeline-subtitle">
              {isEducation ? item.institution : item.company}
            </h4>
          </div>

          <div className="timeline-meta-box">
            <span className="timeline-date">
              <Calendar size={14} /> {item.period}
            </span>
            <span className="timeline-location">
              <MapPin size={14} /> {item.location}
            </span>
            {item.score && (
              <span className="timeline-score-tag">
                <Award size={14} /> {item.score}
              </span>
            )}
          </div>
        </div>

        {item.description && (
          <p className="timeline-desc">{item.description}</p>
        )}

        {/* Highlights / Key Takeaways */}
        {((isEducation && item.highlights) || (!isEducation && item.keyTakeaways)) && (
          <ul className="timeline-bullet-list">
            {(isEducation ? item.highlights : item.keyTakeaways).map((point, idx) => (
              <li key={idx}>
                <CheckCircle size={15} className="bullet-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
