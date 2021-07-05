import React from 'react';
import { Story, Meta } from '@storybook/react';
import {OncontrolledType, ControlledRaiting} from "../Oncontrolled/ControlledRaiting";


export default {
    title: '-OnControll-Raiting',
    component: ControlledRaiting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<OncontrolledType> = (arg) => <ControlledRaiting {...arg}/>;

export const Raiting = Template.bind({});
Raiting.args = {
    titleValue: 'Raiting',
    color:"blue"
    /**
     * title is name for Menu
     */
}

