import {CityType, GovernmentBuildingType} from "../2/02";

export const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const chipPredicate = (courses: CourseType) => {
    return courses.price < 160;
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getHousesStaffCountGreateThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}