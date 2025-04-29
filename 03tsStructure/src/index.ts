//class User {
//    email: string
//    private name: string // private means only accessible within the class
//    readonly city: string = ""
//    constructor(email: string, name: string) {
//        this.email = email;
//        this.name = name;
//    }
//}



class User {

    //private _courseCount = 1
    protected _courseCount = 1

    readonly city: string = ""
    constructor(
        public email: string,
        public name: string,
        private userId: string
    ) {}

// we can also have private method:
    private deleteToken(){
        console.log
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNum) {
        if (courseNum  <= 1) {
            throw new Error("Course count cannot be less than 1");
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 2
    }
}

const gabriel = new User("g@g.com", "gabriel", "123");
console.log(gabriel);