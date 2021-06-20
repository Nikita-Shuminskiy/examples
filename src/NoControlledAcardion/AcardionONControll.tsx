import React from 'react';

export type AcardionPropsType = {
    titleValue:string
    onChange: ()=> void
    colapsed:boolean
}
export function OnAcardionControll(props:AcardionPropsType) {
    return (<div>
            <AcardionTitle onChange={props.onChange} title={props.titleValue} />
            {/*  <button  style={but}  >Switch</button>*/}
            {!props.colapsed  && <AcardionBody/>}
        </div>
    )
}
type AcardionTitle = {
    title: string
    onChange: ()=> void
}
function AcardionTitle(props: AcardionTitle) {
    return (<div>
        <h3 onClick={props.onChange}>{props.title}</h3>
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

export default OnAcardionControll;