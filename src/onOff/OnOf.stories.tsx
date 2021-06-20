import React from 'react';
import { Story, Meta } from '@storybook/react';
import {OnOff, PropsType} from "./OnOff";


export default {
    title: 'On-Off',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<PropsType> = (args) => <OnOff {...args} />;

export const Primary = Template.bind({});
Primary.args = {

}