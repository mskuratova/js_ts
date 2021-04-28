export const usersArray = ["Dimych","Natasha", "Valera", "Katya"]

export const usersObj = {"0":"Dimych","1":"Natasha","2": "Valera","3": "Katya"}
type UsersType = {
    [key: string]:{id:number, name:string}
}

export const users:UsersType = {
    "0":{id:101, name:"Dimych"},
    "1":{id: 3232312, name:"Natasha"},
    "2":{id: 1212, name: "Valera"},
    "3":{id: 1, name: "Katya"}}

// users[1]

let userN = {id: 100500, name: "Igor"}
users[userN.id] = userN
delete users[userN.id]
users[userN.id].name="Vitya"

export const users2 = [
    {id:101, name:"Dimych"},
    {id: 3232312, name:"Natasha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"}]

// users2.find(u => u.id ===1)
// users2.push(userN)
const userCopy =[...users2, userN]
const users3 = users2.filter(u=>u.id!==userN.id)