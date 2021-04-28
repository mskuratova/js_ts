import {CityType} from "../2/02";
import {createMessage2, getSteettsTitlesOfGovermentBuldings, getStreettsTitlesOfHouses} from "./5";



let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: "Central Srt"}}
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "South Srt"}}
            }],
        citizensNumber: 1000000
    }

    test("list of streets title of goverments buildings", () => {
        let streets = getSteettsTitlesOfGovermentBuldings(
            city.governmentBuildings);

        expect(streets.length).toBe(2);
        expect(streets[0]).toBe("Central Str");
    })

    test("list of streets titles", () => {
        let streets = getStreettsTitlesOfHouses(city.houses);

        expect(streets.length).toBe(3)
        expect(streets[0]).toBe("White street")
    })

    test("create greeting messages for streets", () =>{
        let messages = createMessage2(city.houses);
        expect(messages.length).toBe(3);
        expect(messages[0]).toBe("Hello guys from White street")
    })

})



