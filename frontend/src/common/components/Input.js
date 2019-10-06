import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import classNames from 'classnames';

const Input = ({ label, className, required, disabled, validation, ...props }) => {
  const wrapperClasses = classNames('input', className);
  const labelClasses = classNames('input-label', { 'input--disabled': disabled });
  const inputClasses = classNames({ 'input--disabled': disabled });

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <Field className={inputClasses} disabled={disabled} {...props} />
      {validation && <div className="input-error">{validation}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  validation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
};

export default Input;
