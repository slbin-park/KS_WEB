import React from 'react';

import { HeaderContainer } from './header_style';
import { NavItems } from '../../atoms';

export default function Header() {
    return(
        <HeaderContainer>
            <NavItems/>
        </HeaderContainer>
    );
}