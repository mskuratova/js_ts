import {CityType} from "../2/02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./3";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}}],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 200,
            address: {street: {title: "Central Srt"}}
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "South Srt"}}
            }],
        citizensNumber: 1000000
    }

})

test("Budget should be change for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0],100000);

expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("House should be repared", () =>{
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be ", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})