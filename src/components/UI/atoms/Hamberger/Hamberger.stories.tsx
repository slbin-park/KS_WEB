import React from 'react';
import { Meta } from '@storybook/react'

import Hamberger from './Hamberger';

export default {
    title: 'Atoms/Hamberger',
    component: Hamberger,
} as Meta

const Template_Clicked = () => (
    <>
        <>
        <Hamberger click={true} /><br/>
        <p className="info">Clicked</p>
        </>
    </>
)

const Template_NotClicked = () => (
    <>
        <>
        <Hamberger click={false} /><br/>
        <p className="info">Not Clicked</p>
        </>
    </>
)

export const NotClicked = Template_NotClicked.bind({})
export const Clicked = Template_Clicked.bind({})
// export const Default = () => <Hamberger/> 
