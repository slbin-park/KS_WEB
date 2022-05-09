import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { HambergerIcon } from './Hamberger_style';

export default function Hamberger(props) {
    const {click} = props;
    return(
        <HambergerIcon>
            <FontAwesomeIcon icon = { !click ? faBars : faTimes }/>
        </HambergerIcon>
    );
}