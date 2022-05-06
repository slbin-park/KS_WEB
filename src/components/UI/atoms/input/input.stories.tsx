import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
// import StoriesLayout from "StoriesLayout";
import {InputType} from './inputType';
import InputComponent from './input';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  parameters: {},
  argTypes:{
    // placeholder: args.stirng.isRequired,
    // size: .oneOf(["sm","md","lg"]),
  }
  
} as Meta;

const Template: Story<InputType> = (args) => (
  <InputComponent
      
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



