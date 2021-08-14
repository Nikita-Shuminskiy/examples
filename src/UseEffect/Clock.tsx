import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockview} from "./DigitalClockview";

type ClockUseEffectType = {
    mode?: string
}
export type ClockValueViewALLType = {
    time: Date
}

export const ClockUseEffect = ({mode}: ClockUseEffectType) => {
    const [time, setTime] = useState(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            console.log('clear-interval' + intervalID)
            clearInterval(intervalID)
        }
    }, [])
    let view
    switch (mode) {
        case 'analog':
            view = <><AnalogClockView time={time}/></>
            break;
        case 'digital':
        default:
            view = <> <DigitalClockview time={time}/> </>
    }

    return (
        <div>
            {view}
        </div>
    );
};



