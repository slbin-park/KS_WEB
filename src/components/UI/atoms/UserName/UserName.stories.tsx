import React from 'react';
import { Meta } from '@storybook/react'

import { UserNameDiv } from './UserName_style';

export default{
    title: 'Atoms/UserNameDiv',
    component: UserNameDiv,
} as Meta;

export const Default = (args) => <UserNameDiv children = {args.children}/>
Default.args = {
    children: 'Garry',
}