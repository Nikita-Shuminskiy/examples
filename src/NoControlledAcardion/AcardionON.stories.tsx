import React from 'react';
import { Story, Meta } from '@storybook/react';
import OnAcardionControll, {AcardionPropsType} from "./AcardionONControll";



export default {
    title: 'OnControll',
    component: OnAcardionControll,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AcardionPropsType> = (arg) => <OnAcardionControll {...arg}/>;

export const MenyColapsed = Template.bind({});
MenyColapsed.args = {
    titleValue: 'Menu-TEST',
    /**
     * title is name for Menu
     */
}

