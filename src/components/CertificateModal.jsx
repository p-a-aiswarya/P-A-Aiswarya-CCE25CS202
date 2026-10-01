import React, { useEffect } from "react";
import { X, Download, ShieldCheck } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
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

  if (!certificate) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container cert-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-modal-header-info">
            <h3 className="cert-modal-title">{certificate.title}</h3>
            <span className="cert-modal-sub">
              <ShieldCheck size={16} className="text-emerald" /> {certificate.issuer} • ID: {certificate.certificateId}
            </span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose} 
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cert-modal-body">
          <div className="cert-image-frame">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="cert-full-image" 
            />
          </div>

          <div className="cert-modal-info-footer">
            <div className="cert-info-col">
              <span className="info-label">Recipient</span>
              <span className="info-val">P A AISWARYA</span>
            </div>
            <div className="cert-info-col">
              <span className="info-label">Institution</span>
              <span className="info-val">Christ College of Engineering (Autonomous)</span>
            </div>
            <div className="cert-info-col">
              <span className="info-label">Issue Date</span>
              <span className="info-val">{certificate.date}</span>
            </div>
            <div className="cert-info-col">
              <span className="info-label">Signatories</span>
              <span className="info-val">{certificate.signatories}</span>
            </div>
          </div>
        </div>

        <div className="cert-modal-footer">
          <a 
            href={certificate.image} 
            download={`Aiswarya_${certificate.id}.jpg`} 
            className="btn btn-primary"
          >
            <Download size={16} /> Download Certificate
          </a>
          <button 
            type="button" 
            onClick={onClose} 
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
