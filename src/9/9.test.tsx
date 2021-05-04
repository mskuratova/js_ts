function icreaseAge(u: UserType) {
    user.age++;
}

type UserType = {
    name: string
    age: number
    address : {title:string}
}
test('big test', () => {

    const user: UserType = {
        name: 'I',
        age: 42,
        address: {title: 'Minsk'}
    }

    icreaseAge(user)

    const superman = user
    superman.age = 1000

    expect(users.age).toBe(1000)
})

test('array test', () => {

    const users = [{
        name: 'I',
        age: 42
    }, {name: 'Hi', age: 2}]

    const admins = users
    admins.push({name:'Lev', age:13})
    expect (users[2]).toEqual({name:'Lev', age:13})

})
test('big test 1', () => {

    const user: UserType = {
        name: 'I',
        age: 42,
        address: {title: 'Minsk'}
    }

   const user2: UserType = {
        name: "Lev",
       age:13,
       address: user.address
   }
   user2.address.title ='Kanary'

    expect(user.address.title).toBe('Kanary')
})
test('array test 2', () => {
    const address ={ title:'Omsk'}

    const user: UserType = {
        name: 'I',
        age: 42,
        address:address
    }

    const user2: UserType = {
        name: "Lev",
        age:13,
        address: address
    }

    const users = [user, user2, {name: 'Stas', age: 42, address: address}]
    const admins =[user, user2]
    admins[0].name = 'Mary'

    expect(users[0].name).toBe('Mary')
    expect(user.name).toBe('Mary')
})

test ('sort array test',() => {
    const letters =['c', 'd', 'a', 'z']
    letters.sort();

    expect(letters).toBe(['a', 'c', 'd', 'z'])
})
