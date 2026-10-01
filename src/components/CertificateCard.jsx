import React from "react";
import { Calendar, Eye, ShieldCheck, Award } from "lucide-react";

export default function CertificateCard({ certificate, onPreview }) {
  return (
    <div className="certificate-card">
      <div className="certificate-thumbnail-wrap" onClick={() => onPreview(certificate)}>
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="certificate-thumb-img" 
          loading="lazy"
        />
        <div className="certificate-overlay">
          <button 
            type="button" 
            className="btn btn-glass btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onPreview(certificate);
            }}
          >
            <Eye size={15} />
            <span>Click to See Certificate</span>
          </button>
        </div>
        <span className="cert-verified-badge">
          <ShieldCheck size={14} /> Verified Document
        </span>
      </div>

      <div className="certificate-body">
        <div className="cert-top-meta">
          <span className="cert-category-tag">
            <Award size={13} /> {certificate.category}
          </span>
          {certificate.certificateId && (
            <span className="cert-id-tag">ID: {certificate.certificateId}</span>
          )}
        </div>

        <h3 className="cert-title" onClick={() => onPreview(certificate)}>
          {certificate.title}
        </h3>

        <div className="cert-details">
          <p className="cert-issuer">
            <strong>Issued by:</strong> {certificate.issuer}
          </p>
          {certificate.signatories && (
            <p className="cert-signatories">
              <strong>Signatories:</strong> {certificate.signatories}
            </p>
          )}
          <p className="cert-date">
            <Calendar size={14} /> {certificate.date}
          </p>
        </div>

        <p className="cert-desc">{certificate.details || certificate.description}</p>

        <button 
          type="button" 
          className="btn btn-primary btn-sm btn-block click-to-see-btn"
          onClick={() => onPreview(certificate)}
        >
          <Eye size={16} /> Click to See Certificate
        </button>
      </div>
    </div>
  );
}
