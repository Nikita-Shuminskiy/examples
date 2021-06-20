import {mult,sum,splitIntoWords} from './01';

test('multiplay should be correct', ()=> {
    //data
    const a = 2
    const b = 2
    const c = 3
    // action
    const result = mult(a,b)
    //expect result
    expect(result).toBe(4)
})
test ('splitings into words would be correct', () =>{
    //data
    const sent1='Hello my friend'
    const sent2 ='my dear dog leksi'
    //action
    const result1 = splitIntoWords(sent1)
    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')
})