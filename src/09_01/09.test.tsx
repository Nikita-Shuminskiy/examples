

type UserType = {
    name:string
    age:number
}
function icrAseAge (user:UserType) {
    user.age++
}
test('test User age', () => {
    const user = {
        name:'nick',
        age:22
    }
    icrAseAge(user)

    expect(users['1']).toEqual( {id:1,name:'Nastya'})
})
