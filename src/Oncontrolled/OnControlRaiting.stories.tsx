import React from 'react';
import { Story, Meta } from '@storybook/react';
import {OncontrolledType, OncotrolledRaiting} from "./OncotrolledRaiting";


export default {
    title: '-OnControll-Raiting',
    component: OncotrolledRaiting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<OncontrolledType> = (arg) => <OncotrolledRaiting {...arg}/>;
