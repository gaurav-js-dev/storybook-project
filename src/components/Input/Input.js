import './Input.css';

import React from 'react';

const Input = (props) => {
  const { size = "md", ...rest } = props;

  return <input type="text" className={`${size}`} {...rest} />;
};

export default Input;
