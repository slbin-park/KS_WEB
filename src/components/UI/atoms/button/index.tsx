import React, { useEffect, useState, useRef } from 'react';
import ButtonComponent from './button';

export interface ButtonParamsType {}

const Button: React.FC<ButtonParamsType> = (props, {}: ButtonParamsType) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonComponent {...props} />
);

export default Button;
