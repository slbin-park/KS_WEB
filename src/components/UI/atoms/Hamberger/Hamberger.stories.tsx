import React from 'react';
import { Meta } from '@storybook/react'

import { HambergerIcon } from './Hamberger_style';

export default {
    title: 'Atoms/Hamberger',
    component: HambergerIcon,
} as Meta

export const Default = () => (
    <HambergerIcon/>     
)