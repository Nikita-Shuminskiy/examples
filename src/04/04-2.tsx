import {cityType} from "../03/03";

export {}

import {CityType} from "../02/02";
export function demo(city:cityType, street:string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street )
 }

 export const getBuildings = () => {

 }