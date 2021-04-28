type ManType ={
    name:string
    age:number
    lessons: Array<{title:string}>
    address:{ street:{title:string}}
}


let men: ManType;
beforeEach(() => {
    men = {
        name: "I",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address:
            {
                street: {
                    title: "Nezavisimosti"
                }
            }

    }
})


test ("", () => {
    let men ={
        name:"I",
        age: 32,
        lessons: [{title:"1"}, {title:"2"}],
        address: {
            street:{
                title:"Nezavisimosti"
            }
        }
    }

   // const age = man.age;
   // const lessons = man.lessons;

    const {age, lessons} = men;
    // const title = men.address.street.title
    const {title} = men.address.street

    expect(age).toBe(32);
})

test("i", () => {
    // const l1 = men.lessons[0]
    // const l2 = men.lessons[1]

    const [ls1,ls2] = men.lessons

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
})


