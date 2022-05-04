import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Hamberger, HeaderContainer } from './header_style';
import { NavItems } from '../../atoms';

export default function Header(props) {
    const [ menuClick, setMenuClick ] = useState<boolean>(false);
    return(
        <>
        <HeaderContainer>
            {/* <Hamberger onClick = { props.onClick }>
                <FontAwesomeIcon icon = { !props.onClick ? faBars : faTimes }/>
            </Hamberger> */}
            <NavItems/>
        </HeaderContainer>
        </>
    );
}