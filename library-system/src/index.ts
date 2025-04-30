import { Book } from "./models/book";
import { Library } from "./models/library";

const book1 = new Book(
    "The Lord of the Rings",
    "JRR Tolkien",
    "1234567890",
    true
)

const book2 = new Book(
    "Da Vinci's Code",
    "Dan Brown",
    "123415690",
    false
)
const library = new Library()

library.addBook(book1)
library.addBook(book2)

library.listBooks()

library.borrowBook("1234567890")
library.borrowBook("123415690")

library.returnBook("123415690")
library.borrowBook("123415690")
/*
src/index.ts:
Import the Book and Library classes
Create some example books
Create a library instance
Test all the library methods
*/