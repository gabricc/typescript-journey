"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        //private _courseCount = 1
        this._courseCount = 1;
        this.city = "";
    }
    // we can also have private method:
    deleteToken() {
        console.log;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count cannot be less than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const gabriel = new User("g@g.com", "gabriel", "123");
console.log(gabriel);
