import {CoursesType} from "./04";

export {}

test('should take old man older then 90', () => {
    const ages = [1, 10, 20, 100, 90]
    const predicate = (age: number) => age > 90 // возврат
    const oldAeges = ages.filter(predicate)

    expect(oldAeges.length).toBe(1)
    expect(oldAeges.length).toBe(1)
})

test('should take old man older then 90', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'Html', price: 150},
        {title: 'React', price: 180}
    ]
    const chipPredicate = (courses: CoursesType) => {
        return courses.price < 160
    }
    const chipCourses = courses.filter(chipPredicate)
        expect(chipCourses.length).toBe(2)
        expect(chipCourses[0].price).toBe(110)
        expect(chipCourses[1].price).toBe(150)
})

test('should take courses chipper 160', ()=> {
    const courses = [
        {title: 'css', price:110},
        {title: 'html', price:200},
        {title: 'react', price:140}
    ]
    const chipCourses = courses.filter(courses => courses.price < 160)
    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('react')
})

test('test false and true', ()=> {
    const task = [
        {title: 'css', price:110, isDone:true},
        {title: 'css', price:120, isDone:false},
        {title: 'css', price:140, isDone:false},
        {title: 'css', price:180, isDone:false},
    ]

    const result = task.filter( t => t.isDone === false)

    expect(result.length).toBe(3)
    expect(result[2].isDone).toBe(false)
    expect(result[1].isDone).toBe(false)

})

