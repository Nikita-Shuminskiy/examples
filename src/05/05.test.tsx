import {ManType} from "./05";

export{}
let people: Array<ManType> = []
beforeEach (()=> {
    people = [
        {name: 'nick', age: 34},
        {name: 'denis', age: 34},
        {name: 'leks', age: 23}
    ]
})
test('test is Welcom people', () => {
 const messege = people.map( man  => `Hello ${man.name.split(' ')[0]}. Welcom Man`)
    expect(messege.length).toBe(3)
    expect(messege[0]).toBe('Hello nick. Welcom Man')
    expect(messege[1]).toBe('Hello denis. Welcom Man')
    expect(messege[2]).toBe('Hello leks  . Welcom Man')
})