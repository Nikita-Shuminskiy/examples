import React, {useState} from 'react';
import './App.css';
import {Raiting, RatingValueType} from './Raiting';
import {OnOff} from './onOff/OnOff';
import {ControlledRaiting} from './Oncontrolled/ControlledRaiting';
import OnAcardionControll from "./NoControlledAcardion/AcardionONControll";


function App() {

    let [raitingValue, setStateValue] = useState<RatingValueType>(0)
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
            <OnAcardionControll onChange={acardionWrapper} colapsed={acardionNew} titleValue={'calbackControll'}/>

            <input type="text" checked={true}/>
            <ControlledRaiting value={value} setValue={setValue}/>

            <OnOff onChange={unOfControllWrapper} UnContrilledOnOf={unContrilledOnOf}/>

            <Raiting value={raitingValue} onClick={setStateValue}/>


        </div>
    );
}

export default App;
