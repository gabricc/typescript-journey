const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// Generic - the difference here is that it logs the type that was passed
function identityThree<Type>(val: Type): Type {
    return val
}
// the same:
function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

//identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}
// converting the above to arrow function:
const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 3
    return products[myIndex]
}