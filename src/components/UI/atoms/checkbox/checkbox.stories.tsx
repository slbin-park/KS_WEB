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
    // placeholder: args.stirng.isRequired,
    // size: .oneOf(["sm","md","lg"]),
  }
  
} as Meta;

const Template: Story<CheckboxType> = (args) => (
  <CheckboxComponent
      
      {...args}
      
    />
);

export const Search = Template.bind({});
Search.parameters = {};
Search.args = {
  width:'black',
  placeholder:'검색할 단어를 입력하세요',
  size:"lg",
  
};



