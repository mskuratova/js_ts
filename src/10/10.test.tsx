import {addNewBooksToUser, hairdresser, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10";


test("", () => {
    let urer: UserType = {
        name: "Hi",
        hair: 30,
        address: {city: "Omsk"}
    }
    const awesomeUser = hairdresser(urer, 2)
    expect(awesomeUser.hair).toBe(15)
    expect(urer.hair).toBe(30)
    expect(urer.address).toBe(awesomeUser.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Hi",
        hair: 30,
        address: {city: "Omsk", house: 12},
        laptop: {title: "Mac"}
    }
    const movedUser = moveUser(user, "Kiev")
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to Macbook", () => {
    let user: UserWithLaptopType = {
        name: "Hi",
        hair: 30,
        address: {city: "Omsk", house: 12},
        laptop: {title: "Mac"}
    }
    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Mac")

})

test ("add new books to user", () => {
    let user:UserWithLaptopType = {
        name: "Hi",
        hair: 30,
        address: {city: "Omsk", house: 12},
        laptop: {title: "Mac"},
        books: ["css", "html", "js"]
    }

    const userCopy = addNewBooksToUser (user, ["ts", "rest api"])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(4)
})

