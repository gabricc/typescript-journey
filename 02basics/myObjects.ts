// this is an object
const User = {
    name: "gabriel",
    email: "g@g.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}
let newUser = {name: "gabriel", isPaid: false, email: "a@a"}
createUser(newUser)


function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser2(user: User): User{
    return {name: "gabriel", email: "g@g.com", isActive: true}
}

type User2 = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean
    credcardDetails?: number // doesn't have to be present
}

let myUser: User2 = {
    _id: "123",
    name: "gabriel",
    email: "g@g.com",
    isActive: true
}

myUser._id = "1234" // should fail because its readonly

// to combine multiple types
type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

