// union type allows to use more than 1 type
let score: number | string = 33

score = 44
score = "55"

type User4 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let gabriel: User4 | Admin = {name: "gabriel", id: 1}

gabriel = {username: "gabriel", id: 1}

//function getDbId(id: number | string){
//    console.log(`DB id is: ${id}`);
//}

getDbId(3)
getDbId("3")

//function getDbId(id: number | string){
//    id.toLowerCase() // it complains because this method does work for number
//}

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase() // doesn't complain because we guarantee it will be a string
    }    
}


// array
const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string)[] = ["1", 2, 3]

let seatAllotment: "aisle" | "window" | "middle"
seatAllotment = "aisle"
seatAllotment = "crew" // filas because this type does not exist