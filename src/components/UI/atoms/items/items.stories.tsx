// import React from 'react';
// import { Meta } from '@storybook/react'

// import { ItemsContainer } from './items_style';

// export default{
//     title: 'Atoms/Items',
//     component: ItemsContainer,
//     type: {
//         control: {
//             type: 'select',
//             options: ['default', 'hovered'],
//         },
//     }
// } as Meta;

// export const Hovered = (args) => <ItemsContainer onMouseOver = {args.hover}/>
// Hovered.args = {
//     type: 'hovered'
// }

// const Template = (args) => {
//     <>
//     <span className = "info">Default</span>
//     <ItemsContainer/>
//     <span className = "info">Hovered</span>
//     <ItemsContainer/>
//     </>
// }

// export const Default = Template.bind({})
// Default.args = {
//     type: 'default'
// }

// export const Hovered = Template.bind({})
// Hovered.args = {
//     type: 'hovered'
// }