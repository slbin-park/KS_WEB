import React, { useState } from 'react';

import { Header } from '../../molecules';
import { Sidebar } from './navBar_style';
import { Hamberger, Profile, Items, UserNameDiv } from '../../atoms';

export default function NavBar() {
    const [ menuClick, setMenuClick ] = useState<boolean>(false);
    const test = () => {
        setMenuClick(!menuClick);
        console.log("we did it!");
    }
    return(
        <>
        <Hamberger onClick = { () => {test()} } click = { menuClick }/>
        <Header/>
        <Sidebar click = { !menuClick }>
            <Profile/>
            <UserNameDiv/>
            <Items/>
        </Sidebar>
        </>
    );
}