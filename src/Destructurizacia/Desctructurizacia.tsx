import React from 'react';
import {ManType} from "../05/05";
export type ManTypes = {
    addres: {
        street: {
            title:string
        }
    }
    lessans: Array<{title:string}>
    age:number
    name:string
}
type DestructurType = {
    title:string
    man:ManTypes
    food:Array<string>
    car: {model:string}
}
const Desctructurizacia:React.FC<DestructurType> = ({title, man, ...props} ) => {
    return (
        <div>
        <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    );
};

export default Desctructurizacia;