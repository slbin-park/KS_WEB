import React, { useEffect, useState, useRef } from 'react';
import CheckboxComponent from './checkbox';

import {CheckboxType} from './checkboxType'


const Checkbox: React.FC<CheckboxType> = (props, {}: CheckboxType) => (
  <CheckboxComponent {...props} />
);

export default Checkbox;
