import {Meta, Story} from "@storybook/react";
import React from "react";
import Select, {SelectType} from "./Select";
import {ItemsType} from "../NoControlledAcardion/AcardionONControll";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Selected/selected',
    component: Select,
} as Meta;
const items:ItemsType[] = [
    {name: 'nick', value: 1},
    {name: 'Kolen', value: 2},
    {name: 'Amigo', value: 3},
];

const Template: Story<SelectType> = (arg) => <Select onChange={action('sdsds')} items={items} value={'1'} />;

export const MenyColapsed = Template.bind([]);
MenyColapsed.args = {
    value: '1'
    /**
     * title is name for Menu
     */
}




