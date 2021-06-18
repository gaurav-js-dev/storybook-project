import './Button.css';

import React from 'react';

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <div>
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
