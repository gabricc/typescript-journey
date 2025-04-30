import { IBook } from "../interfaces/iBook";

export class Book implements IBook {
    constructor (
        public title: string,
        public author: string,
        public isbn: string,
        public isAvailable: boolean = true
    ) {}
} 
