function addTwo(num: number){
    return num + 2
}
// make sure the return needs to be a number
function addThree(num: number): number{
    return num + 3
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


addTwo(5)
getUpper("four")
signUpUser("gabriel", "email@email", true)
loginUser("gabriel", "g@g.com")


function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
}

const getHello = (s: string):string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
heros.map(hero => {
    return `hero is ${hero}`
})
// ensure the return is a string
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
