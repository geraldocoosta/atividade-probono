import React from 'react';
import PropTypes from 'prop-types';

export default function InputTextArea(props) {
  const {
    label,
    onChange,
    value,
    name,
  } = props;

  InputTextArea.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <div className="flex-row textarea-div-form">
      <label htmlFor={name} className="label-textarea">
        <div className="flex-row label-form">
          {label}
        </div>
        <textarea id={name} className="textarea-form" value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}
