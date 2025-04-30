import { Book } from "./book";

export class Library {
    private books: Book[] = []

    addBook(book: Book) {
        this.books.push(book);
        console.log(`Added: ${book.title} by ${book.author}`)
    }
    borrowBook(isbn: string): void {
        const book = this.books.find(b => b.isbn === isbn);
        if (book && book.isAvailable) {
            book.isAvailable = false
            console.log(`Borrowed: [${book.title}]`)
        } else {
            console.log(`${book?.title} is not available`)
        }
    }
    returnBook(isbn: string) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book && !book.isAvailable) {
            book.isAvailable = true
            console.log(`Returned: [${book.title}]`)
        } else {
            console.log(`This book is available`)
        }
    }
    listBooks(): void {
        console.log(`Books: ${this.books.map(b => b.title).join(', ')}`)
    }
}
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
