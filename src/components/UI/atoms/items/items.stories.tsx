import React from 'react';
import { Meta } from '@storybook/react'

import Items from './items';

export default {
    title: 'Atoms/Items',
    component: Items,
} as Meta;

export function Default() {
  return <Items/>
}     
