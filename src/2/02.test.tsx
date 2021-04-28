import {CityType} from "./02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}],
        governmentBuildings: [{type:"HOSPITAL", budget: 200000, staffCount:200,
            address:{street:{title:"Central Srt"}}},
            {type:"FIRE-STATION", budget: 500000, staffCount:1000,
            address:{street:{title:"South Srt"}}}],
        citizensNumber: 1000000
    }

})

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

expect(city.houses[0].buildedAt).toBe(2012);
expect(city.houses[0].repaired).toBe(false);
expect(city.houses[0].address.number).toBe(100);
expect(city.houses[0].address.street.title).toBe("White street");
})

test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
})