import {createGreetingMessage, ManType} from "./5";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Andrew Petrov", age: 24},
        {name: "Andrew Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {

    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew.Welcome to IT-Incubator")

})

