import React, {useState} from 'react'

type PropsType = {

    onChange:(on:boolean) => void
}

export function UnControledOnOff(props: PropsType) {
    let [on, state] = useState(false)
    const onStyle = {
        marginRight: '10px',
        width: '20px',
        heigth: '10px',
        border: '1px solid black',
        padding: '10px',
        display: 'inline-Block',
        backgroundColor: on ? 'yellow' : 'white'
    }
    const ofStyle = {
        marginRight: '10px',
        width: '20px',
        heigth: '10px',
        border: '1px solid black',
        padding: '10px',
        display: 'inline-Block',
        backgroundColor: on ? 'white' : 'red'
    }
    const indificator = {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '1000px',
        display: 'inline-Block',
        backgroundColor: on ? 'yellow' : 'red'

    }


    let onOff = () => {
        state(false)
        props.onChange(false)}
    let onTrue = () => {
        state(true)
        props.onChange(true)}
    return (<div>
        <div style={onStyle} onClick={onTrue}>On
        </div>
        <div style={ofStyle} onClick={onOff}>Off
        </div>
        <div style={indificator}></div>
    </div>)
}