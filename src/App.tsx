import React, {useState} from 'react';
import './App.css';
import {Raiting, RatingValueType} from './Raiting';
import { AcardionControllNO} from './NoControlledAcardion/AcardionControllNO';
import { OnOff } from './onOff/OnOff';
import OncotrolledRaiting from './Oncontrolled/OncotrolledRaiting';
import OnAcardionControll from "./NoControlledAcardion/AcardionONControll";
import { UnControledOnOff } from './onOff/UnControledOnOff';



function App() {

    let [raitingValue, setStateValue] = useState<RatingValueType>(0)
    let [AcardionNew, setAcardionNew] = useState<boolean>(true)
   let [UnContrilledOnOf, setUnControlled] = useState<boolean>(true) // control is famaly

    return (
        <div className="App">
            <OnAcardionControll onChange={() => {setAcardionNew(!AcardionNew)}} colapsed={AcardionNew} titleValue={'calbackControll'}/> {/*контроль снаружи компоненты*/}
            <AcardionControllNO titleValue={'Menu'}/> {/* контроль внутри компоненты*/}
            <input type="text" checked={true}/>
            <OncotrolledRaiting/>

            <OnOff onChange={() => {setUnControlled(!UnContrilledOnOf)}} UnContrilledOnOf={UnContrilledOnOf}/>
            <Raiting value={raitingValue} onClick={setStateValue}/>

            <UnControledOnOff onChange={setUnControlled}/> {UnContrilledOnOf.toString()}


        </div>
    );
}

export default App;
