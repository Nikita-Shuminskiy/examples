import React from 'react';

export type ItemsType = {
    name: string
    value: number
}

export type AcardionPropsType = {
    titleValue: string
    onChange: () => void
    colapsed: boolean
    items: ItemsType[]
    changeClick: (value:number) => void

}

export function OnAcardionControll(props: AcardionPropsType) {
    return (<div>
            <AcardionTitle onChange={props.onChange} title={props.titleValue}/>
            {/*  <button  style={but}  >Switch</button>*/}
            {!props.colapsed && <AcardionBody changeClick={ props.changeClick} items={props.items}/>}
        </div>
    )
}

type AcardionTitle = {
    title: string
    onChange: () => void
}

function AcardionTitle(props: AcardionTitle) {
    return (<div>
        <h3 onClick={props.onChange}>{props.title}</h3>
    </div>)
}

export type BodyType = {
    items: ItemsType[]
    changeClick: (value:number) => void
}

function AcardionBody(props: BodyType) {
    return (<div>
        <ul>
            {
                props.items.map((i, index) => <li onClick={ () => {
                    props.changeClick(i.value)
                }} key={index}>{i.name}</li>) // не добавил name --- Касяк
            }
        </ul>
    </div>)
}

export default OnAcardionControll;