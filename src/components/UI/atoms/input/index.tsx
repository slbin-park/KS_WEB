import React, { useEffect, useState, useRef } from 'react';
import InputComponent from './input';

import {InputType} from './inputType'


const Input: React.FC<InputType> = (props, {size = 'small'}: InputType) => (
  <InputComponent {...props} size = {size} />
);

export default Input;
