import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonType } from './buttonType';

const StyledButton = styled.button.attrs((props) => ({}))<ButtonType>`
  ${(props) => {
    
    const middle = props.theme.palette.$color_middle;

  return css`
    background-repeat: no-repeat;
<<<<<<< HEAD:src/components/UI/atoms/button/button_style.tsx
    background-color: lightgray;
    color: #fff;
    width: 140px;
=======
    color: ${middle};
    width: 100%;
>>>>>>> a0fefe00c70b36134fe52982daef77adfe4b91ea:src/components/UI/atoms/button/buttonStyle.tsx
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
