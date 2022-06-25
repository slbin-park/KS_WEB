import React, { useState } from 'react';
// import useDetectClose from "util/hooks/useDetectClose";

import { Header } from '../../molecules';
import { Sidebar, HambergerIcon } from './navBar_style';
import { Hamberger, Profile, Items, UserNameDiv } from '../../atoms';

export default function NavBar() {
    const [ menuClick, setMenuClick ] = useState<boolean>(false);
    return(
        <>
        <HambergerIcon onClick = { () => {setMenuClick(!menuClick);} }>
            <Hamberger click = { menuClick }/>
        </HambergerIcon>
        <Header/>
        <Sidebar click = { menuClick }>
            <Profile/>
            <UserNameDiv/>
            <Items/>
        </Sidebar>
        </>
    );
}