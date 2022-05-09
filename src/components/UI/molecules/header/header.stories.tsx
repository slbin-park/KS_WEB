import React from 'react';
import { Meta } from '@storybook/react'

import Header from './header';

export default{
    title: 'molecules/Header',
    component: Header,
} as Meta;

export const LogoDiv = () => <Header/>