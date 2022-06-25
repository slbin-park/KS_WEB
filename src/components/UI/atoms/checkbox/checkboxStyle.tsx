import { type } from 'os';
import React from 'react';
import styled, { css } from 'styled-components';
import { CheckboxType } from './checkboxType';

const StyledCheckbox = styled.input.attrs((props) => ({}))<CheckboxType>`
  ${(props) => {
    const type = {'radio':'radio','checkbox':'checkbox'}

  return css`
     background-repeat: no-repeat;
    width: 50%;
    height: 45px;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.3s; */
    display: block;
    width:400px;
    padding-left: 1rem;
    padding-right:1rem;
    border: 1px solid;
    border-color: inherit;
    background-color: #fff;
  `}}
  ;
`;

export default StyledCheckbox;
