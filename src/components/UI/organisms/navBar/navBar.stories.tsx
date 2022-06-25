import React from 'react';
import { Meta } from '@storybook/react'

import NavBar from './navBar';

export default{
    title: 'organisms/NavBar',
    component: NavBar,
} as Meta;

export const LogoDiv = () => <NavBar/>