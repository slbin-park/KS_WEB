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
    width:{
      control: {
        type: 'radio',
        options: ['large', 'medium','small'],
      },
    },
    size:{}
  }
  
} as Meta;

const Template: Story<InputType> = (args) => (
  <div style={{width:`${args.width}px`}}>
<InputComponent
      
      {...args}
      
    />
  </div>
  
);

export const Search = Template.bind({});
Search.parameters = {};
Search.args = {
  width:'small',
  placeholder:'검색할 단어를 입력하세요',
  
};




