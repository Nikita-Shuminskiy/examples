import { CityType } from './02'

let city: CityType;

beforeEach(() => {
    city = {
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
})
test('test city should contains hospital and fire station', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildedAt).toBe(2000)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(100)
    expect(city.houses[2].address.street.title).toBe('White street')


})