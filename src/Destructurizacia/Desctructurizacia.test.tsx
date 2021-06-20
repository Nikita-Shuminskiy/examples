import { ManTypes } from "./Desctructurizacia"


let props: ManTypes
beforeEach (() => {
    props = {
        name: 'nick',
        age: 22,
        lessans: [{title: '1'}, {title: '2'}],
        addres: {
            street: {
                title:'nezavisimosty'
            }
        }
    }
})

test('', () => { // пр ообьекты
  /*  const age = props.age
    const name = props.name*/
    const {age, name} = props
expect(age).toBe(22)
expect(name).toBe('nick')
})
test('', () => { // про массивы
    const l1 = props.lessans[0]
    const l2 = props.lessans[1]
    const [ls1,ls2] = props.lessans
    const [l , ...rest] = props.lessans // длинна будет 2 , первый элемент вырвет переменная L и присвоит себе
    const [ ,lss2] = props.lessans // если нид только 2 а 1 не нид, оставляем пустоту

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
})



