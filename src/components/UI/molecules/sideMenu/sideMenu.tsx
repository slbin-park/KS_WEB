import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import SideItems from '../../atoms/sideItems/sideItems';
import NavItems from '../../atoms/navItems/navItems';
import { SideMenuContainer, NavContainer, Hamberger } from './sideMenu_style';

export default function SideMenu() {
    const [ menuClick, setMenuClick ] = useState<boolean>(false);

    return(
        <>
        <NavContainer>
            <Hamberger onClick = { () => {setMenuClick(!menuClick)} }>
                <FontAwesomeIcon icon = { !menuClick ? faBars : faTimes }/>
            </Hamberger>
            <NavItems/>
        </NavContainer>
        <SideMenuContainer click = { menuClick }>
            <SideItems/>
        </SideMenuContainer>
        </>
    );
}