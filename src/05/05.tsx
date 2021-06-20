export {}

const people: Array<ManType> = [
    {name: 'nick shym', age: 34},
    {name: 'denis Bikyz', age: 34},
    {name: 'leks Amo', age: 23}
]
export type ManType = {
    name: string
    age: number
}
const dimychTransform = (man: ManType) => ({
    stack: ['css', 'html', 'react', 'js'],
    FirstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})
const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd'],
        firstName: 'Andre', lastName: 'ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd'],
        firstName: 'Andre', lastName: 'ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd'],
        firstName: 'Andre', lastName: 'ivanov'
    },
]
const dev2 = [
    dimychTransform(people[0]),
    dimychTransform(people[1]),
    dimychTransform(people[2])
]
const dev3 = people.map(dimychTransform)
const dev4 = people.map( man => ({
    stack: ['css', 'html', 'react', 'js'],
    FirstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))


const message = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to the my Houses`)
