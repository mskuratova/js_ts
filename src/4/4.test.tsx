import {ages,CourseType} from "./4";

test("should take old then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    // const predicate = (age: number) => age > 90;

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take courses chipped 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}];

    // const chipPredicate = (course: CourseType) => course.price < 160;

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2 )
    expect(chipCourses[0].title).toBe("CSS")
})

test("get only completed tasks", () => {
    const tasks =[
        {id:1, title: "Bread", isDone: false},
        {id:2, title: "Milk", isDone: true},
        {id:3, title: "Sol", isDone: false},
        {id:4, title: "Sugar", isDone: true}
    ]

    const completedTasks = tasks.filter(tasks => tasks.isDone)

    expect( completedTasks.length).toBe(2);
    expect( completedTasks[0].id).toBe(2);
    expect( completedTasks[1].id).toBe(4);

})

test("get only uncompleted tasks", () => {
    const tasks =[
        {id:1, title: "Bread", isDone: false},
        {id:2, title: "Milk", isDone: true},
        {id:3, title: "Sol", isDone: false},
        {id:4, title: "Sugar", isDone: true}
    ]

    const uncompletedTasks = tasks.filter(tasks => !tasks.isDone)

    expect( uncompletedTasks.length).toBe(2);
    expect( uncompletedTasks[0].id).toBe(1);
    expect( uncompletedTasks[1].id).toBe(3);

})