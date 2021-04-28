import {StudentType} from "../2/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./3";

let student: StudentType;
beforeEach( () => {
    student =
    {
        id: 1,
            name: "Dimych",
        age: 32,
        isActive: false,
        address: {streetTitle: "Surganova 2", city: {title: "Minsk", countryTitle: "Belarus"}},
        technologies: [
            {id: 1, title: "HTML"}, {id: 2, title: "CSS"}, {id: 3, title: "React"}
        ]
    }
    }
)



test("new tech skill should be added to student", () => {
    addSkill(student,"JS")

    expect(student.technologies[3].title).toBe("JS")

})

test("student should be made active", () => {
    makeStudentActive(student,true)

    expect(student.isActive).toBe(true)

})

test("student live in city?", () => {
    let resuil1 = doesStudentLiveIn(student,"Moscow")
    let resuil2 = doesStudentLiveIn(student,"Minsk")

    expect(resuil1).toBe(false)
    expect(resuil2).toBe(true)

})