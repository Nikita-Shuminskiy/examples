type streeetType = {
    title:string
}
export type CityType = {
    title:string
    houses: Array<HouseType>
    governmentBuldings:Array<string>
    citizensNumber:number
}
type HouseType = {
    buildedAt: number
    repaired: boolean
    address: addresType
}
type addresType = {
    number:number
    street: streeetType
}
type muHousType = {
    name: string
    street: myStreetType
    floors: '1'
    people_live: number
    animals:AnimalsType
    texnologies : Array<texnologiesType>
}
type texnologiesType = {
    id:number
    title:string
}
type AnimalsType = {
 dog:DogType
 cat:CatType
}
type DogType = {
    name: string
    age:number
    bread:string
}
type CatType = {
    name:string
    age: number
    bread: string
}
type myStreetType = {
    sity: string
    index: number
    country: string
    street: string
    build: number
}

export const myHaus: muHousType = {
    name: 'hous',
    street: {
        sity: 'Minsk',
        index: 22110,
        country:'Belarus',
        street: 'Paperna',
        build: 21
    },
    floors: '1',
    people_live: 2,
    animals: {
        dog: {
            name: 'Leksi',
            age: 1,
            bread: 'belgia',
        },
        cat: {
            name: 'Kisa',
            age: 1.5,
            bread: 'belarus'
        }
    },
    texnologies: [
        {
            id:1,
            title: ' HTML'
        },
        {
            id:2,
            title: ' css'
        },
        {
            id:3,
            title: ' react'
        },
    ],
}
console.log(myHaus.animals.dog.name);

//


export type TexnoType = {
    id:number
    title:string
    title2:string
}

 export type stydentType = {
    id: number
    name: string
    age:number
    texnolodies: Array<TexnoType>
}
 export const student: stydentType = {
    id:1,
    name: ' nick',
    age:26,
    texnolodies: [
        {
            id:1,
            title:'HTML',
            title2:'React'
        },{
            id:2,
            title:'JS',
            title2:'React'
        },{
            id:3,
            title:'React',
            title2:'React'
        }
    ]
}

export const cityType = {
    title: 'New-York',
    houses: [
        {
            buildedAt: 2012,
            repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
        {
            buildedAt: 2000,
            repaired: false,
            address: {number: 100, street: {title: 'Happy street'}}
        },
        {
            buildedAt: 2020,
            repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },

    ],
    governmentBuldings: [],
    citizensNumber: 100000
}
