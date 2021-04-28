import {GovernmentBuildingType, HouseType} from "../2/02";

export type ManType = {
    name:string
    age: number
}
const people: Array<ManType> =[
    { name: "Andrew Ivanov", age: 33},
    { name: "Andrew Petrov", age: 24},
    { name: "Andrew Sidorov", age: 18}
]

const dimychTransformator = (man:ManType) =>  ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]

    })
const devs = people.map(dimychTransformator)
const devs2 = people.map(man =>  ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]

}))

const messages = people.map(man => `Hello${man.name.split(" ")[0]}.Welcome to IT-Incubator`)

export const createGreetingMessage = (people:Array<ManType>) => {
     { return people.map(man => `Hello${man.name.split(" ")[0]}.Welcome to IT-Incubator`)}
}

export function getSteettsTitlesOfGovermentBuldings(buildings: Array<GovernmentBuildingType>) {
    return buildings.map(b =>b.address.street.title)
}

export function getStreettsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map(h => h.address.street.title)
}
 export const createMessage2 = (houses: Array<HouseType>)=>{
    return houses.map(h => `Hello guys from ${h.address.street.title}` )
}