import React from "react";
import {ClockValueViewALLType} from "./Clock";
import './AnalogClockView.css'

export const AnalogClockView: React.FC<ClockValueViewALLType> = ({time}: ClockValueViewALLType) => {
    const secondsStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${time.getHours() * 30}deg)`
    };
    return <div className={"clock"}>
        <div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle}/>
            <div className={"dial minutes"} style={minutesStyle}/>
            <div className={"dial hours"} style={hoursStyle}/>
        </div>
    </div>
}