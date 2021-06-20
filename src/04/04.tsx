export {}
const age = [1, 10, 20, 100, 90]

const predicate = (age: number) => {
    return age > 90
}
const aldAeges = [100]


const courses = [
    {title: 'css', price: 110},
    {title: 'Html', price: 150},
    {title: 'React', price: 180}
]
export type CoursesType = {
    title: string
    price: number
}
const chipPredicate = (courses: CoursesType) => {
    return courses.price < 160
}
const chipCourses = [
    {title: 'css', price: 110},
    {title: 'Html', price: 150},
]

