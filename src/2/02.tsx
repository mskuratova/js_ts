export type StreetType = {
    title:string
}

export type AddressType2 ={
    number?:number
    street:StreetType
}

export type HouseType = {
    id ?: number
    buildedAt: number
    repaired: boolean
    address: AddressType2
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget:number
    staffCount:number
    address: AddressType2
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>,
    citizensNumber: number
}

type LocalCityType = {
    title: string
    countryTitle: string
}


type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>

}

const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {streetTitle: "Surganova 2", city: {title: "Minsk", countryTitle: "Belarus"}},
    technologies: [
        {id: 1, title: "HTML"}, {id: 2, title: "CSS"}, {id: 3, title: "React"}
    ]
}