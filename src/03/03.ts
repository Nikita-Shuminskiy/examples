/*

import {student, stydentType} from './02';

export const addSkill = (student:stydentType, skill:string) => {
    student.texnolodies.push({
        id: new Date().getTime(),
        title: skill,
        title2: '123'
    })
}
export function adSkiled (s:stydentType, hobies: string)  {
   s.texnolodies.push({
       id: new Date().getTime(),
       title: 'danse',
       title2:'React'
   })
}*/





type streetType = {
    title: string
}
type adressType = {
    street: streetType
}
type governmenBuildingsType = {
    type: string
    budget:number
    stafCount:number
    adress: adressType
}
type streetTypes = {
    title: string
}
type addresType = {
    number:number
    street: streetTypes
}
type housesType = {
    buildedAt:number
    repaired: boolean
    address: addresType
    id: number
}
export type cityType = {
    title: string
    houses: Array<housesType>
    governmenBuildings: Array<governmenBuildingsType>
    citizensNumber: number

}
export const city: cityType = {
    title: 'New york',
    houses: [
        {
            buildedAt: 2012, repaired: false, id:1,
            address: {
                number: 100,  street: {title: 'white street'}
            },
        },
        {
            buildedAt: 2008, repaired: false,id:2,
            address: {
                number: 100, street: {title: 'Happy street'}
            },
        },
        {
            buildedAt: 2020, repaired: false,id:3,
            address: {
                number: 101, street: {title: 'white street'}
            },
        },
    ],
    governmenBuildings: [
        {
            type: 'Hospital', budget: 500000, stafCount: 200,
            adress: {
                street: {
                    title: 'Central Park'
                }
            }
        },
        {
            type: 'FIRE-STATION', budget: 200000, stafCount: 90,
            adress: {
                street: {
                    title: 'Central Park'
                }
            }
        }
    ],
    citizensNumber: 100000
}

export const addMoneyToBudget = (building: governmenBuildingsType, budget: number) => {
    building.budget += budget
}
export const repairHouse = (housesType: housesType) => {
        housesType.repaired = true
}
export function toFireStaff(bulding: governmenBuildingsType, stafToFireer: number) {
    bulding.stafCount -= stafToFireer
}
export function toStafAdd  (bulding: governmenBuildingsType, stafAdd: number)  {
 bulding.stafCount += stafAdd
}