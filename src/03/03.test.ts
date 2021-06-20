import { addMoneyToBudget, cityType, repairHouse, toFireStaff, toStafAdd } from './03';


let city: cityType

beforeEach(() => {
    city = {
        title: 'New york',
        houses: [
            {
                buildedAt: 2012, repaired: false, id: 1,
                address: {
                    number: 100, street: {title: 'white street'}
                },
            },
            {
                buildedAt: 2008, repaired: false, id: 2,
                address: {
                    number: 100, street: {title: 'Happy street'}
                }
            },
            {
                buildedAt: 2020, repaired: false, id: 3,
                address: {
                    number: 101, street: {title: 'white street'}
                },
            },
        ],
        governmenBuildings: [
            {
                type: 'Hospital', budget: 200000, stafCount: 200,
                adress: {
                    street: {
                        title: 'Central Park'
                    }
                }
            },
            {
                type: 'Hospital', budget: 500000, stafCount: 90,
                adress: {
                    street: {
                        title: 'Central Park'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('Budget should be changet for Hospital', () => {
    addMoneyToBudget(city.governmenBuildings[0], 100000)
    expect(city.governmenBuildings[0].budget).toBe(300000)
})

test('Budget should be chahge for FIRE-STATION', () => {
    addMoneyToBudget(city.governmenBuildings[1], -100000)

    expect(city.governmenBuildings[1].budget).toBe(400000)

})
test('houses should be repared', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBe(true)
});
test('staff should be incraseds', () => {
    toFireStaff(city.governmenBuildings[0], 20);
    expect(city.governmenBuildings[0].stafCount).toBe(180)
})
test('staff to add', () =>{
    toStafAdd(city.governmenBuildings[0], 20);
    expect(city.governmenBuildings[0].stafCount).toBe(220)
})



