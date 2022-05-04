import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { HambergerIcon } from './Hamberger_style';

export default function Hamberger(props) {
    var click: boolean = props;
    return(
    <>
    <HambergerIcon>
        <FontAwesomeIcon icon = { !click ? faBars : faTimes }/>
    </HambergerIcon>
    </>
    );
}