import {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'

}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const change = (e:any) => setParentValue (e.currentTarget.value)
    return <input value={parentValue} onChange={change}/>
}
export const ControllCheckBox = () =>  {
    const [parentValue, setParentValue] = useState(true)

    const change = (e:any) => setParentValue (e.currentTarget.checked)
    return <input type="checkbox" checked={parentValue} onChange={change} />
}
export const SelectControll = () =>  {
    const [parentValue, setParentValue] = useState('2')

    const change = (e:any) => setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={change}>
        <option value="1">San-Diego</option>
        <option value="2">Berlin</option>
        <option value="3">New-York</option>
        <option value="4">Minsk</option>
    </select>
}
export const ControlInputButton = () => {
    const [value, setValue] = useState('')

    const getValueButton = () => {
     /*  let id =  document.getElementById('id') as HTMLInputElement*/ // as воспринимай как этот элемент TS
 /*       setValue(id.value)*/
        const id = inputRef.current as HTMLInputElement
        setValue(id.value)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    return <div>
        <input ref={inputRef} id={'id'} />
        <button onClick={getValueButton}>Get Value</button> - actualValue {value}
    </div>
}