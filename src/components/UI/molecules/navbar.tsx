import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { NavContainer, Profile, NavItemBox, NavItem } from './navbar_style';

function NavBar() {
    const [ menuClick, setMenuClick ] = useState<boolean>(false);

    const menu = [
        { title: "Home", path: "/" },
        { title: "Menu_2", path: "/menu/Menu_2" },
        { title: "Menu_3", path: "/menu/Menu_3" },
        { title: "Menu_4", path: "/menu/Menu_4" }
    ];

    const profileName = {title: "profile name", article: "Garry"};
    const profileImg = {title: "profile img", path: "img/profile.jpg"};
    return(
        <>
        <NavContainer>
            <div className = "Hamberger" onClick = { () => {setMenuClick(!menuClick)} }>
                <FontAwesomeIcon icon = { !menuClick ? faBars : faTimes }/>
            </div>
            <div className = "Logo">
                <Link href = "/">
                    <span>KS Web</span>
                </Link>
            </div>
            <div className = "Register">
                <span>Register</span>
            </div>
            <NavItemBox click = { menuClick }>
                <Profile src = { profileImg.path } click = { menuClick }/>
                <div className = "UserName">
                    { profileName.article }
                </div>
                {menu.map((menu, index) => {
                    return (
                        <NavItem>
                            <Link href = {menu.path} key={index}>
                                <a className = "menu"><Item menu={menu} /></a>
                            </Link>
                        </NavItem>
                    );
                })}
            </NavItemBox>
        </NavContainer>
        </>
    );
}

function Item({ menu }) {
    const currentMenu = menu.title;
    return (
        <div>
            {
                {
                    Home: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_2: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_3: <p>&nbsp; {menu.title} &nbsp;</p>,
                    Menu_4: <p>&nbsp; {menu.title} &nbsp;&nbsp;</p>,
                }[currentMenu]
            }
        </div>
    )
}

export default NavBar;