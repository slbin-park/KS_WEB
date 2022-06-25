import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
// import StoriesLayout from "StoriesLayout";
import {ButtonType} from './buttonType';
import ButtonComponent from './button';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['primary', 'gradient', 'black','blue'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['submit', 'none','check'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonType> = (args) => (

    
    <ButtonComponent
      children={args.children}
      type={args.type}
      {...args}
      width = {"blue"}
    />

  
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: 'black',
  children: 'TEST',
  type: 'none',
  backColor: 'primary',
};
