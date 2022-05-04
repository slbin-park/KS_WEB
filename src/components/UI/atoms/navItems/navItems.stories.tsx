import React from 'react';
import { Meta } from '@storybook/react'

import { Logo } from './navItems_style';

export default{
    title: 'Atoms/Logo',
    component: Logo,
} as Meta;

export const Default = () => <Logo/>
Default.args = {
    children: 'Logo',
}