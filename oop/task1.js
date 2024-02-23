import Book from './Book.js';
import EBook from './EBook.js';

// task#1
const firstBook = new Book("Philosopher's Stone", 'J.K. Rowling', 1997);
const secondBook = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);
const thirdBook = new Book('Alice’s Adventures in Wonderland', 'Lewis Carroll', 1865);

firstBook.printInfo();
secondBook.printInfo();
thirdBook.printInfo();

// task#2
const ebook = new EBook('Invisible Man', 'Ralph Ellison', 1952, 'PDF');
ebook.printInfo();

// task#3
console.log(firstBook.title);
console.log(firstBook.author);
console.log(firstBook.year);
console.log(ebook.title);
console.log(ebook.author);
console.log(ebook.year);
console.log(ebook.fileFormat);

firstBook.title = 'Good Fiction';
firstBook.author = 'Peter Parker';
firstBook.year = 2024;
firstBook.printInfo();

ebook.title = 'Some title';
ebook.author = 'Some author';
ebook.year = 1900;
ebook.fileFormat = 'html';
ebook.printInfo();

// task#4
console.log('Initial array:', [firstBook, secondBook, thirdBook, ebook]);
console.log('The oldest book:', Book.findOldestBook([firstBook, secondBook, thirdBook, ebook]));

// task#5
const ebookCreatedFromBook = EBook.fromBookAndFileFormat(secondBook, 'PDF');
console.log('Ebook created from book:', ebookCreatedFromBook);
