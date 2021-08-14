import React, {useState} from 'react';
import './App.css';
import {OnOff} from './onOff/OnOff';
import {ControlledRaiting} from './Oncontrolled/ControlledRaiting';
import {ReactMemoF} from "./ReactMemo/ReactMemo";
import UseState from "./UseState/UseState";
import UseEffect from "./UseEffect/UseEffect";
import {ClockUseEffect} from './UseEffect/Clock';
import KeyTrackExample from "./UseEffect/KeyTrackExample";


function App() {

    let [raitingValue, setStateValue] = useState(0)
    let [acardionNew, setAcardionNew] = useState<boolean>(true)
    let [unContrilledOnOf, setUnControlled] = useState<boolean>(true) // control is famaly
    let [value, setValue] = useState(0)
    const acardionWrapper = () => {
        setAcardionNew(!acardionNew)
    }
    const unOfControllWrapper = () => {
        setUnControlled(!unContrilledOnOf)
    }

    return (
        <div className="App">

            <input type="text" checked={true}/>
            <ControlledRaiting value={value} setValue={setValue}/>
            <OnOff onChange={unOfControllWrapper} UnContrilledOnOf={unContrilledOnOf}/>
            <ReactMemoF/>
            <UseState/>
            <UseEffect/>
            <ClockUseEffect mode={'analog'}/>
            <ClockUseEffect mode={'digital'}/>
            <KeyTrackExample/>


        </div>
    );
}

export default App;
