import React, { useState } from 'react';
import Link from "next/link";

import { Logo, Register } from './navItems_style';

export default function NavItems() {
    
    return(
        <>
        <Logo>
            <Link href = "/">
                <span>KS Web</span>
            </Link>
        </Logo>
        <Register>
            <span>Register</span>
        </Register>
        </>
    )
};