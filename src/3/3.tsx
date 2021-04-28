import {CityType, GovernmentBuildingType, HouseType, StudentType} from "../2/02";

export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType, isActive: boolean) {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {

    return student.address.city.title === cityName;
}
export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, number: number) => {
    building.staffCount -= number;
}
export function toHireStaff(building: GovernmentBuildingType, number: number){
    building.staffCount += number
}

export function createMessage (props:CityType) {
    // return "Hello" + props.title + "citizens. I wont you be happy. All" + props.citizensNumber + "men."
     return `Hello${props.title}citizens. I wont you be happy. All${props.citizensNumber}men.`
}