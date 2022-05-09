import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
// import StoriesLayout from "StoriesLayout";
import {CheckboxType} from './checkboxType';
import CheckboxComponent from './checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  parameters: {},
  argTypes:{
    opt:{
      control: {
        type: 'radio',
        options: ['radio', 'checkbox'],
      },
    },
  }
  
  
} as Meta;

const Template: Story<CheckboxType> = (args) => (

  <CheckboxComponent
  {...args}
  type={args.opt}
  
    />
);

export const Check = Template.bind({});
Check.parameters = {};
Check.args = {
  opt:'radio',
  
};



