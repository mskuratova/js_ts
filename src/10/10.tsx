export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type UserWithLaptopType = {
    name: string
    hair: number
    address: { city: string, house?: number }
    laptop: { title: string }
    books?: Array <string>
}

export function hairdresser(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    return copy
}


export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city: city}}

}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}


export function addNewBooksToUser(u: UserWithLaptopType, newBook: string[]) {
    return {...u, books:[...u.books, newBook]}

}