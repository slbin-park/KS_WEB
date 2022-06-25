import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonType } from './buttonType';

const StyledButton = styled.button.attrs((props) => ({}))<ButtonType>`
  ${(props) => {
    
    const middle = props.theme.palette.$color_middle;

  return css`
    background-repeat: no-repeat;
    color: ${middle};
    width: 100%;
    height: 45px;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
  `}}
  ;
`;

export default StyledButton;
