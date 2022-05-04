import React from 'react';
import { Meta, Story } from '@storybook/react'

import { ProfileImg } from './profile_style';

export default {
    title: 'Atoms/Profile',
    components: ProfileImg,
} as Meta;

export const Profile = (args) => <ProfileImg {...args}/>
Profile.args = {
    width: '180px',
    height: '180px',
}