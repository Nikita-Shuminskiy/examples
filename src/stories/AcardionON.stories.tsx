import React from 'react';
import {Story, Meta} from '@storybook/react';
import OnAcardionControll, {AcardionPropsType, ItemsType} from "../NoControlledAcardion/AcardionONControll";

export default {
    title: 'components/OnControll',
    component: OnAcardionControll,
    argTypes: {
        backgroundColor: {control: 'color'},
        table: {
            category: ' Colors'
        }
    },
} as Meta;
const items:ItemsType[] = [
    {name: 'nick', value: 1},
    {name: 'nick', value: 2},
    {name: 'nick', value: 3},
];
const Template: Story<AcardionPropsType> = (arg) => <OnAcardionControll
    {...arg}
    items={items}
    changeClick={ (value:number) => {
        alert(`hello Any-Way ${value}`)
    }}/>;

export const MenyColapsed = Template.bind({});
MenyColapsed.args = {
    titleValue: 'Menu-TEST',
    colapsed: true,
    /**
     * title is name for Menu
     */
}


