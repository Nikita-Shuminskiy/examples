import React, {useState} from 'react';

export type ItemsType = {
    value: any
    name: string
}
export type SelectType = {
    items: ItemsType[]
    value:any
    onChange: (value:any)=> void
}
const Select = (props: SelectType) => {
    const itemSelect = props.items.find( f => f.value === props.value)
    return (
        <div>
            <div>{itemSelect && itemSelect.value}</div>
            {
                props.items.map((item, index) => {
                    return <div key={index}>{item.name}</div> })
            }
        </div>
    );
};

export default Select;