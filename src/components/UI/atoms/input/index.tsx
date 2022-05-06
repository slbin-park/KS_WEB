import React, { useEffect, useState, useRef } from 'react';
import InputComponent from './input';

import {InputType} from './inputType'


const Input: React.FC<InputType> = (props, {}: InputType) => (
  <InputComponent {...props} />
);

export default Input;
