import React  from 'react'

export type PropsType = {
    // onOff: boolean
    onChange:()=> void
    UnContrilledOnOf: boolean
}

export function OnOff(props: PropsType) {
    const onStyle = {
        marginRight: '10px',
        width: '20px',
        heigth: '10px',
        border: '1px solid black',
        padding: '10px',
        display: 'inline-Block',
        backgroundColor: props.UnContrilledOnOf ? 'yellow' : 'white'
    }
    const ofStyle = {
        marginRight: '10px',
        width: '20px',
        heigth: '10px',
        border: '1px solid black',
        padding: '10px',
        display: 'inline-Block',
        backgroundColor: props.UnContrilledOnOf ? 'white' : 'red'
    }
    const indificator = {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '1000px',
        display: 'inline-Block',
        backgroundColor: props.UnContrilledOnOf  ? 'yellow' : 'red'

    }
    return (<div>
        <div style={onStyle} onClick={props.onChange}>On
        </div>
        <div style={ofStyle} onClick={props.onChange}>Off
        </div>
        <div style={indificator}></div>
    </div>)
}