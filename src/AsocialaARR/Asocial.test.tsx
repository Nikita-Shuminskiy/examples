type cityType = {
    [key:string]: {id:number,name:string}
}
 let users:cityType
beforeEach (() => {
    users =  {
        '12': {id:12, name:'nick'},
        '11 ': {id:11, name:'nan'},
        '111': {id:111, name:'nall'},
        '1111 ': {id:1111, name:'bue'},
        }
})

test('should update corresponging user', () => {
    users['111'].name = 'nastya'
    expect(users['111'].name).toBe('nastya')
})

test ('should delet user corresponging', () => {
    delete users['11']
    expect(users['11']).toBeUndefined()
})