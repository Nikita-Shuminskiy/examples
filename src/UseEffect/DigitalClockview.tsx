import React from "react";
import {ClockValueViewALLType} from "./Clock";

export const DigitalClockview = ({time}: ClockValueViewALLType) => {

    const numberZeroForTime = (num: number) => num < 10 ? '0' + num : num

    return <div>
        <span>{numberZeroForTime(time.getHours())}</span>
        --
        <span>{numberZeroForTime(time.getMinutes())}</span>
        --
        <span>{numberZeroForTime(time.getSeconds())}</span>
    </div>
}