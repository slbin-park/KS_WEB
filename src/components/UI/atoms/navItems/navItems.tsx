import React, { useState } from 'react';
import Link from "next/link";

import { Logo, Register } from './navItems_style';

export default function NavItems(props) {
    
    return(
        <>
        <Logo>
            <Link href = "/">
                <a className = "LogoImg">KS WEB</a>
            </Link>
        </Logo>
        <Register>
            <span>Register</span>
        </Register>
        </>
    )
};