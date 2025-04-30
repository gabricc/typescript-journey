"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./models/book");
const library_1 = require("./models/library");
const book1 = new book_1.Book("The Lord of the Rings", "JRR Tolkien", "1234567890", true);
const book2 = new book_1.Book("Da Vinci's Code", "Dan Brown", "123415690", false);
const library = new library_1.Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();
library.borrowBook("1234567890");
library.borrowBook("123415690");
library.returnBook("123415690");
library.borrowBook("123415690");
/*
src/index.ts:
Import the Book and Library classes
Create some example books
Create a library instance
Test all the library methods
*/ 
