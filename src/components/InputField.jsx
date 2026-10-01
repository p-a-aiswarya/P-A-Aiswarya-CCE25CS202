import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function InputField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  icon: Icon,
  rows,
  helperText
}) {
  const isInvalid = touched && Boolean(error);
  const isValid = touched && !error && value && value.trim() !== "";

  return (
    <div className={`form-group ${isInvalid ? "has-error" : ""} ${isValid ? "is-valid" : ""}`}>
      <label htmlFor={id} className="form-label">
        <span className="label-text">
          {label} {required && <span className="required-star">*</span>}
        </span>
        {helperText && <span className="helper-label-text">{helperText}</span>}
      </label>

      <div className="input-wrapper">
        {Icon && (
          <div className="input-leading-icon">
            <Icon size={18} />
          </div>
        )}

        {rows ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input form-textarea ${Icon ? "has-icon" : ""}`}
            aria-invalid={isInvalid}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${Icon ? "has-icon" : ""}`}
            aria-invalid={isInvalid}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        )}

        <div className="input-validation-icon">
          {isInvalid && <AlertCircle size={18} className="text-danger" />}
          {isValid && <CheckCircle2 size={18} className="text-success" />}
        </div>
      </div>

      {isInvalid && (
        <div id={`${id}-error`} className="form-error-msg" role="alert">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
