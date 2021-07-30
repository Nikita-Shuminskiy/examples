import React, {useState} from 'react';
import './App.css';
import {OnOff} from './onOff/OnOff';
import {ControlledRaiting} from './Oncontrolled/ControlledRaiting';
import OnAcardionControll from "./NoControlledAcardion/AcardionONControll";
import {ReactMemoF} from "./ReactMemo/ReactMemo";
import UseState from "./UseState/UseState";
import UseEffect, {SetTimeout} from "./UseEffect/UseEffect";


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
            <SetTimeout/>


        </div>
    );
}

export default App;
