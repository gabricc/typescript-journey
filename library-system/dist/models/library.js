"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added: ${book.title} by ${book.author}`);
    }
    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            console.log(`Borrowed: [${book.title}]`);
        }
        else {
            console.log(`${book === null || book === void 0 ? void 0 : book.title} is not available`);
        }
    }
    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book && !book.isAvailable) {
            book.isAvailable = true;
            console.log(`Returned: [${book.title}]`);
        }
        else {
            console.log(`This book is available`);
        }
    }
    listBooks() {
        console.log(`Books: ${this.books.map(b => b.title).join(', ')}`);
    }
}
exports.Library = Library;
/*src/models/Library.ts:
Create a class called Library
Should have a private array of Books
Create these methods:
addBook (accepts a Book)
borrowBook (accepts an isbn)
returnBook (accepts an isbn)
listBooks (no parameters)

        this.books.push(book);
        console.log(`Added: ${book.title} by ${book.author}`);

*/
