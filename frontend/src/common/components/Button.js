import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, disabled, className, primary, warning, stretch, onClick, ...props }) => {
  return (
    <button
      {...props}
      className={classNames('button', className, {
        'button--primary': primary,
        'button--warning': warning,
        'button--stretch': stretch,
        'button--disabled': disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
};

export default Button;
