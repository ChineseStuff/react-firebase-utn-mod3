import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./common.css";

const TextInput = ({
  type,
  name,
  icon,
  onChange,
  placeholder,
  value,
  error,
  labelStyle
}) => {
  let wrapperClass = "input-wrapper";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className={labelStyle}>
        <FontAwesomeIcon icon={["fas", icon]} />
      </label>
      <div>
        <input
          type={type}
          name={name}
          className='input-text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && (
          <div className='error-label'>
            {error}
            <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
