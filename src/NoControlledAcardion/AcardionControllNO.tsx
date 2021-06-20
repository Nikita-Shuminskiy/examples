import React, {useState} from 'react'
export type ColapsedPropsType = boolean
export type AcardionProps = {
    titleValue: string
}
export type AcardionTitle = {
    title: string
    setState:(colapsed:ColapsedPropsType) => void
    colapsed:ColapsedPropsType
}

export let but = {
    backgroundColor: 'yellow',
    borderRadius: '5px'
}

export function AcardionControllNO(props: AcardionProps) {
    let [colapsed, setState] = useState<ColapsedPropsType>(true)
    return (<div>
            <AcardionTitle title={props.titleValue} colapsed={colapsed} setState={setState}/>
          {/*  <button  style={but}  >Switch</button>*/}
            {!colapsed && < AcardionBody />}
        </div>
    )
}

function AcardionTitle(props: AcardionTitle) {
    return (<div>
        <h3 onClick={()=> {props.setState(!props.colapsed)}}>{props.title}</h3>
    </div>)
}

function AcardionBody() {
    return (<div>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>)
}