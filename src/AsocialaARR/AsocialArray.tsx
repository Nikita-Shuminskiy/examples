



type AsocialType = {
    name:string
    firstName:string
    age:number
    address:AdresType
    hoobies:HobiesType
}
type AdresType = {
    region:string
    city:string
    country:string
}
type HobiesType = {
    danse:string
    howMush: string
}
const asocial:AsocialType = {
    name: 'nick',
    firstName:'Shym',
    age: 22,
    address: {
        region:'Minskiy',
        city:'Minsk',
        country: 'Belarus'
    },
    hoobies: {
        danse:'break',
        howMush: '1,2 year'
    }
}
asocial.address.city
asocial.hoobies.howMush
asocial['address']['city']
asocial['hoobies']['danse']
let myCar = {
    brand: 'Hyndai',
    name:'Hyndai Accent',
    engine: {
        motor:'1,3',
        power:85,
        torgue:5600
    },
    color:'red',
    wheelsSize:'13'
}
console.log(myCar['engine']['torgue'])
type cityType = {
    [key:string]: {id:number,name:string}
}
export const users:cityType = {
    '12': {id:12, name:'nick'},
    '11 ': {id:11, name:'nan'},
    '111': {id:111, name:'nall'},
    '1111 ': {id:1111, name:'bue'},
}
let user = {id:22222, name:'kia'}
delete users[user.id] // удаление  масимально быстро
users[user.id] = user // добовление в обьект
const userArray = [
    {id:123,name:'q'},
    {id:121,name:'q'},
    {id:122,name:'q'},
    {id:124,name:'ds'},
]
const userCopy = userArray.filter( (u) => u.id != user.id) // долгое удаление из простого масива обьектов

