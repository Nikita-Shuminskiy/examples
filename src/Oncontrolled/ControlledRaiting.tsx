import React, {useState} from 'react';

export type OncontrolledType = {
    setValue: (value:number) => void
    value: number
}


export const ControlledRaiting: React.FC<OncontrolledType> = (props) => {


    return (
        <div>
            <Star selected={props.value >= 0} setValue={() => props.setValue(0)}/>
            <Star selected={props.value >= 1} setValue={() => props.setValue(1)}/>
            <Star selected={props.value >= 2} setValue={() => props.setValue(2)}/>
            <Star selected={props.value >= 3} setValue={() => props.setValue(3)}/>
            <Star selected={props.value >= 5} setValue={() => props.setValue(5)}/>
        </div>
    );
};
export type StarpropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarpropsType) {
    /*return props.selected ? <span><b>star</b></span> : <span>star</span>*/
    return <span onClick={() => {
        props.setValue()
    }}>{props.selected ? <b> star</b> : 'star'}</span>
}

