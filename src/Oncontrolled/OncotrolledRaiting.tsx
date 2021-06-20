import React, {useState} from 'react';

export type OncontrolledType = {

}


export const OncotrolledRaiting:React.FC<OncontrolledType> = () => {

    let [value, setValue] = useState(0) // не контролируетсья с наружи, контроль локальный
    return (
        <div>
            <Star selected={value >= 0} setValue={() => setValue(0)}/>
            <Star selected={value >= 1} setValue={() => setValue(1)} />
            <Star selected={value >= 2} setValue={() => setValue(2)} />
            <Star selected={value >= 3} setValue={() => setValue(3)} />
            <Star selected={value >= 5} setValue={() => setValue(5)} />
        </div>
    );
};
export type StarpropsType = {
    selected: boolean
    setValue: () => void
}
function Star (props:StarpropsType) {
    /*return props.selected ? <span><b>star</b></span> : <span>star</span>*/
    return <span onClick={() => {props.setValue()}}>{props.selected ? <b>star</b> : 'star'}</span>
}

